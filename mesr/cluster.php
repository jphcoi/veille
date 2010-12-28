<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");

$all_periode=0;
$jscriptmp="";

if (isset($_POST['all_periode'])) $all_periode = intval($_POST['all_periode']); else $all_periode = 0;

if (isset($_GET['pertinence'])) {
	$pertinence = $_GET['pertinence'];
	$pertinence = intval($pertinence)/100; }
else $pertinence = 0.3;

if (isset($_POST['reduced'])) $reduced = $_POST['reduced']; else $reduced = '0';

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

function list_clusters($periodes,$clusters,$okperiode)
{
	global $list_of_concepts;
	$list=array();
	for($i=0;$i<count($clusters);$i++){
		//if ($periodes[$i]==$okperiode) 
		{
			$localcluster=array();
			$resultat=mysql_query("SELECT label_1,label_2,concept,nb_sons,nb_fathers,lettre FROM cluster WHERE id_cluster=".$clusters[$i]." AND periode=\"".derange_periode($periodes[$i])."\" ORDER by periode,concept") or die ("Requête non executée.");
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
			$list[]=array("termes"=>$localcluster,"label1"=>$label1,"label2"=>$label2,"plus"=>$localplus,"minus"=>$localminus,"id"=>$clusters[$i],"periode"=>$periodes[$i],"pere"=>$nbsons,"fils"=>$nbfathers,"lettre"=>$lettre);
		}
	}
	return $list;
}


//
// affiche une table de champs thématiques prédécesseurs, principal ou successeurs, rangés en colonnes de termes
//

function selective_column_tt($arraykey,$list,$plus,$minus,$main=0){
	global $dico_termes,$my_period,$backdark,$backdarker;
	$fz="
		";
	$backcolor=$backdark;
	$ncolumns=2;
	$wcolumns=width_column($ncolumns,$arraykey)-2;
	$columns=make_columns($ncolumns,count($arraykey));
	$fz.='<table class="commentitems" ';
	$fz.='style="background-color:'.$backcolor.';"';
	$fz.=' rules=groups border=1 cellpadding=5>';
	$fz.='<tr align=left valign=top>';
	for ($i=0;$i<$ncolumns;$i++) {
		$fz.="<td>";
		for ($j=$columns[$i][0];$j<=$columns[$i][1];$j++) {
			$terme=$arraykey[$j][1];
			$added=0;$removed=0;$there=0;
			if (in_array($terme,$plus)) $added=1;
			if (in_array($terme,$list)) $there=1;
			if (in_array($terme,$minus)) $removed=1;
			
			if ($there OR $removed) {
				if ($there) {
					$fz.="<a href=chart.php?id_concept=".$terme."&periode=".arrange_periode($my_period);
					$fz.=">";
					}
				if (!$added) $fz.="<b>";
				if ($removed) $fz.='<s style="color:#AAAAAA;">';
				$fz.=remove_popo($dico_termes[$terme]);
				if ($removed) $fz.="</s>";
				if (!$added) $fz.="</b>";
				if ($there) $fz.="</a>";
				}
			else $fz.='<span style="color:'.$backcolor.';">'.remove_popo($dico_termes[$terme]).'</span>';
			$fz.=("<br>");
			}
			
		$fz.='</td>';
		if ($i<$ncolumns-1) $fz.="<td width=10%></td>";
		}
	$fz.="</tr>";
	$fz.="</table>";
	return ($fz);
}


//
// affiche le titre d'un cluster avec sa période et son pop-up
//

