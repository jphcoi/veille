<?
include("login_check.php");
include("parametre.php");
include("library/fonctions_php.php");
if( isset( $_GET['id_concept'] ) ) {$id_concepts = explode('-',strval( $_GET['id_concept'] ));}
if(isset( $_GET['reverse'])) $reversedisplayid=intval($_GET['reverse']); else $reversedisplayid=0;
if( isset( $_GET['periode'] ) )  $periode =derange_periode($_GET['periode']);
	else $periode = '-1';

connexion_base($server,$user,$password,$database);
$titleheader='"';
$label='';
for ($i=0;$i<count($id_concepts);$i++) {
$id_concept=$id_concepts[$i];
$resultat=mysql_query("SELECT forme_principale FROM concepts WHERE id=".$id_concept) or die ("Requêtesq non executée.");
$concept=mysql_fetch_array($resultat);
$titleheader=$titleheader.$concept[0];
$label = $label.' & '.$concept[0];
if ($i+1<count($id_concepts)){$titleheader=$titleheader.' & ';} }
$titleheader=$titleheader.'" [termes]';
include("include/header.php");
//connexion a la base de donnees
include("banner.php");



//bloc recuperation infos termes
$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requêtesq non executée.");
while ($ligne=mysql_fetch_array($resultat)) $liste_termes[$ligne['id']] = $ligne['forme_principale'];

echo '<table width=100% class=tableitems>';
$googletext="http://www.google.com/search?q=".$concept[0]."&ie=UTF-8&oe=UTF-8";
$wikipediatext="http://fr.wikipedia.org/w/index.php?search=".str_replace(" ","_",$concept[0])."&go=Lire";
echo '<tr valign=top><td width=2.5%></td><td>';
echo '<table width=100% class=subtitle><tr>';
echo '<td align=left>';
echo 'termes "<i>'.$label.'</i>';
echo '</td><td align=right>';
echo '<font style="color:#333333;">';
echo '[<a href='.$googletext.'><img src='.$hrefroot.'/images/googleG.png alt="(google)" valign=middle width=20 style="border-style:none;"></a>]';
echo '[<a href='.$wikipediatext.'><img src='.$hrefroot.'/images/wikipediaW.png alt="(wikipedia)" valign=middle width=20 style="border-style:none;"></a>]';
echo '</font>';
echo '</tr></table>';
echo '</h2></td><td width=2.5%></td></tr></table>';

create_concept_string();

//**********************************
//* AFFICHAGE INFORMATIONS CLUSTER *
//**********************************

//bloc recuperation infos cluster
$sql = "SELECT * from cluster WHERE ";
if (intval($periode)>0)
{
	$sql = $sql." periode = '".derange_periode($periode)."' AND";
}

$sql=$sql." (concept=";
for ($i=0;$i<count($id_concepts);$i++) {
$id_concept=$id_concepts[$i];
$sql = $sql.$id_concept;
if ($i+1<count($id_concepts)){$sql=$sql.' OR concept= ';} 
}
$sql=$sql.") ORDER by periode,label_1,label_2,id_cluster";



//echo $sql;




$resultat=mysql_query($sql) or die ("Requêtesd non exécutée.");
$check1 = mysql_num_rows($resultat);




//echo '<br>'.$check1.'<br>';



echo '<table width=100%>';
echo '<tr>';
echo "<td width=2.5%></td>";
	
echo "<td width=95%>";
//echo "terme";

//EST-CE QUE CE TERME APPARAIT DANS DES CLUSTERS?

