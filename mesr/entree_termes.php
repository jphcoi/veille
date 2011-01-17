<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");

// style pour l'auto complete
echo "<style>
	.ui-autocomplete {
		max-height: 100px;
		overflow-y: auto;
		/* prevent horizontal scrollbar */
		overflow-x: hidden;
		/* add padding to account for vertical scrollbar */
		padding-right: 20px;
	}
	/* IE 6 doesn't support max-height
	 * we use height instead, but this forces the menu to always be this tall
	 */
	* html .ui-autocomplete {
		height: 100px;
	}
	</style>";


mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
//if ($encodage=='utf-8') mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//*******************************************
//bloc récupération des périodes des clusters
//*******************************************

$periode_concepts=array();
$periode_brute=array();
$resultat=mysql_query("select concept,periode,id_cluster FROM cluster ORDER by periode") or die ("<b>Requête non exécutée (récupération des périodes pour les concepts)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
	$id=$ligne['concept'];
	$per=$ligne['periode'];
	if ($per!=""){ // exception pour éviter un bug de la BDD avec concept 0 à période ""
		if (!array_key_exists($id,$periode_concepts)) $periode_concepts[$id][]=$per;
		else {
			if (!in_array($per,$periode_concepts[$id])) $periode_concepts[$id][]=$per;
			}
		if (!in_array($per,$periode_brute)) $periode_brute[]=$per;
		}
}

//agrégats	
$list_of_periods=sort_periods($periode_brute);
//on arrive sur la dernière période
//if(isset( $_GET['periode'])) $my_period=$_GET['periode']; else $my_period=arrange_periode(end($list_of_periods));
//on arrive sur l'ensemble des périodes
if(isset( $_GET['periode'])) $my_period=$_GET['periode']; else $my_period=-1;

$titleheader="liste des termes (".get_short_string_periode($my_period).")";
include("include/header.php");
include("banner.php");


//*******************************************
//bloc choix du terme
//*******************************************

$liste_termes_autocomplete='['; // liste pour l'autocomplete
$tableauTermsJS=''; //dico pour construire l'url après l'auto complete
$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)){
	$id=$ligne['id'];
	$terme=$ligne['forme_principale'];
	$terme=str_replace('popostrophe ',"’",$terme);
	$add_concept_now=0;
	if (array_key_exists($id,$periode_concepts))
		if (in_array($my_period,arrange_periode($periode_concepts[$id]))) $add_concept_now=1;
	if ($my_period==-1) $add_concept_now=1;
	if ($add_concept_now) {
		$liste_termes_brute[] = $terme;
                $liste_termes_autocomplete.='"'.$terme.'",';
		$id_termes_brute[] = $id;
                $tableauTermsJS.='DicoTerms["'.$terme.'"]='.$id.';';
		}
	$dico_termes[$id]=$terme;
}
$liste_termes_autocomplete=substr($liste_termes_autocomplete,0,-1);
$liste_termes_autocomplete.=']';




$liste_termes=array();
$id_termes=array();
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
$ncolumns=5;
$percolumn=ceil($count/$ncolumns);
$widthcolumn=floor(100/$ncolumns)-3;
$columns=array();
$increment=1;
for($i=1;$i<$ncolumns;$i++){
	$columns[$i]=array($increment,$increment+$percolumn-1);
	$increment+=$percolumn;
	}
$columns[$ncolumns]=array($increment,$count-1);

echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>liste complète des termes ';
if ($my_period==-1) echo 'employés dans la base de données sous-jacente'; else echo 'présents dans des champs thématiques';
echo '</h2></td><td width=2.5%></td></tr></table>';


echo '<table width=100% class=tableitems><tr>';
echo '<td width=2.5%></td>';
echo '<td width=95%>';
echo '<table width=100% class=specialsubbanner cellspacing=0><tr>';
echo '<td width=70% style="color:black;font-weight:bold;">période sélectionnée : ';

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


