<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");

if( isset( $_GET['id_source'] ) )   $id_source = intval( $_GET['id_source'] );
if(isset($_GET['nav'])) $nav=$_GET['nav']; else $nav="sem";

//connexion a la base de donnees
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

//creation $dico_termes
create_concept_string();

//bloc recuperation source
$resultat=mysql_query(" SELECT auteurs FROM auteurs WHERE id=".$id_source) or die ("Requête non executée.");
$source=mysql_fetch_array($resultat);


$titleheader='"'.$source[0].'" [source]';
if ($nav=="soc") $jsprotovis="TRUE";
if ($nav=="sem") $jsjquery='TRUE';
include("include/header.php");
include("banner.php");



echo '<table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td>';
echo '<h2 class=subtitle>exploration de la source "<i>'.$source[0].'</i>"';
echo '</h2>';
echo '</td><td width=2.5%></td></tr></table>';


/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
$sql = "SELECT id,title,date,permalink,jours,content,site,concepts_id from billets where  auteur_id LIKE "."'%, ".$id_source.",%' OR auteur_id LIKE "."'%[".$id_source.",%' OR auteur_id LIKE "."'%[".$id_source."]%' OR auteur_id LIKE "."'%, ".$id_source."]%' ORDER by jours";
//echo $sql;
$resultat_liste_b=mysql_query($sql);

	//puis on fait une requête sur chacun d'entre eux pour savoir à quel(s) cluster(s) ils correspondent
	if ($multi_auteurs==1)
	{$commande_sql = "SELECT cluster, periode,id_billet from biparti where id_billet IN (SELECT id from billets where auteur_id LIKE "."'%, ".$id_source.",%' OR auteur_id LIKE "."'%[".$id_source.",%' OR auteur_id LIKE "."'%[".$id_source."]%' OR auteur_id LIKE "."'%, ".$id_source."]%'  )";}
	else	{$commande_sql = "SELECT cluster, periode,id_billet from biparti where id_billet IN (SELECT id from billets where auteur_id='[$id_source]')";}
	

$commande_sql=$commande_sql.' and overlap_size/cluster_size>0.15';
	$liste_cluster_billet=mysql_query($commande_sql);

$billets=array();
$clusters=array();
$nbillets=0;
$billets[$id]=array();
while ($ligne=mysql_fetch_array($resultat_liste_b))
	{
	$nbillets++;
	//on recupere ici directement l'ensemble des billets dont la id_source est l'auteur
	$id=$ligne['id'];
	$billets[$id]['id']=$id;
	$billets[$id]['index']=$nbillets;
	$billets[$id]['site']=$ligne['site'];
	$billets[$id]['title']=$ligne['title'];
	$billets[$id]['date']=$ligne['jours'];
	$billets[$id]['permalien']=$ligne['permalink'];
	$billets[$id]['content']=$ligne['content'];
	$billets[$id]['concepts']=$ligne['concepts_id'];
	//echo $ligne['concepts_id'];
	}

	
	
	while ($billes=mysql_fetch_array($liste_cluster_billet)){
		$billets[$billes['id_billet']]['cluster']=array();
		$clu=$billes['cluster'];
		$per=$billes['periode'];
		$billets[$billes['id_billet']]['cluster'][]=array('id'=>$clu,'periode'=>$per);
		$longid=$clu."_".$per;
		if (!array_key_exists($per,$clusters))
			$clusters[$per]=array('periode'=>$per,'clusters'=>array());
		if (!array_key_exists($clu,$clusters[$per]['clusters']))
			$clusters[$per]['clusters'][$clu]=array('id'=>$clu,'periode'=>$per,'billets'=>array());
		$clusters[$per]['clusters'][$clu]['billets'][]=$billes['id_billet'];
	}


/////////////////////////////////////////
/////////////////////////////////////////
//fabrication liste des PÉRIODES (et sélection par défaut de la dernière si non spécifiée)
/////////////////////////////////////////
/////////////////////////////////////////

//on extrait d'abord la liste totale des périodes: $total_list_periods
$commande_sql = "SELECT periode from cluster GROUP BY periode";
$total_periode_sql=mysql_query($commande_sql);
while ($total_periode_sql_i=mysql_fetch_array($total_periode_sql))
{
	$total_periods_raw[]=$total_periode_sql_i['periode'];
}
	$total_list_periods=sort_periods($total_periods_raw);


