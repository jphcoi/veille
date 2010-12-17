<?
include("fonctions_php.php");
include("../parametre.php");
//connexion a la base de donnees
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");


echo 'computing partitions <br/>';
$resultat=mysql_query("select id_cluster_univ FROM cluster GROUP by id_cluster_univ") or die ("<b>Requête non exécutée (récupération de la liste des clusters)</b>.");

$depth=2; // labellise les branches avec leur 5 termes les plus fréquents

//variables
$nbPartition=0; // nombre de partitions


// on crée un array des id universaux de clusters
$id_cluster_univ=array();
while ($ligne=mysql_fetch_array($resultat)) {
        array_push($id_cluster_univ,$ligne[id_cluster_univ]);
}

$Macrobranches=array(); // var stockant les infos de toutes les macrobranches pour la table partition

// on assigne une partition à chaque cluster par propagation
while (count($id_cluster_univ)>0){    
    // on prend le premier cluster et on lui assigne une partition
    $target_id_univ=array_pop($id_cluster_univ);
    $nbPartition=$nbPartition+1;
    $current_partition=array($target_id_univ);// liste des champs dans la partition courante  

    $sql="UPDATE cluster SET pseudo=$nbPartition WHERE id_cluster_univ=$target_id_univ";
    $updated=mysql_query($sql);
    echo 'Partition for '.$target_id_univ.' set to '.$nbPartition.' ('.$updated.')'."<br/>";

    $neighbors=array_merge( getFathers($target_id_univ),getSons($target_id_univ));
    $arrayTarget = array($target_id_univ);
    $neighbors=array_diff($neighbors, $arrayTarget);
    //on prend par propagation ses voisins et on leur assigne la même partition
    while (count($neighbors)>0){
        $targetNeighbor=array_pop($neighbors);
        $arrayNeigh = array($targetNeighbor);
        $current_partition=array_merge($current_partition,$arrayNeigh);
        $sql="UPDATE cluster SET pseudo=$nbPartition WHERE id_cluster_univ=$targetNeighbor";
        $updated=mysql_query($sql);
        echo 'Partition for '.$targetNeighbor.' set to '.$nbPartition.' ('.$updated.')'."<br/>";

        
        // on retire le voisin des clusters à tagger
        $id_cluster_univ=array_diff($id_cluster_univ,$arrayNeigh);
        $newNeighbors=array_merge( getFathers($targetNeighbor),getSons($targetNeighbor));
        $newNeighbors=array_diff($newNeighbors, $arrayNeigh);
        $neighbors=array_merge($neighbors,$newNeighbors);
        $neighbors=array_diff($neighbors,$current_partition);
    }

echo 'Inserting data into table Partition<br/>';

////////////on prépare la variable a insérer dans Macrobranches /////////
    $macrobranch=array(); // array donnant toutes les entrées de la partition pour la table partitions
    $macrobranch['id_partition']=$nbPartition;
    $macrobranch['nb_fields']=count($current_partition);
    $macrobranch_periods=array();
    $macrobranch_terms=array();// array contenant le nombre d'occurrences des termes dans la macrobranche

while (count($current_partition)>0){
    $target_id_univ=array_pop($current_partition);
    $query="select * FROM cluster WHERE id_cluster_univ=$target_id_univ";
    $resultat=mysql_query($query) or die ("<b>Requête non exécutée (Récupération des infos du cluster cible pour la macrobranche)</b>.");
    $oneshot=0; // variables insérées qu'une fois
    while ($ligne=mysql_fetch_array($resultat)) {
        if ($oneshot==0){
            $period=split(' ',$ligne['periode']);
            array_push($macrobranch_periods,$period[1]);
            $oneshot=1;
         }
        $concept_id=$ligne['concept'];
        if ($macrobranch_terms[$concept_id]!=null){
            $macrobranch_terms[$concept_id]++;
         }else{
            $macrobranch_terms[$concept_id]=1;
        }
    }
}
   $macrobranch['nb_period_covered']=count(array_unique($macrobranch_periods));
   $macrobranch['first_period']=min($macrobranch_periods);
   $macrobranch['last_period']=max($macrobranch_periods);
   $macrobranch['nb_terms']=count($macrobranch_terms);
    print_r(array_keys($macrobranch_terms));
   $macrobranch['terms']=implode("_", array_keys($macrobranch_terms));
   $macrobranch['terms_occ']=implode("_", $macrobranch_terms);
   $macrobranch['label']=macrobranch_label($macrobranch_terms,$depth);
   fill_partition_table($macrobranch);
}


