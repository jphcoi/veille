<?php
/// Calcul un certain nombre de stats dont les occurrences de termes dans les clusters

include("fonctions_php.php");
include("../parametre.php");
//connexion a la base de donnees
$ink  =mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");


///  nombre de clusters
//// Occurrences de termes dans les clusters
$sql = 'SELECT id_cluster_univ FROM cluster GROUP BY id_cluster_univ';
$clusters= mysql_query($sql);
$nbCluster=0;
// Pour chaque ngram on regarde le nombre de clusters qui le mentionnent
while ($ligne=mysql_fetch_array($clusters)) {
    $nbCluster++;
}
$sql="INSERT INTO data (cle,valeur) VALUES ('total_number_of_clusters','$nbCluster') ON DUPLICATE KEY UPDATE cle='total_number_of_clusters',valeur=$nbCluster;";
mysql_query($sql) or die ("<b>Insert of total_number_of_cluster failed</b>.");;
echo 'Number of clusters'.$nbCluster.'inserted in table data at total_number_of_cluster'.'<br/>';


///  nombre de de sources
$sql = 'SELECT id  FROM auteurs GROUP BY id';
$auteurs= mysql_query($sql);
$nbAuteurs=0;
// Pour chaque ngram on regarde le nombre de clusters qui le mentionnent
while ($ligne=mysql_fetch_array($auteurs)) {
    $nbAuteurs++;
}
echo $nbAuteurs;
$sql="INSERT INTO data (cle,valeur) VALUES ('authors_number','$nbAuteurs') ON DUPLICATE KEY UPDATE cle='authors_number',valeur=$nbAuteurs;";
mysql_query($sql) or die ("<b>Insert of nb_authors failed</b>.");;
echo 'Number of authors'.$nbAuteurs.'inserted in table data at authors_number'.'<br/>';

///  nombre de billets
$sql = 'SELECT id  FROM billets GROUP BY id';
$billets= mysql_query($sql);
$nbBillets=0;
// Pour chaque ngram on regarde le nombre de clusters qui le mentionnent
while ($ligne=mysql_fetch_array($billets)) {
    $nbBillets++;
}
$sql="INSERT INTO data (cle,valeur) VALUES ('billets_number','$nbBillets') ON DUPLICATE KEY UPDATE cle='billets_number',valeur=$nbBillets;";
mysql_query($sql) or die ("<b>Insert of total_number_of_billet failed</b>.");;
echo 'Number of billets'.$nbBillets.'inserted in table data at billets_number'.'<br/>';

///  nombre de concepts
$sql = 'SELECT id  FROM concepts GROUP BY id';
$NGram= mysql_query($sql);
$nbNGram=0;
// Pour chaque ngram on regarde le nombre de clusters qui le mentionnent
while ($ligne=mysql_fetch_array($NGram)) {
    $nbNGram++;
}
$sql="INSERT INTO data (cle,valeur) VALUES ('NGram_number','$nbNGram') ON DUPLICATE KEY UPDATE cle='NGram_number',valeur=$nbNGram;";
mysql_query($sql) or die ("<b>Insert of total_number_of_concepts failed</b>.");;
echo 'Number of billets'.$nbNGram.'inserted in table data at NGram'.'<br/>';



//// Occurrences de termes dans les clusters
$query="ALTER TABLE concepts ADD occurrences_in_clusters mediumint(9);";
mysql_query($query);// or die ("<b>Requête non exécutée (creation du champ occurrences_in_cluster dans la table concepts)</b>.");

// importe les valeurs occurrences des termes dans les clusters dans la table concept dans le champs occurrences_in_clusters
$sql = 'SELECT id from concepts';
$concepts= mysql_query($sql);
// Pour chaque ngram on regarde le nombre de clusters qui le mentionnent
while ($ligne=mysql_fetch_array($concepts)) {
        $ngram_id=$ligne[id];
        $sql='select id_cluster_univ FROM cluster WHERE concept='.$ngram_id;
        $resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des occurrences dans le corpus)</b>.");
        $nb_occ=0;
        while ($ligne=mysql_fetch_array($resultat)) {
            $nb_occ++;
        }

    $sql="UPDATE concepts SET occurrences_in_clusters=$nb_occ WHERE id=$ngram_id";
    echo 'occurrences for '.$ngram_id.' updated to '.$nb_occ.'<br/>';
    mysql_query($sql) or die ("<b>Insert of partition data failed</b>.");;
    echo 'occurrences for '.$ngram_id.'updated to'.$nb_occ.'<br/>';

}



//on ferme l'acces à la base de donnees
mysql_close($ink);

?>