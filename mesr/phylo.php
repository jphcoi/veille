<?php
include("login_check.php");
include("library/fonctions_php.php");
$jsprotovis="TRUE";

//connexion a la base de donnees
include("parametre.php");
$ink  =mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

include("include/header.php");
include("banner.php");


///// PARAMETRES ///
$depth=2;// rang dans le nombre d'occurences des termes acceptés pour labellisation des branches
$min_similarity=.07;// seuil de similarité pour clusteriser
$phylo_min_nb_periods_covered=4;
$phylo_recent_min_nb_periods_covered=4;

///////////////////

/// on récupère pour chaque catégorie les données similapré-calculées pour les streamgraph
//// Branches actives
$cle='branches_actives_'.$phylo_min_nb_periods_covered;
$sql="SELECT * FROM data WHERE cle='".$cle."';";
$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (données streamgraph actives)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
        $json_dataActives=$ligne[valeur];
}

//// Branches émergentes
//$cle='branches_emergentes_'.$phylo_recent_min_nb_periods_covered;
//$sql="SELECT * FROM data WHERE cle='".$cle."';";
//$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (données streamgraph actives)</b>.");
//while ($ligne=mysql_fetch_array($resultat)) {
//        $json_dataEmergentes=$ligne[valeur];
//}

//// Branches en suspens
//$cle='branches_suspens_'.$phylo_min_nb_periods_covered;
//$sql="SELECT * FROM data WHERE cle='".$cle."';";
//$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (données streamgraph actives)</b>.");
//while ($ligne=mysql_fetch_array($resultat)) {
//        $json_dataSuspens=$ligne[valeur];
//}

$jscriptmp="	$( '#tabs' ).tabs();
                   event: 'mouseover'";

/////////// On regarde quel est la dernière période afin de pouvoir afficher les thématiques actives
$last_period_list=array();
$resultat=mysql_query("select last_period FROM partitions GROUP BY last_period") or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
        array_push($last_period_list,$ligne[last_period]);
}
$last_period=max($last_period_list);
$dT=$last_period_list[1]-$last_period_list[0];

$dated=min($last_period_list);
$datef=max($last_period_list);

//////////
include('include/streamgraphActives.php');
//include('include/streamgraphEmergentes.php');
//include('include/streamgraphSuspens.php');

echo $myaboveActives;
//echo $myaboveSuspens;
//echo $myaboveEmergentes;


//// Début des tab /////////
echo "
<div class='demo'>

<div id='tabs'>

	<ul>
<table width=100% class=tableitems>
<tr valign=top></td><td><h2 class=subtitle>fils thématiques (branches phylogénétiques)";

    $jscriptmp.=display_helper('Fils thématiques','Les <a href="aide.php?selectedTab=2"><font color=blue>fils thématiques</font></a> sont des ensembles de champs thématiques sur des sujets similaires répartis sur plusieurs périodes. Ils sont classés ici en trois catégories:
            <ul style="font-size:small;"><li>
            "<b style="font-variant:small-caps;">Actifs</b>": Fils thématiques couvrant au moins quatre périodes et qui sont toujours actifs sur les trois dernières périodes.
                </li>
            <li>
                "<b style="font-variant:small-caps;">Potentiellement émergents</b>":
                Fils thématiques couvrant au plus trois périodes dont la plus récente.
            </li>
                <li>
                "<b style="font-variant:small-caps;">En suspens</b>":
            Fils thématiques couvrant au moins quatre périodes mais qui ne sont pas présents sur les trois dernières périodes. Cette rupture du fil thématique peut être temporaire, témoignant d\'une baisse d\'intérêt pour le sujet concerné, ou définitive.
                </li>
                    </ul>
            <p>Dans chaque catégorie, les fils thématiques sont labélisés par leur composantes les plus représentatives puis, lorsque cela est possible, regroupés par grands thèmes.
              Un click sur le nom d\'un fil thématique permet d\'accéder aux champs thématiques les plus récents de ce fil.</p><p>Pour chaque fil, sont par
            ailleurs indiqués la fenêtre temporelle couverte par ce fil thématique ainsi que le nombre de champs qu\'il comporte.</p>
                    ',"helper");
echo "</h2></tr>
</table >
		<li><a href='#tabs-1'>Actifs</a></li>
		<li><a href='#tabs-2'>Potentiellement émergents </a></li>
		<li><a href='#tabs-3'>En suspens</a></li>
	</ul>
	<div id='tabs-1'>
";
/// Première tab  ////
//$query="select * FROM partitions WHERE nb_period_covered >= $phylo_min_nb_periods_covered";
$query="select * FROM partitions WHERE nb_period_covered >=".$phylo_min_nb_periods_covered." AND last_period>=".($last_period-3*$dT);
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
$branch_list=branch_list_string($resultat,$depth,$min_similarity);
echo "<h3>Fils thématiques actifs";
echo " <span style='font-size: x-small;'> (couvrant au moins 4 périodes) </span></h3>";
echo $myscriptActives;
echo '<br/>';
echo $branch_list;
echo "
	</div>
	<div id='tabs-2'>";
            $query="select * FROM partitions WHERE nb_period_covered > 1 AND nb_period_covered < 4 AND  last_period>($last_period-2*$dT)";
            $resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
            $branch_list=branch_list_string($resultat,$depth,$min_similarity);
            echo "<h3>Thématiques potentiellement émergentes <span style='font-size: x-small;'> (couvrant 2 ou 3 périodes)</span></h3>";
            //echo $myscriptEmergentes;
            echo $branch_list;

echo "
	</div>
	<div id='tabs-3'>";
		$query="select * FROM partitions WHERE nb_period_covered >= $phylo_min_nb_periods_covered AND last_period<($last_period-3*$dT)";
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
$branch_list=branch_list_string($resultat,$depth,$min_similarity);
        echo "<h3>Fils thématiques passés <span style='font-size: x-small;'> (couvrant au moins 4 périodes)</span></h3>";
        //echo $myscriptSuspens;
	echo $branch_list;

echo "       	</div>
";



//on ferme l'acces à la base de donnees
mysql_close($ink);

echo '</div>';
echo '
	<script> $(function() { '.$jscriptmp.' });</script>';
include("footer.php");

		   // print_r($branch_list);
		   //  echo $index_grouped[0].'<br/>';
		   //  echo 'list:'.$branch_list['branch_last_period_cluster_id'].'<br/>';
		   // echo $branch_list['branch_last_period_cluster_id'][$index_grouped[0]].'<br/>';
	
		   //  echo $branch_list['branch_last_period'][$index_grouped[0]].'<br/>';
		   //  echo $branch_list['label'][$index_grouped[0]].'<br/>';

?>