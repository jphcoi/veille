<?
function microtime_float() {
    return array_sum(explode(' ', microtime()));
}

$peroides = explode_period($periode);

		//$temps_fin1 = microtime_float();
		
		$query="SELECT slider_val FROM  tbl_slider WHERE user='".$_COOKIE['ID_my_site']."'";
//		echo $query;
		$result=mysql_query($query);
		$row=mysql_fetch_array($result);
		$pertinence = $row['slider_val'];
	//	echo '<br> pertinence '.$pertinence.'<br>';
		$pertinence =intval($pertinence);

		//$temps_fin2 = microtime_float();
		//echo '<br><br>on a tourve auteur : '.round(//$temps_fin2 - //$temps_fin1, 4).'<br><br>';

	
	$affichage= 1;


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




	$liens_from=array();
	$liens_to=array();



	//$temps_fin3 = microtime_float();
	//echo '<br><br>les billets les plus pertinents : '.round(//$temps_fin3 - //$temps_fin2, 4).'<br><br>';
	


//$temps_fin4 = microtime_float();
//echo '<br><br>les billets les plus pertinents : '.round(//$temps_fin4 - //$temps_fin3, 4).'<br><br>';
//$temps_fin3=//$temps_fin4;

if ($affichage>0)
{		

	
		// $sql = "SELECT concept1,concept2 from sem where id_b=";
		// 	for( $i = 0 ; $i < count($liste_id_billets) ; $i++ )
		// 	{
		// 		$sql=$sql.' '.$liste_id_billets[$i];
		// 		if ($i < count($liste_id_billets)-1)
		// 		{
		// 			$sql=$sql.' OR id_b = ';			
		// 		}
		// 	}
		// 	echo $sql;
		// 	$sql_id=$sql;
		// 
		$sql = "SELECT concept1,concept2 from sem where (concept1=";
		for( $i = 0 ; $i < count($list_of_concepts) ; $i++ )
		{
			$sql=$sql.' '.$list_of_concepts[$i];
			if ($i < count($list_of_concepts)-1)
			{
				$sql=$sql.' OR concept1 = ';			
			}
		}
		$sql=$sql.') AND (concept2 =';
		for( $i = 0 ; $i < count($list_of_concepts) ; $i++ )
		{
			$sql=$sql.' '.$list_of_concepts[$i];
			if ($i < count($list_of_concepts)-1)
			{
				$sql=$sql.' OR concept2 = ';			
			}
		}
		$sql = $sql.')';
		$sql =$sql.' AND jours<='.$peroides['to']." AND jours>=".strval(intval($peroides['from']));
		//echo $sql;
		
		
		$sql_cooc = mysql_query($sql);
		$concepts_b = array();
		while ($rwos=mysql_fetch_array($sql_cooc))
		{
			if (in_array($rwos['concept1'],$list_of_concepts) and in_array($rwos['concept2'],$list_of_concepts) )
			{$liens_from[] = $rwos['concept1'];
			$liens_to[] = $rwos['concept2'];}
		}

			// foreach($liste_id_billets as $id_bil)
			// 		{
			// 			$sql = "SELECT * from socsem where id_b=". $id_bil;
			// 			
			// 			$sql_cooc = mysql_query($sql);
			// 			$concepts_b = array();
			// 			while ($rwos=mysql_fetch_array($sql_cooc))
			// 			{
			// 				if (in_array($rwos['concept'],$list_of_concepts) and !in_array($rwos['concept'],$concepts_b) )
			// 				{$concepts_b[] = $rwos['concept'];}
			// 			}
			// 			foreach($concepts_b as $c1)
			// 			{
			// 				foreach($concepts_b as $c2)
			// 				{
			// 					if ($c1 != $c2)
			// 					{
			// 						$liens_from[]=$c1;
			// 						$liens_to[]=$c2;
			// 					}
			// 				}
			// 			}
			// 		}
				
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

$legende=$list_of_concepts_simple;
$liste_auteur_unique=$list_of_concepts;


// DEFINITION DU RESEAU POUR AFFICHAGE JAVASCRIPT
	
include("include/network-def.php");
			
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
	//affichage de l'appli flex

	echo "\n";
	echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;"><tr>';
	echo "<td align=center width=10%><i>PÉRIODE ANTÉRIEURE</i>&nbsp;&nbsp;</td>";
	echo "<td align=center width=80%><i><b>RÉSEAU DE COOCCURRENCE</b><br>PÉRIODE ACTUELLE</i></td>";
	echo "<td align=center width=10%><i>PÉRIODE ULTÉRIEURE</i></td>";
	echo "</tr>";


	echo "<tr>";
	//on affiche les clusters précédents et un lien vers leur réseau social
	echo "<td align=center width=10%><i>";
	if ($nopred) echo '<b style="font-variant:small-caps;">(pas de prédécesseur)</b>';
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
	
	
	
	echo "<td align=middle width=80%><i>";	
	if ($affichage>0)
	{
			echo $myscript;

	// 
// 	
// 		echo '<script language="JavaScript" type="text/javascript">';
// 		echo '<!--
// 			
// 		var requiredMajorVersion = 9;
// 		var requiredMinorVersion = 0;
// 		var requiredRevision = 124;
// 		// -->
// 		</script>';
// 	
// 	echo '<script language="JavaScript" type="text/javascript">
// 		<!--
// 		// Version check for the Flash Player that has the ability to start Player 	Product Install (6.0r65)
// 		var hasProductInstall = DetectFlashVer(6, 0, 65);
// 	
// 		// Version check based upon the values defined in globals
// 		var hasRequestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
// 	
// 		if ( hasProductInstall && !hasRequestedVersion ) {
// 			// DO NOT MODIFY THE FOLLOWING FOUR LINES
// 			// Location visited after installation is complete if installation is required
// 			var MMPlayerType = (isIE == true) ? "ActiveX" : "PlugIn";
// 			var MMredirectURL = window.location;
// 			document.title = document.title.slice(0, 47) + " - Flash Player Installation";
// 			var MMdoctitle = document.title;
// 	
// 			AC_FL_RunContent(
// 				"src", "playerProductInstall",
// 				"FlashVars", "serverURL='.$tmpfile.'",
// 				"width", "100%",
// 				"height", "600px",
// 				"align", "middle",
// 				"id", "SitePoint_DataViz_Tutorial_Part3_cooc",
// 				"quality", "high",
// 				"bgcolor", "#869ca7",
// 				"name", "SitePoint_DataViz_Tutorial_Part3_cooc",
// 				"allowScriptAccess","sameDomain",
// 				"type", "application/x-shockwave-flash",
// 				"pluginspage", "http://www.adobe.com/go/getflashplayer"
// 			);
// 		} else if (hasRequestedVersion) {
// 			// if we have detected an acceptable version
// 			// embed the Flash Content SWF when all tests are passed
// 			AC_FL_RunContent(
// 					"src", "SitePoint_DataViz_Tutorial_Part3_cooc",
// 					"FlashVars", "serverURL='.$tmpfile.'",
// 					"width", "100%",
// 					"height", "600px",
// 					"align", "middle",
// 					"id", "SitePoint_DataViz_Tutorial_Part3_cooc",
// 					"quality", "high",
// 					"bgcolor", "#869ca7",
// 					"name", "SitePoint_DataViz_Tutorial_Part3_cooc",
// 					"allowScriptAccess","sameDomain",
// 					"type", "application/x-shockwave-flash",
// 					"pluginspage", "http://www.adobe.com/go/getflashplayer"
// 			);
// 		  } else {  // flash is too old or we cannot detect the plugin
// 			var alternateContent = //"Alternate HTML content should be placed here. "+
// 			"This content requires the Adobe Flash Player. "
// 			+ "<a href=http://www.adobe.com/go/getflash/>Get Flash</a>";
// 			document.write(alternateContent);  // insert non-flash content
// 		  }
// 		// -->
// 		</script>';
	
	}
	else
	{
		echo "pas de sources";
	}
	
	
	

		echo "</i></td>";
		echo "<td align=right width=10%>";
		
		if ($nosucc) echo '<b style="font-variant:small-caps;">(pas de successeur)</b>';

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
		echo '<table width=100%><tr valign=top>';
		
		echo "<td width=10%></td>";
		echo "<td align=right class=tableitems><i>nombre de cooccurrences minimum: ".$pertinence."</i>";

		$old_url  =$_SERVER['REQUEST_URI'];
		$old_urlv = explode($racine.'/',$old_url);
		if (count($old_urlv)>0)
			{$old_url = $old_urlv[1];}
		$old_urls = explode('&old_pertinence=',$old_url);
		$new_url=$old_urls[0].'&old_pertinence='.$pertinence;

		$modifer='<input type="button" name="refresh" value="Modifier" onclick="location.replace(\''.$new_url.'\');">'; 


		?>
			</td>

			<td align=left valign=top>

			<DIV class=carpe_slider_group>
			 <DIV class=carpe_horizontal_slider_display_combo>
			  <DIV class=carpe_slider_display_holder>
			   <!-- Default value: 0 -->
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
			</DIV>


			<?
			?>



		<?
		echo $modifer;

		$result=mysql_query($query);
		echo "</td>";
		echo "<td width=10%></td>";
		echo "</tr>";
		echo '</table>';
		
	
		