///////functions
function getSons($id_cluster_univ){
   $sons=array();
   $resultat=mysql_query("select id_cluster_2_univ FROM phylo WHERE id_cluster_1_univ=$id_cluster_univ") or die ("<b>Requête non exécutée (Récupération des fils)</b>.");
   while ($ligne=mysql_fetch_array($resultat)) {
        array_push($sons,$ligne[id_cluster_2_univ]);
   }
   return $sons;
}
function getFathers($id_cluster_univ){
   $fathers=array();
   $query="select id_cluster_1_univ FROM phylo WHERE id_cluster_2_univ=$id_cluster_univ";
   $resultat=mysql_query($query) or die ("<b>Requête non exécutée (Récupération des pères)</b>.");
   while ($ligne=mysql_fetch_array($resultat)) {
        array_push($fathers,$ligne[id_cluster_1_univ]);
   }
   return $fathers;
}

function macrobranch_label($macrobranch_terms,$depth){
// Donne un label à une macro-branches en prenant tous les termes
// qui ont une occurrence au moins égale  à la $depth ième plus grande valeur d'occurences

    uasort($macrobranch_terms, 'cmp');
    $label='';
    $unique_occurrences=array_unique($macrobranch_terms);
    
    // on cherche la $depth ième plus grande valeur d'occurences
    $min_occ=100000000; // chiffre arbitraire
    $exit==1;
    while (($exit<=$depth)&&($line = current($unique_occurrences))){
         $min_occ=min($min_occ,$line);
         $exit++;
         next($unique_occurrences);
    }

    // on récupère les labels correspondants
    $exit=0;
    while (($exit==0)&&($term_occ = current($macrobranch_terms))){
        echo $term_occ.'<br/>';
        if ($term_occ>=$min_occ){
            $term_id=key($macrobranch_terms);
            $query="select forme_principale FROM concepts WHERE id=$term_id";
            echo $query.'<br/>';
            $resultat=mysql_query($query) or die ("<b>Requête non exécutée (Récupération de la forme principale)</b>.");
            while ($ligne=mysql_fetch_array($resultat)) {
                $label=$label.$ligne[forme_principale].',';
            }
        }else{
            $exit=1;
        }
        next($macrobranch_terms);
        $i++;
    };
    $label=substr($label, 0, -1);
    return $label;
}


function cmp($a, $b) {
    if ($a == $b) {
        return 0;
    }
    return ($a > $b) ? -1 : 1;
}

function fill_partition_table($macrobranch){
    $sql="INSERT INTO partitions (id_partition,label,first_period,last_period,nb_period_covered,nb_fields,terms,nb_terms,terms_occ) VALUES ($macrobranch[id_partition],'$macrobranch[label]',$macrobranch[first_period],$macrobranch[last_period],$macrobranch[nb_period_covered],$macrobranch[nb_fields],'$macrobranch[terms]',$macrobranch[nb_terms],'$macrobranch[terms_occ]') ON DUPLICATE KEY UPDATE label='$macrobranch[label]',first_period=$macrobranch[first_period],last_period=$macrobranch[last_period], nb_period_covered=$macrobranch[nb_period_covered],nb_fields=$macrobranch[nb_fields],terms='$macrobranch[terms]',nb_terms=$macrobranch[nb_terms],terms_occ='$macrobranch[terms_occ]';";
    mysql_query($sql) or die ("<b>Insert of partition data failed</b>.");;
    echo 'Partition info for '.$macrobranch['id_partition'].'inserted in table partition:'.$macrobranch[label]."<br/>";
}
?>