function display_cluster_title ($s, $direction) {
	global $dico_termes,$mainloc,$arraykey,$last_display_periode,$jscriptmp;
	$label1=$s['label1'];
	$label2=$s['label2'];
	$lettre=$s['lettre'];
	$shref='cluster.php?id_cluster='.$s['id']."&periode=".arrange_periode($s['periode']).'&nav=phylo';
	$speriode=get_short_string_periode(arrange_periode($s['periode']),0,1);
	$stitle='"<b>'.remove_popo($dico_termes[$label1]).'</b> - '.remove_popo($dico_termes[$label2]).'"';
	
	if ($last_display_periode!=$s['periode'] && $last_display_periode!="") echo '<tr><td></td><td></td><td></td><td><hr class="dashed"></td></tr>';
	
	echo '<tr valign=top><td></td>';
	echo '<td class=commentitems style="font-weight:normal; font-variant:normal; font-size:xx-small;">';
	if ($last_display_periode!=$s['periode']) echo $speriode."&nbsp;";
	echo '</td>';
	
	$sbox=selective_column_tt($arraykey,$s['termes'],$s['plus'],$s['minus']);
	$sid=$s['id']."_".str_replace(" ","_",$s['periode']);
	if ($direction=="succ") { if (intval($s['fils'])>0) $sarrow='&darr;&nbsp;'; }
	else { if (intval($s['pere'])>0) $sarrow='&uarr;&nbsp;'; }

	echo '<td>';
	$jscriptmp.=display_helper('(période '.get_string_periode(arrange_periode($s['periode'])).')','<div style="font-variant:small-caps;"><a href='.$shref.'>'.$sarrow.$stitle.'</a></div><br>'.$sbox,$sid,"magnify.png","resizable: true");
	echo '</td>';
	echo '
		<td class=tableitems style="font-variant:small-caps; size:small; font-style:italic;">';
	
	echo '
		<span onMouseOver="ShowContent(\'box'.$sid.'\'); ShowContent(\'title'.$sid.'\'); HideContent(\'mainbox\'); HideContent(\'maintitle\');" 
			  onMouseOut="HideContent(\'box'.$sid.'\'); HideContent(\'title'.$sid.'\'); ShowContent(\'mainbox\'); ShowContent(\'maintitle\');">';
	echo '<a id="'.$sid.'" href="'.$shref.'">';
	
	echo '<span style="font-style:normal;">'.$sarrow.'</span>'.$stitle;
	if ($lettre!="") echo ' ('.$lettre.')';
	
	echo '</a>';
	echo '</span>';
	
	//echo '<a id="'.$sid.'" class="questionMark jTip jTip_element_'.$sid.'S jTip_width_300" name="Détails" href="'.$shref.'">';
	//echo '<span id="'.$sid.'S" class="JT_hidden">';
	//echo $sbox;
	//echo '</span>';
	
	echo '</td>';
	
	echo '</tr></td>';
	
	$last_display_periode=$s['periode'];
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

////////////////////////////////////////////////////////
//bloc recuperation infos cluster
////////////////////////////////////////////////////////
$resultat=mysql_query("SELECT label_1,label_2,periode,concept,lettre,pseudo FROM cluster WHERE id_cluster=".$id_cluster." AND periode=\"".derange_periode($periode)."\" ORDER by periode,concept") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) $cluster[]=$ligne;

////////////////////////////////////////////////////////
//// retrait des infos sur la partition courante ///////
////////////////////////////////////////////////////////
// A optimiser ...

$sql="SELECT pseudo FROM cluster WHERE id_cluster=".$id_cluster." AND periode=\"".derange_periode($periode)."\" ";
$resultat=mysql_query($sql) or die ("Requête non executée.");
while ($partit=mysql_fetch_array($resultat)) {
    $id_partition=$partit[pseudo];
}

// Infos de la partitions concernée
$sql="SELECT * FROM partitions WHERE id_partition=".$id_partition;
$partQuery=mysql_query($sql);
while ($part=mysql_fetch_array($partQuery)){
    $partition_infos=$part;
}

// Récupère tous les clusters de la dernière période
$last_period_clusters=array();
$sql="SELECT * FROM cluster WHERE periode='".$partition_infos[last_period_string]."' AND pseudo=".$partition_infos['id_partition']." GROUP BY id_cluster";
$resultat=mysql_query($sql) or die ("Champ thématique de la dernière période non récupérés");
while ($partit=mysql_fetch_array($resultat)) {
    array_push($last_period_clusters,$partit);
}

////////////////////////////////////////////////////////
//bloc recuperation infos termes
////////////////////////////////////////////////////////
$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) $liste_termes[$ligne['id']] = $ligne['forme_principale'];

////////////////////////////////////////////////////////
//bloc recuperation infos phylogenie
////////////////////////////////////////////////////////
$sql="SELECT id_cluster_2,periode_2 FROM phylo WHERE id_cluster_1=\"".$id_cluster."\" AND periode_1=\"".derange_periode($my_period)."\" ORDER BY periode_2";
//echo $sql;
$resultat=mysql_query($sql) or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) {
	$periode_avant_temp = $ligne['periode_2']; 
	if (intval($periode_avant_temp)> intval($my_period)){
		$successeur[] = $ligne['id_cluster_2'];
		$periode_apres[] =$periode_avant_temp; }
	}
	
