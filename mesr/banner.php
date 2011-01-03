<?
echo '<div id="hd"  class="ui-widget">
	<div id="hdb">
	<div id="htoolbar" class="toolbardiv fg-toolbar ui-widget-header ui-corner-all ui-helper-clearfix">
	<div id="title" class="noSelect" style="margin-left:5px; margin-right:5px;">
	<table width="100%" style="font-size:x-large; font-weight:bold; color:DarkSlateGray; font-variant:small-caps;">
	<tr>
	<td align=left>étude MESR</td>
	<td align=right style="font-size:medium;"><a href=deconnexion.php><i>déconnexion</i></a></td>
	</tr>
	</table>';

if (isset($_GET['periode'])) {
	$periode=$_GET['periode'];
	if (intval($periode)!=-1) $periodstr="?periode=".$periode;
	else $periodestr="";
	}
else $periodstr="";
$page_current_v =  explode('/',$_SERVER['PHP_SELF']);
$page_current =  $page_current_v[count($page_current_v)-1];
switch ($page_current) {
    case 'phylo.php':
		$page = 'fils';
        break;

    case 'global.php':
        $page = 'carte';
        break;

    case 'entree_clusters.php':
		$page = 'champs';
        break;
    case 'cluster.php':
		$page = 'champs';
        break;

    case 'entree_sources.php':
		$page = 'sources';
        break;
    case 'source.php':
		$page = 'sources';
        break;

    case 'entree_termes.php':
		$page = 'termes';
        break;
    case 'chart.php':
        $page = 'termes';
        break;

    case 'aide.php':
        $page = 'aide';
        break;

	case 'commentaires.php';
		$page = 'commentaires';
		break;

}
echo '<table class=tableitems style="font-variant:small-caps;" width="100%"><tr><td>';
echo '<a href=phylo.php>';
if ($page=="fils") echo "<b>fils thématiques</b>"; else echo "fils thématiques";
echo '</a> - <a href=global.php'.$periodstr.'>';
 if ($page=="carte") echo "<b>cartes</b>"; else echo "cartes";
echo '</a> - <a href=entree_clusters.php'.$periodstr.'>';
if ($page=="champs") echo "<b>champs thématiques</b>"; else echo "champs thématiques";
echo '</a> - <a href=entree_sources.php'.$periodstr.'>';
if ($page=="sources") echo "<b>sources</b>"; else echo "sources";
echo '</a> - <a href=entree_termes.php'.$periodstr.'>';
if ($page=="termes") echo "<b>termes</b>"; else echo "termes";
echo '</a>';
echo '</td><td style="text-align: right;">';
echo '<a href=commentaires.php>';
if ($page=="commentaires") echo "<b>commentaires</b>"; else echo "commentaires";
echo '</a> - <a href=aide.php'.'>';
if ($page=="aide") echo "<b>aide</b>"; else echo "aide";
echo ' <img src="images/question-mark-transparent.gif" border=0></a>';
echo '</td>
	</tr>
	</table>';
echo '</div>';
echo '</div>';
echo '</div><!-- End of htoolbar -->';
echo '</div><!-- End of hdb -->';
echo '</div><!-- End of hd -->';
?>
