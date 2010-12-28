<?
include("login_check.php");
include("parametre.php");
//connexion a la base de donnees
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

$titleheader="liste des sources";
include("include/header.php");
include("banner.php");


//$resultat=mysql_query("select id,auteurs FROM auteurs ORDER by auteurs") or die ("Requête non executée.");

$resultat=mysql_query("SELECT auteurs.id, auteurs
FROM socsem, auteurs
WHERE auteurs.id = socsem.auteur
GROUP BY socsem.auteur ORDER by auteurs
")
 or die ("Requête non executée.");

while ($ligne=mysql_fetch_array($resultat)){
	$liste_termes_brute[] = $ligne['auteurs'];
	$id_termes_brute[] = $ligne['id'];
}

$liste_source_cluster=array();
$commande_sql = "SELECT id_auteur from biparti where overlap_size/cluster_size>0.15 GROUP by id_auteur";
$liste_cluster_billet=mysql_query($commande_sql);
while ($billes=mysql_fetch_array($liste_cluster_billet)){
	if ($billes['id_auteur'][0]='[')
	{

		$auteurs=$billes['id_auteur'];
		$auteurs=str_replace('[','',$auteurs);
		$auteurs=str_replace(']','',$auteurs);
		$auteursv = explode(', ',$auteurs);
		for($i=0;$i<count($auteursv);$i++){		
		$liste_source_cluster[]=$auteursv[$i];}
	}
	else
{$liste_source_cluster[]=$billes['id_auteur'];}}
//on ferme l'acces à la base de donnees
mysql_close();
$liste_termes=array();
$id_termes=array();
$initiale="";
for($i=0;$i<count($liste_termes_brute);$i++){
	$terme=$liste_termes_brute[$i];
	$premierelettre=mb_strtoupper(mb_substr($terme,0,1,"utf-8"),"utf-8");
	if ($premierelettre=="É") $premierelettre="E";
	if ($premierelettre=="Ê") $premierelettre="E";
	if($premierelettre!=$initiale){
		$initiale=$premierelettre;
		$liste_termes[]="";$id_termes[]=-1;
		$liste_termes[]='<b class=listtitle>'.$initiale.'</b>';$id_termes[]=-1;
		$liste_termes[]="";$id_termes[]=-1;
		}
	$liste_termes[]=''.$terme.'';
	$id_termes[]=$id_termes_brute[$i];
	}

$count=count($liste_termes);
$ncolumns=3;
$percolumn=ceil($count/$ncolumns);
$widthcolumn=floor(100/$ncolumns)-3;
$columns=array();
$increment=1;
for($i=1;$i<$ncolumns;$i++){
	$columns[$i]=array($increment,$increment+$percolumn-1);
	$increment+=$percolumn;
	}
$columns[$ncolumns]=array($increment,$count-1);
$flipped_haystack = array_flip($liste_source_cluster); 
//pour eviter ça ://in_array($id,$liste_source_cluster)
echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>liste complète des sources</h2></td><td width=2.5%></td></tr></table>';
echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td width='.$widthcolumn.'%>';
//print_r($liste_source_cluster);

//print_r($id_termes)
 for($i=1;$i<=$ncolumns;$i++){
 	for($j=$columns[$i][0];$j<=$columns[$i][1];$j++){
 		$id=$id_termes[$j];
 		if ($id>-1) {if (isset($flipped_haystack[$id])) {echo('<a href=source.php?id_source='.$id.'&periode=-1>');}else{ echo('<a style="color:#333333;" href=source.php?id_source='.$id.'&periode=-1>');}  		echo($liste_termes[$j]);  echo('</a>');}
 		else
			{echo($liste_termes[$j]);}
 		echo("<br>");
}		

 	echo "</td><td width=3%></td><td width=".$widthcolumn."%>";
 	}
 echo "</td><td width=2.5%></td></tr></table>";

 
 echo '<table width=100% class=tableitems><tr valign=top><td width=2.5%></td><td width=97.5%><hr width=95% align=left><div style="font-variant:small-caps;">total: '.count($liste_termes_brute).' sources.</div></td><td width=2.5%></td></tr>';
 echo "</table>";

include("footer.php");
?>

</body>
</html>
