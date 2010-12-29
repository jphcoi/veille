<?
function microtime_float() {
    return array_sum(explode(' ', microtime()));
}

$peroides = explode_period($periode);

		//ancienne version avec slider: on récupérait la valeur depuis le slideer
		//$query="SELECT slider_val FROM  tbl_slider WHERE user='".$_COOKIE['ID_my_site']."'";
		// $result=mysql_query($query);
		// $row=mysql_fetch_array($result);
		// $pertinence = $row['slider_val'];
		// $pertinence =intval($pertinence);
		
		$pertinence = 0;

		//$temps_fin2 = microtime_float();
		//echo '<br><br>on a tourve auteur : '.round(//$temps_fin2 - //$temps_fin1, 4).'<br><br>';

	
	$affichage= 1;

$periodes_brute=retrieve_periods();
$periodes_brute_trans= array_flip($periodes_brute);
$periode_index = $periodes_brute_trans[join($peroides,' ')];

////version sans la sélection sur les bipartis
	// $commande_sql_pert = "SELECT id_billet,overlap_size from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."' AND overlap_size>=2";
	// //echo $commande_sql_pert;
	// $res_temp = mysql_query($commande_sql_pert);
	// while ($row = mysql_fetch_array ($res_temp))
	// {
	// 	$liste_of_posts[$row['id_billet']]=$row['overlap_size'];
	// }
	// if (count($liste_of_posts)==0)
	// {
	// 	$affichage=0;
	// }
	// else
	// {
	// 	$affichage=1;
	// }
	//liste_id_billets est une array avec la liste des billets pertinents minimum
//	$liste_id_billets = array_keys($liste_of_posts);







	//$temps_fin3 = microtime_float();
	//echo '<br><br>les billets les plus pertinents : '.round(//$temps_fin3 - //$temps_fin2, 4).'<br><br>';
	


//$temps_fin4 = microtime_float();
//echo '<br><br>les billets les plus pertinents : '.round(//$temps_fin4 - //$temps_fin3, 4).'<br><br>';
//$temps_fin3=//$temps_fin4;

if ($affichage>0)
{		
$type_lien='cooc';
if ($type_lien=='cooc')
{
		$sql = "SELECT concept1,concept2,cooccurrences from sem_weighted where concept1 in ";
		$sql = $sql."('";
		$sql = $sql.join("','", $list_of_concepts);
		$sql = $sql."')";
		$sql = $sql." AND concept2 in ";
		$sql = $sql."('";
		$sql = $sql.join("','", $list_of_concepts);
		$sql = $sql."')";
		$sql = $sql." and periode = ".$periode_index;
		
		$sql_cooc = mysql_query($sql);
		//$concepts_b = array();
		$liens_from=array();
		$liens_to=array();
		$liens_weight=array();
		while ($rwos=mysql_fetch_array($sql_cooc))
		{
			if ($rwos['concept1']!=$rwos['concept2'])
			{$liens_from[] = $rwos['concept1'];
			$liens_to[] = $rwos['concept2'];
			$liens_weight[] = $rwos['cooccurrences'];
			}
		}
}
else
//on visualise la distance moyenne
{
		$sql = "SELECT term1,term2,force_moy from termneighbour where term1 in ";
		$sql = $sql."('";
		$sql = $sql.join("','", $list_of_concepts);
		$sql = $sql."')";
		$sql = $sql." AND term2 in ";
		$sql = $sql."('";
		$sql = $sql.join("','", $list_of_concepts);
		$sql = $sql."')";
		//$sql = $sql."and direction=0";

		$sql_cooc = mysql_query($sql);
		//$concepts_b = array();
		$liens_from=array();
		$liens_to=array();
		$liens_weight=array();
		while ($rwos=mysql_fetch_array($sql_cooc))
		{
			if ($rwos['term1']!=$rwos['term2'])
			{$liens_from[] = $rwos['term1'];
			$liens_to[] = $rwos['term2'];
			$liens_weight[] = intval(floatval($rwos['force_moy'])*100.);
			}
		}
}
		

$aut_occ=array();
foreach($list_of_concepts as $id_concept)
{
	//$temps_fin4 = microtime_float();
	//echo '<br><br>calcul des occurences dun terme  : '.round(//$temps_fin4 - //$temps_fin3, 4).'<br><br>';
	//$temps_fin3=//$temps_fin4;
$sql = 'SELECT COUNT(id_b) FROM socsem WHERE concept='.$id_concept;
$sql =$sql.' AND jours<='.$peroides['to']." AND jours>=".strval(intval($peroides['from']));
$resultat=mysql_query($sql);
while ($ligne=mysql_fetch_array($resultat))
{
	$aut_occ[$id_concept]=$ligne[0];
}
}
//Toute cette partie ci-dessus pourra être remplacée par les données déjà chargée via sem_weighted ci-dessus pour plus de concision.
//Pour le moment un petit bug dans le remplissage de sem_weighted rend l'opération encore délicate
//print_r($aut_occ);
$legende=$list_of_concepts_simple;
$liste_auteur_unique=$list_of_concepts;


// DEFINITION DU RESEAU POUR AFFICHAGE JAVASCRIPT
	
	include("include/network-def-cooc.php");
			
// DEFINITION DU SCRIPT JAVASCRIPT POUR AFFICHER LE RESEAU
	
	include("include/network-vis.php");

}
	