$sql="SELECT id_cluster_1,periode_1 FROM phylo WHERE id_cluster_2=\"".$id_cluster."\" AND periode_2=\"".derange_periode($periode)."\" ORDER BY periode_1 DESC";
$resultat=mysql_query($sql) or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) {
	$periode_apres_temp = $ligne['periode_1'];
	if (intval($periode_apres_temp)< intval($periode)) {
		$predecesseur[] = $ligne['id_cluster_1']; 
		$periode_avant[] = $ligne['periode_1']; }
	}



// max_periode_avant va contenir la période maximale parmi les clusters précédents, donc pas forcément la période immédiatement avant la période courante s'il y a des sauts dans la phylogénie et qu'il y a des prédécesseurs, mais pas à la période immédiatement précédente (distance temporelle >1)
// min_periode_apres va contenir la période minimale parmi les clusters suivants, idem.

$max_periode_avant=-1;
$min_periode_apres=100000000000;
for($i=0;$i<count($periode_avant);$i++) {
	$periode_value=$periode_avant[$i];
	if (compute_periode($periode_value)>compute_periode($max_periode_avant)) $max_periode_avant=$periode_value;
	$periode_avant_rv[$periode_value][]=$predecesseur[$i];
	}
for($i=0;$i<count($periode_apres);$i++) {
	$periode_value=$periode_apres[$i];
	if (compute_periode($periode_value)<compute_periode($min_periode_apres)) $min_periode_apres=$periode_value;
	$periode_apres_rv[$periode_value][]=$successeur[$i];
	}
if (compute_periode($periode)-compute_periode($max_periode_avant)>7500000) $ecart_pred=1; else $ecart_pred=0;//echo ("y'a de l'écart<br>");
if (compute_periode($min_periode_apres)-compute_periode($periode)>7500000) $ecart_succ=1; else $ecart_succ=0;//echo ("y'a de l'écart<br>");


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

if ($nav=="cooc" or $nav=="soc" or $nav=="socsem") $jsprotovis="TRUE";
include("include/header.php");
include("banner.php");



////////////////////////////
/// MODULE DE NAVIGATION ///
////////////////////////////

//// préparation des liens de fils thématiques
$jscriptmp.="
               $('#dialogfilThematique')
		  .dialog({ autoOpen: false, stack: true, resizable: false, modal:true, width:600, closeOnEscape:true})
		  .click(function () { $('#dialogfilThematique').dialog('close'); });

		$('#openerfilThematique').click(function(e) {
			if (!$('#dialogfilThematique').dialog('isOpen'))
				$('#dialogfilThematique').dialog('option','position', [$(this).position().left+25,25]).dialog('open');
			else
				$('#dialogfilThematique').dialog('close');
			return false;
			});";

if (count($last_period_clusters)==1){
    $last_period_clusters=$last_period_clusters[0];
    $fils_thematique_htlm='<a href="'.$last_period_clusters[attribut].'"><font color='.$backdarker.'>'.remove_popo(substr($partition_infos[label],0,-1)).'</font></a></span>';
	}
else
	{
    $cluster_Link_html='<ul><font color=blue>';
    for ($i=0;$i<count($last_period_clusters);$i++){
        $cluster_Link_html.='<li><a href="'.$last_period_clusters[$i][attribut].'"><font color=blue>'.str_replace('---','/',remove_popo($last_period_clusters[$i][label])).'</a>';
    }
    $cluster_Link_html.='</ul>';
    $fils_thematique_htlm='<a href scr=# id="openerfilThematique"'.'><font color='.$backdarker.'>'.remove_popo(substr($partition_infos[label],0,-1)).'</font></a>';
    
}

echo '<div id="dialogfilThematique" title="Liens vers l\'extrémité du fil thématique ('.get_short_string_periode(arrange_periode($last_period_clusters[0][periode])).')">';
echo 'Ce fil thématique a plusieurs champs en dernière période :';                                 ;
echo $cluster_Link_html;
echo '</div>';



//////////////



