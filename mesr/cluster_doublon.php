<? 
include("login_check.php");
include("include/header.php");
include("banner.php");
include("library/fonctions_php.php");

function image_cluster($periode,$id_cluster)//construit la liste des liens vers les représentations des clusters
{
	$image_cluster = "cluster_".str_replace('-','_',$periode).'_'.$id_cluster.'.jpg';
	$imagestructure="../MESR3/MESR4/".$image_cluster;
	return $imagestructure;
}

function clean_text($string)//enlève les caractères bizarres dans le texte
{
	$string = str_replace('Ã©','é',$string);
  $string=str_replace('Ãª','ê',$string);
  $string=str_replace('Ã¨','è',$string);
  $string=str_replace('Ã¯','ï',$string);
  $string=str_replace('Ã§','ç',$string);
  $string=str_replace('Ã‰','E',$string);
  $string=str_replace('Ã®','î',$string);
  $string=str_replace('Ã','à',$string);
  $string=str_replace('Ã¡','a',$string);
  $string=str_replace('Ã´','ô',$string);
	$string=str_replace('a´','o',$string);
	$string=str_replace('à¡','a',$string);
	$string=str_replace('à´','o',$string);
	$string=str_replace('à¢','a',$string);
	$string=str_replace('o«','ë',$string);
	return $string;
}

function href_cluster($periode,$id_cluster)//construit la liste des liens vers les représentations des clusters
{
	$href = "cluster.php?id_cluster=".$id_cluster.'&periode='.$periode;
	return $href;
}


function bloc($periode,$clusters)//construit le bloc vignettes passe ou présent.
{
	
	echo '<table class=tableitems  width=100% cellspacing=0 cellpadding=5 style="font-variant:small-caps; size:small; font-style:italic;">';
	for($i=0;$i<count($clusters);$i++){

	echo '<tr align=center>';
	echo '<tr align=center>';
	echo '<td>';
	$imagestructure = image_cluster(arrange_periode($periode),$clusters[$i]);
	$href = href_cluster(arrange_periode($periode),$clusters[$i]);
	//$height = (250) / count($clusters);
	$height = 120;
	echo "<center><a href=".$href."><img height=".$height."px src=".$imagestructure."></a></center>";
	echo '</td>';
	echo "</tr>";
	}
	echo "</table>";
}

if(isset( $_GET['id_cluster'])) $id_cluster = intval( $_GET['id_cluster'] );
else die("<h1>Agrégat non spécifié.</h1>");
if(isset( $_GET['periode'])) {$periode=$_GET['periode'];$my_period=$periode;} else die("<h1>Agrégat non spécifié.</h1>");


//connexion a la base de donnees
include("parametre.php");

mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");


create_concept_string();

//bloc recuperation infos cluster
$resultat=mysql_query("SELECT label_1,label_2,periode,concept FROM cluster WHERE id_cluster=".$id_cluster." AND periode=\"".derange_periode($periode)."\" ORDER by periode,concept") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) $cluster[]=$ligne;

//bloc recuperation infos termes
$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) $liste_termes[$ligne['id']] = $ligne['forme_principale'];

//bloc recuperation infos phylogenie
$sql="SELECT id_cluster_2,periode_2 FROM phylo WHERE id_cluster_1=\"".$id_cluster."\" AND periode_1=\"".derange_periode($periode)."\"";
$resultat=mysql_query($sql) or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) {$periode_avant_temp = $ligne['periode_2']; if (intval($periode_avant_temp)< intval($periode)){$predecesseur[] = $ligne['id_cluster_2']; $periode_avant =$periode_avant_temp;  } }

$sql="SELECT id_cluster_1,periode_1 FROM phylo WHERE id_cluster_2=\"".$id_cluster."\" AND periode_2=\"".derange_periode($periode)."\"";
$resultat=mysql_query($sql) or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) {$periode_apres_temp = $ligne['periode_1'];if (intval($periode_apres_temp)> intval($periode)) {$successeur[] = $ligne['id_cluster_1']; $periode_apres = $ligne['periode_1']; }}


//on ferme l'acces à la base de donnees
mysql_close();

echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>champ thématique "<i>'.$dico_termes[$cluster[0]["label_1"]].'</i><i style="font-weight:normal;"> - '.$dico_termes[$cluster[0]["label_2"]].'"</i> <i style="font-size:x-small; font-weight:normal;">(#'.$id_cluster.')</i></h2></td><td width=2.5%></td></tr>';

echo '<table width=100%>';
echo '<tr valign=top><td width=2.5%></td><td><div class=subbanner>période '.get_string_periode($periode).'</div></td><td width=2.5%></td></tr>';
echo '</table>';




//// BLOC COMPOSITION

echo "<table width=100%><tr valign=top><td width=2.5%></td><td width=95%>";

//agrégats

$ncolumns=2;
$count=count($cluster);$columns=array();$increment=0;
$percolumn=ceil($count/$ncolumns);$widthcolumn=floor(100/$ncolumns)-3;
for($i=1;$i<$ncolumns;$i++){$columns[$i]=array($increment,$increment+$percolumn-1);$increment+=$percolumn;}
$columns[$ncolumns]=array($increment,$count-1);

echo '<p>';
echo '<table class=tableitems width=100% cellspacing=0 cellpadding=5 style="font-variant:small-caps; size:small; font-style:italic;"><tr>';
echo "<td align=left width=55%>TERMES</td>";
//echo "<td width=5%></td>";
echo "<td align=left width=45%>SOURCES</td>";
echo "</tr>";
echo '</table>';


echo "<table class=tableitems rules=all width=100% cellspacing=0 cellpadding=5>";

echo '<tr style="background-color:'.$backdark.';" valign=top align=left>';

echo "<td align=left width=55%>";
echo "<table class=tableitems width=100% cellspacing=0 cellpadding=0>";
echo '<tr style="background-color:'.$backdark.';" valign=top align=left>';
foreach($cluster as $i) $list_of_concepts[]=$i['concept'];
//print_r($list_of_concepts);
//usort($list_of_concepts,"strcasecmpcam");
for($i=1;$i<=$ncolumns;$i++){
	echo '<td width='.$widthcolumn.'%><small>';
	for($j=$columns[$i][0];$j<=$columns[$i][1];$j++) {
		$con=$list_of_concepts[$j];
		echo("<a href=chart.php?id_concept=".$con."&periode=".$my_period.">".$dico_termes[$con]."</a> <i style=\"font-size:xx-small; font-style:italic;\">(".$con.")</i><br>");
		}
	echo '</small></td>';
	}
echo "</tr></table>";
	
echo "</td>";
//echo "<td width=5%></td>";
echo "<td align=left width=45%>(...liste des sources...)</td>";
echo "</tr>";

echo "</table>";
echo "</td><td width=2.5%></td></tr></table>";
echo "<br>";

//// BLOC NAVIGATION SEMANTIQUE

echo "<table width=100%><tr valign=top><td width=2.5%></td><td width=95%>";
echo '<div class=subbanner>navigation sémantique / phylogénies au niveau du champ thématique</div><br>';
echo '<table class=tableitems  width=100% cellspacing=0 cellpadding=5 style="font-variant:small-caps; size:small; font-style:italic;">';
echo '<tr align=center>';
echo "<td>PRÉDÉCESSEUR(S)</td><td><b>PÉRIODE SÉLECTIONNÉE";
echo "</b></td><td>SUCCESSEUR(S)</td>";
echo "</tr>";
echo "<tr align=center>";
echo "<td>";

//bloc vignettes predecesseurs:
bloc($periode_avant,$predecesseur);

//fin du bloc vignettes

echo "</td>";
echo "<td>";
$imagestructure = image_cluster(arrange_periode($periode),$id_cluster);
//affiche le cluster courante.
echo "<center><a href=".$imagestructure."><img height=400px src=".$imagestructure."></a></center>";

echo "</td>";
echo "<td>";


bloc($periode_apres,$successeur);


echo "</td>";
echo "</tr>";
echo "</table>";
echo "</td><td width=2.5%></td>";
echo "</tr>";
echo "</table>";
echo "<br>";


//// BLOC NAVIGATION SOCIALE

echo "<table width=100% class=tableitems><tr valign=top><td width=2.5%></td>";
echo "<td width=55%>";
echo '<div class=subbanner>navigation sociale <b style="color:black;">: [TBD]</b></div><br>';
echo "<center><div class=small>cliquer pour zoomer</div></center><p>";
$imagestructure="images/dummystructure.png";
echo "<center><a href=".$imagestructure."><img height=400px src=".$imagestructure."></a></center>";
echo "</td>";
echo "<td width=2.5%></td>";


//// BLOC NAVIGATION SOCIO-SEMANTIQUE / TREILLIS LOCAUX

echo "<td width=37.5%>";
echo '<div class=subbanner>navigation socio-sémantique <b style="color:black;">: [TBD]</b></div><br>';
echo "<center><div class=small>cliquer pour zoomer</center><p>";
$imagetreillis="images/treillisps.png";
echo "<center><a href=".$imagetreillis."><img height=400px src=".$imagetreillis."></a></center>";
echo "</td>";
echo "<td width=2.5%></td>";
echo "</tr>";
echo "</table>";


include("footer.php");
?>

</body>
</html>
