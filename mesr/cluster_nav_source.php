	<?
	
	
	//	$query="SELECT slider_val FROM  tbl_slider WHERE user='".$_COOKIE['ID_my_site']."'";
	//	echo $query;
	//	$result=mysql_query($query);
	//	$row=mysql_fetch_array($result);
	//	$pertinence = $row['slider_val'];
//		$pertinence =intval($pertinence)/100;
		$commande_sql_pert = "SELECT id_billet,overlap_size,billet_size from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."' AND overlap_size/cluster_size/log10(10+billet_size-overlap_size)>=".$pertinence.' and overlap_size/cluster_size>0.1 '.' ORDER BY overlap_size/cluster_size/log10(10+billet_size-overlap_size) DESC';
//		echo $commande_sql_pert;
		$res_temp = mysql_query($commande_sql_pert);
		$liste_of_posts=array();
		$liste_of_size=array();


		echo "\n<p><table width=100%><tr valign=top><td width=95%>";
		echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;"><tr>';
		
		//décommenter pour récupérer 
//		echo "<td align=left width=20%>";
//		echo "<i>TERMES</i>&nbsp;&nbsp;";
//		echo '[<a href='.$googletext.' target=\"blank\"><img src='.$hrefroot.'/images/googleG.png alt="(google)" valign=middle width=14 style="border-style:none;"></a>]';
//		echo "</td>";
		//echo "<td width=5%></td>";
		
		echo "<td align=left><i>ENSEMBLE DES SOURCES AU-DELA DU SEUIL DE PERTINENCE</i></td>";
		echo "<td align=right class=tableitems><i>seuil de pertinence: "//.strval(100*$pertinence)
		."</i>";

		$old_url  =$_SERVER['REQUEST_URI'];
		$old_urlv = explode($racine.'/',$old_url);
		if (count($old_urlv)>0)
			{$old_url = $old_urlv[1];}
		$old_urls = explode('&pertinence=',$old_url);
		$new_url=$old_urls[0];//.'&pertinence=';


			
			echo '<form action="'.$new_url.'" method="get" style="display:inline;">';
			echo '<select name="pertinence">';
				echo '<option value=10';
				if ($pertinence==0.1) echo(" selected");
				echo '>';
				echo "minimal (>10%)";
				echo '</option>';
			
				echo '<option value=20';
				if ($pertinence==0.2) echo(" selected");
				echo '>';
				echo "faible (>20%)";
				echo '</option>';

				echo '<option value=30';
				if ($pertinence==0.3) echo(" selected");
				echo '>';
				echo "médian (>30%)";
				echo '</option>';
				
				echo '<option value=40';
				if ($pertinence==0.40) echo(" selected");
				echo '>';
				echo "fort (>40%)";
				echo '</option>';
			
			echo '</select>';
			echo '<input type="hidden" value="'.$id_cluster.'" name="id_cluster">';
			echo '<input type="hidden" value="'.$nav.'" name="nav">';
			echo '<input type="hidden" value="'.$periode.'" name="periode">';
			
			
			echo '<input type="submit" value="Modifier le seuil">';
			echo '</form>';
		
		

			$result=mysql_query($query);
		echo "</td>";
		echo "</tr>";
		echo '</table>';
		
		
		
		
		
			while ($row = mysql_fetch_array ($res_temp))
			{
				$liste_of_posts[$row['id_billet']]=$row['overlap_size'];
				$liste_of_size[$row['id_billet']]=$row['billet_size'];
			}
		
		if (count($liste_of_posts)>0)
		{

			
			
			$nb_termes_list = $liste_of_posts;
			$nb_size_list = $liste_of_size;
			$resultat = extract_permalink(array_keys($liste_of_posts));
			$i=0;
			$info_sources=array();
			while( $row = mysql_fetch_array ($resultat))
			{
				$perma=$row['permalink'];
				$site=strip_www($row['site']);
				$site =str_replace('***','; ',$site);
				$id = $row['id'];
				$nb_terme=$nb_termes_list[$id];
				$nb_size=$nb_size_list[$id];
				$idauteur=$row['auteur_id'];
				$concepts=$row['concepts'];				
				$content=str_replace('"','\'',$row['content']);
				
				if (!array_key_exists($site,$info_sources)) {																  $info_sources[$site]=array('site'=>$site,'idauteur'=>$idauteur,'permaliens'=>array(),'titres'=>array(),'dates'=>array(),'nbtermes'=>array(),'nbsize'=>array(),'content'=>array());
			}
				$info_sources[$site]['permaliens'][]=$perma;
				$info_sources[$site]['content'][]=$content;
				$info_sources[$site]['titres'][]=clean_text(str_replace('popostrophe',"'",$row['title']));
				if ($type_date=='jour')
						{$info_sources[$site]['dates'][]=adjust_date_jours($row['jours']);}
				else
						{$info_sources[$site]['dates'][]=$row['jours'];}
			
				$info_sources[$site]['nbtermes'][]=$nb_terme;
				$info_sources[$site]['nbsize'][]=$nb_size;
				$info_sources[$site]['content'][]=$content;
				$info_sources[$site]['concepts'][]=$concepts;
				$i++;
						
			}
				
					uksort($info_sources,"strcasecmpcam");
					//print_r($info_sources);
					display_billets($info_sources,$list_of_concepts,$my_period,$type_notice);}
						
				else
				{
					echo "aucun billet pertinent";
				}
			echo "</td>";
			echo "</tr>";
			echo "</table>";
	echo "</td></tr></table>";
		
		
		
		
		
		
		
		
		?>
