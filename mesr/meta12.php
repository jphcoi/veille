<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");

//connexion a la base de donnees

if (isset($_GET['label1']))  $label1 =intval($_GET['label1']);
if (isset($_GET['label2']))  $label2 =intval($_GET['label2']); 
if (isset($_GET['periode'])) $my_period=$_GET['periode']; else $my_period= '-1';

//echo "label1:".$label1.", label2:".$label2.", periode:".$my_period."(".get_string_periode($my_period).")<br>";

connexion_base($server,$user,$password,$database);
create_concept_string();

$titleheader='"'.$dico_termes[$label1]." - ".$dico_termes[$label2].'" ('.get_short_string_periode($my_period).") [desambiguisation]";
include("include/header.php");
include("banner.php");

echo '<p>';
echo '<table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>champs thématiques spécifiés par "<i style="font-weight:normal;"><b>'.$dico_termes[$label1].'</b> - '.$dico_termes[$label2].'"</i></h2></td><td width=2.5%></td></tr></table>';


//RECUPERATION DES INFOS LABEL_1, _2, ID_CLUSTER, PERIODE, CONCEPT(s associes)

$resultat=mysql_query("SELECT label_1,label_2,id_cluster,periode,concept,lettre,nb_sons,nb_fathers FROM cluster WHERE label_1=".$label1." AND label_2=".$label2." AND periode=\"".derange_periode($my_period)."\" ORDER by periode,concept") or die ("Requête non executée.");
$clusters=array();
$periodes=array();
while ($ligne=mysql_fetch_array($resultat))
	{
		$cluster=$ligne['id_cluster'];
		$concept=$ligne['concept'];
		$periode=$ligne['periode'];
		$lettre=$ligne['lettre'];
		$nb_fathers=$ligne['nb_fathers'];
		$nb_sons=$ligne['nb_sons'];
		$periodes[$periode]=$periode;

		$clusters[$periode][$cluster]["info"]=array("lettre"=>$lettre,"nbsons"=>$nb_sons,"nbfathers"=>$nb_fathers);
		$clusters[$periode][$cluster]["ids"][]=$concept;
	}
	
//$periodes contient la liste de toute les periodes rencontrees
//$clusters contient la liste des clusters, par periodes.

echo "<table width=100%><tr valign=top><td width=2.5%></td><td width=95%>";
echo "<table width=100% class=specialsubbanner cellspacing=0>";

echo '<tr style="color:black; font-weight:bold;"><td align=left>';
echo "désambiguïsation";
echo "</td><td align=right>période sélectionnée: ";

		echo '<form action="meta12.php" method="get" style="display:inline";>';
		echo '<select name="periode">';
		foreach ($periodes as $periode) {
			echo '<option value='.arrange_periode($periode);
			if ($periode==arrange_periode($my_period)) echo(" selected");
			echo '>';
			echo get_string_periode(arrange_periode($periode));
			echo '</option>';
			}
		echo '</select>';
		echo '<input type="hidden" value="'.$label1.'" name="label1">';	
		echo '<input type="hidden" value="'.$label2.'" name="label2">';
		echo '<input type="submit" value="Changer">';
		echo '</form>';

echo "</tr></table>";

echo '<td width=2.5%></td></tr></table>';
echo "<p>";



//AFFICHAGE CONTENU DES CLUSTERS

echo "<table width=100% class=tableitems><tr valign=top><td width=2.5%></td><td width=95%>";

$my_clusters_all=$clusters[derange_periode($my_period)];
foreach ($my_clusters_all as $kmy=>$my) {
	$my_clusters[$kmy]=$my["ids"];
	$my_letters[$kmy]=$my["info"];
	}
ksort($my_clusters);


