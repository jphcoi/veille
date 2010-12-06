<?php
include("../parametre.php");
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");




	$fichier="term_neighborhood_temporal_data.txt"; 
	
	$adresse_root= $_SERVER['DOCUMENT_ROOT'];
	$fichier=$adresse_root.'/'.$dbid."/".$fichier;
	// $fichier=$adresse_root.'/'.$dbid."/".$exportid."/".$fichier;   Correction David suite à pb d'import
	
  echo $adresse_root;
	echo '; ';
  echo $dbid;
  echo '; ';
	echo $exportid;
	echo '; ';
	echo $fichier;
	$tabfich=file($fichier); 
	$legende = $tabfich[0];
	echo $legende.'<br>';
	$ligne_v = explode(';',$legende);
	print_r($ligne_v);
	$nb_parametres = count($ligne_v) -5;
	if ($nb_parametres != 5){echo "nouveau parametre a importer: modifier la structure des tables...!!!"; }
	else{$q="DROP table if exists ";
	$q1=mysql_query($q);
	if($q1){echo "deleted the table cluster....<br>";}
	else{echo mysql_error();}


	$sql = "CREATE TABLE cluster (id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY, js TEXT)";

	$resultat=mysql_query($sql);	
	
	for( $i = 1 ; $i < count($tabfich) ; $i++ )
	{

	$ligne = $tabfich[$i];
	echo '<br>'.$ligne.'<br>';
	$ligne_v = explode(';',$ligne);
	$periode =  $ligne_v[0];
	$id_cluster =  $ligne_v[1]; 
	$label_1 =  $ligne_v[2];
	$label_2 =  $ligne_v[3];
	$termes = $ligne_v[4];
	$termes = explode(' ',$termes);
	$pseudo = $ligne_v[5];
	$cluster_size = $ligne_v[6];
	$density = $ligne_v[7];
	$nb_fathers = $ligne_v[8];
	$nb_sons= $ligne_v[9];
	$identifiant_unique = $id_cluster.'_'.$periode;
	for ( $j = 0 ; $j < count($termes) ; $j++ )
		{
			$terme=intval($termes[$j]);
			
			$sql="INSERT INTO cluster(id,id_cluster,label_1,label_2,periode,concept,pseudo,cluster_size,density, nb_fathers, nb_sons,identifiant_unique) VALUES ('','$id_cluster','$label_1','$label_2','$periode','$terme','$pseudo','$cluster_size','$density','$nb_fathers','$nb_sons','$identifiant_unique')";
			
			echo $sql;
			$q1 = mysql_query($sql);
			if($q1){echo "created field....<br>";}else{echo "<br>".mysql_error()."<br>";}
			
		}
	}
}

?>