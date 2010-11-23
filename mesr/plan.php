<html>
<head>
<title>MESR / Veille Dynamique v0.1</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" title="Default" type="text/css" href="style.css" media="screen"/>
<meta name="author" content="CCR"/>
</head>
<body>

<?
//connexion a la base de donnees
include("banner.php");


echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>plan du site</h2>';

echo "<ul>";
echo '<li><a href="global.php">Carte générale des agrégats sémantiques</a>';
echo "<ul><li><a href=cible.php>Positionnement particulier d'un blog</a></li>";
echo "<li><a href=chart.php>Activité liée à un terme</a></li>";
echo '</ul></li>';
echo '<li><a href="entree_termes.php">Liste générale des termes</a></li>';
echo '<li><a href="entree_sources.php">Liste générale des sources</a></li>';
echo "</ul>";

echo '</td><td width=2.5%></td></tr></table>';

echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td width=95%><h2 class=subtitle>(storyboard à notre usage)</h2>';
echo "<img width=100% align=center src=storyboard.jpg></img>";
echo "</td><td width=2.5%></td></tr></table>";

include("footer.php");
?>

</body>
</html>