echo '<table width=100% class=commentitems><tr valign=top><td width=100% style="font-style:italic;">';
echo 'Il existe en effet plusieurs champs thématiques désignés par cette paire d\'étiquettes "terme générique - </b>terme spécifique<b>"</b><br>Voici la liste des termes communs à tous ces champs thématiques:</td></tr></table>';
//echo 'IL EXISTE EN EFFET PLUSIEURS CHAMPS THÉMATIQUES DÉSIGNÉS PAR CETTE PAIRE D\'ÉTIQUETTES "<b>TERME GÉNÉRIQUE - </b>TERME SPÉCIFIQUE"</b><br>VOICI LA LISTE DES TERMES COMMUNS À TOUS CES CHAMPS THÉMATIQUES:</td></tr></table>';
echo '<table width=100% class=tableitems><tr valign=top><td width=100% style="font-size:10pt; font-style:italic; font-variant:small-caps;"><b>';
echo 'termes communs aux champs thématiques étiquetés par "'.$dico_termes[$label1].' - </b>'.$dico_termes[$label2].'<b>"</b></td></tr></table>';


//echo "<h2 class=inverted>\"</h2>";

$common_to_all_clusters=call_user_func_array('array_intersect', $my_clusters);

$terms_common_to_all=array();
foreach($common_to_all_clusters as $i)
	$terms_common_to_all[]="<a href=chart.php?id_concept=".$i."&periode=".$my_period.">".$dico_termes[$i]."</a>";
usort($terms_common_to_all,"strcasecmpcam");
echo "<table class=tableitems width=100% cellspacing=0 cellpadding=2>";
echo '<tr style="background-color:'.$backdark.';" valign=top align=left>';
display_columns(5,$terms_common_to_all);
echo "</tr></table>";

echo "<P>";
echo '<table width=100% class=commentitems><tr valign=top><td width=100% style="font-style:italic;">';
//echo 'VOICI ENSUITE LA LISTE DES DIVERS CHAMPS THÉMATIQUES CORRESPONDANTS (DÉSIGNÉS PAR LEUR ID UNIQUE) ET LA LISTE DES TERMES PARTICULIERS À CHACUN DE CES CHAMPS:';
echo 'Voici ensuite la liste des divers champs thématiques correspondants (désignés par leur ID unique) et la liste des termes propres à chacun de ces champs:';
echo '</td></tr></table>';


$width_id_list=10;
echo "<table width=100% class=tableitems><tr valign=top><td width=".$width_id_list.'% style="font-style:italic;font-variant:small-caps; font-size:10pt;"><b>id</b></td><td width='.(100-$width_id_list).'% style="font-size:10pt; font-style:italic; font-variant:small-caps;"><b>termes propres à chaque champ thématique</b></td></tr></table>';
echo "<table width=100% class=tableitems rules=groups>";

$odd=0;
foreach (array_keys($my_clusters) as $key){
	$odd++;
	if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
	echo ('<tr valign=middle style="background-color:'.$bckclr.';">');
						
	echo "<td width=".$width_id_list."% style=\"font-weight:bold;\">";
	$info=$my_letters[$key];
	echo "<a href=cluster.php?id_cluster=".$key."&periode=".$my_period.">".$info["lettre"]."</a>";
	if ($info["nbfathers"]>0) echo "&uarr;";
	if ($info["nbsons"]>0) echo "&darr;";
	echo "</td><td width=".(100-$width_id_list)."%>";
	$clu=$my_clusters[$key];
	$termes=array();
	$termes_id=array();
	foreach ($clu as $c)
		$termes[]=array($dico_termes[$c],$c);

	usort($termes,"strcasecmpnorm");
	if ($my_period!=-1) $href_period="&periode=".$my_period; else $href_period="";
	$termes_formattes=array();
	foreach($termes as $terme)
		if (!in_array($terme[1],$common_to_all_clusters))
			$termes_formattes[]="<a href=chart.php?id_concept=".$terme[1].$href_period.">".$terme[0]."</a>";
	
	// on fabrique les colonnes a present
	echo "<table class=tableitems width=100%><tr valign=top>";
	display_columns(4,$termes_formattes);
	echo "</tr></table>";
		
	echo "</td></tr>";
}
echo "</table>";
	
echo "</td><td width=2.5%></td></tr></table>";
	
include("footer.php");
?>