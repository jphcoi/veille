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

$nb_terms_in_label=5; // labellise les branches avec leur 5 termes les plus fréquents



//variables
$nbPartition=0; // nombre de partitions


// on crée un array des id universaux de clusters
$id_cluster_univ=array();
while ($ligne=mysql_fetch_array($resultat)) {
        array_push($id_cluster_univ,$ligne[id_cluster_univ]);
}

// on assigne une partition à chaque cluster par propagation
while (count($id_cluster_univ)>0){
    
    // on prend le premier cluster et on lui assigne une partition
    $target_id_univ=array_pop($id_cluster_univ);
    $nbPartition=$nbPartition+1;

    $current_partition=array(target);// liste des champs dans la partition courante
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

echo 'Partitions processed <br>';
echo 'Inserting data into table Partition';

////////////on prépare la variable a insérer dans Macrobranches /////////
    $Macrobranches=array(); // var stockant les infos de toutes les macrobranches pour la table partition
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
            $period=split(' ',$ligne[periode]);
            array_push($macrobranch_periods,period[1]);
            $oneshot==1;
         }
        if ($macrobranch_terms[concept]!=null){
            $macrobranch_terms[concept]++;
         }else{
            $macrobranch_terms[concept]=1;
        }
   }

   $macrobranch['nb_period_covered']=count(array_unique($macrobranch_periods));
   $sorted_periods=natsort($macrobranch_periods);
   $macrobranch['first_period']=$sorted_periods[0];
   $macrobranch['last_period']=end($sorted_periods);
   $macrobranch['nb_terms']=count($macrobranch_terms);
   $macrobranch['terms']=implode("§", $macrobranch_terms);
   $macrobranch['label']=macrobranch_label($macrobranch_terms,$nb_terms_in_label);
   $Macrobranches[$macrobranch['id_partition']]=$macrobranch;

}

 
}


//// Insertion des infos dans la table partition

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

function macrobranch_label($macrobranch_terms,nb_terms_in_label){
    $terms_occ=uasort($macrobranch_terms, 'cmp');
    $label='';
    for($i=0;$i<nb_terms_in_label;$i++){
    $term_id=$macrobranch_terms[$i];
    $query="select forme_principale FROM concepts WHERE id=$term_id";
    $resultat=mysql_query($query) or die ("<b>Requête non exécutée (Récupération de la forme principale)</b>.");
    $label=$label.','.mysql_fetch_array($resultat);
    $label=substr($label,1);
    }
    return $label;
}


function cmp($a, $b) {
    if ($a == $b) {
        return 0;
    }
    return ($a > $b) ? -1 : 1;
}
?>