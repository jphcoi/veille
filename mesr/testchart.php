<?
include("login_check.php");
include("include/header.php");
//modif pipeau de Cam
//connexion a la base de donnees
include("banner.php");

include("parametre.php");
include("library/fonctions_php.php");
if( isset( $_GET['id_concept'] ) ) $id_concept = intval( $_GET['id_concept'] );
if(isset( $_GET['reverse'])) $reversedisplayid=intval($_GET['reverse']); else $reversedisplayid=0;
if( isset( $_GET['periode'] ) )  $periode =derange_periode($_GET['periode']);
	else $periode = '-1';

connexion_base($server,$user,$password,$database);
$resultat=mysql_query("SELECT forme_principale FROM concepts WHERE id=".$id_concept) or die ("Requête non executée.");
$concept=mysql_fetch_array($resultat);

//bloc recuperation infos termes
$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) $liste_termes[$ligne['id']] = $ligne['forme_principale'];

echo '<table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>terme "<i>'.$concept[0].'</i>"</h2></td><td width=2.5%></td>';
	echo '<td align=right style="color:black;font-weight:bold;">période sélectionnée: ';
	
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
		echo '<input type="submit" value="Changer">';
		echo '</form>';
		echo '</td>';
    echo '</tr></table>';

create_concept_string();

//**********************************
//* AFFICHAGE INFORMATIONS CLUSTER *
//**********************************

//bloc recuperation infos cluster
$resultat=mysql_query("SELECT * from cluster WHERE concept='".$id_concept."' ORDER by periode,label_1,label_2,id_cluster") or die ("Requête non exécutée.");
$check1 = mysql_num_rows($resultat);


echo '<table width=100%>';
echo '<tr>';
echo "<td width=2.5%></td>";
	
echo "<td width=95%>";
//echo "terme";

//EST-CE QUE CE TERME APPARAIT DANS DES CLUSTERS?

