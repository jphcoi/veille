<?

//$commande_sql_pert = "SELECT id_billet,overlap_size,billet_size,cluster_size from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."' AND overlap_size/cluster_size/log10(10+billet_size-overlap_size)>=".$pertinence.' and overlap_size/cluster_size>0.1 '.' ORDER BY overlap_size/cluster_size/log10(10+billet_size-overlap_size) DESC';
$commande_sql_pert = "SELECT id_billet,overlap_size,billet_size,cluster_size from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."' AND overlap_size/cluster_size>0.1 ORDER BY overlap_size/cluster_size/log10(10+billet_size-overlap_size) DESC";
$res_temp = mysql_query($commande_sql_pert);
$liste_of_posts=array();
$liste_of_size=array();
		
echo '
	<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;">';
echo '<tr style="height:20px;"><td></td></tr>';
echo '<tr><td width=100% style="height:1px;background-color:SlateGray;"></td></tr>';
echo '<tr style="height:10px;"><td></td></tr>';
echo '<tr valign=top>';
echo '<td align=left width=100%>';

/////////////////////////////////////////////	
/////	/////	/////	/////	/////	/////
///// DEBUT DE L'AFFICHAGE DES BILLETS	/////
/////	/////	/////	/////	/////	/////
/////////////////////////////////////////////

echo '<table class=tableitems width=100% cellspacing=0 cellpadding=3>';
echo '<tr>';	
echo '<td align=left style="font-variant:small-caps; font-size:x-small; font-weight:bold;">ENSEMBLE DES BILLETS ASSOCIÉS AU CHAMP AU-DELÀ DU SEUIL DE PERTINENCE</td>';
echo '<td width=5%></td>';

$jscriptmp.='
		var select = $( "#pertinence" );
		var slider = $( "#slider" ).slider({
			min: 1,
			max: 5,
			step: 1,
			value: select[ 0 ].selectedIndex + 1,
			slide: function( event, ui ) {
				select[0].selectedIndex = ui.value - 1;
				PertinenceDisplay(10*ui.value);
			}
		});
		$( "#pertinence" ).change(function() {
			slider.slider( "value", this.selectedIndex + 1);
		});';

echo '<td align=right class=tableitems style="font-size:x-small;">';
echo '<form id="reservation">
	<label for="pertinence">seuil de pertinence:</label>
	<select name="pertinence" id="pertinence" onchange="PertinenceDisplay(this.options[this.selectedIndex].value);">
		<option value=10>minimal (&ge;10%)</option>
		<option value=20>faible (&ge;20%)</option>
		<option value=30 selected>médian (&ge;30%)</option>
		<option value=40>fort (&ge;40%)</option>
		<option value=50>maximal (&ge;50%)</option>
	</select>&nbsp;
	</form>';
echo '</td>';
echo '<td width=100px><div id="slider"></div>';
echo '</td>';


$result=mysql_query($query);
echo "</td>";
echo "</tr>";
echo '</table>';

while ($row = mysql_fetch_array ($res_temp)) {
	$id=$row['id_billet'];
	$overlap=$row['overlap_size'];
	$billetsize=$row['billet_size'];
	$clustersize=$row['cluster_size'];
	
	$liste_of_posts[$id]=$overlap;
	$liste_of_size[$id]=$billetsize;
	$liste_of_pertinences[$id]=$overlap/$clustersize/log10(10+$billetsize-$overlap);
}
	
if (count($liste_of_posts)==0)
{
	echo "<br><b><i>aucun billet pertinent</i></b>";
}
else {
	$nb_termes_list = $liste_of_posts;
	$nb_size_list = $liste_of_size;
	$resultat = extract_permalink(array_keys($liste_of_posts));
	$i=0;
	$info_sources=array();
	while( $row = mysql_fetch_array ($resultat)) {
		$perma=$row['permalink'];
		$site=strip_www($row['site']);
		$site =str_replace('***','; ',$site);
		$id = $row['id'];
		$nb_terme=$nb_termes_list[$id];
		$nb_size=$nb_size_list[$id];
		$idauteur=$row['auteur_id'];
		$concepts=$row['concepts_id'];				
		//echo $concepts;
		$content=str_replace('"','\'',$row['content']);
		if (!array_key_exists($site,$info_sources)) {		
			$info_sources[$site]=array('site'=>$site,'idauteur'=>$idauteur,'permaliens'=>array(),'ids'=>array(),'pertinences'=>array(),'titres'=>array(),'dates'=>array(),'nbtermes'=>array(),'nbsize'=>array(),'content'=>array());
			}
		$info_sources[$site]['permaliens'][]=$perma;
		$info_sources[$site]['ids'][]=$id;
		$info_sources[$site]['pertinences'][]=$liste_of_pertinences[$id];
		$info_sources[$site]['content'][]=$content;
		$info_sources[$site]['titres'][]=clean_text(str_replace('popostrophe',"'",$row['title']));
		if ($type_date=='jour') {
			$info_sources[$site]['dates'][]=adjust_date_jours($row['jours']);
			}
		else {
			$info_sources[$site]['dates'][]=$row['jours'];
			}
		$info_sources[$site]['nbtermes'][]=$nb_terme;
		$info_sources[$site]['nbsize'][]=$nb_size;
		$info_sources[$site]['content'][]=$content;
		$info_sources[$site]['concepts'][]=$concepts;
		$i++;			
		}

	uksort($info_sources,"strcasecmpcam");
	display_billets_plus($info_sources,$list_of_concepts,$my_period,$type_notice);
	echo '<script>PertinenceDisplay(30);</script>';
	}
					
		
/////////////////////////////////////////////	
/////	/////	/////	/////	/////	/////
///// FIN DE L'AFFICHAGE DES BILLETS	/////
/////	/////	/////	/////	/////	/////
/////////////////////////////////////////////

echo '</td>';
echo "</tr>";
echo '</table>';

?>
