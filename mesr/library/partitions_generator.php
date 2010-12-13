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

//variables
$nbPartition=0; // nombre de partitions

// on crée un array des id universaux de clusters
$id_cluster_univ=array();
while ($ligne=mysql_fetch_array($resultat)) {
        array_push($id_cluster_univ,$ligne[id_cluster_univ]);
}

// on assigne une partition à chaque cluster
while (count($id_cluster_univ)>0){
    // on prend le premier cluster et on lui assigne une partition
    $target=array_pop($id_cluster_univ);
    $nbPartition=$nbPartition+1;
    $sql="UPDATE cluster SET pseudo=$nbPartition WHERE id_cluster_univ=$target";
    $updated=mysql_query($sql);
    echo 'Partition for'.$target.'set to'.$nbPartition.'('.$updated.')'."<br/>";

    $neighbors=array_merge( getFathers($target),getSons($target));
    $arrayTarget = array($target);
    $neighbors=array_diff($neighbors, $arrayTarget);
    //on prend par propagation ses voisins et on leur assigne la même partition
    while (count($neighbors)>0){
        $targetNeighbor=array_pop($neighbors);
        $sql="UPDATE cluster SET pseudo=$nbPartition WHERE id_cluster_univ=$targetNeighbor";
        $updated=mysql_query($sql);
        echo 'Partition for'.$targetNeighbor.'set to'.$nbPartition.'('.$updated.')'."<br/>";

        $arrayNeigh = array($targetNeighbor);
        // on retire le voisin des clusters à tagger
        $id_cluster_univ=array_diff($id_cluster_univ,$arrayNeigh);
        $newNeighbors=array_merge( getFathers($targetNeighbor),getSons($targetNeighbor));
        $neighbors=array_diff($neighbors, $arrayNeigh);
    }

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
   echo  $query;
   $resultat=mysql_query($query) or die ("<b>Requête non exécutée (Récupération des pères)</b>.");
   while ($ligne=mysql_fetch_array($resultat)) {
        array_push($fathers,$ligne[id_cluster_1_univ]);
   }
   return $fathers;
}

?>