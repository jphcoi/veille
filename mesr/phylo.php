<?php
include("phyloheader.php");

///////////////////

/// on récupère pour chaque catégorie les données similapré-calculées pour les streamgraph
//// Branches actives
$cle='branches_actives_'.$phylo_min_nb_periods_covered;
$json_dataActives=getValue($cle);

//////////
include('include/streamgraphActives.php');

echo $myaboveActives;

$phyloquery="select * FROM partitions WHERE nb_period_covered >=".$phylo_min_nb_periods_covered." AND last_period>=".($last_period-3*$dT);
$phyloresultat=mysql_query($phyloquery) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");


//// Début des tab /////////
echo "
<div class='demo'>

<div id='tabs'>

	<ul>
<table width=100% class=tableitems>
<tr valign=top></td><td><h2 class=subtitle>fils thématiques";

include('include/phylohelper.php');
echo "</h2></tr>
</table >

		<li><a href='#tabs-1'>Actifs</a></li>
		<li><a href='phyloTab2.php?selectedTab=2'>Potentiellement émergents </a></li>
		<li><a href='phyloTab3.php?selectedTab=3'>En suspens</a></li>
	</ul>
	<div id='tabs-1'>
";
/// Première tab  ////
$branch_list=branch_list_string($phyloresultat,$depth,$min_similarity);
echo "<h3>Fils thématiques actifs";
echo " <span style='font-size: x-small;'> (couvrant au moins 4 périodes) </span></h3>";
echo $myscriptActives;
echo '<br/>';
echo $branch_list;
echo "
	</div>
	<div id='tabs-2'>";          
echo "
	</div>
	<div id='tabs-3'>";
echo "       	</div>
";

//on ferme l'acces à la base de donnees
mysql_close($ink);

echo '</div>';
echo '
	<script> $(function() { '.$jscriptmp.' });</script>';

include("footer.php");		  

?>