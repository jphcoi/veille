<script src="slider.js" language="javascript" type="text/javascript"></script>
<script language="javascript" type="text/javascript">
function setSliderVal(value)
{
	xmlHttp=getXMLHTTP();
	if (xmlHttp==null)
 	 {
 	 	alert ("Your browser does not support AJAX!");
 		return;
 	 }
	
	xmlHttp.onreadystatechange=function() 
	{
	  if (req.readyState == 4) { // only if "OK"
		if (req.status == 200) {						
			//dont do any thing here we just need to save the valued in the database				
		} else {
			alert("There was a problem while using XMLHTTP:\n" + req.statusText);
				}
		}				
	}
	var queryString = "?sliderval=" + value.substring(0,value.length-2); //stripping last two letter which is px 				
	xmlHttp.open("GET","AJAX4Slider.php"+queryString,true);
	xmlHttp.send(null);
	
}

function getXMLHTTP() { //fuction to return the xml http object
		var xmlhttp=false;	
		try{
			xmlhttp=new XMLHttpRequest();
		}
		catch(e)	{		
			try{			
				xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				try{
				req = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e1){
					xmlhttp=false;
				}
			}
		}
		 	
		return xmlhttp;
	}
	
	function Lien() {
		i = document.Choix.Liste.selectedIndex;
		if (i == 0) return;
		url = document.Choix.Liste.options[i].value;
		parent.location.href = url;
	}
	
</script>
<link href="slider.css" rel="stylesheet" type="text/css" />

<?

		$query="SELECT slider_val FROM  tbl_slider WHERE user='".$_COOKIE['ID_my_site']."'";
	//	echo $query;
		$result=mysql_query($query);
		$row=mysql_fetch_array($result);
		$pertinence = $row['slider_val'];
	//	echo '<br> pertinence '.$pertinence.'<br>';
		$pertinence =intval($pertinence);


	
		$peroides = explode_period($periode);
	$liste_of_posts= array();
	$commande_sql_pert = "SELECT id_b from socsem where concept = ".$id_concept; 
		$commande_sql_pert =$commande_sql_pert.' AND jours<='.$peroides['to']." AND jours>=".strval(intval($peroides['from']));
	
	
	$res_temp = mysql_query($commande_sql_pert);
	while ($row = mysql_fetch_array ($res_temp))
	{
		$liste_of_posts[$row['id_b']]=2;
	}

	if (count($liste_of_posts)==0)
	{
		$affichage=0;
	}
	else
	{
		$affichage=1;
	}
echo 	$commande_sql_pert;
//liste_id_billets est une array avec la liste des billets pertinents minimum
print_r($liste_of_posts);
$liste_id_billets = array_keys($liste_of_posts);
$liens_from=array();
$liens_to=array();
$list_of_concepts=array();
$list_of_concepts_simple=array();
if ($affichage>0)
{		
			foreach($liste_id_billets as $id_bil)
			{
				$sql = "SELECT * from socsem where id_b=". $id_bil;
				$sql_cooc = mysql_query($sql);
				$concepts_b = array();
				while ($rwos=mysql_fetch_array($sql_cooc))
				{
					//if (in_array($rwos['concept'],$list_of_concepts))
					{$concepts_b[] = $rwos['concept'];}
					if (!in_array($rwos['concept'],$list_of_concepts))
					{
						$list_of_concepts[]=$rwos['concept'];
						$list_of_concepts_simple[]=$dico_termes[$rwos['concept']];
					}
					
				}
				foreach($concepts_b as $c1)
				{
					foreach($concepts_b as $c2)
					{
						if ($c1 != $c2)
						{
							$liens_from[]=$c1;
							$liens_to[]=$c2;
						}
					}
				}
			}
				

//on calcule le nombre d'occurrences de chaque terme.
$aut_occ=array();
foreach($list_of_concepts as $id_concept)
{
$sql = 'SELECT COUNT(id_b) FROM socsem WHERE concept='.$id_concept;
$peroides = explode_period($periode);
$sql =$sql.' AND jours<='.$peroides['to']." AND jours>=".strval(intval($peroides['from']));
$resultat=mysql_query($sql);
while ($ligne=mysql_fetch_array($resultat))
{
	$aut_occ[$id_concept]=$ligne[0];
}
}

$legende=array_unique($list_of_concepts_simple);
$liste_auteur_unique=array_unique($list_of_concepts);



$tmpfile= 	
ecrire_json_cooc($liste_auteur_unique,$legende,$aut_occ,$liens_from,$liens_to,$pertinence);
}
	
