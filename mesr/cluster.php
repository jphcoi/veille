<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");

$all_periode=0;


if (isset($_POST['all_periode'])) $all_periode = intval($_POST['all_periode']); else $all_periode = 0;

if (isset($_GET['pertinence'])) {
	$pertinence = $_GET['pertinence'];
	$pertinence = intval($pertinence)/100; }
else $pertinence = 0.3;

if (isset($_POST['reduced'])) $reduced = $_POST['reduced']; else $reduced = '0';



function image_cluster($periode,$id_cluster,$dbid,$exportid)//construit la liste des liens vers les représentations des clusters
{
	$image_cluster = "cluster_".str_replace('-','_',$periode).'_'.$id_cluster.'.jpg';
	$adresse_root= $_SERVER['SERVER_NAME'];
	$imagestructure='http://'.$adresse_root.'/'.$dbid."/".$exportid."/".$image_cluster;
	return $imagestructure;
}

function href_cluster($periode,$id_cluster)//construit la liste des liens vers les représentations des clusters
{
	$href = "cluster.php?id_cluster=".$id_cluster.'&periode='.$periode;
	return $href;
}

function display_term_table($l,$b){
	echo '<table class=commentitems rules=cols border=1>';
	echo '<tr align=left valign=top style="background-color:'.$b.';">';
	usort($l,"strcasecmpcam");
	display_columns(2,$l,"yes");
	echo "</tr>";
	echo "</table>";
}	

function list_clusters($periode,$clusters)
{
	global $list_of_concepts;
	$list=array();
	for($i=0;$i<count($clusters);$i++){
		$localcluster=array();
		$resultat=mysql_query("SELECT label_1,label_2,concept,nb_sons,nb_fathers,lettre FROM cluster WHERE id_cluster=".$clusters[$i]." AND periode=\"".derange_periode($periode)."\" ORDER by periode,concept") or die ("Requête non executée.");
		while ($ligne=mysql_fetch_array($resultat)) {
			$localcluster[]=$ligne['concept'];
			$label1=$ligne['label_1'];
			$label2=$ligne['label_2'];
			$localplus=array_diff($localcluster,$list_of_concepts);
			$localminus=array_diff($list_of_concepts,$localcluster);
			$lettre=$ligne['lettre'];
			$nbsons=$ligne['nb_sons'];
			$nbfathers=$ligne['nb_fathers'];
		}
		$list[]=array("termes"=>$localcluster,"label1"=>$label1,"label2"=>$label2,"plus"=>$localplus,"minus"=>$localminus,"id"=>$clusters[$i],"periode"=>$periode,"pere"=>$nbsons,"fils"=>$nbfathers,"lettre"=>$lettre);
	}
	return $list;
}


//
// affiche une table de champs thématiques prédécesseurs, principal ou successeurs, rangés en colonnes de termes
//

function selective_column($arraykey,$list,$plus,$minus,$main=0){
	global $dico_termes,$my_period,$backdark,$backdarker;
	if ($main>0) $backcolor=$backdarker; 
	if ($main==0) $backcolor=$backdark;
	$ncolumns=2;
	$wcolumns=width_column($ncolumns,$arraykey)-2;
	$columns=make_columns($ncolumns,count($arraykey));
	echo '<table class=';//tableitems';
	//if ($main==1) echo '"tableitems"'; else 
		echo '"commentitems"';
	if ($main>=0) echo 'style="background-color:'.$backcolor.';"';
	echo ' rules=groups border=1>';
	echo '<tr align=left valign=top>';
	for ($i=0;$i<$ncolumns;$i++){
		echo "<td>";// width=".$wcolumns."%>";
		for ($j=$columns[$i][0];$j<=$columns[$i][1];$j++) {
			$terme=$arraykey[$j][1];
			$added=0;$removed=0;$there=0;
			if (in_array($terme,$plus)) $added=1;
			if (in_array($terme,$list)) $there=1;
			if (in_array($terme,$minus)) $removed=1;
			
			$gothru=1;//si on affiche la période sélectionnée, il faut simplement sauter les termes non-présents, sinon faire comme si ils venaient d'être ajoutés (added=1)
			if ($main==1) if (!$there) $gothru=0;
			
			if ($gothru==1)
				if ($there OR $removed) {
					if ($there) {
						echo "<a href=chart.php?id_concept=".$terme."&periode=".arrange_periode($my_period);
						if ($main==0) echo " class=dead";
						echo ">";
						}
					if ($added) echo "<b>";
					if ($removed) echo '<s style="color:#AAAAAA;">';
					echo remove_popo($dico_termes[$terme]);
					if ($removed) echo "</s>";
					if ($added) echo "</b>";
					if ($there) echo "</a>";
				}
				
			echo ("<br>");
			}
		echo '</td>';
		if ($i<$ncolumns-1) echo "<td width=10%></td>";
		}
	echo "</tr>";
	echo "</table>";
}

