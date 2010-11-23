<?
include("login_check.php");
include("include/header.php");
//connexion a la base de donnees
include("banner.php");
include("parametre.php");
include("library/fonctions_php.php");
if( isset( $_GET['id_label'] ) ) $id_label = ( $_GET['id_label'] );//id du label du noeud 
if( isset( $_GET['id_label1'] ) ) $id_label1 = ( $_GET['id_label1'] );//id du label du noeud 
if( isset( $_GET['id_label2'] ) ) $id_label2 = ( $_GET['id_label2'] );//id du label du noeud 

if( isset( $_GET['type'] ) ) $type = ( $_GET['type'] );//type de labellisation generique/specifique
if( isset( $_GET['periode'] ) )  $my_period =derange_periode($_GET['periode']);// periode
	else $my_period = '-1';


connexion_base($server,$user,$password,$database);

//bloc recuperation infos du noeud de la carte: 
//un noeud= un ensemble de clusters qui partagent le même label.
$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) $liste_termes[$ligne['id']] = $ligne['forme_principale'];

create_concept_string();


if ($type=="s")
{
	$sql ="select id_cluster FROM cluster WHERE periode = \"".$my_period."\" and label_2 = \"".$id_label."\"  GROUP by id_cluster";//on s'attache à extraire l'ensemble des clusters associés au label specifique donné
}
elseif ($type=="g")
{
	$sql ="select id_cluster FROM cluster WHERE periode = \"".$my_period."\" and label_1 = \"".$id_label."\" GROUP by id_cluster ";//on s'attache à extraire l'ensemble des clusters associés au label générique donné	
}
elseif ($type=="gs")
{
	$sql ="select id_cluster FROM cluster WHERE periode = \"".$my_period."\" and label_1 = \"".$id_label1."\" and label_2 = \"".$id_label2."\" GROUP by id_cluster ";//on s'attache à extraire l'ensemble des clusters associés au label générique donné	
}

//echo $sql;
$resultat=(mysql_query($sql))or die ("Requête non executée.");

//bloc récupération id des clusters incluent dans le noeud.
while ($ligne=mysql_fetch_array($resultat)) 
	{
		$liste_clusters[] = $ligne['id_cluster'];
	}

	if (count($liste_clusters)==1)

	{
		$page = "cluster.php?id_cluster=".$liste_clusters[0]."&periode=".arrange_periode($my_period);
		?><script>location.href='<? echo $page; ?>'</script><?
	}
	else
	{
		$page="meta12.php?label1=".$id_label1."&label2=".$id_label2."&periode=".arrange_periode($my_period);
		?><script>location.href='<? echo $page; ?>'</script><?
	}

$liste_clusters_label1 =export_label1($liste_clusters,$my_period);
$liste_clusters_label2 =export_label2($liste_clusters,$my_period);

$label1 = get_concept_string($liste_clusters_label1);
$label2 = get_concept_string($liste_clusters_label2);

$ensemble_concepts = export_concepts($liste_clusters,$my_period);
$ensemble_concepts_string = get_concept_string($ensemble_concepts);

$label = get_concept_string(array($id_label));
$label = $label[0];
$label_1 = $label1[0];
$label_2 = $label2[0];



