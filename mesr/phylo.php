<?php
include("login_check.php");
include("library/fonctions_php.php");

//connexion a la base de donnees

include("parametre.php");
$ink  =mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

include("include/header.php");
include("banner.php");

$phylo_min_nb_periods_covered=4;
$phylo_recent_min_nb_periods_covered=2;

echo "
<script>
	$(function() {
		$( '#tabs' ).tabs();
                   event: 'mouseover'

	});
	</script>
";
/////////// On regarde quel est la dernière période afin de pouvoir afficher les thématiques actives
$last_period_list=array();
$resultat=mysql_query("select last_period FROM partitions GROUP BY last_period") or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
        array_push($last_period_list,$ligne[last_period]);
}
$last_period=max($last_period_list);
//////////

//// Début des tab /////////
echo "
<div class='demo'>

<div id='tabs'>

	<ul>
<table width=100% class=tableitems>
<tr valign=top></td><td><h2 class=subtitle>Phylogénie</h2></tr>
</table >
		<li><a href='#tabs-1'>Principaux thèmes d'actualité</a></li>
		<li><a href='#tabs-2'>Thèmes récents</a></li>
		<li><a href='#tabs-3'>Thèmes passés</a></li>
	</ul>
	<div id='tabs-1'>
";
/// Première tab  ////
$query="select * FROM partitions WHERE nb_period_covered >= $phylo_min_nb_periods_covered";
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
$branch_list=branch_list_string($resultat);

        //echo '<h2>Principaux thèmes d'actualité</h2>';
	echo $branch_list;
echo "
	</div>
	<div id='tabs-2'>
		<p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>
	</div>
	<div id='tabs-3'>
		<p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
		<p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>
	</div>
";

///////// Fonctions /////
function branch_list_string($mysql_branch_list){
//donne la liste des macro-branches qui couvrent au moins $phylo_min_nb_periods_covered

$branch_list='<p><ul>'; // html avec la liste des branches
while ($ligne=mysql_fetch_array($mysql_branch_list)) {
       $last_period_for_branch=$ligne[last_period_string];
       // on récupère un cluster de la dernière période
       $clusterQuery="select id_cluster FROM cluster WHERE periode='$last_period_for_branch' AND pseudo=$ligne[id_partition]";
       $clusters_from_last_period=mysql_query($clusterQuery) or die ("<b>Requête non exécutée (récupération des clusters de la dernière période)</b>.");
       $cluster_ligne=mysql_fetch_array($clusters_from_last_period);
       $last_period_cluster_id=$cluster_ligne[id_cluster];
       $branch='<li><a href="cluster.php?id_cluster='.$last_period_cluster_id.'&periode='.str_replace(' ','-',$last_period_for_branch).'">';
       $branch=$branch.ucfirst($ligne[label]).'</a><br/>';
       $branch_list=$branch_list.$branch;
}
$branch_list=$branch_list.'</ul></p>';
return remove_popo($branch_list);
}


//on ferme l'acces à la base de donnees
mysql_close($ink);
include("footer.php");
?>