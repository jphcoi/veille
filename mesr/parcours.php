<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");

include("include/header.php");
include("banner.php");


echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>Parcours de navigation possible autour des algues vertes ';
echo '</h2></td><td width=2.5%></td></tr>';

//etape A
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subsubtitle > A. Exploration à partir du terme ';
echo '</h2></td><td width=2.5%></td></tr>';


//etape 1
echo '<tr valign=top><td width=2.5%></td><td>';
?>
Etape A.1: <a href="http://maps.sciencemapping.com/veille/entree_termes.php?periode=-1"> liste des termes</a>
<?
echo '</td><td width=2.5%></td></tr>';

echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      chercher le terme algues vertes</td><td></td>';
echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      cliquez sur l\'onglet évolution</td><td></td>';


//etape 2
echo '<tr valign=top><td width=2.5%></td><td>';
?>
Etape A.2: <a href="http://maps.sciencemapping.com/veille/chart.php?id_concept=1017&periode=-1&nav=tempo"> Profil d'évolution</a>
<?
echo '</td><td width=2.5%></td></tr>';



echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      cliquez sur le diagramme d\'évolution dynamique</td><td></td>';


//etape 2
echo '<tr valign=top><td width=2.5%></td><td>';
?>
Etape A.3: <a href="http://maps.sciencemapping.com/MESR6/neighborhoods/activity_1017.jpg"> dynamique de voisinage</a>
<?
echo '</td><td width=2.5%></td></tr>';

echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      revenir sur la page et  cliquez sur l\'onglet thématique - première période</td><td></td>';



//etape A
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subsubtitle > B. Exploration au niveau du champ thématique ';
echo '</h2></td><td width=2.5%></td></tr>';

//etape 4
echo '<tr valign=top><td width=2.5%></td><td>';
?>
Etape B.1: <a href="http://maps.sciencemapping.com/veille/chart.php?periode=83-96&id_concept=1017&nav=thema"> liste des champs thématiques mentionnant algues vertes du 21 septembre au 4 octobre</a>
<?
echo '</td><td width=2.5%></td></tr>';


echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      cliquez sur le champ “Bretagne – élevage industriel ”</td><td></td>';

//etape 5
echo '<tr valign=top><td width=2.5%></td><td>';
?>
Etape B.2: <a href="http://maps.sciencemapping.com/veille/cluster.php?id_cluster=102&periode=83-96"> détail du champ “Bretagne – élevage industriel”</a>
<?
echo '</td><td width=2.5%></td></tr>';

echo '<tr><td></td><td> &nbsp;&nbsp;&nbsp;&rarr;      Observez le champ thématique dans son référentiel généricité/spécificité</td><td></td>';
echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      Cliquez sur l\'onglet réseau de cooccurrence</td><td></td>';



//etape 6
echo '<tr valign=top><td width=2.5%></td><td>';
?>
Etape B.3: <a href="http://maps.sciencemapping.com/veille/cluster.php?id_cluster=102&periode=83-96&nav=cooc"> Réseau de cooccurrence du champ “Bretagne – élevage industriel”</a>
<?
echo '</td><td width=2.5%></td></tr>';


echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      Observez comment le réseau évolue en fonction du seuil de cooccurrences: essayez un seuil à 8, utilisez le glisseur en haut à gauche pour stabiliser le réseau</td><td></td>';
echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      Revenir sur l\'onglet thématiques lié à algues vertes (période 12 octobre - 25 octobre)  </td><td></td>';



//etape A
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subsubtitle > C. Exploration par les acteurs ';
echo '</h2></td><td width=2.5%></td></tr>';



//etape 7
echo '<tr valign=top><td width=2.5%></td><td>';
?>
Etape C.1: <a href="http://maps.sciencemapping.com/veille/chart.php?periode=104-117&id_concept=1017&nav=thema"> Liste des champs thématiques associés à l'algue verte - période: 12 octobre - 25 octobre</a>
<?
echo '</td><td width=2.5%></td></tr>';



echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      Cliquez sur le champ “Bretagne - politique agricole commune”</td><td></td>';
echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      Cliquez sur l\'onglet réseau social  </td><td></td>';


//etape 8
echo '<tr valign=top><td width=2.5%></td><td>';
?>
Etape C.2: <a href="http://maps.sciencemapping.com/veille/cluster.php?id_cluster=69&periode=104-117&nav=soc&pertinence=25"> Réseau de citation entre les  sources liées au champ thématique “Bretagne - politique agricole commune” : 12 octobre - 25 octobre (seuil de pertinence: médian)</a>
<?
echo '</td><td width=2.5%></td></tr>';



echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      déplacez vous temporellement dans la phylogénie (grâce aux liens période suivante)”</td><td></td>';


echo '<tr><td></td><td>&nbsp;&nbsp;&nbsp;&rarr;      observez l\'évolution conjointe du contenu des champs thématiques et du réseau social associé</td><td></td>';



echo '<tr valign=top><td width=2.5%></td><td>';
?>
Etape C.3: <a href="http://maps.sciencemapping.com/veille/cluster.php?id_cluster=13&periode=111-124&nav=soc&pertinence=25"> Réseau de citation entre les  sources liées au champ thématique “Bretagne - algriculture intensive” : 19 octobre - 1er novembre (seuil de pertinence: médian)</a>,<br>
<a href="http://maps.sciencemapping.com/veille/cluster.php?pertinence=0&id_cluster=13&periode=111-124&nav=phylo">Détail du champ thématique “Bretagne - algriculture intensive” : 19 octobre - 1er novembre</a>, jusqu'au 8 novembre, etc...

<?
echo '</td><td width=2.5%></td></tr>';



//http://maps.sciencemapping.com/veille/cluster.php?id_cluster=13&periode=111-124&nav=soc&pertinence=0






echo '</table>';



include("footer.php");

?>