if(isset( $_GET['id_cluster'])) $id_cluster = intval($_GET['id_cluster']); else die("<h1>Agrégat non spécifié.</h1>");
if(isset( $_GET['periode'])) $my_period=$_GET['periode']; else die("<h1>Agrégat non spécifié.</h1>");
if(isset( $_GET['nav'])) $nav=$_GET['nav']; else $nav="phylo";
$periode=$my_period;

//connexion a la base de donnees
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");


create_concept_string();


//bloc recuperation infos cluster
$resultat=mysql_query("SELECT label_1,label_2,periode,concept,lettre FROM cluster WHERE id_cluster=".$id_cluster." AND periode=\"".derange_periode($periode)."\" ORDER by periode,concept") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) $cluster[]=$ligne;

//bloc recuperation infos termes
$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) $liste_termes[$ligne['id']] = $ligne['forme_principale'];

//bloc recuperation infos phylogenie
$sql="SELECT id_cluster_2,periode_2 FROM phylo WHERE id_cluster_1=\"".$id_cluster."\" AND periode_1=\"".derange_periode($my_period)."\"";
//echo $sql;
$resultat=mysql_query($sql) or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) {$periode_avant_temp = $ligne['periode_2']; if (intval($periode_avant_temp)> intval($my_period)){$successeur[] = $ligne['id_cluster_2']; $periode_apres =$periode_avant_temp;  } }

$sql="SELECT id_cluster_1,periode_1 FROM phylo WHERE id_cluster_2=\"".$id_cluster."\" AND periode_2=\"".derange_periode($periode)."\"";
$resultat=mysql_query($sql) or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) {$periode_apres_temp = $ligne['periode_1'];if (intval($periode_apres_temp)< intval($periode)) {$predecesseur[] = $ligne['id_cluster_1']; $periode_avant = $ligne['periode_1']; }}


//bloc recuperation liste de termes
$list_of_concepts_google="";

if (count($cluster)>0)
{
	$cend=end($cluster);
	foreach($cluster as $i) 
		{
			$con=$i['concept'];
			$list_of_concepts[]=$con;
			$list_of_concepts_simple[$con]=$dico_termes[$con];
			$list_of_concepts_href[]="<a href=chart.php?id_concept=".$con."&periode=".$my_period.">".$dico_termes[$con]."</a> <i style=\"font-size:xx-small; font-style:italic;\"></i>";//(ID #".$con.")
			$list_of_concepts_google=$list_of_concepts_google."%22".str_replace(" ","+",$dico_termes[$con])."%22";
			if ($i!=$cend) $list_of_concepts_google.="%20AND%20";
		}
	$googletext="http://www.google.com/search?q=".$list_of_concepts_google."&ie=UTF-8&oe=UTF-8";	
}




$label1_current=$dico_termes[$cluster[0]["label_1"]];
$label2_current=$dico_termes[$cluster[0]["label_2"]];
$lettre_current=$cluster[0]["lettre"];

$titleheader='"'.$label1_current." - ".$label2_current.'" ';
if ($lettre_current!="") $titleheader.='('.$lettre_current.') ';
$titleheader.='('.get_short_string_periode($my_period).') [champ]';

if ($nav=="cooc" or $nav=="soc") $jsprotovis="TRUE";
include("include/header_cluster.php");
include("banner.php");



////////////////////////////
/// MODULE DE NAVIGATION ///
////////////////////////////


echo '<table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>champ thématique "<i>'.remove_popo($label1_current).'</i><i style="font-weight:normal;"> - '.remove_popo($label2_current).'" ';
if ($lettre_current!="") echo '('.$lettre_current.')';
echo '</i>';
echo ' &nbsp; <b style="font-size:medium; color:#666666;">[<a href='.$googletext.'><img src='.$hrefroot.$racine.'/images/googleG.png alt="(google)" valign=middle width=18 style="border-style:none;"></a>]</b>';
echo '</h2></td><td width=2.5%></td></tr>';
echo '</table>';

