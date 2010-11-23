<?
//remplit les auteurs_id dans la table billet.

include("../parametre.php");

//connexion a la base de donnees
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

$sql = "SELECT id,site from billets";
echo $sql;
$resultat = mysql_query($sql);
while ($ligne=mysql_fetch_array($resultat))
{
	$id_b = $ligne['id'];
	$name =  $ligne['site'];
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
	echo $name.' '.$id.'<br>';
	
	$sql = "UPDATE billets SET auteur_id= '$id' WHERE  id  = '$id_b'";
	echo $sql;
	mysql_query($sql);	
}


?>
