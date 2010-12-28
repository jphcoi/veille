<?php
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
	$type = 'source';
	include("parametre.php");
	mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
	@mysql_select_db($database) or die( "Unable to select database");
	//à préciser lorsqu'on est sur sciencemapping.com
	if ($user!="root") mysql_query("SET NAMES utf8;");
	
	$name =  $q;
	$name = str_replace("http://",'',$name);
	$name = str_replace("www.",'',$name);
	$name_v = explode('/',$name);
	$name = '';
	for( $i = 0 ; $i < count($name_v) ; $i++ )
	{
		$name = $name.$name_v[$i];
	}
	
	$sql = "SELECT id from auteurs where auteurs = '$name'";
	$resultat2 = mysql_query($sql);
	while ($ligne2=mysql_fetch_array($resultat2))
	{$id = $ligne2['id'];}

	  if(stristr($_SERVER['HTTP_REFERER'], 'source') === FALSE) {
	$adresse ="source.php?id_source=".$id.'&periode=-1'.'&nav=sem';
	header("Location: $adresse");	}
	else
	{
		$adresse ="source.php?id_source=".$id.'&periode=-1'.'&nav=soc';
		header("Location: $adresse");
	}
	
}




?>
