<?php
include("phyloheader.php");

///////////////////

/// on récupère pour chaque catégorie les données similapré-calculées pour les streamgraph


//// Branches émergentes
$cle='branches_emergentes_'.$phylo_recent_min_nb_periods_covered;
$json_dataEmergentes=getValue($cle);
//////////
include('include/streamgraphEmergentes.php');
echo $myaboveEmergentes;
$phyloquery="select * FROM partitions WHERE nb_period_covered > 1 AND nb_fields>2 
    AND nb_period_covered <=".$phylo_min_nb_periods_covered."
        AND last_period>=".($last_period-$dT);
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
<li><a href='#tabs-2'>Potentiellement émergents </a></li>
<li><a href='phyloTab3.php?selectedTab=3'>En suspens</a></li>
</ul>
<div id='tabs-1'>
</div>
<div id='tabs-2'>";
            $branch_list=branch_list_string($phyloresultat,$depth,$min_similarity,'grouplist');
            echo "<h3>Thématiques potentiellement émergentes <span style='font-size: x-small;'> (couvrant au plus 3 périodes)</span></h3>";
            echo $myscriptEmergentes;
            echo '<br/>';
            echo $branch_list;

echo "
</div>
<div id='tabs-3'>
</div>
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
// echo $index_grouped[0].'<br/>';
// echo 'list:'.$branch_list['branch_last_period_cluster_id'].'<br/>';
// echo $branch_list['branch_last_period_cluster_id'][$index_grouped[0]].'<br/>';

// echo $branch_list['branch_last_period'][$index_grouped[0]].'<br/>';
// echo $branch_list['label'][$index_grouped[0]].'<br/>';

?>