//ainsi que la liste des périodes "actives"
$periods_raw=array();
$list_periods=array();//initialiser pour ne pas avoir de mauvaises surprises sur sources sans période
foreach ($clusters as $c) $periods_raw[]=$c['periode'];
if (count($periods_raw)>0){
	$list_periods=sort_periods($periods_raw);}

	
// si la variable periode est définie dans l'adresse on la prend
if(isset( $_GET['periode'])) 
	$my_period=$_GET['periode']; 
// sinon on prend par défaut la dernière période des champs thématiques
else {
	if (count($periods_raw)>0) $my_period=end($list_periods);
	// ou bien s'il n'y a pas de champ thématique on prend toutes les périodes, valeur "-1"
	else $my_period=-1;
	}

// ensuite si la période est effectivement -1, on prend tous les billets sur toutes les périodes pour faire le nuage de termes, sinon on prend juste la période en cours
if ($my_period!=-1) {
 	$periodex=explode_period($my_period);
 	$wherecondition=" AND jours<=".$periodex["to"]." AND jours>=".$periodex["from"];
}
// sinon juste ceux de la période
else $wherecondition="";

$sql = "SELECT id_b,concept from socsem WHERE auteur=".$id_source.$wherecondition;
$resultat=mysql_query($sql);
$list_id_post=array();
$billets_id=array();
$billets_content=array();
$liste_concepts=array();
while ($ligne1=mysql_fetch_array($resultat)) {$list_id_post[]=($ligne1['id_b']);
$liste_concepts[]=($ligne1['concept']);}
if (count($list_id_post)>0) {
	// y-a-t-il des billets associes ?
	$list_billets_sql=extract_permalink($list_id_post);
	if (mysql_num_rows($list_billets_sql)>0) {
		while ($ligne=mysql_fetch_array($list_billets_sql))
			{
			
			$billets_href[]=$ligne['permalink'];
			$billets_site[]=$ligne['site'];
			$billets_date[]=$ligne['date'];
			$billets_title[]=$ligne['title'];
			$billets_id[]=$ligne['id'];
			$billets_content[]=$ligne['content'];
			
			
			}
		}
}
//print_r($liste_concepts);

/////////////////////////////////////////


	echo "<table width=100% class=tableitems>";
	echo "<tr valign=top>";
	echo "<td width=2.5%></td>";
	
	echo "<td>";
	
	echo "<table width=100% class=specialsubbanner cellspacing=0>";
	
	echo "<tr><td align=left>";
	
	$select_string='<b style="color:black;">';
	$sem="informations sémantiques";
	$soc="réseau social";
	$post="billets";
	$href_string='<a href=source.php?id_source='.$id_source."&periode=".arrange_periode($my_period).'&nav=';
	
	if ($nav=="sem") echo $select_string.$sem."</b>"; else echo $href_string."sem>".$sem."</a>";
	echo " - ";
	if ($nav=="soc") echo $select_string.$soc."</b>"; else echo $href_string."soc>".$soc."</a>";
	//echo " - ";
	//if ($nav=="post") echo $select_string.$post."</b>"; else echo $href_string."post>".$post."</a>";
	echo "</td>";
	
	echo"<td align=right>";
	
	
//on affiche les flèches pour se ballader dans les période
display_arrow_periodes($my_period,$total_list_periods);

	
		echo '<form action="source.php" method="get" style="display:inline";>';
		echo '<select name="periode">';
	
	
	foreach($total_list_periods as $per){
		echo '<option value='.$per;
		if ($per==$my_period) echo(" selected");
		if (in_array($per,$list_periods))
		{
			echo '>'.get_string_periode($per).'</option>';
		}
		else
		{
			echo '>('.get_string_periode($per).')</option>';		
		}
	
	}
	echo '<option value="-1" ';
	if ($my_period==-1) echo "selected";
	echo '>*pour toutes les périodes*</option>';
	echo '</select>';
	echo '<input type="hidden" value="'.$id_source.'" name="id_source">';
	echo '<input type="hidden" value="'.$nav.'" name="nav">';
	echo '<input type="submit" value="Changer">';
	echo '</form>';
	
	
	echo "</td></tr></table>";
	
	echo "<td width=2.5%></td>";
	echo "</tr></table>";
	
	echo '<p>';
	