echo "<table width=100%><tr valign=top><td width=2.5%></td><td width=95%>";

	echo '<table width=100% class=specialsubbanner valign=top>';
	echo '<tr>';
	echo '<td align=left>';
	$select_string='<b style="color:black;">';
	if (isset($_GET['pertinence']))
	{
		$href_string='<a href=cluster.php?pertinence='.strval($pertinence*100).'&id_cluster='.$id_cluster."&periode=".arrange_periode($my_period).'&nav=';
	}
	else
	{
		$href_string='<a href=cluster.php?id_cluster='.$id_cluster."&periode=".arrange_periode($my_period).'&nav=';
	}
	if ($nav=="phylo") echo $select_string."phylogénie</b>"; else echo $href_string."phylo>phylogénie</a>";
	echo " - ";
	if ($nav=="socsem") echo $select_string."profil d'évolution</b>"; else echo $href_string."socsem>profil d'évolution</a>";
	echo " - ";
	if ($nav=="cooc") echo $select_string."réseau de cooccurrence</b>"; else echo $href_string."cooc>réseau de cooccurrence</a>";
	echo " - ";
	if ($nav=="soc") echo $select_string."réseau social</b>"; else echo $href_string."soc>réseau social</a>";
	echo " - ";
	if ($nav=="source") echo $select_string."sources</b>"; else echo $href_string."source>sources</a>";

	echo '</td><td align=right>';
	echo '<div style="';
	echo 'font-size:10pt;';
	echo '">'.get_string_periode($my_period).'</div>';
	echo '</td></tr>';
	echo '</table>';

echo '<td width=2.5%></td></tr>';
echo '</table>';



//// CREATION PHYLOGENIE (UNIQUEMENT POUR "PHYLO" OU "SOC")

if ($nav=="phylo" or $nav=="soc" or $nav == "cooc" or $nav=="source"){
 	$pred=list_clusters($periode_avant,$predecesseur);
 	$succ=list_clusters($periode_apres,$successeur);
	$arraytmp=array();
	foreach ($pred as $p) foreach ($p['termes'] as $c) $arraytmp[]=$c;
	foreach ($list_of_concepts as $c) $arraytmp[]=$c;
	foreach ($succ as $s) foreach ($s['termes'] as $c) $arraytmp[]=$c;
	$arraytmp=array_unique($arraytmp);
	$arraykey=array();
	foreach ($arraytmp as $a) $arraykey[]=array($dico_termes[$a],$a);
	usort($arraykey,"strcasecmpnorm");
	if (count($pred)==0) $nopred=1; else $nopred=0;
	if (count($succ)==0) $nosucc=1; else $nosucc=0;
}


echo '<table width=100%><tr valign=top><td width=2.5%></td><td width=95%>';

//// BLOC NAVIGATION PHYLOGENETIQUE


