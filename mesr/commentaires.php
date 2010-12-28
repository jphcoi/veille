<?
include("login_check.php");
include("include/header.php");
include("library/fonctions_php.php");
include("banner.php");
include("parametre.php");
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");
if(isset($_GET['suppr'])) {delete_comm($_GET['suppr']);}
$username = $_COOKIE['ID_my_site'];

function delete_comm($comm_unique)
{
	$sql = "delete from commentaires where id='".$comm_unique."'";
	mysql_query($sql);
	$adresse=$_SERVER['REQUEST_URI'];
	//on enleve le suppr
}
//initialisation pour ne pas s'emmerder

if( isset( $_GET['depuis'] ) )
		{
		  $depuis =  $_GET['depuis'] ;}
		else{$depuis=-1;}
		
if( isset( $_GET['user'] ) )
		{
		 $userc =  $_GET['user'] ;}
		else{$userc='';}
		

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
//if(isset( $_GET['periode'])) $my_period=$_GET['periode']; else $my_period=arrange_periode(end($list_of_periods));

//*******************************************
//bloc choix du terme
//*******************************************

$resultat=mysql_query("select id,auteurs FROM auteurs") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)){
	$id=$ligne['id'];
	$dictionaire_sources[$id]=$ligne['auteurs'];
}


$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)){
	$id=$ligne['id'];
	$terme=$ligne['forme_principale'];
	$add_concept_now=1;
	$dico_termes[]=$terme;
	$dictionaire_termes[$id]=$terme;
	$dico_ids[]=$id;
}


echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>ensemble des commentaires ';
echo '</h2></td><td width=2.5%></td></tr></table>';







//boite utilisateur

$dico_users=array();
$resultat=mysql_query("select username FROM commentaires GROUP BY username ORDER by username") or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)){
	if (strlen($ligne['username'])>0)
	{$dico_users[]=$ligne['username'];}
}

echo '<table width=100%><tr>';
echo '<td width=2.5%></td>';
echo '<td width=95%>';


echo '<table width=100% class=specialsubbanner cellspacing=0><tr align=left>';
echo '<td align=left style="color:black;font-weight:bold;">utilisateur sélectionné: ';
echo '<form action="commentaires.php" method="get" style="display:inline;">';
echo '<select name="user">';
for ($i=0;$i<count($dico_users);$i++)  {
	echo '<option value='.$dico_users[$i];
	if ($userc == $dico_users[$i]){echo (' selected');}
	echo '>';
	echo $dico_users[$i];
	echo '</option>';					
	}
	
echo '<option value=""';
if (strlen($userc)==0) echo (' selected');
echo '>tous</option>';		
echo '</select>';

//echo 
echo '</td>';
echo '<td align=left style="color:black;font-weight:bold;">';
echo ' depuis: ';
echo '<select name="depuis">';
echo '<option value='.'1';
if (intval($depuis)==1) echo (' selected');
echo '>1 jour</option>';					

echo '<option value='.'3';
if (intval($depuis)==3) echo (' selected');
echo '>3 jours</option>';					

echo '<option value='.'7';
if (intval($depuis)==7) echo (' selected');
echo '>1 semaine</option>';

echo '<option value='.'31';
if (intval($depuis)==31) echo (' selected');
echo '>1 mois</option>';

echo '<option value="-1"';
if (intval($depuis)==-1) echo (' selected');
echo '> toujours</option>';		
echo '</select>';
echo '</td>';
echo '<td align=right style="color:black;font-weight:bold;">';
echo '<input type="submit" value="Choisir">';
echo '</form>';
echo "</td>";
echo '</tr></table>';


//Affichage des commentaires associés à la vue courante:




$sql ='';	
$date_anterieur = get_date_since($depuis);	
	if ((intval($depuis))>0) $sql = $sql." AND jour > '".$date_anterieur."'";	
	if ((strlen($userc))>0) $sql = $sql." AND username = '".$userc."'";	







$sql = "SELECT * FROM commentaires WHERE 1=1  ".$sql." ORDER by periode";
$resultat=mysql_query($sql);
$check2 = mysql_num_rows($resultat);
//echo strval($check2).' commentaires: <br>';

echo '<br>';
$ch=1;

