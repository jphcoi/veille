<?php
function left_panel($p,$pred,$nopred,$backdarker,$backdark){
// PANEL DE GAUCHE dans cluster.php: PERIODES PRECEDENTES

if ($nopred) $back_avant='background-color:'.$backdarker.';';
echo '<td width=22% class=tableitems style="font-variant:small-caps; size:xxx-small; font-style:italic;'.$back_avant.'">';
if ($nopred) echo '<div align=center class="ui-widget-last" style="font-style:normal;">
<hb>Caractéristiques du champ thématique</b>
<ul>
<li type=circle>Popularité maximale <span style="font-size: x-small;" >('.get_short_string_periode(str_replace(' ', '-',$partition_infos['periodWithMaxScore'])).')</span> : '.$linkstar.
'<li type=circle>Extention : du <span style="font-size: x-small;" >'.get_date_since($partition_infos['first_period']).'</span> au <span style="font-size: x-small;" >'.get_date_since($partition_infos['last_period']).'</span>'.
'<li type=circle>'.$partition_infos['nb_period_covered'].' périodes couvertes,'.
'<li type=circle>'.$partition_infos['nb_fields'].'  champs thématiques au total, '.
'<li type=circle>'.$partition_infos['nb_terms'].' termes utilisés.'.
'</ul>
</div>';
else {
	if (count($pred)>1) $plural_string="s"; else $plural_string="";
	echo '<span align=left style="font-weight:bold; font-style:normal;">&nbsp;champ'.$plural_string.' antérieur'.$plural_string.'</span><div style="height:4px;"></div>';
	echo '<table width=100% cellspacing=0 cellpadding=0>';
	echo '<tr width=100% class=commentitems style="font-variant:small-caps; background-color:'.$backdark.';"><td width=5px></td><td>période</td><td></td><td>champ</td></tr>';
	$last_display_periode="";
	foreach ($pred as $p) display_cluster_title($p,"pred");
	echo '</table>';
	}
echo '</td>';
}

function right_panel($s,$succ,$nosucc,$backdarker,$backdark){
// PANEL DE DROITE: PERIODES SUIVANTES DANS CLUSTER.php
global $linkstar;
global $partition_infos;
if ($nosucc) $back_apres='background-color:'.$backdarker.';';
echo '<td width=22% class=tableitems style="font-variant:small-caps; size:xxx-small; font-style:italic">';
if ($nosucc) echo '<div align=center  class="ui-widget-last"  style="font-style:normal;">
<hb>Caractéristiques du champ thématique</b>
<ul>
<li type=circle>Popularité maximale <span style="font-size: x-small;" >('.get_short_string_periode(str_replace(' ', '-',$partition_infos['periodWithMaxScore'])).')</span> : '.$linkstar.
'<li type=circle>Extention : du <span style="font-size: x-small;" >'.get_date_since($partition_infos['first_period']).'</span> au <span style="font-size: x-small;" >'.get_date_since($partition_infos['last_period']).'</span>'.
'<li type=circle>'.$partition_infos['nb_period_covered'].' périodes couvertes,'.
'<li type=circle>'.$partition_infos['nb_fields'].'  champs thématiques au total, '.
'<li type=circle>'.$partition_infos['nb_terms'].' termes utilisés.'.
'</ul>

</div>';
else {
	if (count($succ)>1) $plural_string="s"; else $plural_string="";
	echo '<span align=left style="font-weight:bold; font-style:normal;">&nbsp;champ'.$plural_string.' ultérieur'.$plural_string.'</span><div style="height:4px;"></div>';
	echo '<table width=100% cellspacing=0 cellpadding=0>';
	echo '<tr class=commentitems style="font-variant:small-caps; background-color:'.$backdark.';"><td width=5px></td><td>période</td><td></td><td>champ</td></tr>';
	$last_display_periode="";
	foreach ($succ as $s)
		display_cluster_title($s,"succ");
	echo '</table>';
	}
echo '</td>';
}
?>
