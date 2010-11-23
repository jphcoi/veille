
<?php
// Connects to your Database
//mysql_connect("your.hostaddress.com", "username", "password") or die(mysql_error());
//mysql_select_db("Database_Name") or die(mysql_error());

// Connects to your Database
//mysql_connect("your.hostaddress.com", "username", "password") or die(mysql_error());
//mysql_select_db("Database_Name") or die(mysql_error());
include("../parametre.php");
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

$q="DROP table if exists phylo";
$q1=mysql_query($q);
if($q1){echo "deleted the table phylo....<br>";}
else{echo mysql_error();}

$sql = "CREATE TABLE phylo (id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY, id_cluster_1 VARCHAR(10), periode_1 VARCHAR (50), id_cluster_2 VARCHAR(10), periode_2 VARCHAR (50))";

$resultat=mysql_query($sql);



$adresse_root= $_SERVER['DOCUMENT_ROOT'];
$fichier="ExportPhyloDetails.txt";
$fichier=$adresse_root.'/'.$dbid."/".$exportid."/".$fichier;
echo $fichier;
	$tabfich=file($fichier); 
	for( $i = 0 ; $i < count($tabfich) ; $i++ )
	{

	$ligne = $tabfich[$i];
	echo $ligne.'<br>';
	$ligne_v = explode(' ',$ligne);
	$periode_1 =  $ligne_v[0].' '.$ligne_v[1];
	$id_cluster_1 =  $ligne_v[2]; 
	$periode_2 =  $ligne_v[3].' '.$ligne_v[4];
	for ( $j = 5 ; $j < count($ligne_v) ; $j++ )
		{
			$id_cluster_2 = intval($ligne_v[$j]);
			$sql="INSERT INTO  phylo(id,id_cluster_1,periode_1,id_cluster_2,periode_2) VALUES ('','$id_cluster_1','$periode_1','$id_cluster_2','$periode_2')";
			
			echo $sql;
			$q1 = mysql_query($sql);
			if($q1){echo "created field....<br>";}else{echo "<br>".mysql_error()."<br>";}
			
		}
	}


?>