echo '<table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td>';
echo '<table width=100% class=subtitle><tr><td align=left>champ thématique "<i>'.remove_popo($label1_current).'</i><i style="font-weight:normal;"> - '.remove_popo($label2_current).'" ';
if ($lettre_current!="") echo '('.$lettre_current.')';
echo '</i>';
echo '<br/><span style="font-size: x-small;">fil thématique: ';
echo $fils_thematique_htlm;
echo '<td align=right valign=top><a href='.$googletext.'><img src='.$hrefroot.$racine.'/images/googleG.png alt="(google)" valign=middle width=18 style="border-style:none;"></a>&nbsp;</td>';
echo '</tr></table>';
echo '</td><td width=2.5%></td></tr>';
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
	if ($nav=="cooc") echo $select_string."réseau de cooccurrence</b>"; else echo $href_string."cooc>réseau de cooccurrence</a>";
	echo " - ";
	if ($nav=="soc") echo $select_string."environnement social</b>"; else echo $href_string."soc>environnement social</a>";
	echo " - ";
	if ($nav=="source") echo $select_string."billets</b>"; else echo $href_string."source>billets</a>";
	echo " - ";
	if ($nav=="socsem") echo $select_string."profil d'évolution</b>"; else echo $href_string."socsem>profil d'évolution</a>";

	echo '</td><td align=right>';
	echo '<div style="';
	echo 'font-size:8pt;';
	echo '">'.get_string_periode($my_period).'</div>';
	echo '</td></tr>';
	echo '</table>';

echo '<td width=2.5%></td></tr>';
echo '</table>';


//// CREATION PHYLOGENIE (UNIQUEMENT POUR "PHYLO" OU "SOC")