if ($nav=="sem"){
	echo "\n<table width=100% class=tableitems>";
	echo "<tr><td width=2.5%></td><td width=95%>";
	
	echo '<table width=100%>';
	echo '<tr valign=top>';
	// PARTIE INFORMATION CHAMPS THEMATIQUES

	echo '<td width=55%>';

	$periode_a_faire=array();
	if ($my_period==-1) {
	foreach ($clusters as $ca) { $periode_a_faire[]=$ca['periode']; }
	$periode_a_faire=sort_periods($periode_a_faire);
	}
	else $periode_a_faire[]=$my_period;
	//print_r($periode_a_faire);
	//echo '<br>';
	//print_r($c);
	$clause_aff=1;
	if ($my_period==-1)
	{
		if (count($list_periods)==0)
		{
			$clause_aff=0;
		}
	}
	else
	{
		if (!in_array($my_period,$list_periods))
		{
			$clause_aff=0;
		}
	}

	if ($clause_aff==0)
		{
		echo "<div class=small>NB: cette source n'est associée à aucun champ thématique sur ";
		if ($my_period==-1) {
			echo "aucune période";
			}
		else echo "cette période";
		echo "</div>";
		}
	else {
		echo '<table class=tableitems width=100% rules=groups>';
		echo '<tr style="font-variant:small-caps; font-size:small; margin-top:2px; margin-bottom:-2px;">';
		echo '<td>nom du champ auquel participe la source</td>';
		echo '<td width=45pt></td>';
		echo '<td>&uarr;/&darr;</td>';
		echo '<td width=5%></td>';
		echo '<td>numéros des billets';
		//echo '<br>(voir aussi l\'onglet "billets")';
		echo '</td>';
		echo '</tr>';

	foreach ($periode_a_faire as $pp) {
		$pp=derange_periode($pp);
		$c=$clusters[$pp];
		$cstr=array();
		if (count($c)>0){ //y-a-t-il au moins des clusters pour la periode?
			if ($my_period==-1) 
				echo "<tr><td class=small>période ".get_string_periode(arrange_periode($pp))."</td></tr>";
			foreach ($c['clusters'] as $cp) {
				$resultat=mysql_query("SELECT label_1,label_2,lettre,nb_sons,nb_fathers FROM cluster WHERE id_cluster=".$cp['id']." AND periode=\"".$cp['periode']."\" ORDER by periode,concept") or die ("Requête non executée.");
				while ($ligne=mysql_fetch_array($resultat)) $clu_tmp[]=$ligne;
				$clu_tmp=end($clu_tmp);
				$label1=$clu_tmp['label_1'];
				$label2=$clu_tmp['label_2'];
				$lettre=$clu_tmp['lettre'];
				$nbsons=$clu_tmp['nb_sons'];
				$nbfathers=$clu_tmp['nb_fathers'];
				$hrefh='href=cluster.php?id_cluster='.$cp['id'].'&periode='.arrange_periode($cp['periode']).'>';
				$href='<a '.$hrefh;
				$href12='<a href=meta12.php?label1='.$label1.'&label2='.$label2.'&periode='.$my_period.'>';
				$ktmp='<b>'.$dico_termes[$label1].'</b> - '.$dico_termes[$label2];
				//if ($lettre=="") $lettre="-";
				$arrows="";
				if ($nbfathers>0) $arrows.="&uarr;";
				if ($nbsons>0) $arrows.="&darr;";
				$strtmp='<td><a class=dead '.$hrefh;
				//$strtmp.=$cp['id'].'/';
				$strtmp.=$lettre.$arrows.'</a></td>';
				$strtmp.='<td width=3%></td>';
				$strtmp.='<td>';
				$bend=end($cp['billets']);
				foreach ($cp['billets'] as $b)
					{
						$strtmp.='<a href=#b'.$billets[$b]['index'].'>'.$billets[$b]['index'].'</a>';
						if ($bend!=$b) $strtmp.=", ";
					}
				$strtmp.='</td>';
				$cstr[$ktmp][]=array('href'=>$href,'href12'=>$href12,'billets'=>$strtmp);
			}
			
			uksort($cstr,"strcasecmpcam");
			$odd=0;
			foreach (array_keys($cstr) as $key) {
				$odd+=1;
				if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
				echo '<tr valign=top style="background-color:'.$bckclr.';">';
				echo '<td>';
				if (count($cstr[$key])>1) echo $cstr[$key][0]['href12']; else echo $cstr[$key][0]['href'];
				echo $key;
				echo '</a>';
				echo '</td>';
				foreach($cstr[$key] as $s){
					echo '<td></td>';
					echo $s['billets'];
					echo '</tr>';
					if ($s!=end($cstr[$key])) echo '<tr valign=top style="background-color:'.$bckclr.';"><td></td>';
					}
				echo '</tr>';
			}
			echo '<tr><td></td></tr>';
		}
	}
	echo '</table>';
	}

echo '</td>';

echo '<td width=2%></td>';
//PARTIE INFORMATION TAG CLOUD

echo '<td width=43%>';


///////////////////////////////////////
//bloc pour générer le nuage de termes
///////////////////////////////////////
$limite_termes= 30;
echo '<div class=small style="font-size:small;">principaux termes employés par la source';
//if ($my_period!=-1) echo " durant la période";
echo " <i>(max ".strval($limite_termes)." termes)</i></div>";

function generate_cloud_2d($occ_termes,$dico_termes,$my_period,$limite_termes)
{
	global $backdark,$backdarker,$hrefroot;
	//arsort($occ_termes);
	$tags=array();
	$compt=0;
		foreach($occ_termes as $key => $value)
		{
			$compt=$compt+1;
			if ($compt < intval($limite_termes)+1)
			{
			$lien = 'chart.php?id_concept='.$key.'&periode='.$my_period;
			$tag = "<a href=\"".$lien."\"";
			$tag =$tag." title=\"";
			$tag =$tag.'titre';
			$size = strval(3+ 3*floor(log(2+$value*6)));
			$tag =$tag."\" rel=\"tag\" style = \"font-size:".$size."pt;\" color = \"0xff0099\">".$dico_termes[$key]."</a>\n";
			$tags[]=$tag;
			}
		}
	usort($tags,"strcasecmpcam");
	$te=end($tags);
	echo '<table width=100% style="background-color:'.$backdark.';border-style:solid; border-width:1px;border-color:SlateGray;" cellpadding=5 cellspacing=0>';
	echo '<tr class="ui-widget-cluster"><td>';
	foreach ($tags as $t) 
		{
		echo $t;
		if ($t!=$te) echo " &nbsp; &nbsp; ";
		}
	echo "</td></tr></table>";
}
//print_r($liste_concepts);

$occ_termes = array_count_values($liste_concepts);
generate_cloud_2d($occ_termes,$dico_termes,$my_period,$limite_termes);
///////////////////////////////////////////////
//fin du bloc pour générer le nuage de termes
///////////////////////////////////////////////

echo '<br>';

echo "<div class=subbanner>billets</div><br>";



	echo '<table class=tableitems width=100% rules=groups>';
	echo '<tr style="font-variant:small-caps; size:small; margin-top:2px; margin-bottom:-2px;">';
	echo '<td>numéro</td><td width=1%></td><td align=left>date</td><td width=16px></td><td width=1%></td><td>titre</td>';
	echo '</tr>';

		
	$odd=0;
	$jscriptmp.="
	";
	foreach ($billets as $b) {
		if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
		$addtr="";
		//billet qui est aussi associé à la période
		if (in_array($b['id'],$billets_id)) $addtr.='background-color:'.$bckclr.';';
		//billet qui est aussi dans socsem, ie au moins associé à un terme de l'étude
		//if (!in_array($b['id'],$all_billets_id)) $addtr.="text-decoration: line-through; ";
		if ($addtr!="") $addtr=' style="'.$addtr.'"';
		//if ((count($periode_a_faire)==0) AND ($my_period==-1)) echo '<tr valign=top>'; else 
		
		if (in_array($b['id'],$billets_id)) {
			$odd+=1;
			echo '<tr valign=top'.$addtr.'>';
			echo '<td><a name=\'b'.$b['index'].'\'></a><b>'.$b['index'].'</b></td>';
			echo '<td>';
			echo '</td>';
			if ($type_date=='jour')
			{echo "<td style=\"font-size:x-small;\">".adjust_date_jours($b['date'])."</td>";}
			else
			{echo "<td style=\"font-size:x-small;\">".$b['date']."</td>";}
			echo '<td></td>';
			$chaine=prone($b['content'],$size_abstract);
			echo "<td>";

			$concepts = implode("; ", convert_forme_principale_id($b['concepts']));
			$permalien = $b['permalien'];
			$chaine = prone($chaine,8);

			$index=$b['index'];
			$jscriptmp.="
				$('#dialog".$index."')
					.dialog({ autoOpen: false, stack: true, modal:true, width:600, closeOnEscape:true})
					.click(function () { $('#dialog".$index."').dialog('close'); });
				$('#opener".$index."').click(function(e) {
					if (!$('#dialog".$index."').dialog('isOpen')) 
						$('#dialog".$index."').dialog('option','position', [$(this).position().left+50,'center']).dialog('open');
					else
						$('#dialog".$index."').dialog('close');
					return false;
					});";
			echo display_box(clean_text(str_replace("popostrophe","'",$b['title'])),str_replace(' *** ','; ',$b['site']),str_replace('"',' ',$chaine),$permalien,$concepts,$type_notice,$b['index']);
			echo "</a>";
			echo "</td>";
			echo "</tr>";
		}
	}
	echo '</table>';		
//	echo "<div class=grayb><i>(les billets de la période en cours sont signalés par un fond grisé alternant; ceux qui ne sont associés à aucun terme de l'étude sont barrés)</i></div><br>";

echo '</td>';

echo '</tr>';
echo '</table>';
	
/////////////////////////////////////////	


	

echo "</td>";

echo "<td width=2.5%></td>";
echo "</tr>";
echo "</table>";

echo "<br>";
}	



