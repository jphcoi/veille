<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");
//connexion a la base de donnees
$ink  =mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

$titleheader="aide et ontologie";
include("include/header.php");
include("banner.php");

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

echo '<p><table width=100%>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>Aide et ontologie</h2></td><td width=2.5%></td></tr>';
echo "<tr valign=top><td width=2.5%></td><td>
<h3>À propos de cette plateforme</h3>
<p>Cette plateforme présente une reconstruction des discussions sur le thème <i>'Santé et Environnement'</i>
à partir d'un échantillon représentatif de contenus dynamiques du web français sur la période du ";
echo adjust_date_jours($dated-2*$dT)." 2010 au ".adjust_date_jours($datef)." 2010. </p><p> Par reconstruction, il faut entendre l'extraction, à partir d'une analyse des productions de la blogosphère,
de motifs temporels qui mettent en saillance certains sujets, en explicitent les modalités de production et
permettent de suivre leur évolution. </p>
<p> Cet échantillon
comporte ".$nbBillets." documents (billets de blogs, articles de journaux électroniques, flux RSS d'institutions)
provenant de <a href=entree_sources.php>".$nbAuteurs." sources</a> sélectionnées pour leur coloration thématique. La liste de ces sources
est accessible à partir du lien <a href=entree_sources.php>SOURCE</a> qui figure dans le menu de navigation.</p>";

echo "<p>Le périmètre thématique associé à <i>'Santé et Environnement'</i> a été défini
à partir d'une analyse des documents. Il est constitué de <a href=entree_termes.php>".$nbNGram." expressions</a>. Cette liste est
mise à jour régulièrement pour suivre l'actualité. La liste de ces expressions
est accessible à partir du lien <a href=entree_termes.php>TERMES</a> qui figure dans le menu de navigation.</p>";

echo "<p>Comme sur la plupart des plateformes de ce type, il est possible d'obtenir le profil et les productions
d'une source donnée (par exemple <a href='source.php?id_source=12&periode=-1'>".$source_ex."</a>) ; ainsi que le profil
d'une expression (evolution, billets associés, etc.), comme par exemple <a href='chart.php?id_concept=1433&periode=-1'>".$term_ex."</a>.</p>

<p>A côté de ces entrées au niveau 'micro', cette plateforme propose des entrées à des niveaux de structuration
plus élevés permettant d'avoir une vue synthétique des problématiques autour de <i>'Santé et Environnement'</i>.
Ceux-ci sont accessibles via le menu de navigation:
<ul>
<li> <a href='entree_clusters.php'>Les champs thématiques</a> (niveau 'meso'), décrivent le contexte d'une discussion par un ensemble de termes,
<li> <a href='global.php'>Les cartes</a> (niveau 'macro') montrent l'articulation des champs thématiques à une période donnée, la proximité des problématiques abordées,
<li> <a href='phylo.php'>Les fils thématiques</a> (niveau 'macro-temporel') permettent d'appréhender le déroulement temporel
 des discussions, l'émergence de problématiques et l'évolution de leur popularité.
</ul>
</p>
<p>
<center><a name='champs'>
<img src='images/termes_carte.jpg' ></a><br/>
<span style='font-size:small;'>Les <a href='entree_clusters.php'>champs thématiques</a> sont des groupes de termes. Ils s'articulent au sein de <a href='global.php'>cartes</a>
et sont labellisés par les deux termes les plus représentatifs.</span>
</center></p>
<br/><p>
<center><a name='phylo'>
<img src='images/phylogenie.jpg' ></a><br/>
<span style='font-size:small;'>Les <a href='entree_clusters.php'>champs thématiques</a> sont
intégrés au sein de fils thématiques qui permettent de suivre
leurs evolutions et leurs mutations.
Au sein d'un fil thématique, un champ thématique peut provenir d'une évolution
linéaire ou être le fruit de la rencontre de plusieurs
thématiques antérieurs. Il peut également donner naisssance à une ou plusieurs champs thématiques
sur les périodes ultérieures. L'ensemble des
fils thématiques peut-être <a href='phylo.php'>cvisualisé de manière interactive</a> comme ci-dessous.</span>
</center>
<center><a name='phylo'>
<img src='images/filsThematiques.jpg' ></a><br/>
<span style='font-size:small;'>Exemple de visualisation d'un ensemble de <a href='phylo.php'>fils thématiques</a>. Ceux-ci intègrent les <a href='entree_clusters.php'>champs thématiques</a> dans une structure
temporelle qui permet de suivre l'évolution de leur popularité.</span>
</center>


</p>
<p>Contrairement aux explorations s'appuyant sur des termes choisis <i>a priori</i>
ayant pour entrée le niveau 'micro', les entrées par les niveaux 'meso' et 'macro' permettent
de sélectionner des sujets à partir de leur profil d'évolution et donc de suggérer des
parcours et des sujets à étudier.
  </p>

";
echo '</td><td width=2.5%></td></tr></table>';


include("footer.php");
//on ferme l'acces à la base de donnees
mysql_close($ink);

?>


</body>
</html>
