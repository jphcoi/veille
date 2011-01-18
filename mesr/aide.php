<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");
$jsprotovis="TRUE";
//connexion a la base de donnees
$ink  =mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

$titleheader="aide et ontologie";
include("include/header.php");
include("banner.php");

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
$total_number_of_clusters=getValue('total_number_of_clusters');
$nbAuteurs=getValue('authors_number');
$nbBillets=getValue('billets_number');
$nbNGram=getValue('NGram_number');
$source_ex=getValue(12,'auteurs','id','auteurs');
$term_ex=getValue(1433,'concepts','id','forme_principale');



echo "<div class='demo'>
<div id='tabs'>

	<ul>
<table width=100% class=tableitems>
<tr valign=top></td><td><h2 class=subtitle>".$titleheader."</h2></tr>
</table >
		<li><a href='#tabs-1'>À propos de cette plateforme</a></li>
		<li><a href='#tabs-2'>Ontologie </a></li>
		<li><a href='#tabs-3'>Navigation</a></li>
		<li><a href='#tabs-4'>Crédits</a></li>
	</ul>
	<div id='tabs-1'>";

echo '<p><table width=100%>';
echo "<tr valign=top><td width=2.5%></td><td style=\"font-size:small;\">
<h3>À propos de cette plateforme</h3>
<p>Cette plateforme présente une reconstruction des discussions sur le thème <i>'Santé et Environnement'</i>
à partir d'un échantillon représentatif de contenus dynamiques du web français sur la période du ";
echo get_date_since($dated-2*$dT,'fr')." au ".get_date_since($datef,'fr').". </p><p> Par reconstruction, il faut entendre l'extraction, à partir d'une analyse des productions de la blogosphère,
de motifs temporels qui mettent en saillance certains sujets, en explicitent les modalités de production et
permettent de suivre leur évolution. </p>
<p> Cet échantillon
comporte ".$nbBillets." documents (billets de blogs, articles de journaux électroniques, flux RSS d'institutions)
provenant de <a href=entree_sources.php><font color=blue>".$nbAuteurs." sources</font></a> sélectionnées pour leur coloration thématique. La liste de ces sources
est accessible à partir du lien <a href=entree_sources.php><font color=blue>SOURCES</font></a> qui figure dans le menu de navigation.
Plusieurs pages du site proposent d'étendre la recherche de contenu à l'ensemble du web
via l'icône Google <img src='images/googleGinv.png' width=18px>.
</p>";

echo "<p>Le périmètre thématique associé à <i>'Santé et Environnement'</i> a été défini
à partir d'une analyse des documents. Il est constitué de <a href=entree_termes.php><font color=blue>".$nbNGram." termes</font></a>. Cette liste est
mise à jour régulièrement pour suivre l'actualité. La liste de ces termes
est accessible à partir du lien <a href=entree_termes.php><font color=blue>TERMES</font></a> qui figure dans le menu de navigation.</p>
</td><td width=2.5%></td></tr></table></div>



<div id='tabs-2'>";
echo '<p><table width=100%>';
echo "<tr valign=top><td width=2.5%></td><td style=\"font-size:small;\">";
echo "<h3>Ontologie</h3>";
echo "Comme sur la plupart des plateformes de ce type, il est possible d'obtenir le profil et les productions
d'une source donnée (par exemple <a href='source.php?id_source=12&periode=-1'><font color=blue>".$source_ex."</font></a>) ; ainsi que le profil
d'un terme (evolution, billets associés, etc.), comme par exemple <a href='chart.php?id_concept=1433&periode=-1'><font color=blue>".$term_ex."</font></a>.</p>

<p><b>Niveaux micro, meso et macro.</b> A côté de ces entrées au niveau 'micro', cette plateforme propose des entrées à des niveaux de structuration
plus élevés permettant d'avoir une vue synthétique des problématiques autour de <i>'Santé et Environnement'</i>.
Ceux-ci sont accessibles via le menu de navigation:
<ul>
<li> <b>Les champs thématiques</b> (niveau <i>'meso'</i>),
sont des ensembles de termes qui décrivent le contexte d'une discussion. Ils sont liés à un ensemble
de contenus provenant <a href='aide.php?selectecTab=1'><font color=blue>des sources</font></a>.
Cette recherche de contenu peut-être étendue
à tous le web depuis la page de profil d'un champ thématique via l'icône Google <img src='images/googleGinv.png' width=18px>. La
liste des champs thématiques est accéssible via le lien <a href='entree_clusters.php'><font color=blue>CHAMPS THEMATIQUES</font></a> dans le menu de navigation.
<li> <b>Les cartes</b> (niveau <i>'macro'</i>) montrent l'articulation des champs thématiques à une période donnée, la proximité des problématiques abordées. Elles sont
accessibles via le lien <a href='global.php'><font color=blue>CARTES</font></a> dans le menu de navigation.
<li> <b>Les fils thématiques</b> (niveau <i>'macro-temporel'</i>) permettent d'appréhender le déroulement temporel
 des discussions, l'émergence de problématiques et l'évolution de leur popularité. La liste des fils thématiques est accessible via le
 lien <a href='phylo.php'><font color=blue>FILS THEMATIQUES</font></a> dans le menu de navigation.
</ul>
</p>
<p>
<center><a name='champs'>
<img src='images/termes_carte.jpg' ></a><br/>
<span style=\"font-size:x-small;\">Les <a href='entree_clusters.php'><font color=blue>champs thématiques</font></a> sont des groupes de termes. Ils s'articulent au sein de <a href='global.php'><font color=blue>cartes</font></a>
et sont labellisés par les deux termes les plus représentatifs.</span>
</center></p>
<br/><p>
<center><a name='phylo'>
<img src='images/phylogenie.jpg' ></a><br/>
<span style='font-size:x-small;'>Les <a href='entree_clusters.php'><font color=blue>champs thématiques</font></a> sont
intégrés au sein de fils thématiques qui permettent de suivre
leurs evolutions et leurs mutations.
Au sein d'un fil thématique, un champ thématique peut provenir d'une évolution
linéaire ou être le fruit de la rencontre de plusieurs
thématiques antérieures. Il peut également donner naisssance à une ou plusieurs champs thématiques
sur les périodes ultérieures. L'ensemble des
fils thématiques peut-être <a href='phylo.php'><font color=blue>visualisé de manière interactive</font></a> comme ci-dessous.</span>
</p><p>
</center>
<center><a name='phylo'>
<img src='images/filsThematiques.jpg' ></a><br/>
<span style='font-size:x-small;'>Exemple de visualisation d'un ensemble de <a href='phylo.php'><font color=blue>fils thématiques</font></a>. Ceux-ci intègrent les <a href='entree_clusters.php'><font color=blue>champs thématiques</font></a> dans une structure
temporelle qui permet de suivre l'évolution de leur popularité.</span>
</center>

</p>
</td><td width=2.5%></td></tr></table></div>
<div id='tabs-3'>";
echo '<p><table width=100%>';
echo "<tr valign=top><td width=2.5%></td><td style=\"font-size:small;\">";
echo "
<h3>Exploration à l'aide des fils thématiques</h3>
<p>Contrairement aux explorations s'appuyant sur des termes choisis <i>a priori</i>
ayant pour entrée le niveau 'micro', les entrées par les niveaux
<a href=aide.php?selectedTab=2><font color=blue>'meso' et 'macro'</font></a> permettent
de sélectionner des sujets à partir de leur profil d'évolution et donc de suggérer des
parcours et des sujets à étudier. Les fils thématiques ont des scores, représentés par des étoiles
qui indiquent de degré d'attention maximal que la blogosphère leur a accordé.
</p>
<p>La <a href='phylo.php'><font color=blue>liste des fils thématiques</font></a> permet d'accéder aux champ thématiques.
<ul>
<li type=circle>Un clic sur le score d'un fil thématique permet de se rendre directement à la période où
celui-ci a suscité le plus d'activité,
</ul>
<center><img src='images/FTlink.jpg' border=1></a><br/></center>
<ul><li type=circle> Un clic sur le nom d'un fil thématique vous donne des informations sur le fil thématique
et vous propose des liens vers des périodes remarquable de de fil thématique.
</ul>
<center><img src='images/FTpopup.jpg'  border=1></a><br/></center>
</p>

<p>Lors du parcours des champ thématiques, le nom du fil thématique auquel celui-ci est rattaché
 est rappelé en dessous du nom de celui-ci et est également cliquable pour obtenir des informations. </p>

<center><img src='images/FT.jpg'  border=1></a><br/></center>

";
echo "</td><td width=2.5%></td></tr></table>

</div>
<div id='tabs-4'>";
$authors=array();
$color='DarkGreen';
$authors[]="<a href='http://camille.roth.free.fr' target='blank'><font color=".$color.">Camille Roth</font></a>, Chargé de recherche au CNRS, CAMS/EHESS, ISC-PIF";
$authors[]="<a href='http://jph.cointet.free.fr' target='blank'><font color=".$color.">Jean-Philippe Cointet</font></a>, INRA SenS, IFRIS, CorText, ISC-PIF ";
$authors[]="<a href='http://chavalarias.com' target='blank'><font color=".$color.">David Chavalarias</font></a>, Chargé de Recherche au CNRS, CREA, ISC-PIF";



$random=array();
$random[]=rand(1,100);
$random[]=rand(1,100);
$random[]=rand(1,100);
uasort($random,'compare');
$order=array_keys($random);
echo '<h3>Auteurs</h3>';
while (count($order)>0){
    $index=array_pop($order);
    echo '<ul>';
    echo '<li>'.$authors[$index].'<br/>';
    echo '</ul>';
}
echo "<h3>Briques logiciel</h3>
En dehors des développements faits par les auteurs, cette plateforme intègre :
<ul> 
<li><a href='http://vis.stanford.edu/protovis/' target='blank'><font color=".$color.">Protovis</font></a><br/>
<li><a href='http://ofnodesandedges.com/toolbox/gexfwalker/' target='blank'><font color=".$color.">Gexfwalker</font></a><br/>
<li><a href='http://raphaeljs.com/'><font color=".$color." target='blank'>Raphaël—JavaScript Library</font></a><br/>
</ul>
</div>
</div>";

echo '
	<script> $(function() { '.$jscriptmp.' });</script>';
echo "<script>
$(document).ready(function(){
    var param = $(document).getUrlParam('selectedTab');
    $('#tabs').tabs('select', param);
});
</script>";
include("footer.php");
//on ferme l'acces à la base de donnees
mysql_close($ink);

?>


</body>
</html>