if ($nav=="phylo" or $nav=="soc" or $nav == "cooc" or $nav=="source"){
 	$pred=list_clusters($periode_avant,$predecesseur,$max_periode_avant);
 	$succ=list_clusters($periode_apres,$successeur,$min_periode_apres);
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

	// routines de masquage/affichage des boites
	
	echo '<script type="text/javascript" language="JavaScript">
			function HideContent(d) {
			document.getElementById(d).style.display = "none";}
			function ShowContent(d) {
			var dd = document.getElementById(d);
			dd.style.display = "block";
			}</script>';
	
	// affichage du titre
	
	echo '<table width=100%>';
	echo '<tr width=100%>';
	echo '<td width=100% align=center class=tableitems style="font-variant:small-caps; size:small; font-style:italic;">';
	echo '<span id="maintitle">';
	echo '"<b>'.$label1_current.'</b> - '.$label2_current.'"';
	if ($lettre_current!="") echo ' ('.$lettre_current.')';
	echo '</span>';
	
	foreach ($succ as $s) {
		$label1=$s['label1'];$label2=$s['label2'];$lettre=$s['lettre'];
		$sid=$s['id']."_".str_replace(" ","_",$s['periode']);
		echo '
			<span style="display:none;" id="title'.$sid.'">';
		echo '<a href=cluster.php?id_cluster='.$s['id']."&periode=".arrange_periode($s['periode']).'&nav=phylo>';
		if (intval($s['fils'])>0) echo '&darr;&nbsp;';
		echo '"<b>'.remove_popo($dico_termes[$label1]).'</b> - '.remove_popo($dico_termes[$label2]).'"';
		if ($lettre!="") echo ' ('.$lettre.')';
		echo '</a><br>';
		echo '</span>';
		}
	foreach ($pred as $s) {
		$label1=$s['label1'];$label2=$s['label2'];$lettre=$s['lettre'];
		$sid=$s['id']."_".str_replace(" ","_",$s['periode']);
		echo '
			<span style="display:none;" id="title'.$sid.'">';
		echo '<a href=cluster.php?id_cluster='.$s['id']."&periode=".arrange_periode($s['periode']).'&nav=phylo>';
		if (intval($s['pere'])>0) echo '&uarr;&nbsp;';
		echo '"<b>'.remove_popo($dico_termes[$label1]).'</b> - '.remove_popo($dico_termes[$label2]).'"';
		if ($lettre!="") echo ' ('.$lettre.')';
		echo '</a><br>';
		echo '
			</span>';
	}	
	
	echo '</td></tr>';
	echo '</table>';
	
	// affichage des boites
	
	echo '<table width=100%>';
	echo '<tr valign=top>';
	
	if ($ecart_pred==1) $back_avant='background-color:white;';
	echo '<td width='.(30-4*$ecart_pred).'% align=center class=tableitems style="font-variant:small-caps; size:small; font-style:italic;'.$back_avant.'">';
	if ($nopred) echo "<b>(pas de prédécesseur)</b>";
	else {
		echo '<table width=100% cellspacing=0 cellpadding=0>';
		echo '<tr class=commentitems style="font-variant:small-caps; background-color:'.$backdark.';"><td width=5px></td><td>période</td><td></td><td>champ</td></tr>';
		$last_display_periode="";
		foreach ($pred as $p) display_cluster_title($p,"pred");
		echo '</table>';
		}	
	echo '</td>';

	if ($ecart_pred==1)	{
		echo '<td width=2% align=center style="background-color:'.$backdark.'; vertical-align:middle;">'; 
		if (!$nopred) echo (' (...) ');
		echo '</td><td width=2%></td>';
		}
	
	echo '<td width=40% align=center style="font-size:medium; font-variant:small-caps; font-style:italic;">';
	
	echo '<span id="mainbox">';
	$nonlist=array();
	echo selective_column_tt($arraykey,$list_of_concepts,$nonlist,$nonlist,1);
	echo '</span>';
	
	foreach ($succ as $s) {
 		$sid=$s['id']."_".str_replace(" ","_",$s['periode']);
 		echo '
 			<span style="display:none;" id="box'.$sid.'">'.selective_column_tt($arraykey,$s['termes'],$s['plus'],$s['minus'],0).'
			</span>';
	}
	
	foreach ($pred as $s) {
		$sid=$s['id']."_".str_replace(" ","_",$s['periode']);
		echo '
			<span style="display:none;" id="box'.$sid.'">'.selective_column_tt($arraykey,$s['termes'],$s['plus'],$s['minus'],0).'
			</span>';
	}
	
	echo '</td>';
	
	if ($ecart_succ==1)	{
		echo '<td width=2%></td><td width=2% style="background-color:'.$backdark.'; vertical-align:middle;">';
		if (!$nosucc) echo ' (...) ';
		echo '</td>';
		$back_apres='background-color:white;';
		}
		
	echo '<td width='.(30-4*$ecart_succ).'% align=center class=tableitems style="font-variant:small-caps; size:small; font-style:italic;'.$back_apres.'">';	
	if ($nosucc) echo "<b>(pas de successeur)</b>"; 
	else {
		echo '<table width=100% cellspacing=0 cellpadding=0>';
		echo '<tr class=commentitems style="font-variant:small-caps; background-color:'.$backdark.';"><td width=5px></td><td>période</td><td></td><td>champ</td></tr>';
		$last_display_periode="";
		foreach ($succ as $s) display_cluster_title($s,"succ");
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

	//print_r($list_of_concepts);
	
	$data=array();
	$datalabels=array();
	$j=0;
	$maxdata=0;
	foreach($list_of_concepts as $idconcept)
	{
		//echo '<br>';
	
		$id_concept = intval( $idconcept);
		//echo '<br>'.'concept '.$id_concept.' ["'.$dico_termes[$id_concept].']"<br>';
		$sql = 'SELECT COUNT(*), Reponse.jours FROM(SELECT id_b,jours FROM socsem WHERE concept='.$id_concept.' and jours>= '.$dated.' GROUP by id_b) Reponse GROUP by jours';
		$resultat=mysql_query($sql);
		$data[$j]=array();
		$datalabels[$j]=$dico_termes[$id_concept];
		while ($ligne=mysql_fetch_array($resultat))	
			{
				$tmpval=intval($ligne[0]);
				$data[$j][intval($ligne[1])]=$tmpval;//echo "jour:".$ligne[1].' nb de billets= '.$ligne[0].'<br>';
				if ($tmpval>$maxdata) $maxdata=$tmpval;
			}
		
		//print_r($data);
		$j=$j+1;
	}
	//print_r($data);
	//print_r($datalabels);
	echo '<p>';
	$maxdata*=1.05;
	//print_r($data);
	include('include/cluster-evol-helper.php');
	echo $myscript;

}



echo "</td><td width=2.5%></td>";
echo "</tr>";
echo "</table>";

//on ferme l'acces à la base de donnees
mysql_close();

//if ($nav == "soc")
//{ echo "<a href = social_net.php?id_cluster=".$id_cluster.'&periode='.$periode.">visualiser le réseau</a>";}

echo '
		<script> $(function() { '.$jscriptmp.' });</script>';


include("footer.php");
//unlink("json_data.txt");

?>

</body>
</html>