if ($nav=="phylo"){

	echo '<p><table width=100% rules=all>';
	echo '<tr valign=top>';

	echo '<td width=30% align=center class=tableitems style="font-variant:small-caps; size:small; font-style:italic;">';
		
	if ($nopred) echo "<b>(pas de prédécesseur)</b>";
	else {
		echo '<b>période précédente</b>';
		echo '<br><div class=commentitems style="font-weight:normal; font-variant:normal; font-size:xx-small;">('.get_string_periode(arrange_periode($periode_avant)).")</div><br>";
		echo '<table class=commentitems align=center width=100% cellspacing=0 cellpadding=5 style="font-variant:small-caps; size:small; font-style:italic;">';
		foreach ($pred as $p) {
			$label1=$p['label1'];
			$label2=$p['label2'];
			$lettre=$p['lettre'];
			$past = intval($p['pere']);
			echo '<tr>';
			echo '<td align=center>';
			echo '<a href=cluster.php?id_cluster='.$p['id']."&periode=".arrange_periode($p['periode']).'&nav=phylo>';
			if ($past>0)
			{
				echo '&uarr';
				$mainloc=0;
			}
			else $mainloc=-1;
			echo '"<b>'.remove_popo($dico_termes[$label1]).'</b> - '.remove_popo($dico_termes[$label2]).'"';
			if ($lettre!="") echo ' ('.$lettre.')';
			echo '</a><br>';
			selective_column($arraykey,$p['termes'],$p['plus'],$p['minus'],$mainloc);
			echo '</td>';
			echo '</tr>';
			}
		echo '</table>';
		}
	
	echo '</td>';
	
	echo '<td width=40% align=center style="background-color:'.$backdark.'; font-size:medium; font-variant:small-caps; font-style:italic;">';
	
	echo '<b>période en cours</b>';
	echo '<br><div class=commentitems style="font-weight:normal; font-variant:normal; font-size:xx-small;">('.get_string_periode($periode).")</div><br>";
	echo '"<b>'.$label1_current.'</b> - '.$label2_current.'"';
	if ($lettre_current!="") echo ' ('.$lettre_current.')';
 	echo '<br>';
	$nonlist=array();
	selective_column($arraykey,$list_of_concepts,$nonlist,$nonlist,1);
	
//	echo '<br>';
//	$imagestructure = image_cluster(arrange_periode($periode),$id_cluster,$dbid,$exportid);
	//affiche le cluster courante.
//	echo "<center><a href=".$imagestructure."><img height=150px src=".$imagestructure.' border="none"></a></center><br>';

	echo '</td>';
	

	echo '<td width=30% align=center class=tableitems style="font-variant:small-caps; size:small; font-style:italic;">';	
	if ($nosucc) echo "<b>(pas de successeur)</b>"; 
	else {
		echo '<b>période suivante</b>';
		echo '<br><div class=commentitems style="font-weight:normal; font-variant:normal; font-size:xx-small;">('.get_string_periode(arrange_periode($periode_apres)).")</div><br>";
	
		echo '<table class=commentitems align=center width=100% cellspacing=0  cellpadding=5 style="font-variant:small-caps; size:small; font-style:italic;">';
		foreach ($succ as $s) {
			$label1=$s['label1'];
			$label2=$s['label2'];
			$lettre=$s['lettre'];
			echo '<tr>';
			echo '<td align=center>';
			echo '<a href=cluster.php?id_cluster='.$s['id']."&periode=".arrange_periode($s['periode']).'&nav=phylo>';
			
			$futur = intval($s['fils']);
			
			echo '"<b>'.remove_popo($dico_termes[$label1]).'</b> - '.remove_popo($dico_termes[$label2]).'"';
			if ($futur>0)
			{
				echo '&darr';
				$mainloc=0;
			}
			else $mainloc=-1;
			
			if ($lettre!="") echo ' ('.$lettre.')';
			echo '</a><br>';
			selective_column($arraykey,$s['termes'],$s['plus'],$s['minus'],$mainloc);
			echo '</td>';
			echo '</tr>';
			
			}
		echo '</table>';
		}
	echo '</td>';
	
	echo '</tr>';
	echo '</table>';

}


//// BLOC NAVIGATION SEMANTIQUE


if ($nav=="source"){
	
	include("cluster_nav_source.php");

}


if ($nav=="soc"){

	include("cluster_nav_soc.php");	

}


if ($nav=="cooc"){

	include("cluster_nav_cooc.php");	

}




//// BLOC NAVIGATION SOCIO-SEMANTIQUE / TREILLIS LOCAUX

if ($nav=="socsem"){
	//****************************************************************
	//* AFFICHAGE ACTIVITÉ TEMPORELLE DE L'ENSEMBLE DES TERMES DU CLUSTER *
	//****************************************************************
	echo '<p>';

	include_once 'open_flash_chart_object.php';
	$argument='';
	$compteur = 0;
	foreach ($list_of_concepts as $c)
	{	
		$compteur = $compteur +1;
		if ($compteur>1)
		{
			$argument =$argument.'_'.$c; 
		}
		else
		{
			$argument =$argument.$c; 
		}
	}

	open_flash_chart_object("100%", 350, $hrefroot.$racine.'/chart-data_multi.php?id_concept='.$argument.'&id_periode='.$my_period, false );	
}



echo "</td><td width=2.5%></td>";
echo "</tr>";
echo "</table>";

//on ferme l'acces à la base de donnees
mysql_close();

//if ($nav == "soc")
//{ echo "<a href = social_net.php?id_cluster=".$id_cluster.'&periode='.$periode.">visualiser le réseau</a>";}



include("footer.php");
//unlink("json_data.txt");

?>

</body>
</html>