///////FIN DES CALCULS FICHIERS JSON DU RESEAU SOCIAL ECRIT




	// PORTION CONCERNANT L'AFFICHAGE DU RESEAU SOCIAL
	
	echo '<p>';
	if ($affichage>0)
	{
		echo '<script src="AC_OETags.js" language="javascript"></script>';
	}
	
	if ($ecart_pred==1 || $nopred) $back_avant='background-color:white;';
	if ($ecart_succ==1 || $nosucc) $back_apres='background-color:white;';

	echo "\n";
	echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;"><tr>';
	echo '<td align=center width=10% style="font-variant:small-caps; font-weight:bold; '.$back_avant.'">';
	if (!$nopred)
		echo '<i>période antérieure</i><div class=commentitems style="font-weight:normal; font-variant:normal; font-size:xx-small;"><i>('.get_string_periode(arrange_periode($max_periode_avant)).')</i></div>';
	else echo '<i style="font-variant:small-caps; background-color:white;">(pas de prédécesseur)</i>';
	echo '</td>';
	echo '<td align=center width=80%><i><b>RÉSEAU DE COOCCURRENCE</b><br>PÉRIODE ACTUELLE</i> <i style="font-variant:normal; font-size:xx-small;">('.get_string_periode($my_period).')</i></td>';
		
	echo '<td align=center width=10% style="font-variant:small-caps; font-weight:bold; '.$back_apres.'">';
	if (!$nosucc) 
		echo '<i>période ultérieure</i><div class=commentitems style="font-weight:normal; font-variant:normal; font-size:xx-small;"><i>('.get_string_periode(arrange_periode($min_periode_apres)).')</i></div>';
	else	
		echo '<i style="font-variant:small-caps;">(pas de successeur)</i>';
	echo '</td>';
	echo "</tr>";


	echo "<tr>";
	//on affiche les clusters précédents et un lien vers leur réseau social
	echo '<td align=center width=10% style="'.$back_avant.'"><i>';
	echo '<table class=commentitems align=center width=100% cellspacing=0 cellpadding=5 rules=rows style="font-variant:small-caps; size:small; font-style:italic;">';
	foreach ($pred as $p) {
		$label1=$p['label1'];
		$label2=$p['label2'];
		echo '<tr>';
		echo '<td>';
		echo '<a href=cluster.php?id_cluster='.$p['id']."&periode=".arrange_periode($p['periode']).'&nav=cooc>';
		$past = intval($p['pere']);
		if ($past>0)
		{
			echo '&uarr';
		}
		
		echo '"<b>'.$dico_termes[$label1].'</b> - '.$dico_termes[$label2].'"';
		echo '</a><br>';
//		selective_column($arraykey,$p['termes'],$p['plus'],$p['minus'],0);
		echo '</td>';
		echo '</tr>';

		}
		echo '</table>';

	echo "</td>";
	
	
	echo '<td align=middle width=80%><i>';

	if ($affichage>0)
		echo $myscript;
	else
		echo "pas de sources";	

	echo "</i></td>";
	echo '<td align=right width=10% style="'.$back_apres.'">';
	
	echo '<table class=commentitems align=center width=100% cellspacing=0  cellpadding=5 rules=rows style="font-variant:small-caps; size:small; font-style:italic;">';
	foreach ($succ as $s) {
		$label1=$s['label1'];
		$label2=$s['label2'];
		$futur = intval($s['fils']);
		
		echo '<tr>';
		echo '<td>';
		echo '<a href=cluster.php?id_cluster='.$s['id']."&periode=".arrange_periode($s['periode']).'&nav=cooc>';
		echo '"<b>'.$dico_termes[$label1].'</b> - '.$dico_termes[$label2].'"';
			if ($futur>0)
			{
				echo '&darr';
			}
		echo '</a><br>';
		echo '</td>';
		echo '</tr>';

		}
	echo '</table>';
	
	echo "</td>";
	echo "</tr>";
	echo "<tr>";
	echo "<td>";
	echo "</td>";
	echo "<td>"
	?>


	<?
	echo "</td>";
	echo "<td>";
	echo "</td>";
	echo "</tr>";

	echo '</table>';?>
	
	
	
	
	<?
		// echo '<table width=100%><tr valign=top>';
		// 
		// echo "<td width=10%></td>";
		// echo "<td align=right class=tableitems><i>nombre de cooccurrences minimum: ".$pertinence."</i>";
		// 
		// $old_url  =$_SERVER['REQUEST_URI'];
		// $old_urlv = explode($racine.'/',$old_url);
		// if (count($old_urlv)>0)
		// 	{$old_url = $old_urlv[1];}
		// $old_urls = explode('&old_pertinence=',$old_url);
		// $new_url=$old_urls[0].'&old_pertinence='.$pertinence;
		// 
		// $modifer='<input type="button" name="refresh" value="Modifier" onclick="location.replace(\''.$new_url.'\');">'; 
		// 

		?>
			<!-- </td>

			<td align=left valign=top>

			<DIV class=carpe_slider_group>
			 <DIV class=carpe_horizontal_slider_display_combo>
			  <DIV class=carpe_slider_display_holder>
				!>
			   <!-- Default value: 0 -->
			   <!--
				<input name="Input" class=carpe_slider_display id="display1" alue="<?=$row['slider_val']?>" />
			  </DIV>
			 <DIV class=carpe_horizontal_slider_track>
			 <DIV class=carpe_slider_slit></DIV>
			 <DIV class=carpe_slider id=slider1 display="display1" tyle="left:<?=$row['slider_val']?>px"></DIV>
			</DIV>
			</DIV>
			<DIV class=carpe_horizontal_slider_display_combo></DIV>
			<DIV class=carpe_horizontal_slider_display_combo></DIV>
			<DIV class=carpe_horizontal_slider_display_combo></DIV>
			</DIV> -->


			<?
			?>



		<?
		// echo $modifer;
		// 
		// $result=mysql_query($query);
		// echo "</td>";
		// echo "<td width=10%></td>";
		// echo "</tr>";
		// echo '</table>';
		
	
		