///******************
///******************
///BLOC RESEAU SOCIAL
///******************
///******************

if ($nav=="soc"){
		
	echo '<script src="AC_OETags.js" language="javascript"></script>';
		
		
			
	$cluster_name =$source[0];


	$sql_aut = "SELECT auteur1,auteur2 from soc where (auteur1 =".$_GET['id_source']." OR auteur2=".$_GET['id_source'].")";
	if (strlen($periode)>2)
	{$peroides = explode_period($periode);	
	$sql_aut =$sql_aut.' AND jours<='.$peroides['to']." AND jours>=".strval(intval($peroides['from']));}
	$res_auteur2=mysql_query($sql_aut);
	$auteurs=array();
	$legende=array();
	while ($sql_auteurs=mysql_fetch_array($res_auteur2))
	{
		if ($sql_auteurs['auteur1']==$sql_auteurs['auteur2'])
			{}
		else
		{	
			$auteurs[]=$sql_auteurs['auteur1'];
		$auteurs[]=$sql_auteurs['auteur2'];
		$resultat=mysql_query("SELECT auteurs FROM auteurs WHERE id=".$sql_auteurs['auteur2']) or die ("Requête non executée.");
		$source=mysql_fetch_array($resultat);
		$nom=$source[0];
		$legende[$sql_auteurs['auteur2']]=strip_www($nom);
		
		$resultat=mysql_query("SELECT auteurs FROM auteurs WHERE id=".$sql_auteurs['auteur1']) or die ("Requête non executée.");
		$source=mysql_fetch_array($resultat);
		$nom=$source[0];
		$legende[$sql_auteurs['auteur1']]=strip_www($nom);
	}
		
	}
	//	print_r($auteurs);
	
	$aut_occ = array_count_values($auteurs);
	if (count($aut_occ)>1){ 
	foreach($aut_occ as $key => $value) {
	$liste_auteur_unique[] = $key;
	}
	
	$sql = "SELECT auteur1, auteur2 from soc where (";
	$compteur = 0;
	foreach($liste_auteur_unique as $value)
	{
		$compteur = $compteur+1;
		$sql =$sql."auteur1 = '".$value."'";
		if ($compteur < count($liste_auteur_unique))
		{
			$sql =$sql." OR ";
		}
	}
	$sql  = $sql.") AND (";
	
	$compteur = 0;
	foreach($liste_auteur_unique as $value)
	{
		$compteur = $compteur+1;
		$sql =$sql."auteur2 = '".$value."'";
		if ($compteur < count($liste_auteur_unique))
		{
			$sql =$sql." OR ";
		}
	}
	$sql  = $sql.")";
	if (strlen($periode)>2)//on prend le réseau social sur la période uniquement
	{$peroides = explode_period($periode);
	$sql =$sql.' AND jours<='.$peroides['to']." AND jours>=".strval(intval($peroides['from']));
	}
//		echo $sql;
	$res = mysql_query($sql);
	while ($sql_liens=mysql_fetch_array($res))
	{
		$aut1 = $sql_liens['auteur1'];
		$aut2 = $sql_liens['auteur2'];
		if ($aut1 ==$aut2)
		{}
		else
		{
			$liens_from[]=$aut1;
			$liens_to[]=$aut2;
			//echo 'lien de '.$legende[$aut1].' à '.$legende[$aut2].'<br>';	
		}
	}
	
	// DEFINITION DU RESEAU POUR AFFICHAGE JAVASCRIPT
	
	include("include/network-def.php");
		
	// DEFINITION DU SCRIPT JAVASCRIPT POUR AFFICHER LE RESEAU
	
	include("include/network-vis.php");

	//.event("click", function () self.location="source.php?id_source="+d.ourID+"&periode='.arrange_periode($my_period).'&nav=soc")
	
	//$tmpfile = ecrire_json($liste_auteur_unique,$legende,$aut_occ,$liens_from,$liens_to,$cluster_name,0);
	//$tmpfile="TMP/TMP_9v8A67.txt";
	//echo $tmpfile;
	//$tmpfile='json_data.txt';
	
	//affichage de l'appli flex
	
	echo "\n<table width=100%><tr valign=top>";
	echo "<td width=2.5%></td><td width=95%>";
	
	echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;"><tr>';
	echo "<td align=left width=10%>";
	echo "</td>";
	echo "<td align=middle width=80%>";
	echo "<i><b>";
	if ($my_period!=-1) echo "PÉRIODE ACTUELLE"; else echo "AGRÉGATION SUR TOUTES LES PÉRIODES";
	echo "</b></i>";
	echo "</td>";
	echo "<td align=right width=10%>";
	echo "</td>";
	echo "</tr>";
	$nopred=1;
	$nosucc=1;
	if (strlen($periode)<3){$nopred=0; $nosucc=0;}
	if ($periodex["from"]=='83'){$nopred=0;}
	if ($periodex["to"]=='166'){$nosucc=0;}
	
	
	echo "<tr>";
		//on affiche les clusters précédents et un lien vers leur réseau social
	echo "<td align=left width=10%><i>";
	if ($nopred==0)
		{if ($my_period!=-1) echo "<b>(pas de période antérieure)</b>";}
	else
	  {
		echo '<table class=commentitems align=center width=100% cellspacing=0 cellpadding=5 style="font-variant:small-caps; size:small; font-style:italic;">';
	
		echo '<tr>';
		echo '<td>';
		$persuivante = strval(intval($periodex["from"])-7).'-'.strval(intval($periodex["to"])-7);
		if ($my_period!=-1) echo '<a href=source.php?id_source='.$_GET['id_source']."&periode=".$persuivante."&nav=soc".'>RÉSEAU À LA PÉRIODE PRÉCÉDENTE</a>';
		echo '<br>';
		echo '</td>';
		echo '</tr>';
			
		echo '</table>';
	}
	echo "</td>";
	
		
	echo "<td align=middle width=80%><i>";

	// AFFICHAGE RESEAU JAVASCRIPT
	echo $myscript;

	echo "</i></td>";
	
	echo "<td align=right width=10%><i>";
		
	if ($nosucc==0) 
		{if ($my_period!=-1) echo "<b>(pas de période postérieure)</b>";}
	else
		{
		echo '<table class=commentitems align=center width=100% cellspacing=0  cellpadding=5 style="font-variant:small-caps; size:small; font-style:italic;">';

			$label1=$s['label1'];
			$label2=$s['label2'];
			echo '<tr>';
			echo '<td align=right>';
			$persuivante = strval(intval($periodex["from"])+7).'-'.strval(intval($periodex["to"])+7);
			if ($my_period!=-1) {echo '<a href=source.php?id_source='.$_GET['id_source']."&periode=".$persuivante."&nav=soc";
			echo '>';
			echo 'RÉSEAU À LA PÉRIODE SUIVANTE';
			echo '</a>';
			}
			echo '<br>';
			echo '</td>';
			echo '</tr>';
		echo '</table>';
	}

	echo "</i></td>";
	
	echo "</tr></table>";
		
	echo "<td width=2.5%></td>";
	
	echo "</tr>";

	echo '</table>';
	}
	else
	{
		echo "\n<table width=100% class=tableitems>";
		echo "<tr><td width=2.5%></td><td width=95%>";
		
		echo '<div class=grayb style="font-variant:small-caps;"><i>cette source n\'est liée à aucune autre source sur la période considérée</i></div><br>';
		echo "</td></tr></table>";
		
	}
}
///FIN BLOC RESEAU SOCIAL



