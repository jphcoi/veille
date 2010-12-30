<?
function microtime_float() {
    return array_sum(explode(' ', microtime()));
}

$peroides = explode_period($periode);

$pertinence = 0;

//$temps_fin2 = microtime_float();
//echo '<br><br>on a tourve auteur : '.round(//$temps_fin2 - //$temps_fin1, 4).'<br><br>';
	
$affichage=1;

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
//$type_lien='dist';
if ($type_lien=='cooc')
{
		$sql = "SELECT concept1,concept2,cooccurrences from sem_weight where concept1 in ";
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
		$sql = "SELECT concept1,concept2,distance0,distance1 from sem_weight where concept1 in ";
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
		$liens_weight1=array();

		while ($rwos=mysql_fetch_array($sql_cooc))
		{
			if ($rwos['concept1']!=$rwos['concept2'])
			{$liens_from[] = $rwos['concept1'];
			$liens_to[] = $rwos['concept2'];
			$liens_weight[] = intval(floatval($rwos['distance0'])*5.);
			$liens_from[] = $rwos['concept2'];
			$liens_to[] = $rwos['concept1'];
			$liens_weight[] = intval(floatval($rwos['distance1'])*5.);
			}
		}
		//print_r($liens_from);
		//print_r($liens_to);
		//print_r($liens_weight);
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
	

// PORTION CONCERNANT L'AFFICHAGE DU RESEAU
	
echo '<p>';
	
echo '
	<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;">';
echo '<tr valign=top>';
	
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

echo '<td align=center width=56%>';
	
if ($affichage>0)
	echo $myscript;
else
	echo "pas de sources";	

echo '</td>';

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
?>

