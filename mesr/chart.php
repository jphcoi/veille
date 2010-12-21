<?
include("login_check.php");
include("parametre.php");
include("library/fonctions_php.php");
if(isset( $_GET['id_concept'] ) ) $id_concept = intval( $_GET['id_concept'] );
if(isset( $_GET['reverse'])) $reversedisplayid=intval($_GET['reverse']); else $reversedisplayid=0;
if(isset( $_GET['periode']))  $periode =derange_periode($_GET['periode']);
	else $periode = '-1';
$my_period=$periode;
if(isset($_GET['nav'])) $nav=$_GET['nav']; else $nav="thema";
if (isset($_POST['norm']))
{
	$norm = intval($_POST['norm']);
}
else
	$norm = 0;
	
	

function arrow_make($ltmp){
	$arrowstmp="";
	if ($ltmp["nbfathers"]>0) $arrowstmp.="&darr;";
	if ($ltmp["nbsons"]>0) $arrowstmp.="&uarr;";
	return($arrowstmp);
}

connexion_base($server,$user,$password,$database);
$resultat=mysql_query("SELECT forme_principale FROM concepts WHERE id=".$id_concept) or die ("Requêtesq non executée.");
$concept=mysql_fetch_array($resultat);
$titleheader='"'.remove_popo($concept[0]).'" [terme]';
if ($nav=="tempo") $jsprotovis="TRUE";
include("include/header.php");
//connexion a la base de donnees
include("banner.php");


//bloc recuperation infos termes
$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requêtesq non executée.");
while ($ligne=mysql_fetch_array($resultat)) $liste_termes[$ligne['id']] = $ligne['forme_principale'];

echo '<table width=100% class=tableitems>';
$googletext="http://www.google.com/search?q=".str_replace(" ","+",remove_popo($concept[0]))."&ie=UTF-8&oe=UTF-8";
$wikipediatext="http://fr.wikipedia.org/w/index.php?search=".str_replace(" ","_",remove_popo($concept[0]))."&go=Lire";
echo '<tr valign=top><td width=2.5%></td><td>';
echo '<table width=100% class=subtitle><tr>';
echo '<td align=left>';
echo 'terme "<i>'.remove_popo($concept[0]).'</i>"';//.$concept[0];
echo '</td>';
echo '</tr></table>';
echo '</h2></td><td width=2.5%></td></tr></table>';

create_concept_string();


//**********************************
//* BARRE DE NAVIGATION / ONGLETS  *
//**********************************

echo "<table width=100%><tr valign=top><td width=2.5%></td><td width=95%>";
echo '<table width=100% class=specialsubbanner valign=top>';
echo '<tr valign=bottom>';
echo '<td align=left>';
$select_string='<b style="color:black;">';
$thema="thématiques";
$tempo="évolution";
$sourcestring="billets";
$composition="composition";

$href_string='<a href=chart.php?id_concept='.$id_concept."&periode=".arrange_periode($my_period).'&nav=';

if ($nav=="thema") echo $select_string.$thema."</b>"; else echo $href_string."thema>".$thema."</a>";
echo " - ";
if ($nav=="tempo") echo $select_string.$tempo."</b>"; else echo $href_string."tempo>".$tempo."</a>";
echo " - ";
if ($nav=="source") echo $select_string.$sourcestring."</b>"; else echo $href_string."source>".$sourcestring."</a>";
//echo " - ";
//if ($nav=="composition") echo $select_string.$composition."</b>"; else echo $href_string."composition>".$sourcestring."</a>";

echo '</td><td align=right>';
echo '<font style="color:#333333;">';
echo '[<a href='.$googletext.'><img src='.$hrefroot.$racine.'/images/googleG.png alt="(google)" valign=bottom width=17 style="border-style:none;"></a>]';
echo '[<a href='.$wikipediatext.'><img src='.$hrefroot.$racine.'/images/wikipediaW.png alt="(wikipedia)" valign=bottom width=17 style="border-style:none;"></a>]';
echo '</font>';
echo '</td>';
echo '</tr></table>';
echo '</h2></td><td width=2.5%></td></tr></table>';

//**********************************
//* AFFICHAGE INFORMATIONS CLUSTER *
//**********************************

