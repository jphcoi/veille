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
$jscriptmp='';

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
$vraidicotermesjs=array(); //dico pour l'autocomplete
$initiale="";
$initiales='';
for($i=0;$i<count($liste_termes_brute);$i++){
	$terme=$liste_termes_brute[$i];
	$premierelettre=mb_strtoupper(mb_substr($terme,0,1,"utf-8"),"utf-8");
	if ($premierelettre=="É") $premierelettre="E";
	if ($premierelettre=="Ê") $premierelettre="E";
	if($premierelettre!=$initiale){
		$initiale=$premierelettre;
		$liste_termes[]="";$id_termes[]=-1;
		$liste_termes[]='<a name="init'.$initiale.'"></a><b class=listtitle>'.$initiale.'</b>';$id_termes[]=-1;
		$liste_termes[]="";$id_termes[]=-1;
		$initiales.='<b><a href="#init'.$initiale.'">'.$initiale.'</a></b> - ';
		}
	$liste_termes[]=''.$terme.'';
	$id_termes[]=$id_termes_brute[$i];
	}
$initiales=substr($initiales, 0, -2);

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
echo '<p>';
echo '<table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>liste complète des sources</h2></td><td width=2.5%></td></tr>';
echo '</table>';

echo '<table width=100% class=commentitems>';
echo '<tr><td width=2.5%></td>';
echo '
	<td class="ui-widget" float=right>
	<label for="terms" style="font-variant:small-caps; font-weight:bold;">rechercher: </label>
	<input id="terms" /></td>';
echo '<td>';
echo '<b style="font-variant:small-caps;font-size:x-small;">accès direct aux sources dont le nom commence par&nbsp;:&nbsp;</b><br> '.$initiales.'<br>';
echo '</td><td width=2.5%></td></tr>';
echo '</table>';

echo '<p>';

$jscriptmp.="$('.bigscrollPane').scrollbar;";

echo '<table width=100%>';
echo '<tr valign=top>';
echo '<td width=2.5%></td>';

echo '<td width=95%>';
	
	echo '<div class="bigscrollPane">';
	echo '<table width=100% class=tableitems>';
	echo '<tr valign=top>';
	echo '<td width='.$widthcolumn.'%>';

	for($i=1;$i<=$ncolumns;$i++){
 		for($j=$columns[$i][0];$j<=$columns[$i][1];$j++){
 			$id=$id_termes[$j];
 			$terme=$liste_termes[$j];
	 		if ($id>-1) 
	 			{
	 				if (isset($flipped_haystack[$id])) 
	 					{
	 						echo('<a href=source.php?id_source='.$id.'&periode=-1>');
	 					}
	 				else
	 					{ 
	 						echo('<a style="color:#333333;" href=source.php?id_source='.$id.'&periode=-1>');
	 					}  
	 				echo($terme);
	 				$vraidicotermesjs[$terme]=$id;
	 				echo('</a>');
	 			}
 			else
				{
					echo($terme);
				}
	 		echo("<br>");
		}		
	 	echo "</td><td width=3%></td><td width=".$widthcolumn."%>";
	}

	echo '</td>';
	echo '</tr>';
	echo '</table>';
	echo '</div>';

echo "</td>";

echo '<td width=2.5%></td>';
echo '</tr></table>';

 
 echo '<table width=100% class=tableitems><tr valign=top><td width=2.5%></td><td width=97.5%><hr width=95% align=left><div style="font-variant:small-caps;">total: '.count($liste_termes_brute).' sources.</div></td><td width=2.5%></td></tr>';
 echo "</table>";


// SCRIPT AUTO-COMPLETE

$myvar='';
foreach (array_keys($vraidicotermesjs) as $k)
{
	$myvar.='
	{ label: "'.$k.'", value: "'.$vraidicotermesjs[$k].'" },';
}

$myvar=str_replace(',]','
		]','var projects = ['.$myvar.']');


$jscriptmp.='
	'.$myvar.';
		$( "#terms" ).autocomplete({
			minLength: 4,
			source: projects,
			focus: function(event, ui) {
				$( "#terms" ).val(ui.item.label);
				return false;
				},
			select: function(event, ui) {
				location.href="source.php?id_source="+ui.item.value'.$myjsperiod.';
				return false;
				}
			});';

echo '
	<script> $(function() { '.$jscriptmp.' });</script>';


include("footer.php");
?>

</body>
</html>