//legende du tableau
if ($check2 != 0) {
	echo  '<table class=tableitems>';
	echo  '<tr class=commentitems valign=top width=15% cellspacing=0 cellpadding=0><td><b>utilisateur</b></td>
	<td> <b>date</b></td><td width=30%><b>commentaire</b><td width=23%><b>type de vue</b><td width=12%><b>periode</b><td width=5%><b>suppr</b></td></tr>';
	echo  '<tr width=100% style="background-color:darkcyan;" height=4px><td></td><td></td><td></td><td></td><td></td><td></td></tr>';

	
	while( $row  =  mysql_fetch_array ( $resultat )) {
		
		if (strlen($row['username'])>0){

			//utilisateur
			echo  '<tr class=commentitems valign=top width=20%><td><i>'.$row['username']."</i></td>";
	
			//jour du commentaire
			$date_commentaire = strtotime($row['jour']);
			$newd = date('n/j/Y', strtotime('+0 days', $date_commentaire));
			$dt = strftime("%e %b %Y", strtotime($newd));  
			$d_c=date("Y-m-d", strtotime($newd));  
			
			//commentaire
			echo "<td>";
			echo $dt."</td><td width=40%>".'"<i>'.'<a href="'.$row['vue'].'">'.$row['commentaire'].'</a>'.'"</i>' ;
			
			//type d'objet
			echo "<td width=15%>";
			if (intval($row['blog'])>0){
					echo '<i>source</i>: '.$dictionaire_sources[$row['blog']];
				}
			if (intval($row['concept'])>0){
				echo '<i>concept</i>: '.$dictionaire_termes[$row['concept']];
				}
			if (intval($row['cluster'])>0){
					$resultats=mysql_query("select label_1, label_2 FROM cluster WHERE id_cluster=".$row['cluster']." AND periode = '".derange_periode($row['periode'])."' GROUP BY identifiant_unique") or die ("Requête non executée.");
					while ($lignes=mysql_fetch_array($resultats)){
				$cluster_name=$dictionaire_termes[$lignes['label_1']].'-'.$dictionaire_termes[$lignes['label_2']];}
				echo '<i>cluster</i>: '.$cluster_name;
				}
			if (intval($row['cluster'])+intval($row['concept'])+intval($row['blog'])==0){
	
				$urs = explode("?", $row['vue']);
				$vue = $urs[0];
				$urs = explode("/", $vue);
				$vue = end($urs);
				if ($vue=="entree_sources.php") $vue_txt='liste des sources';
				if ($vue=="entree_clusters.php") $vue_txt='liste des clusters';
				if ($vue=="entree_termes.php") $vue_txt='liste des termes';
				if ($vue=="phylo.php") $vue_txt='liste des fils thématiques';
				if ($vue=="global.php") $vue_txt='carte';
				
				echo '<i>'.$vue_txt.'</i>';
				}
				
			echo '</td>';
	
			//periode
			echo "<td width=12%>";
			if (strlen($row['periode'])>0)
				{echo get_short_string_periode($row['periode']);}
			else
				{echo 'toute la période';}
			echo '</td>';
			$ccv = explode('?',$_SERVER['REQUEST_URI']);
			if (count($ccv)>1)
				{$cc='&';}
			else
				{$cc='?';}
			if ($username==$row['username'])
				{
				$suppression='<input type="button" name="refresh" value="X" onclick="location.replace(\''.$_SERVER['REQUEST_URI'].$cc.'suppr='.$row['ID'].'\');">'; 
				}
			else {$suppression='';}
			echo '<td width=5%>'.$suppression.'</td>';
			echo  '</tr>' . "\n" ;
			echo  '<tr width=100% style="background-color:cyan;"><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
			}
		}
	echo  '</table>';
}
else
{
	echo '<b style="font-variant:small-caps;">aucun commentaire.</b>';
}
echo '<td width=2.5%></td>';
echo "</tr>";
echo "</table>";
//on ferme l'acces à la base de donnees

mysql_close();







//echo  '<tr class=commentitems valign=top width=10%><td><b>'.$row['username']."</b> (".$row['jour']."):</td><td width=85%>".'"<i>'.$row['commentaire'].'</i>" [cluster:'.$cluster_name.']';
//echo 'lien:'.$row['vue'];
//echo '</td>';
//	echo  '</tr>' . "\n" ;
//}






?><br>
</body>
</html>
