<?php
include("phyloheader.php");

///////////////////

/// on récupère pour chaque catégorie les données similapré-calculées pour les streamgraph


echo $myaboveSuspens;
$phyloquery="select * FROM partitions WHERE nb_period_covered >= 3";
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
		<li><a href='phyloTab3.php?selectedTab=3'>En Suspens</a></li>
                <li><a href='#tabs-4'>Tous</a></li>
	</ul>
	<div id='tabs-1'>
	</div>
	<div id='tabs-2'>
	</div>
        <div id='tabs-3'>
	</div>
	<div id='tabs-4'>";
		$branch_list=branch_list_string($phyloresultat,$depth,$min_similarity);
        echo "<h3>Tous champs thématiques <span style='font-size: x-small;'> (couvrant au moins 3 périodes)</span></h3>";
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