if ($check1 != 0) { 
	//SI OUI, ON AFFICHE LA LISTE DES CLUSTERS ET TOUT LE TOUTIM, EN VERIFIANT QUE C'EST OK POUR CETTE PERIODE
	
	while ($ligne=mysql_fetch_array($resultat)) {$cluster[]=$ligne;
		$clusterss[]=$ligne['id_cluster'];}
		$clusterss=array_count_values($clusterss);
		
		

	$agregat_by_period=array();
	$list_of_periods=array();
	$check2=0;
	for ($i=0;$i<count($cluster);$i++) {
		
		if ($clusterss[$cluster[$i]["id_cluster"]]==count($id_concepts))
		{
		$periodevar=arrange_periode($cluster[$i]["periode"]);
		$idlabel1=$cluster[$i]["label_1"];
		$idlabel2=$cluster[$i]["label_2"];
		$label1=$dico_termes[$idlabel1];
		$label2=$dico_termes[$idlabel2];
		$id=$cluster[$i]["id_cluster"];
		$ids_cluster[]=$id;
		$agregat_by_period[$periodevar][]=array($id,$idlabel1,$idlabel2);
		if (end($list_of_periods)!=derange_periode($periodevar)) $list_of_periods[]=derange_periode($periodevar);
		$check2=1;
	}}
	$list_of_periods=sort_periods($list_of_periods);
	if ($periode=="-1") $periode=end($list_of_periods);

//	$resultat  = concept_to_clusters($id_concept,derange_periode($periode));
	//on les affiche dans un tableau, à reprendre avec la fonction d'affichage 

//	$check2 = mysql_num_rows($resultat);
	if ($check2==0) {
	
		echo "<div class=subbanner><b>nb: ces termes n'apparaissent dans aucun champ thématique pour la période ".arrange_periode($periode)."</b></div><br>";
		$periode=$list_of_periods[0];
		}
		
		
		
			$periodevar =  arrange_periode($row [ 'periode' ]);
	
	$concepts_voisins = export_concepts($ids_cluster,derange_periode($periode));
	$concepts_voisins_string = get_concept_string($concepts_voisins);

		echo "<table width=100% class=specialsubbanner cellspacing=0>";
		echo "<tr><td align=left>";
		echo "liste des champs thématiques contenant ce terme";
		echo "</td>";
		echo '<td align=right style="color:black;font-weight:bold;">période sélectionnée: ';
	
		echo '<form action="chart3d.php" method="get" style="display:inline";>';
		echo '<select name="periode">';
		for ($i=0;$i<count($list_of_periods);$i++) {
			echo '<option value='.$list_of_periods[$i];
			if ($list_of_periods[$i]==arrange_periode($periode)) echo(" selected");
			echo '>';
			echo get_string_periode($list_of_periods[$i]);
			echo '</option>';
			}
		echo '</select>';
		echo '<input type="hidden" value="'.$_GET['id_concept'].'" name="id_concept">';
		echo '<input type="submit" value="Changer">';
		echo '</form>';
		echo "</td>";
		echo "</tr></table>";
		echo "</td>";
	
	echo "<td width=2.5%></td></tr></table>";
		
	echo '<table width=100%><tr><td width=2.5%></td><td width=95%>';
	
		echo '<table class=tableitems width=100% cellspacing=0 cellpadding=5 style="font-variant:small-caps; size:small; font-style:italic;"><tr valign=top>';
		echo "<td align=left width=40%>CHAMPS THÉMATIQUES<br>";
		echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps; size:small; margin-top:2px; margin-bottom:-2px;"><tr valign=bottom>';
		if ($reversedisplayid) echo '<td width=30%>id</td><td width=2.5%></td><td width=67.5%>nom</td>';
		else echo '<td width=67.5%>nom</td><td width=2.5%></td><td width=30%>id</td>';
		echo '</tr></table>';
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
					for ($j=0;$j<count($agregat_by_period[$periodevar]);$j++)
						{
							$clusters_affichables[]=$agregat_by_period[$periodevar][$j];
						}
					$liste_clusters_affichables=array();
					for ($j=0;$j<count($clusters_affichables);$j++)
						{
							$clu=$clusters_affichables[$j];
							$id=$clu[0];
							$idhref="<a class=dead href=cluster.php?id_cluster=".$id."&periode=".arrange_periode($periode).">".$id."</a>";
							//$nomcluster="<b>".$clu[1]."</b> - ".$clu[2];
							$nomcluster="<a href=meta12.php?label1=".$clu[1]."&label2=".$clu[2]."&periode=".arrange_periode($periode)."><b>".$dico_termes[$clu[1]]."</b> - ".$dico_termes[$clu[2]]."</a>";
							if (!array_key_exists($nomcluster,$liste_clusters_affichables))
								{
								$liste_clusters_affichables[$nomcluster]=$idhref;
								}
							else
							{	$liste_clusters_affichables[$nomcluster]=$liste_clusters_affichables[$nomcluster].", ".$idhref;
							}
						}
					$odd=0;
					uksort($liste_clusters_affichables,"strcasecmpcam");
					echo "<table width=100% class=tableitems cellspacing=0 cellpadding=1>";
					foreach (array_keys($liste_clusters_affichables) as $j)
					{	
						$odd+=1;
						if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
						echo ('<tr valign=top style="background-color:'.$bckclr.';">');
						if ($reversedisplayid)
							{
							echo('<td width=30%>'.$liste_clusters_affichables[$j]."</td><td width=2.5%></td><td width=67.5%>".$j."</td></tr>");
							}
						else
							{
							$string=$liste_clusters_affichables[$j];
							$jmod=$j;
							if (!strpos($string,",")) 
							// si le meta champ thématique "label1-label2" est composé d'un seul champ (une seule ID), on envoie directement vers cluster.php finalement (ce qui veut dire supprimer l'ancien lien HREF et mettre un nouveau qui s'appuie sur le HREF contenu dans l'ID, un peu bricolé admittedly)
								{
									$jval=strip_tags($string);
									$jmod="<a href=cluster.php?id_cluster=".$jval."&periode=".arrange_periode($periode).">".strip_tags($j,"<b>")."</a>";
								}
							echo('<td width=67.5%>'.$jmod."</td><td width=2.5%></td><td width=30%>".$string."</td></tr>");
							
							}
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





//****************************************************************
//* AFFICHAGE ACTIVITÉ TEMPORELLE + VIGNETTE VOISINAGE DYNAMIQUE *
//****************************************************************
echo '<p>';
echo '<table width=100%><tr valign=top>';

echo '<td width=2.5%></td>';

echo '<td width=95%>';
echo '<div class=subbanner>activité temporelle</div>';

echo '<br>';
include_once 'open_flash_chart_object.php';
open_flash_chart_object("100%", 250, 'http://'. $_SERVER['SERVER_NAME'] .'/MESR_bac/chart-data_multi.php?id_concept='.str_replace('-','_',$_GET['id_concept'] ).'&id_periode='.($_GET['periode']), false );

echo '</td>';
echo '</tr></table>';











//****************************************************************
//* AFFICHAGE DES SOURCES/BILLETS ASSOCIEES AU TERME *
//****************************************************************
	echo '<br>';
	echo '<p>';
	echo '<table width=100%><tr valign=top>';

	echo '<td width=2.5%></td>';

	echo '<td width=60%>';
	echo '<div class=subbanner>Billets mentionnant le terme </div>';

	echo '<br>';	
	
	echo "<table class=tableitems rules=all width=100% cellspacing=0 cellpadding=0>";
	
	echo "<td align=left width=80%>";
	
	//ici on affiche tous nos billets les plus proches
	//print_r($list_of_concepts);
	$list_of_concepts=array();
	$list_of_concepts=$id_concepts;
	$liste_of_posts = scan_billet_seuil($list_of_concepts,$periode,count($id_concepts)-1);
	$nb_termes_list = $liste_of_posts;
	if (count($liste_of_posts)>0)
	{$resultat = extract_permalink(array_keys($liste_of_posts));
	$i=0;
	$info_sources=array();
	while( $row = mysql_fetch_array ($resultat))
	{
		$perma=$row['permalink'];
		$site=strip_www($row['site']);
		$id = $row['id'];
		$nb_terme=$nb_termes_list[$id];
		$idauteur=$row['auteur_id'];
//		echo $idauteur.'<br>';		
		if (!array_key_exists($site,$info_sources)) {
		$info_sources[$site]=array('site'=>$site,'idauteur'=>$idauteur,'permaliens'=>array(),'titres'=>array(),'dates'=>array(),'nbtermes'=>array());
		}
		$info_sources[$site]['permaliens'][]=$perma;
		$info_sources[$site]['titres'][]=clean_text(str_replace('popostrophe',"'",$row['title']));
		$info_sources[$site]['dates'][]=adjust_date_jours($row['jours']);;
		$info_sources[$site]['nbtermes'][]=$nb_terme;
		$i++;
	}
	
	uksort($info_sources,"strcasecmpcam");
	echo "<table width=100% cellspacing=0 cellpadding=0>";
	$odd=0;
	foreach(array_keys($info_sources) as $key)
	{	
		$odd+=1;
		if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
		echo ('<tr valign=top class=tableitems style="background-color:'.$bckclr.'; ">');
		echo "<td  width=100%>";
		echo '<table class=tableitems width=100%><tr><td width=100%><a href=source.php?id_source='.$info_sources[$key]['idauteur']."&periode=".$my_period.'><i>'.$key."</i></a></td></tr></table>";
		echo "<table class=commentitems width=100%>";
		for ($i=0;$i<count($info_sources[$key]['titres']);$i++){
			echo "<tr valign=top><td width=13% style=\"font-size:x-small;\">";
			echo $info_sources[$key]['dates'][$i];
			echo "</td><td width=2%>";
			echo "</td><td width=85%>";
			echo "<a href=".$info_sources[$key]['permaliens'][$i]." target=\"_blank\"><i style=\"font-size:x-small; font-style:italic;\">";
			echo $info_sources[$key]['titres'][$i]."</a>";
			echo "</i></td></tr>";
			}
		echo "</table>";
	
		echo "</td>";
		echo "</tr>";
	}}
	echo "</table>";
	
	
	
	echo "</td>";
	echo "</tr>";
	
	echo "</table>";
	echo "</td></tr></table>";


	echo '</tr></table>';



	mysql_close();








include("footer.php");
?>