echo '<form action="entree_termes.php" method="get" style="display:inline;">';
echo '<select name="periode">';
echo '<option value="-1"';
if ($my_period==-1) echo ('selected');
echo '>* aucune * (obtenir la liste complète des termes)</option>';
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
echo "</td><td align=right width=25%>";
echo '</td>';
echo '</tr></table>';
echo '<td width=2.5%></td>';
echo "</tr></table>";


if ($list_of_periods[count($list_of_periods)-1]==$my_period) $clause_fils_pere = '';
else {
	$clause_fils_pere = 'nb_sons+nb_fathers>='.$orphan_filter;
	echo '
		<table class=commentitems width=100%><tr><td width=2.5%></td><td><b style="font-variant:small-caps;">accès direct aux termes commençant par&nbsp;:</b> '.$initiales.'<br>
		<i>(nb: les termes grisés ne sont associés à aucun champ thématique)</i>
		</td><td>';
        echo '<td class="ui-widget" float=right>
	<label for="terms">rechercher: </label>
	<input id="terms" /></td>';

        echo '</td><td width=2.5%></td></tr></table>';
	}

echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td width='.$widthcolumn.'%>';

if ($my_period!=-1) {
	if ($clause_fils_pere=='') 
		$query_extension="WHERE periode ='".derange_periode($my_period)."'";
	else 
		$query_extension="WHERE periode ='".derange_periode($my_period)."' AND ".$clause_fils_pere;
	}
else {
	if ($clause_fils_pere=='') 
		$query_extension=""; 
	else 
		$query_extension="WHERE ".$clause_fils_pere;
	}

	
$resultat=mysql_query("select concept FROM cluster ".$query_extension) or die ("Requête non exécutée.");
$liste_terme_cluster=array();
while ($ligne=mysql_fetch_array($resultat)){
	if (!in_array($dico_termes[$ligne['concept']],$liste_terme_cluster))
		{$liste_terme_cluster[]=$dico_termes[$ligne['concept']];}
	}
		
for($i=1;$i<=$ncolumns;$i++){
	for($j=$columns[$i][0];$j<=$columns[$i][1];$j++){
		$id=$id_termes[$j];
		
		if ($id!=-1) 
			{
				$par=0;
				if (!in_array($liste_termes[$j],$liste_terme_cluster)) $par=1;
				
				echo '<a ';
				if ($par!=0) echo('style="color:#333333;" ');
				echo 'href=chart.php?id_concept='.$id;
				if ($my_period!=-1) echo('&periode='.$my_period);
				if ($par!=0) echo '&nav=tempo';
				echo('>');
				{echo($liste_termes[$j]);}
				
			}
				
	
				 
		else
		{echo($liste_termes[$j]);}
		
		if ($id!=-1) 
			{
				echo('</a>');
			}
		echo("<br>");
		
	}
	echo "</td><td width=3%></td><td width=".$widthcolumn."%>";
	}
echo "</td><td width=2.5%></td></tr></table>";

echo '<table width=100% class=tableitems><tr valign=top><td width=2.5%></td><td width=97.5%><hr width=95% align=left><div style="font-variant:small-caps;">total: '.count($liste_termes_brute).' termes.</div></td><td width=2.5%></td></tr>';
echo "</table>";

// script autocomplete
echo '<script>
	$(function() {
		var availableTerms = '.$liste_termes_autocomplete.';
		$( "#terms" ).autocomplete({
			source: availableTerms,                       
		});            
                $( ".selector" ).autocomplete({
                   minLength: 3,
                   select: function(event, ui) {
                   alert("test");
                   var DicoTerms = new Array();';
                echo $tableauTermsJS.';';
                echo   'var url="chart.php?id_concept="+$.DicoTerms[ui.item.label];
                   alert(url);
                    if( url ) {
                        location.href = url;
                         return false;
                    }
                   return true;
                    }
                });

	});
	</script>
';


//on ferme l'acces à la base de donnees
mysql_close();
include("footer.php");
?>

</body>
</html>
