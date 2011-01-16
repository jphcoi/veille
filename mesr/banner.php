<?

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
     case 'phyloTab2.php':
		$page = 'fils';
        break;
     case 'phyloTab3.php':
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

echo '<div id="hd"  class="ui-widget">
	<div id="hdb">
	<div id="htoolbar" class="toolbardiv fg-toolbar ui-widget-header ui-corner-all ui-helper-clearfix">
	<div id="title" class="noSelect" style="margin-left:5px; margin-right:5px;">
	<table width="100%" style="font-size:x-large; font-weight:bold; color:DarkSlateGray; font-variant:small-caps;">
	<tr>
	<td align=left>Veille dynamique "Santé-Environnement" -  MESR</td>
	<td align=right style="font-size:medium;">';
echo'<a href=aide.php?selectedTab=1>';
if ($page=="aide") echo '<span><button>'; else echo '<span>';
echo '&nbsp;aide&nbsp;';
echo '<img src="images/question-mark.gif" border=0>&nbsp;</a>';
if ($page=="aide") echo '</button><span>'; else echo '</span>';

echo '<a href=deconnexion.php>&nbsp; <img src=images/logout.jpg width=12 border=0 alt="déconnexion"></a></td>
	</tr>
	</table>';

echo '<table class=tableitems style="font-variant:small-caps;" width="100%"><tr><td>';
echo '<a href=phylo.php>';
if ($page=="fils") {
    echo '<span><button>fils thématiques&nbsp;</button></span>';
}else{
    echo '<span>&nbsp;fils thématiques&nbsp;</span>';
}
echo '</a> &nbsp; ';
echo '<a href=global.php'.$periodstr.'><span';
if ($page=="carte") {
    echo '<span><button>cartes&nbsp;</button></span>';
}else{
    echo '<span>&nbsp;cartes&nbsp;</span>';
}
echo '</a> &nbsp; ';
echo '<a href=entree_clusters.php'.$periodstr.'><span';
if ($page=="champs"){
    echo '<span><button>champs thématiques&nbsp;</button></span>';
}else{
    echo '<span>&nbsp;champs thématiques&nbsp;</span>';
}
echo '</a> &nbsp; ';
echo '<a href=entree_sources.php'.$periodstr.'><span';
if ($page=="sources"){
    echo '<span><button>sources&nbsp;</button></span>';
}else{
    echo '<span>&nbsp;sources&nbsp;</span>';
}
echo ' </a> &nbsp; ';
echo '<a href=entree_termes.php'.$periodstr.'><span';
if ($page=="termes"){
    echo '<span><button>termes&nbsp;</button></span>';
}else{
    echo '<span>&nbsp;termes&nbsp;</span>';
}
echo '</a>';
echo '</td><td style="text-align: right;">';
echo '<a href=commentaires.php><span';
if ($page=="commentaires") {
    echo '<span><button>commentaires&nbsp;</button></span>';
}else{
    echo '<span>&nbsp;commentaires&nbsp;</span>';
}
echo '</a>';
echo '</td>
	</tr>
	</table>';
echo '</div>';
echo '</div>';
echo '</div><!-- End of htoolbar -->';
echo '</div><!-- End of hdb -->';
echo '</div><!-- End of hd -->';
?>