if ($nav=="thema")
{
	//bloc recuperation infos cluster
	$resultat=mysql_query("SELECT * from cluster WHERE concept='".$id_concept."' ORDER by periode,label_1,label_2,id_cluster") or die ("Requête non exécutée.");
	$check1 = mysql_num_rows($resultat);
	
	
	echo '<table width=100%>';
	echo '<tr>';
	echo "<td width=2.5%></td>";
		
	echo "<td width=95%>";
	//echo "terme";
	
	while ($ligne=mysql_fetch_array($resultat)) $cluster[]=$ligne;

	$agregat_by_period=array();
	$list_of_periods=array();
	for ($i=0;$i<count($cluster);$i++) {
		$periodevar=arrange_periode($cluster[$i]["periode"]);
		$idlabel1=$cluster[$i]["label_1"];
		$idlabel2=$cluster[$i]["label_2"];
		$label1=remove_popo($dico_termes[$idlabel1]);
		$label2=remove_popo($dico_termes[$idlabel2]);
		$lettre=$cluster[$i]["lettre"];
		$nbsons=$cluster[$i]["nb_sons"];
		$nbfathers=$cluster[$i]["nb_fathers"];
		$id=$cluster[$i]["id_cluster"];
		$agregat_by_period[$periodevar][]=array($id,$idlabel1,$idlabel2,$lettre,$nbsons,$nbfathers);
		if (end($list_of_periods)!=derange_periode($periodevar)) $list_of_periods[]=derange_periode($periodevar);
	}
	$list_of_periods=sort_periods($list_of_periods);
	if ($periode=="-1") $periode=end($list_of_periods);

	if ($list_of_periods[count($list_of_periods)-1]==$periode) 
		$clause_fils_pere = '';
	else 
		$clause_fils_pere = 'AND nb_sons+nb_fathers>='.$orphan_filter;
	
	
	// on relance la requete SQL maintenant que l'on s'est débarrasser des champs sans successeur (if any)
	$resultat=mysql_query("SELECT * from cluster WHERE concept='".$id_concept."' ".$clause_fils_pere.' ORDER by periode,label_1,label_2,id_cluster') or die ("Requête non exécutée.");
	$check1 = mysql_num_rows($resultat);
	
	$cluster=array();
	while ($ligne=mysql_fetch_array($resultat)) $cluster[]=$ligne;

	$agregat_by_period=array();
	$list_of_periods=array();
	for ($i=0;$i<count($cluster);$i++) {
		$periodevar=arrange_periode($cluster[$i]["periode"]);
		$idlabel1=$cluster[$i]["label_1"];
		$idlabel2=$cluster[$i]["label_2"];
		$label1=remove_popo($dico_termes[$idlabel1]);
		$label2=remove_popo($dico_termes[$idlabel2]);
		$lettre=$cluster[$i]["lettre"];
		$nbsons=$cluster[$i]["nb_sons"];
		$nbfathers=$cluster[$i]["nb_fathers"];
		$id=$cluster[$i]["id_cluster"];
		$agregat_by_period[$periodevar][]=array($id,$idlabel1,$idlabel2,$lettre,$nbsons,$nbfathers);
		if (end($list_of_periods)!=derange_periode($periodevar)) $list_of_periods[]=derange_periode($periodevar);
	}
	$list_of_periods=sort_periods($list_of_periods);
	
	
	//EST-CE QUE CE TERME APPARAIT DANS DES CLUSTERS?

	if ($check1 != 0) { 
		//SI OUI, ON AFFICHE LA LISTE DES CLUSTERS ET TOUT LE TOUTIM, EN VERIFIANT QUE C'EST OK POUR CETTE PERIODE
		
		$resultat  = concept_to_clusters($id_concept,derange_periode($periode),$clause_fils_pere);
		//on les affiche dans un tableau, à reprendre avec la fonction d'affichage 
	
		$check2 = mysql_num_rows($resultat);
		if ($check2==0) {
		
			echo "<div class=subbanner><b>nb: ce terme n'apparaît dans aucun champ thématique pour la période ".get_string_periode(arrange_periode($periode))."</b></div>";
			}
			
			
		while( $row  =  mysql_fetch_array ( $resultat )) 
			{
				$id_cluster = $row [ 'id_cluster' ];
				$ids_cluster[] = $id_cluster; 
				$periodevar =  arrange_periode($row [ 'periode' ]);
			}
		
		$concepts_voisins = export_concepts($ids_cluster,derange_periode($periode));
		$concepts_voisins_string = get_concept_string($concepts_voisins);
		
		echo "<td width=2.5%></td></tr></table>";
		
		
		
		
		//on extrait d'abord la liste totale des périodes: $total_list_periods
		$commande_sql = "SELECT periode from cluster GROUP BY periode";
		$total_periode_sql=mysql_query($commande_sql);
		while ($total_periode_sql_i=mysql_fetch_array($total_periode_sql))
		{
			$total_periods_raw[]=$total_periode_sql_i['periode'];
		}
			$total_list_periods=sort_periods($total_periods_raw);

		
		
		
		
			
		echo '<table width=100%><tr><td width=2.5%></td><td width=95%>';
		
			echo '<table class=tableitems width=100% cellspacing=0 cellpadding=5 style="font-variant:small-caps; size:small;"><tr valign=bottom>';
			echo "<td>";
			echo "<i>CHAMPS THÉMATIQUES CONTENANT CE TERME</i>";//echo "champs thématiques contenant ce terme";
			echo "</td></tr>";
		
		
		
			echo '<tr valign=bottom>';
			echo "<td align=left width=40%>";
			echo "SUR LA PÉRIODE ";
			
			display_arrow_periodes(arrange_periode($my_period),$total_list_periods);
			
			echo '<form action="chart.php" method="get" style="display:inline";>';
			echo '<select name="periode">';
			for ($i=0;$i<count($total_list_periods);$i++) {
				echo '<option value='.$total_list_periods[$i];
				if ($total_list_periods[$i]==arrange_periode($periode)) echo(" selected");
				echo '>';
				if (in_array($total_list_periods[$i],$list_of_periods))
				{
					echo get_string_periode($total_list_periods[$i]);
				}
				else
				{
					echo '('.get_string_periode($total_list_periods[$i]).')';
					
				}
				echo '</option>';
				}
			echo '</select>';
			echo '<input type="hidden" value="'.$id_concept.'" name="id_concept">';
			echo '<input type="hidden" value="thema" name="nav">';
			echo '<input type="submit" value="Changer">';
			echo '</form>';
			//echo '</div>';
			
			
			echo "</td>";
			echo "<td align=left width=57.5%>LISTE COMPLÈTE DES TERMES PRÉSENTS DANS CES CHAMPS THÉMATIQUES</td>";
			echo "</tr>";
			echo '</table>';
			
			echo "<table class=tableitems rules=all width=100% cellspacing=0>";
			echo('<tr valign=top style="background-color:'.$backdark.';"');
			echo "<td width=40% align=justify>";
			for ($i=0;$i<count($agregat_by_period);$i++){
				$periodevar=$list_of_periods[$i];
				if (arrange_periode($periode)==$periodevar) 
					{
						$clusters_affichables=array();
						foreach ($agregat_by_period[$periodevar] as $j)	$clusters_affichables[]=$j;
						$listenew=array();
						for ($j=0;$j<count($clusters_affichables);$j++)
							{
								$clu=$clusters_affichables[$j];
								$id=$clu[0];
								$lettre=$clu[3];
								$nomcourt=$dico_termes[$clu[1]]." - ".$dico_termes[$clu[2]];
								if (!array_key_exists($nomcourt,$listenew))
									$listenew[$nomcourt]=array("label1"=>remove_popo($clu[1]),"label2"=>remove_popo($clu[2]),"ids"=>array());
								$listenew[$nomcourt]["ids"][]=array("id"=>$id,"lettre"=>$lettre,"nbsons"=>$clu[4],"nbfathers"=>$clu[5]);
							}
						$odd=0;
						uksort($listenew,"strcasecmpcam");
						echo "<table width=100% class=tableitems cellspacing=0 cellpadding=1>";
						foreach($listenew as $l)
							{
								$odd+=1;
								if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
								echo '<tr valign=top style="background-color:'.$bckclr.';">';
								echo '<td>';
								$label1=$l["label1"];
								$label2=$l["label2"];
								$lids=$l["ids"];
								$lfirst=$lids[0];
								if (count($lids)>1) 
									$localhref="<a href=meta12.php?label1=".$label1."&label2=".$label2;
								else 
									$localhref="<a href=cluster.php?id_cluster=".$lfirst["id"];
								$localhref.="&periode=".arrange_periode($periode).">";
								echo $localhref."<b>".remove_popo($dico_termes[$label1])."</b> - ".remove_popo($dico_termes[$label2]);
								
								if (count($lids)==1)
									{
										$arrows=arrow_make($lfirst);
										if ($lfirst["lettre"]!="") echo " (".$lfirst["lettre"].$arrows.")</a>";
										else echo "</a>".$arrows;
									}
								else
									{
										echo "</a> (";
										$lastid=end($lids);$lastid=$lastid["id"];
										foreach ($lids as $lid)
										{
											$arrows=arrow_make($lid);
											echo "<a href=cluster.php?id_cluster=".$lid["id"]."&periode=".arrange_periode($periode).">".$lid["lettre"]."</a>".$arrows;
											if ($lid["id"]!=$lastid) echo ", ";
										}
										echo ")";
									}
								echo "</td></tr>";
							}
						echo "</table>";
					}
				}
			echo "</td>";
			
			echo "<td align=left width=57.5%>";
			echo "<small>";
	
			$liste_concepts_voisins_temp=array();
			for( $i = 0 ; $i < count($concepts_voisins_string) ; $i++ )	
			{
				$liste_concepts_voisins_temp[]='<a href="chart.php?id_concept='.$concepts_voisins[$i].'&periode='.arrange_periode($periode).'">'.$concepts_voisins_string[$i].'</a>';
			}
		
			echo '<table width=100% class=tableitems>';
			echo '<tr valign=top>';//<td width='.$widthcolumn.'%>';
			usort($liste_concepts_voisins_temp,"strcasecmpcam");
			display_columns(3,$liste_concepts_voisins_temp);
			echo "</tr></table>";
			
			echo "</small>";	 
		
			echo "</td>";
			
			echo("</tr>");
			echo "</table>";
	}
	else {
	//SI NON, ON DIT QUE CE TERME N'EST DANS AUCUN AGREGAT.
		echo ("<div class=subbanner><b>nb: ce terme n'apparaît dans aucun champ thématique à aucune période</b></div>");
	}
		
		
	echo "<td width=2.5%></td></tr></table>";

}


