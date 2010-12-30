<?

$commande_sql_pert = "SELECT id_billet,overlap_size,billet_size from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."' AND overlap_size/cluster_size/log10(10+billet_size-overlap_size)>=".$pertinence.' and overlap_size/cluster_size>0.1 LIMIT 80';
$res_temp = mysql_query($commande_sql_pert);
while ($row = mysql_fetch_array ($res_temp))
{
	$liste_of_posts[$row['id_billet']]=$row['overlap_size'];
	$liste_of_size[$row['id_billet']]=$row['billet_size'];
}

if (count($liste_of_posts)==0)
	$affichage=0;
else
	$affichage=1;

if ($affichage>0)
{
/////////////CALCULS QUI SERVENT POUR L'appli sociale
	
	$commande_sql = "SELECT label_1, label_2 from cluster where id_cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."'";

	$resultat=mysql_query($commande_sql);
	while ($billes=mysql_fetch_array($resultat)) {
		$commande_sql2 = "SELECT forme_principale from concepts where id = '".$billes['label_1']."'";
		$resultat2=mysql_query($commande_sql2);	
		while ($billes2=mysql_fetch_array($resultat2))	{ $label_1 = $billes2['forme_principale']; }

		$commande_sql2 = "SELECT forme_principale from concepts where id = '".$billes['label_2']."'";
		$resultat2=mysql_query($commande_sql2);	
		while ($billes2=mysql_fetch_array($resultat2))	{ $label_2 = $billes2['forme_principale']; }
		$cluster_name =$label_1.' - '.$label_2.' ('.$id_cluster.', '.$my_period.')';
		$cluster_name ='champ:'.$id_cluster.','.$my_period;
	}

	//on repart de res_temp: requete qui donne les billets associés au champ au-delà d'un certain score de pertinence
	$res_temp = mysql_query($commande_sql_pert);
	while ($billes=mysql_fetch_array($res_temp)) {
		$billet_index = $billes['id_billet'];
		$sql_auteur = "SELECT auteur_id,site from billets where id = '$billet_index'";
		$res_auteur=mysql_query($sql_auteur);
		while ($sql_auteurs=mysql_fetch_array($res_auteur)) {
			$champ_aut_id = $sql_auteurs['auteur_id'];
			if ($champ_aut_id[0]='[') {
				$champ_aut_id = str_replace('[','',$champ_aut_id);
				$champ_aut_id = str_replace(']','',$champ_aut_id);
				$champ_aut_id = explode(', ',$champ_aut_id);
				$sql_auteurs_names=$sql_auteurs['site'];
				$sql_auteurs_names=explode(' *** ',$sql_auteurs_names);
				for( $i = 0 ; $i < count($champ_aut_id) ; $i++ ) {
					$auteurs[] = $champ_aut_id[$i];
					$legende[$champ_aut_id[$i]]=$sql_auteurs_names[$i];
				}				
			}
			else {
				$auteurs[] = $sql_auteurs['auteur_id'];
				$legende[$sql_auteurs['auteur_id']]=strip_www($sql_auteurs['site']);
			}
		}
	}

	$aut_occ = array_count_values($auteurs);
	//print_r($aut_occ);
	foreach($aut_occ as $key => $value) {
		$liste_auteur_unique[] = $key;
	}

	$sql = "SELECT auteur1, auteur2 from soc where (";
	$compteur = 0;
	foreach($liste_auteur_unique as $value) {
		$compteur = $compteur+1;
		$sql =$sql."auteur1 = '".$value."'";
		if ($compteur < count($liste_auteur_unique)) {
			$sql =$sql." OR ";
		}
	}
	$sql  = $sql.") AND (";

	$compteur = 0;
	foreach($liste_auteur_unique as $value) {
		$compteur = $compteur+1;
		$sql =$sql."auteur2 = '".$value."'";
		if ($compteur < count($liste_auteur_unique)) {
			$sql =$sql." OR ";
		}
	}
	$sql  = $sql.")";


	if ($all_periode==0)//on prend le réseau social sur la période uniquement
	{$peroides = explode_period($periode);
	$sql =$sql.' AND jours<='.$peroides['to']." AND jours>=".strval(intval($peroides['from']));
	}

	if ($_POST['reduced']==1) {//on prend le réseau social sur les liens des billets pertinents uniquement
		$sql=$sql.' AND (';
		$id_billets_list = array_keys($liste_of_posts);	
		for( $i = 0 ; $i < count($id_billets_list) ; $i++ ) {
			$sql=$sql.' id_b='.$id_billets_list[$i];
			if ($i+1<count($id_billets_list)) {
				$sql=$sql.' OR ';
			}
		}
	
		$sql=$sql.' ) ';	
	}


	$res = mysql_query($sql);
	while ($sql_liens=mysql_fetch_array($res))
	{
		$aut1 = $sql_liens['auteur1'];
		$aut2 = $sql_liens['auteur2'];
		if ($aut1 ==$aut2)
		{}
		else
		{//$liens[$aut1]=$aut2;
			$liens_from[]=remove_popo($aut1);
			$liens_to[]=remove_popo($aut2);
//				echo 'lien de '.$legende[$aut1].' à '.$legende[$aut2].'<br>';
		}
	}

// DEFINITION DU RESEAU POUR AFFICHAGE JAVASCRIPT

include("include/network-def.php");


// DEFINITION DU SCRIPT JAVASCRIPT POUR AFFICHER LE RESEAU

include("include/network-vis.php");

	
	}
	
