<?php

include("fonctions_php.php");
include("../parametres/parametresPhylo.php");
include("phylo_library.php");
echo 'test';

pt('TEST');

// génère les streamgraphes de branches phylogénétiques en les catégorisant 
// active, emergente, en suspens

$jsprotovis="TRUE";

echo 'PARAMETRES<br/>';
echo 'taille minimum des branches (hors émergentes) :'.$phylo_min_nb_periods_covered.'<br/>';
echo 'taille maximum des branches émergentes :'.$phylo_recent_min_nb_periods_covered.'<br/>';

//connexion a la base de donnees

include("../parametre.php");
$ink=mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

include("../include/header.php");



/////////// On regarde quel est la dernière période afin de pouvoir afficher les thématiques actives
$last_period_list=array();
$resultat=mysql_query("select last_period,last_period_string FROM partitions GROUP BY last_period") or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
        array_push($last_period_list,$ligne[last_period]);
        $period_string=$ligne[last_period_string];
}

$last_period=max($last_period_list);
$first_period=min($last_period_list);
$period_string=explode(' ',$period_string);
$dT=$period_string[1]-$period_string[0];// fenêtre temporelle utilisée pour le calcul des clusters
$time_steps=$last_period_list[1]-$last_period_list[0]; // pas de la fenêtre glissante


//// Occurrences de termes dans les clusters
$query="ALTER TABLE partitions ADD periodWithMaxScore varchar(50);";
mysql_query($query);// or die ("<b>Requête non exécutée (creation du champ occurrences_in_cluster dans la table concepts)</b>.");

//////////
/// creation de la table
$query="
CREATE TABLE IF NOT EXISTS `data` (
`cle` varchar(50) DEFAULT NULL,
`valeur` text DEFAULT NULL,
UNIQUE KEY `cle` (`cle`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
";
mysql_query($query);



///////////////////////////////////////////////////////////////////////////////
/// Ajout de quelques données utilisées pour les streamgraphs dans la table data
///////////////////////////////////////////////////////////////////////////////        

for ($i = 1; $i < 4; $i++) {
    $categorie = "categorie" . $i;
    $query = "select " . $categorie . " FROM billets GROUP BY " . $categorie;
    $resultat = mysql_query($query) or die("<b>Requête non exécutée (récupération des principales thématiques)</b>");
    $categ = "";
    while ($ligne = mysql_fetch_array($resultat)) {
        $categ.=$ligne[$categorie] . ',';
    }
    $categ = substr($categorie1, 0, -1);
    $sql = "INSERT INTO data (cle,valeur) VALUES ('" . $categorie . "','" . $categ . "') ON DUPLICATE KEY UPDATE cle='" . $categorie . "',valeur='" . $categ . "';";
    echo '<br/>' . $sql . '<br/>';
    mysql_query($sql) or die("<bInserts de categories dans data non effectués)</b>.");
}

error();
///////////////////////////////////////////////////////////////////////////////
        /// Calcul des streamgraphs pour chaque type de branches: emergentes, actives, en suspens 
        ///////////////////////////////////////////////////////////////////////////////        
        
        echo ' Calcul des branches actives<br/>';
        $query="select * FROM partitions WHERE nb_period_covered >=".$phylo_min_nb_periods_covered.
            " AND last_period>=".($last_period-2*$dT);
        echo $query;
        $json_data=query2streamgraphData($query,$first_period,$last_period,$dT,$time_steps);
        $cle='branches_actives_'.$phylo_min_nb_periods_covered;
        $sql="INSERT INTO data (cle,valeur) VALUES ('".$cle."','$json_data') ON DUPLICATE KEY UPDATE cle='".$cle."',valeur='$json_data';";
        echo '<br/>'.$sql.'<br/>';
        mysql_query($sql) or die("<bInserts non effectués)</b>.");

        echo ' Calcul des branches émergente<br/>';
        $query="select * FROM partitions WHERE nb_period_covered > 1 AND nb_fields>2 AND nb_period_covered <=".$phylo_min_nb_periods_covered.
            " AND last_period>=".($last_period-2*$dT);
        $json_data=query2streamgraphData($query,$first_period,$last_period,$dT,$time_steps);
        $cle='branches_emergentes_'.$phylo_recent_min_nb_periods_covered;
        $sql="INSERT INTO data (cle,valeur) VALUES ('".$cle."','$json_data') ON DUPLICATE KEY UPDATE cle='".$cle."',valeur='$json_data';";
        echo '<br/>'.$sql.'<br/>';
        mysql_query($sql) or die("<bInserts non effectués)</b>.");

        echo ' Calcul des branches en suspens<br/>';
        $query="select * FROM partitions WHERE nb_period_covered >=".$phylo_min_nb_periods_covered.
               " AND last_period<".($last_period-2*$dT);
        $json_data=query2streamgraphData($query,$first_period,$last_period,$dT,$time_steps);
        $cle='branches_suspens_'.$phylo_min_nb_periods_covered;
        $sql="INSERT INTO data (cle,valeur) VALUES ('".$cle."','$json_data') ON DUPLICATE KEY UPDATE cle='".$cle."',valeur='$json_data';";
        echo '<br/>'.$sql.'<br/>';
        mysql_query($sql) or die("<bInserts non effectués)</b>.");

        echo ' Calcul des score pour les autres branches<br/>';
        $query="select * FROM partitions WHERE nb_period_covered >=2 AND nb_period_covered<".$phylo_min_nb_periods_covered;
        batchPartitionScore($query,$first_period,$last_period,$dT,$time_steps);




        
//on ferme l'acces à la base de donnees
mysql_close($ink);

echo '</div>';
echo '
<script> $(function() { '.$jscriptmp.' });</script>';
?>