if ($nav=="tempo")

{
//****************************************************************
//* AFFICHAGE ACTIVITÉ TEMPORELLE + VIGNETTE VOISINAGE DYNAMIQUE *
//****************************************************************
	echo '<p>';
	
	echo '<table class=tableitems width=100% style="font-variant:small-caps; size:small;">';// margin-top:2px; margin-bottom:-2px;">';
	echo '<tr valign=top>';
	
	echo '<td width=2.5%></td>';
	
	echo '<td width=60%>';
	//echo 'activité temporelle';
	echo "OCCURRENCES DU TERME ";
	if ($norm==1) echo "NORMALISÉES PAR LE NOMBRE DE BILLETS, ";
	echo "SUR TOUTE LA PÉRIODE D'OBSERVATION";
	
	echo '<p>';
	
	$data = array();
	$id_concept = intval($_GET['id_concept']);
	$sql = 'SELECT COUNT(*), Reponse.jours FROM(SELECT id_b,jours FROM socsem WHERE concept='.$id_concept.' and jours>= '.$dated.' GROUP by id_b) Reponse GROUP by jours';
	//echo $sql."<br>";
	$resultat=mysql_query($sql);
	$maxdata=0;
	while ($ligne=mysql_fetch_array($resultat))
	{
		$valtmp=intval($ligne[0]);
		if ($valtmp>$maxdata) { $maxdata=$valtmp;}
		$data[intval($ligne[1])]=$valtmp;
	}
	
	if ($norm==1) {
		include('include/chart-evol-norm.php');
		$data=$data_propre;
	}
	
	$data_val=array_keys($data);
	//print_r($data_val);
	$dated=intval($data_val[0]);
	$datef=intval($data_val[count($data_val)-1]);
	//echo '<br>'.$dated.'<br>'.$datef.'<p>';
	
	include('include/chart-evol-helper.php');
	echo $myscript;
	
	?>
	
	<form method="post" action="<?$_SERVER['PHP_SELF']?>" >	 
	<input type="checkbox" name="norm" <?php if ($norm==1) echo 	'checked="checked"'; ?>value="1" />
	<input type="submit" name="formSubmit" value="Valeurs normalisées" />
	</form>
	
	<?
	
	include('include/chart-tempo-helper.php');
	
	echo $myabove;
	echo $myscript;
	
	echo '</td>';

	echo '<td width=2.5%></td></tr>';

	echo '</tr>';
	echo '</table>';

}