///////FIN DES CALCULS FICHIERS JSON DU RESEAU SOCIAL ECRIT

	
echo '<p>';

echo '
	<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;">';
echo '<tr valign=top>';
	
// PANEL DE GAUCHE: PERIODES PRECEDENTES
	
if ($nopred) $back_avant='background-color:'.$backdarker.';';
echo '<td width=22% align=center class=tableitems style="font-variant:small-caps; size:small; font-style:italic;'.$back_avant.'">';
if ($nopred) echo "<b>(pas de prédécesseur)</b>";
else {
	echo '<table width=100% cellspacing=0 cellpadding=0>';
	echo '<tr width=100% class=commentitems style="font-variant:small-caps; background-color:'.$backdark.';"><td width=5px></td><td>période</td><td></td><td>champ</td></tr>';
	$last_display_periode="";
	foreach ($pred as $p) display_cluster_title($p,"pred");
	echo '</table>';
	}	
echo '</td>';


// PANEL CENTRAL

echo '<td align=center width=56%>';

//echo '<i><b>ENVIRONNEMENT SOCIAL</b></i>';	
// $jscriptmp.=display_helper('Réseau social','L\'environnement social du champ thématique courant permet de repérer la structure sociale éventuellement formée par les liens de citations existant entre les sources participant au champ courant et dont le seuil de pertinence est supérieur au seuil choisi (paramétrable via l\'onglet seuil de pertinence en dessous à droite du réseau). Différentes options sont à disposition pour faire varier la focale sur cet environnement social:
// 		<ul style="font-size:small;"><li>
// 	    	"<b style="font-variant:small-caps;">N\'afficher que les liens entre billets pertinents</b>": Cette option permet de n\'afficher que les liens étant apparus entre les billets pertinents durant la période sélectionnée. On peut faire l\'hypothèse que cette vue permet de repérer des liens de citations dont l\'activation est partie liée à la thématique courante.
// 		    </li>
// 	    	<li>
// 		    "<b style="font-variant:small-caps;">Afficher les liens enregistrés sur l\'ensemble des périodes</b>":
// 		    Cette option affiche l\'ensemble des liens entre sources indépendamment de la période à laquelle la citation a été faite. Cette visualisation permet de visualiser la structure sociale d\'ensemble entre les sources indépendamment de la période et du champ considéré.
// 	    	</li>
// 			</ul>
// 			',"helper");

echo "<b><i>";	
if ($affichage>0)
	echo $myscript;	
else
	echo "pas de sources";
	
echo "</i></b>";
	
echo '</td>';

// PANEL DE DROITE: PERIODES SUIVANTES

if ($nosucc) $back_apres='background-color:'.$backdarker.';';
echo '<td width=22% align=center class=tableitems style="font-variant:small-caps; size:small; font-style:italic;'.$back_apres.'">';	
if ($nosucc) echo "<b>(pas de successeur)</b>"; 
else {
	echo '<table width=100% cellspacing=0 cellpadding=0>';
	echo '<tr class=commentitems style="font-variant:small-caps; background-color:'.$backdark.';"><td width=5px></td><td>période</td><td></td><td>champ</td></tr>';
	$last_display_periode="";
	foreach ($succ as $s) 
		display_cluster_title($s,"succ");
	echo '</table>';
	}
echo '</td>';
	
echo "</tr>";

echo '</table>';




/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////




echo '<p>';