///////FIN DES CALCULS FICHIERS JSON DU RESEAU SOCIAL ECRIT




	// PORTION CONCERNANT L'AFFICHAGE EN FLEX DU RESEAU SOCIAL
	
	echo '<p>';
	if ($affichage>0)
	{
		echo '<script src="AC_OETags.js" language="javascript"></script>';
	}
	//affichage de l'appli flex

	echo "\n";
	echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;"><tr>';
	echo "<td align=center width=10%><i>PÉRIODE PRÉCÉDENTE</i>&nbsp;&nbsp;</td>";
	echo "<td align=center width=80%><i><b>RÉSEAU DE COOCCURRENCE</b><br>PÉRIODE ACTUELLE</i></td>";
	echo "<td align=center width=10%><i>PÉRIODE SUIVANTE</i></td>";
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
		echo '<script language="JavaScript" type="text/javascript">';
		echo '<!--
			
		var requiredMajorVersion = 9;
		var requiredMinorVersion = 0;
		var requiredRevision = 124;
		// -->
		</script>';
	
	echo '<script language="JavaScript" type="text/javascript">
		<!--
		// Version check for the Flash Player that has the ability to start Player 	Product Install (6.0r65)
		var hasProductInstall = DetectFlashVer(6, 0, 65);
	
		// Version check based upon the values defined in globals
		var hasRequestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	
		if ( hasProductInstall && !hasRequestedVersion ) {
			// DO NOT MODIFY THE FOLLOWING FOUR LINES
			// Location visited after installation is complete if installation is required
			var MMPlayerType = (isIE == true) ? "ActiveX" : "PlugIn";
			var MMredirectURL = window.location;
			document.title = document.title.slice(0, 47) + " - Flash Player Installation";
			var MMdoctitle = document.title;
	
			AC_FL_RunContent(
				"src", "playerProductInstall",
				"FlashVars", "serverURL='.$tmpfile.'",
				"width", "100%",
				"height", "550px",
				"align", "middle",
				"id", "SitePoint_DataViz_Tutorial_Part3_cooc",
				"quality", "high",
				"bgcolor", "#869ca7",
				"name", "SitePoint_DataViz_Tutorial_Part3_cooc",
				"allowScriptAccess","sameDomain",
				"type", "application/x-shockwave-flash",
				"pluginspage", "http://www.adobe.com/go/getflashplayer"
			);
		} else if (hasRequestedVersion) {
			// if we have detected an acceptable version
			// embed the Flash Content SWF when all tests are passed
			AC_FL_RunContent(
					"src", "SitePoint_DataViz_Tutorial_Part3_cooc",
					"FlashVars", "serverURL='.$tmpfile.'",
					"width", "100%",
					"height", "550px",
					"align", "middle",
					"id", "SitePoint_DataViz_Tutorial_Part3_cooc",
					"quality", "high",
					"bgcolor", "#869ca7",
					"name", "SitePoint_DataViz_Tutorial_Part3_cooc",
					"allowScriptAccess","sameDomain",
					"type", "application/x-shockwave-flash",
					"pluginspage", "http://www.adobe.com/go/getflashplayer"
			);
		  } else {  // flash is too old or we cannot detect the plugin
			var alternateContent = //"Alternate HTML content should be placed here. "+
			"This content requires the Adobe Flash Player. "
			+ "<a href=http://www.adobe.com/go/getflash/>Get Flash</a>";
			document.write(alternateContent);  // insert non-flash content
		  }
		// -->
		</script>';
	
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
echo '<table><tr>';

			echo "<td align=right width=20%><i>Nombre de cooccurrence minimum=".$pertinence."</i>";

		$old_url  =$_SERVER['REQUEST_URI'];
		$old_urlv = explode('MESR_bac/',$old_url);
		if (count($old_urlv)>0)
			{$old_url = $old_urlv[1];}
		$old_urls = explode('&old_pertinence=',$old_url);
		$new_url=$old_urls[0].'&old_pertinence='.$pertinence;

		$modifer='<input type="button" name="refresh" value="Modifier" onclick="location.replace(\''.$new_url.'\');">'; 


			?>
			</td>

			<td align=center width=20%>

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
		echo "</tr>";
		echo '</table>';
