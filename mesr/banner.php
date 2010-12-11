<?
echo '<div id="hd"  class="ui-widget">';
echo '<div id="hdb">';
echo ' <div id="htoolbar" class="toolbardiv fg-toolbar ui-widget-header ui-corner-all ui-helper-clearfix">';
echo '                    <div id="title" class="noSelect">';
echo '<table width="100%" style="font-size:x-large; font-weight:bold; color:DarkSlateGray; font-variant:small-caps;"><tr><td align=left>';
echo 'étude MESR';
echo '</td><td align=right style="font-size:medium;">';
echo '<a href=deconnexion.php><i>déconnexion</i></a></td></tr></table>';


if (isset($_GET['periode'])) {
	$periode=$_GET['periode'];
	if (intval($periode)!=-1) $periodstr="?periode=".$periode;
	else $periodestr="";
	}
else $periodstr="";
echo '<table class=tableitems style="font-variant:small-caps;" width="100%"><tr><td><a href=global.php'.$periodstr.'>cartes</a> - <a href=http://chavalarias.free.fr/tinaweb/index.html>phylogénie</a>  - <a href=entree_clusters.php'.$periodstr.'>champs thématiques</a> - <a href=entree_sources.php'.$periodstr.'>sources</a> - <a href=entree_termes.php'.$periodstr.'>termes</a> </td><td style="text-align: right"><a href=commentaires.php>commentaires</a>';
echo '</td></tr></table>';
echo '</div>';
echo '                                    </div>';
echo '                                    </div><!-- End of htoolbar -->';
echo '                                    </div><!-- End of hdb -->';
echo '                                    </div><!-- End of hd -->';
?>