///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////

if ($nav=="post")

{
	echo "<table width=100% class=tableitems>";
	echo "<tr><td width=2.5%></td><td width=95%>";
	echo "<div class=subbanner>billets</div><br>";
//	echo "<div class=grayb><i>(les billets de la période en cours sont signalés par un fond grisé alternant; ceux qui ne sont associés à aucun terme de l'étude sont barrés)</i></div><br>";
	
	echo '<table class=tableitems width=100% rules=groups>';
	echo '<tr style="font-variant:small-caps; size:small; margin-top:2px; margin-bottom:-2px;">';
	echo '<td>numéro</td><td width=1%></td><td align=left>date</td><td width=16px></td><td width=1%></td><td>titre</td>';
	echo '</tr>';

		
	$odd=0;
	$jscriptmp.="
	";
	foreach ($billets as $b) {
		if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
		$addtr="";
		//billet qui est aussi associé à la période
		if (in_array($b['id'],$billets_id)) $addtr.='background-color:'.$bckclr.';';
		//billet qui est aussi dans socsem, ie au moins associé à un terme de l'étude
		//if (!in_array($b['id'],$all_billets_id)) $addtr.="text-decoration: line-through; ";
		if ($addtr!="") $addtr=' style="'.$addtr.'"';
		//if ((count($periode_a_faire)==0) AND ($my_period==-1)) echo '<tr valign=top>'; else 
		
		if (in_array($b['id'],$billets_id)) {
			$odd+=1;
			echo '<tr valign=top'.$addtr.'>';
			echo '<td><a name=\'b'.$b['index'].'\'></a><b>'.$b['index'].'</b></td>';
			echo '<td>';
			echo '</td>';
			if ($type_date=='jour')
			{echo "<td style=\"font-size:x-small;\">".adjust_date_jours($b['date'])."</td>";}
			else
			{echo "<td style=\"font-size:x-small;\">".$b['date']."</td>";}
			echo '<td></td>';
			$chaine=prone($b['content'],$size_abstract);
			echo "<td>";

			$concepts = implode("; ", convert_forme_principale_id($b['concepts']));
			$permalien = $b['permalien'];
			$chaine = prone($chaine,8);

			$index=$b['index'];
			$jscriptmp.="
				$('#dialog".$index."')
					.dialog({ autoOpen: false, stack: true, modal:true, width:600, closeOnEscape:true})
					.click(function () { $('#dialog".$index."').dialog('close'); });
				$('#opener".$index."').click(function(e) {
					if (!$('#dialog".$index."').dialog('isOpen')) 
						$('#dialog".$index."').dialog('option','position', [$(this).position().left+50,'center']).dialog('open');
					else
						$('#dialog".$index."').dialog('close');
					return false;
					});";
			echo display_box(clean_text(str_replace("popostrophe","'",$b['title'])),str_replace(' *** ','; ',$b['site']),str_replace('"',' ',$chaine),$permalien,$concepts,$type_notice,$b['index']);
			echo "</a>";
			echo "</td>";
			echo "</tr>";
		}
	}
	echo '</table>';		
	echo "</td><td width=2.5%></td>";
	
	echo "</tr>";
	
	echo "</table>";
	
	
}	



//on ferme l'acces à la base de donnees
mysql_close();


echo '
	<script> $(function() { '.$jscriptmp.' });</script>';

include("footer.php");
?>

</body>
</html>
