<?php
//include("library/fonctions_php.php");


if(isset( $_GET['q'])) $q = $_GET['q']; else die("<h1>Vous avez emprunté un mauvais chemin.</h1>");
if (stristr($q,"champ:"))
{
	$type='cluster';
	$parties = (explode('champ:',$q));
	$adresse2 =  $parties[1];
	$adresse =str_replace(')','',$adresse2);
	$parties = (explode(',',$adresse));
	$cluster = $parties[0];
	$periode = $parties[1];
	$periode =str_replace(' ','',$periode);
	$adresse ="cluster.php?id_cluster=".$cluster."&periode=".$periode."&nav=sem";
	header("Location: $adresse");	
}
else
{
	$type = 'terme';
	include("parametre.php");
	mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
	@mysql_select_db($database) or die( "Unable to select database");
	//à préciser lorsqu'on est sur sciencemapping.com
	if ($user!="root") mysql_query("SET NAMES utf8;");
	echo $q;
	$name =  str_replace('é','Ã©',$q);//clean_utf8(clean_text($q));
	
	$sql = "SELECT id from concepts where forme_principale = '$name'";
	echo  $sql;
	echo '<br>';
	$resultat2 = mysql_query($sql) or die ("Requêtse non executée.");
	while ($ligne2=mysql_fetch_array($resultat2))
	{$id = $ligne2['id'];}
	$adresse ="chart.php?id_concept=".$id.'&periode=-1';
	echo $adresse;
	header("Location: $adresse");	
	
}




?>