if ($nav=="source") {

//****************************************************************
//* AFFICHAGE DES SOURCES/BILLETS ASSOCIEES AU TERME *
//****************************************************************

	echo '<table width=100%>';
	echo '<tr valign=top>';
	echo '<td width=2.5%></td>';
	
	echo '<td width=95%>';
	
	$periode_brute=array();
	$resultat=mysql_query("select periode FROM cluster GROUP by periode") or die ("<b>Requête non exécutée (récupération des périodes pour les concepts)</b>.");
	while ($ligne=mysql_fetch_array($resultat)) {
		$per=$ligne['periode'];
		if ($per!=""){ // exception pour éviter un bug de la BDD avec concept 0 à période ""
			if (!in_array($per,$periode_brute)) $periode_brute[]=$per;
		}
	}
	$list_of_periods=sort_periods($periode_brute);
	
	echo '<div class=tableitems style="font-variant:small-caps;">';
	echo '<i>LISTE DES BILLETS MENTIONNANT LE TERME ';
	//echo '<br>';
	echo "SUR LA PÉRIODE ";
	echo '</i>';//echo 'liste des billets mentionnant le terme';

	//on extrait d'abord la liste totale des périodes: $total_list_periods
	$commande_sql = "SELECT periode from cluster GROUP BY periode";

	display_arrow_periodes(arrange_periode($my_period),$list_of_periods);
	
	echo '<form action="chart.php" method="get" style="display:inline";>';
	echo '<select name="periode">';
	for ($i=0;$i<count($list_of_periods);$i++) {
		echo '<option value='.$list_of_periods[$i];
		if ($list_of_periods[$i]==arrange_periode($periode)) echo(" selected");
		echo '>';
		echo get_string_periode($list_of_periods[$i]);
		echo '</option>';
		}
	echo '</select>';
	echo '<input type="hidden" value="'.$id_concept.'" name="id_concept">';
	echo '<input type="hidden" value="source" name="nav">';
	echo '<input type="submit" value="Changer">';
	echo '</form>';
	echo '</p>';
	echo '</div>';
	
	//ici on récupère tous nos billets les plus proches
	//print_r($list_of_concepts);
	$list_of_concepts=array();
	$list_of_concepts[0]=$id_concept;
	$liste_of_posts = scan_billet_seuil($list_of_concepts,$periode,0);
	$nb_termes_list = $liste_of_posts;
	if (count($liste_of_posts)>0)
	{$resultat = extract_permalink(array_keys($liste_of_posts));
	$i=0;
	$info_sources=array();
	while( $row = mysql_fetch_array ($resultat))
	{
		$perma=$row['permalink'];
		$site=strip_www($row['site']);
		$site =str_replace('***','; ',$site);
		$id = $row['id'];
		$nb_terme=$nb_termes_list[$id];
		$idauteur=$row['auteur_id'];
		$content=$row['content'];
		$concepts=$row['concepts_id'];
		if (!array_key_exists($site,$info_sources)) {
		$info_sources[$site]=array('site'=>$site,'idauteur'=>$idauteur,'permaliens'=>array(),'titres'=>array(),'dates'=>array(),'nbtermes'=>array());
		}
		$info_sources[$site]['permaliens'][]=$perma;
		$info_sources[$site]['titres'][]=clean_text(str_replace('popostrophe',"'",$row['title']));
		if ($type_date=='jour')
			{
				$info_sources[$site]['dates'][]=adjust_date_jours($row['jours']);}
		else
			{$info_sources[$site]['dates'][]=$row['jours'];}
		$info_sources[$site]['nbtermes'][]=$nb_terme;
		$info_sources[$site]['content'][]=$content;
		$info_sources[$site]['concepts'][]=$concepts;

		$i++;
	}
	
	uksort($info_sources,"strcasecmpcam");

	display_billets($info_sources,$list_of_concepts,arrange_periode($my_period),$type_notice);}
	else
	{
		echo "aucun billet pertinent";
	}
	echo "</td>";
	echo "</tr>";
	echo "</table>";
	echo "<td width=2.5%></td></tr>";
	echo "</table>";
}


if ($nav=="reseau semantique") {
include("reseau_semantique.php");}





	mysql_close();

include("footer.php");
?>



