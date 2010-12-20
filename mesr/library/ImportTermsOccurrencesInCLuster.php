<?php
include("fonctions_php.php");
include("../parametre.php");
//connexion a la base de donnees
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");


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
    echo 'occurrences for '.$ngram_id.'updated to'.$nb_occ.'<br/>';
    echo $sql;
    mysql_query($sql) or die ("<b>Insert of partition data failed</b>.");;
    echo 'occurrences for '.$ngram_id.'updated to'.$nb_occ.'<br/>';

}
//on ferme l'acces à la base de donnees
mysql_close($ink);

?>