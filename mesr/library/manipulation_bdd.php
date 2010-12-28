<?php
include("../parametre.php");
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

$sql="SELECT id_b FROM socsem group by id_b ";
$res = mysql_query($sql);
$check2 = mysql_num_rows($res);

 while( $row  =  mysql_fetch_array($res)) {
//    echo  '<tr>' ;
$auteurs[]=$row['id_b'];
//    echo $row['periode'].'<br>';
//    echo $row['concept'].'<br>';
//echo  '</tr>' . "\n" ;
}
foreach($auteurs as $i)
{
	$sql="SELECT id FROM billets WHERE id =".$i."";
//	echo $sql;
	$res = mysql_query($sql);
	$check2 = mysql_num_rows($res);
	if ($check2==0)
	{
		echo $i;
		$autbad[]=$i;
	}
	
}
print_r($autbad);
foreach($autbad as $i)
{
	$sql="DELETE FROM socsem where id_b=".$i."";
	$res = mysql_query($sql);
	$sql="DELETE FROM soc where id_b=".$i."";
	$res = mysql_query($sql);
	
}


//$sql="SELECT * FROM phylo";
//$res = mysql_query($sql);
//$check2 = mysql_num_rows($res);

// while( $row  =  mysql_fetch_array($res)) {
  //  echo  '<tr>' ;
    //echo $row['id_cluster_1'].'<br>';
//echo  '</tr>' . "\n" ;


?>

