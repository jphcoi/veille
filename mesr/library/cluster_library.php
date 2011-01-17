<?php
function left_panel($p,$pred,$nopred,$backdarker,$backdark){
// PANEL DE GAUCHE dans cluster.php: PERIODES PRECEDENTES
global $linkstar;
global $partition_infos;
if ($nopred) $back_avant='background-color:'.$backdarker.';';
echo '<td width=22% class=tableitems style="font-variant:small-caps; size:xxx-small; font-style:italic;">';
if ($nopred&&($partition_infos[nb_period_covered]>1)){
    echo '<div align=center class="ui-widget-last" style="font-style:normal;">
<b>Caractéristiques du champ thématique</b>
<ul>
<li type=circle>Popularité maximale '.$linkstar.'<br/><span style="font-size: x-small;" >('.get_short_string_periode(str_replace(' ', '-',$partition_infos['periodWithMaxScore'])).')</span> '.
'<li type=circle>Extention : du <span style="font-size: x-small;" >'.get_date_since($partition_infos['first_period']).'</span> au <span style="font-size: x-small;" >'.get_date_since($partition_infos['last_period']).'</span>'.
'<li type=circle>'.$partition_infos['nb_period_covered'].' périodes couvertes,'.
'<li type=circle>'.$partition_infos['nb_fields'].'  champs thématiques au total, '.
'<li type=circle>'.$partition_infos['nb_terms'].' termes utilisés.'.
'</ul>
</div>';}elseif($partition_infos[nb_period_covered]==1){
   echo '<div align=center class="ui-widget-last" style="font-style:normal;">
<center>
<br/>
<br/>
<b>*</b><br/>
<b>**</b><br/>
<b>***</b><br/>
<b>Ce champ est isolé</b><br/>
<b>***</b><br/>
<b>**</b><br/>
<b>*</b><br/>
<br/>
<br/>

</div>';
}else {
	if (count($pred)>1) $plural_string="s"; else $plural_string="";
	echo '<span align=left style="font-weight:bold; font-style:normal;">&nbsp;champ'.$plural_string.' antérieur'.$plural_string.'</span><div style="height:4px;"></div>';
	echo '<table width=100% cellspacing=0 cellpadding=0>';
	echo '<tr width=100% class=ui-widget-period-header><td width=5px></td><td>période</td><td></td><td>champ</td></tr>';
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
if ($nosucc&&($partition_infos[nb_period_covered]>1)) echo '<div align=center  class="ui-widget-last"  style="font-style:normal;">
<b>Caractéristiques du champ thématique</b>
<ul>
<li type=circle>Popularité maximale '.$linkstar.'<br/><span style="font-size: x-small;" >('.get_short_string_periode(str_replace(' ', '-',$partition_infos['periodWithMaxScore'])).')</span> '.
'<li type=circle>Extention : du <span style="font-size: x-small;" >'.get_date_since($partition_infos['first_period']).'</span> au <span style="font-size: x-small;" >'.get_date_since($partition_infos['last_period']).'</span>'.
'<li type=circle>'.$partition_infos['nb_period_covered'].' périodes couvertes,'.
'<li type=circle>'.$partition_infos['nb_fields'].'  champs thématiques au total, '.
'<li type=circle>'.$partition_infos['nb_terms'].' termes utilisés.'.
'</ul>

</div>';
elseif($partition_infos[nb_period_covered]==1){
   echo '<div align=center class="ui-widget-last" style="font-style:normal;">
<center>
<br/>
<br/>
<b>*</b><br/>
<b>**</b><br/>
<b>***</b><br/>
<b>Ce champ est isolé</b><br/>
<b>***</b><br/>
<b>**</b><br/>
<b>*</b><br/>
<br/>
<br/>

</div>';
}else {
	if (count($succ)>1) $plural_string="s"; else $plural_string="";
	echo '<span align=left style="font-weight:bold; font-style:normal;">&nbsp;champ'.$plural_string.' ultérieur'.$plural_string.'</span><div style="height:4px;"></div>';
	echo '<table width=100% cellspacing=0 cellpadding=0>';
	echo '<tr class=ui-widget-period-header><td width=5px></td><td>période</td><td></td><td>champ</td></tr>';
	$last_display_periode="";
	foreach ($succ as $s)
		display_cluster_title($s,"succ");
	echo '</table>';
	}
echo '</td>';
}
?>
