<?
echo '<div class=banner>';
echo '<table width="100%" style="font-size:x-large; font-weight:bold; color:DarkSlateGray; font-variant:small-caps;"><tr><td align=left>';
echo 'étude MESR';
echo '</td><td align=right style="font-size:medium;">';
echo '<a href=deconnexion.php><i>déconnexion</i></a></td></tr></table>';
echo '</div>';
if (isset($_GET['periode'])) {
	$periode=$_GET['periode']; 
	if (intval($periode)!=-1) $periodstr="?periode=".$periode;
	else $periodestr="";
	}
else $periodstr="";

echo '<table class=tableitems style="font-variant:small-caps;" width="100%"><tr><td><a href=global.php'.$periodstr.'>cartes</a>  -<a href=http://chavalarias.free.fr/tinaweb/index.html>phylogenie</a>  - <a href=entree_clusters.php'.$periodstr.'>champs thématiques</a> - <a href=entree_sources.php'.$periodstr.'>sources</a> - <a href=entree_termes.php'.$periodstr.'>termes</a> </td><td style="text-align: right"><a href=commentaires.php>commentaires</a>';
echo '</td></tr></table>';
?>
