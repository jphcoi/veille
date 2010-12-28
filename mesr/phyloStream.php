<?php
include("login_check.php");
include("library/fonctions_php.php");


$depth=2;// rang dans le nombre d'occurences des termes acceptés pour labellisation des branches
$min_similarity=0.005;// seuil de similarité pour clusteriser
$phylo_min_nb_periods_covered=14;
$phylo_recent_min_nb_periods_covered=2;

//connexion a la base de donnees

include("parametre.php");
$ink  =mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

include("include/header.php");
include("banner.php");



//echo "
//<script>
//	$(function() {
//		

$jscriptmp="	$( '#tabs' ).tabs();
                   event: 'mouseover'";
//	});
//	</script>
//";

/////////// On regarde quel est la dernière période afin de pouvoir afficher les thématiques actives
$last_period_list=array();
$resultat=mysql_query("select last_period,last_period_string  FROM partitions GROUP BY last_period") or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
        array_push($last_period_list,$ligne[last_period]);
        $period_string=$ligne[last_period_string];
}

$last_period=max($last_period_list);
$first_period=min($last_period_list);
$period_string=explode(' ',$period_string);
$dT=$period_string[1]-$period_string[0];// fenêtre temporelle utilisée  pour le calcul des clusters
$time_steps=$last_period_list[1]-$last_period_list[0]; // pas de la fenêtre glissante


//////////

//// Début des tab /////////
echo "
<div class='demo'>
<div id='tabs'>
	<ul>
<table width=100% class=tableitems>
<tr valign=top></td><td><h2 class=subtitle>fils thématiques (branches phylogénétiques)";
echo "</h2></tr>
</table >
		<li><a href='#tabs-1'>Actifs</a></li>
		<li><a href='#tabs-2'>Potentiellement émergents </a></li>
		<li><a href='#tabs-3'>En suspens</a></li>
	</ul>
	<div id='tabs-1'>
";
/// Première tab  ////
$query="select * FROM partitions WHERE nb_period_covered >= $phylo_min_nb_periods_covered AND last_period=$last_period";
        echo "<h3>Fils thématiques actifs <span style='font-size: x-small;'> (couvrant au moins 4 périodes) </span></h3>";	
        $json_data=query2streamgraphData($query,$first_period,$last_period,$dT,$time_steps);
        include('include/streamgraph.php');
        

echo "
	</div>
	<div id='tabs-2'>";
            $query="select * FROM partitions WHERE nb_period_covered > 1 AND nb_period_covered < 4 AND  last_period=$last_period";
            $resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
            echo "<h3>Thématiques potentiellement émergentes <span style='font-size: x-small;'> (couvrant 2 ou 3 périodes)</span></h3>";
            
echo "
	</div>
	<div id='tabs-3'>";
		$query="select * FROM partitions WHERE nb_period_covered >= $phylo_min_nb_periods_covered AND last_period<$last_period";
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
        echo "<h3>Fils thématiques passés <span style='font-size: x-small;'> (couvrant au moins 4 périodes)</span></h3>";

echo "       	</div>
";

////////////////////////////////
///////Fonction locales /////////
////////////////////////////////
function query2streamgraphData($query,$first_period,$last_period,$dT,$time_steps){
// transforme un ensemble de données de partition d'une requête sur la table partition en un streamgraph par partition

$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");


$year_String='var years = [';
for ($i=$first_period;$i<=$last_period;$i+=$time_steps){
    $year_String.=$i.', ';
}
$year_String=substr($year_String,0,-2).'];';
// ajout des var pour chaque branche
$streamgraphString=$year_String.'var dynamics= {';

while ($partition_resultat=mysql_fetch_array($resultat)){
    //infos sur la partition
    $id_partition=$partition_resultat[id_partition];
    $partition_label=remove_popo($partition_resultat[label]);
       if (strcmp(substr($partition_label,-1),',')==0){
            $lab=substr($partition_label,0,-1);
            }
    $streamgraphString.='"'.$partition_label.'":'.fiels_list2JSON($id_partition,$first_period,$last_period,$dT,$time_steps);
    }
$streamgraphString=substr($streamgraphString,0,-1).'};';
return $streamgraphString;
}
/////////////////////////////////////////////
function fiels_list2JSON($id_partition,$first_period,$last_period,$dT,$time_steps){
// transforme un ensemble de champs en un JSon pour streagraph
// { activity: [ value1, ..., valueN]}
$JSON_string="{ activity: [";

for ($i=$first_period;$i<=$last_period;$i+=$time_steps){
    $period_string=($i-$dT).' '.$i;
    $period_score=0;
    $sql="SELECT id_cluster,periode FROM cluster WHERE pseudo=$id_partition AND periode='".$period_string."' GROUP BY id_cluster";
    $resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des clusters d'une période pour une partition)</b>.");
    while ($ligne=mysql_fetch_array($resultat)) {
        $commande_sql_pert = "SELECT id_billet,overlap_size,billet_size,cluster_size from biparti where cluster = '".$ligne[id_cluster]."' AND periode = '".$ligne[periode]."' AND overlap_size/cluster_size/log10(10+billet_size-overlap_size)>="."0.3"."and overlap_size/cluster_size>0.25" ;
        $billet_list=mysql_query($commande_sql_pert) or die ("<b>Requête non exécutée (récupération des billets associés à un cluster)</b>.");
        while ($billet=mysql_fetch_array($billet_list)) {
            $period_score+=$billet[overlap_size]/$billet[cluster_size]/log10(10+$billet[billet_size]-$billet[overlap_size])/10;
        }
    }
    $JSON_string.=round($period_score,4).', ';
    
}
$JSON_string=substr($JSON_string,0,-2);
$JSON_string.='] },';
return $JSON_string;
}
////////////////

//on ferme l'acces à la base de donnees
mysql_close($ink);

echo '</div>';
echo '
	<script> $(function() { '.$jscriptmp.' });</script>';
include("footer.php");
?>