echo '	
	<table>
	<tr>
	<td align=left>
	<form method="post" action="<?$_SERVER[\'PHP_SELF\']?>" >	 
		<input type="checkbox" name="reduced" ';
		
if ($reduced=='1') echo ' checked="checked" '; 
echo ' value="1" />
	 <input type="submit" name="formSubmit" value="N\'afficher que les liens entre billets pertinents" />
	</form>

	<form method="post" action="<?$_SERVER[\'PHP_SELF\']?>" >	 
		<input type="checkbox" name="all_periode" ';

if ($all_periode=='1') echo ' checked="checked" '; 
echo ' value="1" />
	 <input type="submit" name="formSubmit" value="Afficher les liens enregistrés sur l\'ensemble des périodes" />
	</form>';
	
echo '</td>';
	
	
echo "<td align=right class=tableitems width=20%><i>seuil de pertinence:</i><br>";

$old_url  =$_SERVER['REQUEST_URI'];
$old_urlv = explode('MESR_bac/',$old_url);
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
	if ($pertinence==0.4) echo(" selected");
	echo '>';
	echo "fort (>40%)";
	echo '</option>';

echo '</select>';
echo '<input type="hidden" value="'.$id_cluster.'" name="id_cluster">';
echo '<input type="hidden" value="'.$nav.'" name="nav">';
echo '<input type="hidden" value="'.$periode.'" name="periode">';


echo '<input type="submit" value="Modifier le seuil de pertinence">';
echo '</form>';




$result=mysql_query($query);
echo "</td>";
echo "</tr>";
echo "</table>";


/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;">';
echo '<tr>';
	
echo "<td align=left width=40%><i>les 5 billets les plus pertinents</i></td>";

echo "</tr>";
echo '</table>';


/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////


echo "<table class=tableitems rules=all width=100% cellspacing=0 cellpadding=0>";
echo '<tr>';
echo "<td align=left width=100%>";
		
if ($affichage>0){

	//COHERENT:
	//				$commande_sql_pert = "SELECT id_billet,overlap_size,billet_size from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."' AND overlap_size/cluster_size/log10(10+billet_size-overlap_size)>=".$pertinence.' and overlap_size/cluster_size>0.1 LIMIT 5';
	//TOP 5 tout le temps:
	$commande_sql_pert = "SELECT id_billet,overlap_size,billet_size from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."' ORDER BY overlap_size/cluster_size/log10(10+billet_size-overlap_size) DESC LIMIT 5";//.$pertinence.' and overlap_size/cluster_size>0.1 LIMIT 5';
	//ANCIEN
	//			$commande_sql_pert = "SELECT id_billet,overlap_size,billet_size from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."'".' and overlap_size/cluster_size>0.15'.' ORDER BY overlap_size/cluster_size/log10(10+billet_size-overlap_size) DESC LIMIT 5';
	
	$res_temp = mysql_query($commande_sql_pert);
	$liste_of_posts=array();
	$liste_of_size=array();
	while ($row = mysql_fetch_array ($res_temp))
	{
		$liste_of_posts[$row['id_billet']]=$row['overlap_size'];
		$liste_of_size[$row['id_billet']]=$row['billet_size'];
	}
	
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
		$content=$row['content'];
		$concepts=$row['concepts_id'];
		if (!array_key_exists($site,$info_sources)) {
		$info_sources[$site]=array('site'=>$site,'idauteur'=>$idauteur,'permaliens'=>array(),'titres'=>array(),'dates'=>array(),'nbtermes'=>array(),'nbsize'=>array());
		}
		$info_sources[$site]['permaliens'][]=$perma;
		$info_sources[$site]['titres'][]=clean_text(str_replace('popostrophe',"'",$row['title']));
		if (strlen($row['jours'])>3)
		{$info_sources[$site]['dates'][]=$row['jours'];}
		else
		{$info_sources[$site]['dates'][]=adjust_date_jours($row['jours']);}
		$info_sources[$site]['nbtermes'][]=$nb_terme;
		$info_sources[$site]['nbsize'][]=$nb_size;
		$info_sources[$site]['content'][]=$content;
		$info_sources[$site]['concepts'][]=$concepts;

		$i++;
	}

	uksort($info_sources,"strcasecmpcam");
	
	display_billets($info_sources,$list_of_concepts,$my_period,$type_notice);
	
	}
else
	{
	echo "aucun billet pertinent";
	}
	
echo "</td></tr></table>";
	
?>