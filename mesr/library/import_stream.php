<?php
include("../parametre.php");
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");




	$fichier="term_neighborhood_temporal_data.txt"; 
	
	$adresse_root= $_SERVER['DOCUMENT_ROOT'];
	$fichier=$adresse_root.'/'.$dbid."/".$fichier;
	// $fichier=$adresse_root.'/'.$dbid."/".$exportid."/".$fichier;   Correction David suite à pb d'import
	
	echo $fichier;
	echo '<br>';
	$tabfich=file($fichier); 
	// $legende = $tabfich[0];
	// 	echo $legende.'<br>';
	// 	$ligne_v = explode(';',$legende);
	// 	print_r($ligne_v);
	// 	$nb_parametres = count($ligne_v) -5;
	// 	if ($nb_parametres != 5){echo "nouveau parametre a importer: modifier la structure des tables...!!!"; }


	 $q="DROP table if exists term_neighborhood";

	 $q1=mysql_query($q);
	 if($q1){echo "deleted the table term_neighborhood....<br>";}
	 else{echo mysql_error();}

	$sql = "CREATE TABLE term_neighborhood (id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY, idx VARCHAR(10), js text)";
	$resultat=mysql_query($sql);	
	echo "created the table term_neighborhood....<br>";

	echo count($tabfich);
	for( $i = 0 ; $i < count($tabfich) ; $i++ )
	{
	
	$ligne = $tabfich[$i];
	$ligne_v = explode("\t",$ligne);
	$index =  $ligne_v[0];
	echo '<br>'.$index.'<br>';
	$texte =  mysql_real_escape_string($ligne_v[1]);

	#echo $texte;
	$sql="INSERT INTO term_neighborhood (idx,js) VALUES ('$index','$texte')";
	//echo $sql;
	$q1 = mysql_query($sql);
	if($q1){echo "created field....<br>";}else{echo "<br>".mysql_error()."<br>";}
			
	}

?>