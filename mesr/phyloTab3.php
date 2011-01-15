<?php
include("phyloheader.php");

///////////////////

/// on récupère pour chaque catégorie les données similapré-calculées pour les streamgraph

//// Branches en suspens
$cle='branches_suspens_'.$phylo_min_nb_periods_covered;
$sql="SELECT * FROM data WHERE cle='".$cle."';";
$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (données streamgraph actives)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
        $json_dataSuspens=$ligne[valeur];
}
//////////
include('include/streamgraphSuspens.php');
echo $myaboveSuspens;

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
		<li><a href='phylo.php?selectedTab=1'>Actifs</a></li>
		<li><a href='phyloTab2.php?selectedTab=2'>Potentiellement émergents </a></li>
		<li><a href='#tabs-3'>Actifs</a></li>
	</ul>
	<div id='tabs-1'>
	</div>
	<div id='tabs-2'>
	</div>
	<div id='tabs-3'>";
		$query="select * FROM partitions WHERE nb_period_covered >= $phylo_min_nb_periods_covered AND last_period<($last_period-3*$dT)";
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
$branch_list=branch_list_string($resultat,$depth,$min_similarity);
        echo "<h3>Fils thématiques passés <span style='font-size: x-small;'> (couvrant au moins 4 périodes)</span></h3>";
        echo $myscriptSuspens;	
        echo '<br/>';
        echo $branch_list;

echo "       	</div>
";




//on ferme l'acces à la base de donnees
mysql_close($ink);

echo '</div>';
echo '
	<script> $(function() { '.$jscriptmp.' });</script>';
echo "<script>
$(document).ready(function(){
    var param = $(document).getUrlParam('selectedTab');
    $('#tabs').tabs('select', param);
});
</script>";
include("footer.php");

		   // print_r($branch_list);
		   //  echo $index_grouped[0].'<br/>';
		   //  echo 'list:'.$branch_list['branch_last_period_cluster_id'].'<br/>';
		   // echo $branch_list['branch_last_period_cluster_id'][$index_grouped[0]].'<br/>';

		   //  echo $branch_list['branch_last_period'][$index_grouped[0]].'<br/>';
		   //  echo $branch_list['label'][$index_grouped[0]].'<br/>';

?>