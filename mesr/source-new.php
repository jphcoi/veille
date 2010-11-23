<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");

if( isset( $_GET['id_source'] ) )   $id_source = intval( $_GET['id_source'] );

//connexion a la base de donnees
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

//creation $dico_termes
create_concept_string();

//bloc recuperation source
$resultat=mysql_query("SELECT auteurs FROM auteurs WHERE id=".$id_source) or die ("Requête non executée.");
$source=mysql_fetch_array($resultat);


$titleheader='"'.$source[0].'" [source]';
include("include/header.php");
include("banner.php");



echo '<table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>exploration de la source "<i>'.$source[0].'</i>"</h2></td><td width=2.5%></td></tr></table>';


/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
$sql = "SELECT id,title,date,permalink,jours from billets where auteur_id='$id_source' ORDER by date";
$resultat_liste_b=mysql_query($sql);
$billets=array();
$clusters=array();
$nbillets=0;
while ($ligne=mysql_fetch_array($resultat_liste_b))
{
	$nbillets++;
	//on recupere ici directement l'ensemble des billets dont la id_source est l'auteur
	$id=$ligne['id'];
	$billets[$id]=array();
	
	$billets[$id]['id']=$id;
	$billets[$id]['index']=$nbillets;
	$billets[$id]['title']=$ligne['title'];
	$billets[$id]['date']=$ligne['date'];
	$billets[$id]['permalink']=$ligne['permalink'];
	
	//puis on fait une requête sur chacun d'entre eux pour savoir à quel(s) cluster(s) ils correspondent

	$commande_sql = "SELECT cluster, periode from biparti where id_billet = ".$id;
	$liste_cluster_billet=mysql_query($commande_sql);
	
	$billets[$id]['cluster']=array();
	while ($billes=mysql_fetch_array($liste_cluster_billet)){
		$clu=$billes['cluster'];
		$per=$billes['periode'];
		$billets[$id]['cluster'][]=array('id'=>$clu,'periode'=>$per);
		$longid=$clu."_".$per;
		if (!array_key_exists($per,$clusters))
			$clusters[$per]=array('periode'=>$per,'clusters'=>array());
		if (!array_key_exists($clu,$clusters[$per]['clusters']))
			$clusters[$per]['clusters'][$clu]=array('id'=>$clu,'periode'=>$per,'billets'=>array());
			
		$clusters[$per]['clusters'][$clu]['billets'][]=$id;
	}
}

/////////////////////////////////////////
//HORS LIGNE
// $clusters["91 112"]=array('periode'=>"91 112",'clusters'=>array(array('id'=>'609','billets'=>array(35,60,59,134,140,156,390,400,410,500,520,670,678,671)),array('id'=>'610','billets'=>array(45,57)),array('id'=>'585','billets'=>array(42,22))));
// $clusters["113 114"]=array('periode'=>"113 114",'clusters'=>array(array('id'=>'609','billets'=>array(690,691))));
// $btmp=array(35,60,59,134,140,156,390,400,410,500,520,670,678,671,42,22,45,57,690,691);
// for ($i=0;$i<count($btmp);$i++){ $bt=$btmp[$i];
// 	$billets[$bt]=array('index'=>$i+1,'date'=>'2010-01-01 00:'.($i+10).':00','permalink'=>'localhost/~camille/wwk','title'=>'test - '.$bt,'id'=>$bt);}



/////////////////////////////////////////
/////////////////////////////////////////
//fabrication liste des PÉRIODES (et sélection par défaut de la dernière si non spécifiée)
/////////////////////////////////////////
/////////////////////////////////////////

$periods_raw=array();
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

$sql = "SELECT id_b,auteur,jours from socsem WHERE auteur=".$id_source.$wherecondition." GROUP by id_b";
$resultat=mysql_query($sql);
$list_id_post=array();
$billets_id=array();
while ($ligne=mysql_fetch_array($resultat)) $list_id_post[]=($ligne['id_b']);
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
			}
		}
}


/////////////////////////////////////////

echo "<table width=100% class=tableitems>";
echo "<tr valign=top>";
echo "<td width=2.5%></td>";

echo "<td>";

echo "<table width=100% class=specialsubbanner cellspacing=0>";

echo "<tr><td align=left>";
echo "informations sémantiques";
if ($my_period!=-1) echo " sur la période";
echo "</td><td align=right>";


echo '<form action="source.php" method="get" style="display:inline";>';
echo '<select name="periode">';
foreach($list_periods as $per){
	echo '<option value='.$per;
	if ($per==$my_period) echo(" selected");
	echo '>'.get_string_periode($per).'</option>';
}
echo '<option value="-1" ';
if ($my_period==-1) echo "selected";
echo '>*pour toutes les périodes*</option>';
echo '</select>';
echo '<input type="hidden" value="'.$id_source.'" name="id_source">';
echo '<input type="submit" value="Changer">';
echo '</form>';