echo '<p><table width=100% class=tableitems>';
if ($type=="gs")
{
	echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>noeud de la carte labellisé par "<i>'.$label_1.'-'.$label_2.'"</i> <i style="font-size:xx-small;">(#'.$id_label_1.')</i></h2></td><td width=2.5%></td></tr>';
	
}
else
{
	echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>noeud de la carte labellisé par "<i>'.$label.'"</i> <i style="font-size:xx-small;">(#'.$id_label.')</i></h2></td><td width=2.5%></td></tr>';
}
echo '<table width=100%>';
echo '<tr valign=top><td width=2.5%></td><td><div class=subbanner>période '.get_string_periode(arrange_periode($my_period)).'</div></td><td width=2.5%></td></tr>';
echo '</table>';




echo '<table width=100%><tr><td width=2.5%></td><td width=95%>';
	
echo '<table class=tableitems width=100% cellspacing=0 cellpadding=5 style="font-variant:small-caps; size:small; font-style:italic;"><tr valign=top>';
echo "<td align=left width=40%>CHAMPS THÉMATIQUES<br>";
echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps; size:small; margin-top:2px; margin-bottom:-2px;"><tr valign=bottom>';
echo '<td width=67.5%>nom</td><td width=2.5%></td><td width=30%>id</td>';
echo '</tr></table>';
echo "</td>";
echo "<td align=left width=57.5%>LISTE COMPLÈTE DES TERMES PRÉSENTS DANS CES CHAMPS THÉMATIQUES</td>";
echo "</tr>";
echo '</table>';


echo "<table class=tableitems rules=all width=100% cellspacing=0>";
echo('<tr valign=top style="background-color:'.$backdark.';"');
echo "<td width=40% align=justify>";

//-----------------------------
//bloc d'affichage des clusters
//-----------------------------


for ($j=0;$j<count($liste_clusters);$j++)
	{	
		$nomcluster="<b>".$label1[$j]."</b> - ".$label2[$j];
		$idcluster=$liste_clusters[$j];
		$liste_clusters_agreges[$nomcluster][]=array($idcluster,$my_period,$liste_clusters_label1[$j],$liste_clusters_label2[$j]);
	}

uksort($liste_clusters_agreges,"strcasecmpcam");
echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="size:small; ">';

$odd=0;
foreach(array_keys($liste_clusters_agreges) as $key)
{
	$odd++;
	if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
	echo ('<tr valign=top style="background-color:'.$bckclr.';">');

	$cluster_agrege=$liste_clusters_agreges[$key];
	echo '<td width=67.5%>';
	if (count($cluster_agrege)>1) 
		echo "<a href=meta12.php?label1=".$cluster_agrege[0][2]."&label2=".$cluster_agrege[0][3];
	else 
		echo "<a href=cluster.php?id_cluster=".$cluster_agrege[0][0];
	echo "&periode=".arrange_periode($my_period).">";
	echo $key;
	echo "</a>";
	echo '</td>';
	echo '<td width=2.5%></td><td width=30%>';
	$lastone=end($cluster_agrege);$lastone=$lastone[0];
	foreach($cluster_agrege as $clu)
		{
			$id=$clu[0];
			$periode=$clu[1];

			echo "<a href=cluster.php?id_cluster=".$id."&periode=".arrange_periode($my_period).">".$id."</a>";
			if ($id!=$lastone) echo (", ");
		}
	echo '</td></tr>';
}
echo '</table>';

//print_r($liste_clusters_agreges);
echo "</td>";

//bloc d'affichage des termes

echo "<td width=57.5% align=justify>";

$ensemble_concepts_tri=array();
for($i=0;$i<count($ensemble_concepts);$i++)
	{$ensemble_concepts_tri[$ensemble_concepts_string[$i]]=$ensemble_concepts[$i];}
uksort($ensemble_concepts_tri,"strcasecmpcam");
$ensemble_concepts_tri_keys=array_keys($ensemble_concepts_tri);

$ncolumns=3;
$columns=make_columns($ncolumns,count($ensemble_concepts_tri));
echo "<table class=tableitems width=100%><tr valign=top>";
foreach($columns as $col)
	{
	echo "<td width=".width_column($ncolumns)."%>";
	for ($i=$col[0];$i<=$col[1];$i++){
		$key=$ensemble_concepts_tri_keys[$i];
		$id=$ensemble_concepts_tri[$key];
		echo "<a href=chart.php?id_concept=".$id."&periode=".arrange_periode($my_period).">".$key.'</a> <i style="font-size:6pt;">('.$id.")</i><br>";
		}
	echo "</td><td width=3%></td>";
	}
echo "</tr></table>";

echo "</td>";

echo("</tr>");
echo "</table>";


echo "</td><td width=2.5%></td></tr></table>";


//on ferme l'acces à la base de donnees
mysql_close();


include("footer.php");

?>



