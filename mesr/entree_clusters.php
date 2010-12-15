<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");

//connexion a la base de donnees
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

create_concept_string();

//récupération des périodes
$periode_concepts=array();
$periode_brute=array();
$resultat=mysql_query("select periode FROM cluster GROUP by periode") or die ("<b>Requête non exécutée (récupération des périodes pour les concepts)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
	$per=$ligne['periode'];
	if ($per!=""){ // exception pour éviter un bug de la BDD avec concept 0 à période ""
		if (!in_array($per,$periode_brute)) $periode_brute[]=$per;
	}
}
$list_of_periods=sort_periods($periode_brute);

if(isset( $_GET['periode'])) $my_period=$_GET['periode']; else $my_period=arrange_periode(end($list_of_periods));




$titleheader="liste des champs (".get_short_string_periode($my_period).")";
include("include/header.php");
include("banner.php");

//clause qui signale qu'on est à la dernière période
if ($list_of_periods[count($list_of_periods)-1]==$my_period)
	{$clause_fils_pere = '';}
else
	{$clause_fils_pere = ' AND nb_sons+nb_fathers>='.$orphan_filter;}
	
$quer="select id_cluster,label_1,label_2,periode, nb_sons,nb_fathers FROM cluster WHERE periode ='".derange_periode($my_period)."'".$clause_fils_pere." GROUP by id_cluster  ORDER by periode, label_1, label_2, id_cluster";
$resultat=mysql_query($quer) or die ("<b>Requête non exécutée (mysql query)</b>.");
while ($ligne=mysql_fetch_array($resultat)){
	$periode=arrange_periode($ligne['periode']);
	$liste_termes_brute[] = "<b>".$dico_termes[$ligne['label_1']]."</b> - ".$dico_termes[$ligne['label_2']];
	$liste_termes_brute_id[]=array($ligne['label_1'],$ligne['label_2']);
	$id_termes_brute[] = $ligne['id_cluster'];		
	$fils[] = $ligne['nb_sons'] ;
	$pere[] = $ligne['nb_fathers'] ;
			
}

$resultat=mysql_query("select periode FROM cluster GROUP by periode ORDER by periode") or die ("<b>Requête non exécutée</b>.");
while ($ligne=mysql_fetch_array($resultat)){
			$periode_termes_brute[]=$ligne['periode'];}



echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>liste complète des champs thématiques</h2></td><td width=2.5%></td></tr></table>';


//agrégats
echo '<table width=100% class=tableitems><tr>';
echo '<td width=2.5%></td>';
echo '<td width=95%>';
echo '<table width=100% class=specialsubbanner cellspacing=0><tr>';
echo '<td width=100% style="color:black;font-weight:bold;">période sélectionnée: ';
//echo '['.$my_period.']';

//on extrait d'abord la liste totale des périodes: $total_list_periods
$commande_sql = "SELECT periode from cluster GROUP BY periode";
$total_periode_sql=mysql_query($commande_sql);
while ($total_periode_sql_i=mysql_fetch_array($total_periode_sql))
{
	$total_periods_raw[]=$total_periode_sql_i['periode'];
}
	$total_list_periods=sort_periods($total_periods_raw);


//on affiche les flèches pour se ballader dans les périodes
display_arrow_periodes($my_period,$total_list_periods);
//on ferme l'acces à la base de donnees
mysql_close();


echo '<form action="entree_clusters.php" method="get" style="display:inline;">';
echo '<select name="periode">';
for ($i=0;$i<count($list_of_periods);$i++) {
	echo '<option value='.$list_of_periods[$i];
	if ($list_of_periods[$i]==$my_period) echo(" selected");
	echo '>';
	echo get_string_periode($list_of_periods[$i]);
	echo '</option>';
	}
echo '</select>';
echo '<input type="submit" value="Changer">';
echo '</form>';
echo "</td>";
echo '</tr></table>';
echo '<td width=2.5%></td>';
echo "</tr></table>";


//on parcourt la liste des clusters pour agréger les clusters avec les mêmes labels
//print_r($liste_termes_brute);

$groupes_clusters=array();

for ($i=0;$i<count($liste_termes_brute);$i++){
	$titre=$liste_termes_brute[$i];
	$id=$id_termes_brute[$i];
	$arrows = '';
	//attention on inverse ici a cause d'une inversion du format de la nouvelle base//
	if (intval($pere[$i])>0) $arrows.='&darr;';
	if (intval($fils[$i])>0) $arrows=$arrows.'&uarr;';	
	if (!array_key_exists($titre,$groupes_clusters)) $groupes_clusters[$titre]=array("titre"=>$titre,"id"=>$id,"homos"=>array(),"label"=>$liste_termes_brute_id[$i],"href"=>"");
	$groupes_clusters[$titre]["homos"][]=array("id"=>$id,"arrows"=>$arrows);
}

uksort($groupes_clusters,"strcasecmpcam");

foreach ($groupes_clusters as $key => $value) {
	if (count($value["homos"])>1) {
		$tmp="";
		for ($i=0;$i<count($value["homos"]);$i++){
			$h=$value["homos"][$i];
			$tmp.='<a class="dead" href="cluster.php?id_cluster='.$h["id"].'&periode='.$my_period.'">'.chr($i+65).$h["arrows"].'</a>';
			if ($i!=count($value["homos"])-1) $tmp.=', ';
			}
		$groupes_clusters[$key]["href"]='<a href="meta12.php?label1='.$value["label"][0].'&label2='.$value["label"][1].'&periode='.$my_period.'">'.$value["titre"].'</a> ('.$tmp.')';
		}
	else
		{
		$href='href="cluster.php?id_cluster='.$value["id"].'&periode='.$my_period.'"';
		$groupes_clusters[$key]["href"]='<a '.$href.'>'.$value["titre"].'</a> <a class="dead" '.$href.'>'.$value["homos"][0]["arrows"].'</a>';

		}
}

$clusters_clean=array();
foreach ($groupes_clusters as $value) $clusters_clean[]=$value["href"];

$clean_liste_termes=array();
foreach ($clusters_clean as $value) {
	$premierelettre=mb_strtoupper(mb_substr(strip_tags($value),0,1,"utf-8"),"utf-8");
	if ($premierelettre=="É") $premierelettre="E";
	if ($premierelettre=="Ê") $premierelettre="E";
	if($premierelettre!=$initiale){
		$initiale=$premierelettre;
		$clean_liste_termes[]="";
		$clean_liste_termes[]='<b class=listtitle>'.$initiale.'</b>';
		$clean_liste_termes[]="";
		}
	$clean_liste_termes[]=$value;
}

echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td>';
display_columns(3,$clean_liste_termes);
echo '<td width=2.5%></td></tr></table><p>';

echo '<table width=100% class=tableitems><tr valign=top><td width=2.5%></td><td width=97.5%><hr width=95% align=left><div style="font-variant:small-caps;">soit '.count($clusters_clean).' dénominations uniques "générique - spécifique" de champs thématiques sur un total de '.count($liste_termes_brute).' champs thématiques uniques pour cette période.</div></td><td width=2.5%></td></tr>';
echo "</table>";

include("footer.php");
?>

</body>
</html>