echo "</td></tr></table>";

echo '<p>';


echo '<table width=100%>';
echo '<tr valign=top>';
// PARTIE INFORMATION CHAMPS THEMATIQUES

echo '<td width=60%>';

$periode_a_faire=array();
if ($my_period==-1) {
	foreach ($clusters as $ca) { $periode_a_faire[]=$ca['periode']; }
	$periode_a_faire=sort_periods($periode_a_faire);
}
else $periode_a_faire[]=$my_period;

if (count($periode_a_faire)==0)
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
	echo '<td>nom du champ</td>';
	echo '<td width=3%></td>';
	echo '<td>id</td>';
	echo '<td width=5%></td>';
	echo '<td>numéros des billets (cf. ci-dessous)</td>';
	echo '</tr>';

	foreach ($periode_a_faire as $pp) {
		$pp=derange_periode($pp);
		$c=$clusters[$pp];
		$cstr=array();
		if (count($c)>0){ //y-a-t-il au moins des clusters pour la periode?
			if ($my_period==-1) 
				echo "<tr><td class=small>période ".get_string_periode(arrange_periode($pp))."</td></tr>";
			foreach ($c['clusters'] as $cp) {
				$resultat=mysql_query("SELECT label_1,label_2 FROM cluster WHERE id_cluster=".$cp['id']." AND periode=\"".$cp['periode']."\" ORDER by periode,concept") or die ("Requête non executée.");
				while ($ligne=mysql_fetch_array($resultat)) $clu_tmp[]=$ligne;
				$clu_tmp=end($clu_tmp);
				$label1=$clu_tmp['label_1'];
				$label2=$clu_tmp['label_2'];
				$hrefh='href=cluster.php?id_cluster='.$cp['id'].'&periode='.arrange_periode($cp['periode']).'>';
				$href='<a '.$hrefh;
				$href12='<a href=meta12.php?label1='.$label1.'&label2='.$label2.'&periode='.$my_period.'>';
				$ktmp='<b>'.$dico_termes[$label1].'</b> - '.$dico_termes[$label2];
				$strtmp='<td><a class=dead '.$hrefh.$cp['id'].'</a></td>';
				$strtmp.='<td width=3%></td>';
				$strtmp.='<td>';
				$bend=end($cp['billets']);
				foreach ($cp['billets'] as $b)
					{
						$strtmp.='<a href=#b'.$billets[$b]['index'].'>'.$billets[$b]['index'].'</a> <i style="font-size:xx-small;">('.$billets[$b]['id'].')</i>';
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

echo '<td width=38%>';


//on essaye également de récupérer l'ensemble des termes liés à la source.
$sql = "SELECT concept FROM socsem WHERE id_b =";
$longueur = count($billets);
$compteur = 0;
foreach ($billets as $b) 
	{	
		$compteur=$compteur+1;
		$sql = $sql.$b['id'];
		if ($compteur==$longueur)
			{}
		else
			{$sql=$sql." OR id_b=";}
	}
$resultat=mysql_query($sql);
$liste_concepts=array();
while ($ligne=mysql_fetch_array($resultat))
{	
	$liste_concepts[]=$ligne['concept'];
}
///////////////////////////////////////
//bloc pour générer le nuage de termes
///////////////////////////////////////
$limite_termes= 30;
echo '<div class=small style="font-size:small;">Principaux termes employés par la source';
//if ($my_period!=-1) echo " durant la période";
echo " <i>(max ".strval($limite_termes)." termes)</i></div>";

function generate_cloud_2d($occ_termes,$dico_termes,$my_period,$limite_termes)
{
	global $backdark,$backdarker;
	//arsort($occ_termes);
	$tags=array();
	$compt=0;
		foreach($occ_termes as $key => $value)
		{
			$compt=$compt+1;
			if ($compt < intval($limite_termes)+1)
			{
			$lien = 'http://maps.sciencemapping.com/MESR/chart.php?id_concept='.$key.'&periode='.$my_period;
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
	echo '<table width=100% style="background-color:'.$backdark.';border-style:solid;
border-width:1px;border-color:SlateGray;" cellpadding=5 cellspacing=0><tr><td>';
	foreach ($tags as $t) 
		{
		echo $t;
		if ($t!=$te) echo " &nbsp; &nbsp; ";
		}
	echo "</td></tr></table>";
}

$occ_termes = array_count_values($liste_concepts);
generate_cloud_2d($occ_termes,$dico_termes,$my_period,$limite_termes);
///////////////////////////////////////////////
//fin du bloc pour générer le nuage de termes
///////////////////////////////////////////////

echo '</td>';

echo '</tr>';
echo '</table>';
	
/////////////////////////////////////////	


echo "</td>";

echo "<td width=2.5%></td>";
// 
// echo "<td width=17.5%><div class=subbanner>activité</div><br>";
// echo "<b>[TBD]</b><p><br>";
// 
// echo "</td>";
// echo "<td width=2.5%></td>";

echo "</tr>";
echo "</table>";


	
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////


echo "\n<table width=100% class=tableitems>";
echo "<tr><td width=2.5%></td><td width=95%>";
echo "<br><div class=subbanner>billets</div><br>";
echo "<div class=grayb><i>(les billets de la période en cours sont signalés par un fond grisé alternant; ceux qui ne sont associés à aucun terme de l'étude sont barrés)</i></div><br>";

echo '<table class=tableitems width=100% rules=groups>';
echo '<tr style="font-variant:small-caps; size:small; margin-top:2px; margin-bottom:-2px;"><td>numéro</td><td width=1%></td><td align=left>date</td><td width=1%></td><td>titre</td></tr>';

// ON REPREND LA LISTE DE TOUS LES BILLETS ET C'EST CA QU'ON AFFICHE
// PREFIXE = "all_"
$sql = "SELECT id_b,auteur,jours from socsem WHERE auteur=".$id_source." GROUP by id_b";
$resultat=mysql_query($sql);
$all_list_id_post=array();
$all_billets_id=array();
while ($ligne=mysql_fetch_array($resultat)) $all_list_id_post[]=($ligne['id_b']);
if (count($all_list_id_post)>0) {// y-a-t-il des billets associes ?
	$all_list_billets_sql=extract_permalink($all_list_id_post);
	while ($ligne=mysql_fetch_array($all_list_billets_sql))
		{
			$all_billets_href[]=$ligne['permalink'];
			$all_billets_site[]=$ligne['site'];
			$all_billets_date[]=$ligne['jours'];
			$all_billets_title[]=$ligne['title'];
			$all_billets_id[]=$ligne['id'];
		}
}

$odd=0;
foreach ($billets as $b) {
	$odd+=1;if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
        $addtr="";
        //billet qui est aussi associé à la période
        if (in_array($b['id'],$billets_id)) $addtr.='background-color:'.$bckclr.';';
        //billet qui est aussi dans socsem, ie au moins associé à un terme de l'étude
        if (!in_array($b['id'],$all_billets_id)) $addtr.="text-decoration: line-through; ";
        if ($addtr!="") $addtr=' style="'.$addtr.'"';
        //if ((count($periode_a_faire)==0) AND ($my_period==-1)) echo '<tr valign=top>'; else 
        echo '<tr valign=top'.$addtr.'>';

	
		echo '<td><a name=\'b'.$b['index'].'\'></a><b>'.$b['index'].'</b></td>';
		echo '<td>';
		echo '</td>';
		echo "<td style=\"font-size:x-small;\">".adjust_date_jours($b['date'])."</td>";
		echo '<td></td>';
		echo "<td><small>(".$b['id'].")</small> <a href=".$b['permalink'].">".clean_text(str_replace("popostrophe","'",$b['title']))."</a></td>";
		echo "</tr>";
	//}
	}
echo '</table>';


echo "</td><td width=2.5%></td>";

echo "</tr>";

echo "</table>";


//on ferme l'acces à la base de donnees
mysql_close();


include("footer.php");
?>

</body>
</html>

<?
// function generate_cloud($occ_termes,$dico_termes,$my_period,$limite_termes)
// {
// 	$fichier = $_SERVER['DOCUMENT_ROOT'].'/MESR_bac/library/wp-cumulus-example/tagcloud2.xml';
// 	$fichier_out=fopen($fichier,'w'); 
// 	arsort($occ_termes);
// 
// 	fputs($fichier_out,"<tags>\n");	
// 	$compt=0;
// 		foreach($occ_termes as $key => $value)
// 		{
// 			$compt=$compt+1;
// 			if ($compt < intval($limite_termes)+1)
// 			{
// 			$lien = 'http://maps.sciencemapping.com/MESR/chart.php?id_concept='.$key.'&periode='.$my_period;
// 			$tag = "<a href=\"".$lien."\"";
// 			$tag =$tag." title=\"";
// 			$tag =$tag.'titre';
// 			$size = strval(7+ 3*floor(log(2+$value*6)));
// 			$tag =$tag."\" rel=\"tag\" style = \"font-size:".$size."pt;\" color = \"0xff0099\">".$dico_termes[$key]."</a>\n";
// 			fputs($fichier_out,"$tag");	}
// 		}
// 			
// 	fputs($fichier_out,"</tags>");	
// 	fclose($fichier_out);
// }
?>