if ($check1 != 0) { 
	//SI OUI, ON AFFICHE LA LISTE DES CLUSTERS ET TOUT LE TOUTIM, EN VERIFIANT QUE C'EST OK POUR CETTE PERIODE
	
	while ($ligne=mysql_fetch_array($resultat)) $cluster[]=$ligne;

	$agregat_by_period=array();
	$list_of_periods=array();
	for ($i=0;$i<count($cluster);$i++) {
		$periodevar=arrange_periode($cluster[$i]["periode"]);
		$label1=$dico_termes[$cluster[$i]["label_1"]];
		$label2=$dico_termes[$cluster[$i]["label_2"]];
		$id=$cluster[$i]["id_cluster"];
		$agregat_by_period[$periodevar][]=array($id,$label1,$label2);
		if (end($list_of_periods)!=$periodevar) $list_of_periods[]=$periodevar;
	}

	if ($periode=="-1") $periode=$list_of_periods[0];

	$resultat  = concept_to_clusters($id_concept,derange_periode($periode));
	//on les affiche dans un tableau, à reprendre avec la fonction d'affichage 
	$check2 = mysql_num_rows($resultat);
	if ($check2==0) {
	
		echo "<div class=subbanner><b>nb: ce terme n'apparaît dans aucun champ thématique pour la période ".arrange_periode($periode)."</b></div><br>";
		$periode=$list_of_periods[0];
		$resultat  = concept_to_clusters($id_concept,derange_periode($periode));
		$check2 = mysql_num_rows($resultat);
		}
		
		
		
	while( $row  =  mysql_fetch_array ( $resultat )) 
		{
			$id_cluster = $row [ 'id_cluster' ];
			$ids_cluster[] = $id_cluster; 
			$periodevar =  arrange_periode($row [ 'periode' ]);
		}
	
	$concepts_voisins = export_concepts($ids_cluster,derange_periode($periode));
	$concepts_voisins_string = get_concept_string($concepts_voisins);

		echo "<table width=100% class=specialsubbanner cellspacing=0>";
		echo "<tr><td align=left>";
		echo "liste des champs thématiques contenant ce terme";
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
							$idhref="<a href=cluster.php?id_cluster=".$id."&periode=".arrange_periode($periode).">".$id."</a>";
							$nomcluster="<b>".$clu[1]."</b> - ".$clu[2];
							if (!array_key_exists($nomcluster,$liste_clusters_affichables))
								{
								$liste_clusters_affichables[$nomcluster]=$idhref;
								}
							else
							{	$liste_clusters_affichables[$nomcluster]=$liste_clusters_affichables[$nomcluster].", ".$idhref;
							}
						}
					$odd=0;
					echo "<table width=100% class=tableitems cellspacing=0 cellpadding=1>";
					foreach (array_keys($liste_clusters_affichables) as $j)
					{	
						$odd+=1;
						if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
						echo ('<tr valign=top style="background-color:'.$bckclr.';">');
						if ($reversedisplayid)
							echo('<td width=30%>'.$liste_clusters_affichables[$j]."</td><td width=2.5%></td><td width=67.5%>".$j."</td></tr>");
						else
							echo('<td width=67.5%>'.$j."</td><td width=2.5%></td><td width=30%>".$liste_clusters_affichables[$j]."</td></tr>");
					}
					echo "</table>";
					
	
	
				}
			}
		echo "</td>";
		//echo "<td width=2.5%></td>";
		
		echo "<td align=left width=57.5%>";
		echo "<small>";

		$liste_concepts_voisins_temp=array();
		for( $i = 0 ; $i < count($concepts_voisins_string) ; $i++ )	
		{
			$liste_concepts_voisins_temp[]='<a href="chart.php?id_concept='.$concepts_voisins[$i].'&periode='.$periode.'">'.$concepts_voisins_string[$i].'</a>';
		}
		
		$count=count($liste_concepts_voisins_temp);
		$ncolumns=3;
		$percolumn=ceil($count/$ncolumns);
		$widthcolumn=floor(100/$ncolumns)-3;
		$columns=array();
		$increment=1;
		for($i=1;$i<$ncolumns;$i++){
			$columns[$i]=array($increment,$increment+$percolumn-1);
			$increment+=$percolumn;
			}
		$columns[$ncolumns]=array($increment,$count);
		
		echo '<table width=100% class=tableitems>';
		echo '<tr valign=top><td width='.$widthcolumn.'%>';
		
		for($i=1;$i<=$ncolumns;$i++){
			for($j=$columns[$i][0];$j<=$columns[$i][1];$j++){
				echo($liste_concepts_voisins_temp[$j-1]."<br>");
				}
			echo "</td><td width=3%></td><td width=".$widthcolumn."%>";
			}
		echo "</td></tr></table>";
		
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

mysql_close();




//****************************************************************
//* AFFICHAGE ACTIVITÉ TEMPORELLE + VIGNETTE VOISINAGE DYNAMIQUE *
//****************************************************************
echo '<p>';
echo '<table width=100%><tr valign=top>';

echo '<td width=2.5%></td>';

echo '<td width=60%>';
echo '<div class=subbanner>activité temporelle</div>';

echo '<br>';
include_once 'open_flash_chart_object.php';
open_flash_chart_object("100%", 250, 'http://'. $_SERVER['SERVER_NAME'] .'/MESR/chart-data.php?id_concept='.$id_concept, false );

echo '</td>';
echo '<td width=2.5%></td>';
echo '<td width=32.5%><div class=subbanner>évolution du voisinage sémantique</div><br>';
echo '<center class=small style="font-size:small; font-variant:small-caps;">cliquer pour zoomer<p></center>';

$imageevolutionvoisinage='http://'. $_SERVER['SERVER_NAME']."/".$dbid."/".$exportid."/activity_".$id_concept.".jpg";
echo "<a href=".$imageevolutionvoisinage."><img width=100% src=".$imageevolutionvoisinage."></a>";

echo '</td>';
echo '<td width=2.5%></td>';
echo '</tr></table>';

// je n'aime pas cette modif, je la mets en remarque: ma modif est ici, à la fin

include("footer.php");
?>



