<? 

function microtime_float() {
    return array_sum(explode(' ', microtime()));
}
$temps_debut = microtime_float(); 
/* Votre script ... */
/* Encore du code */

include("fonctions_php.php");
include("../parametre.php");

mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
if ($user!="root") mysql_query("SET NAMES utf8;");

if(isset( $_GET['first'])) {$first=$_GET['first'];} else {$first = 0;}

if ($first) {$q="DROP table if exists biparti";
$q1=mysql_query($q);
if($q1){echo "deleted the table biparti....<br>";}
else{echo mysql_error();}

$sql = "CREATE TABLE biparti (id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY, cluster INT(6), periode VARCHAR(10), id_billet INT(10), id_auteur VARCHAR(200), billet_size INT(5),cluster_size INT(5),overlap_size INT(5),id_unique INT(10), champ_unique VARCHAR(20),champ_reel_unique VARCHAR(30) )";
$q1=mysql_query($sql);
$sql = "ALTER TABLE biparti ADD UNIQUE(champ_reel_unique)";
$q1=mysql_query($sql);
}


$sqldeja = "SELECT champ_unique from biparti group by champ_unique ";
$resultatdeja=mysql_query($sqldeja);
$clusterdeja=array();
while ($lignedeja=mysql_fetch_array($resultatdeja)) {$clusterdeja[]=$lignedeja['champ_unique'];}


$sql = "SELECT id_cluster, periode,identifiant_unique from cluster GROUP by identifiant_unique";
$resultatde=mysql_query($sql);
$check2 = mysql_num_rows($resultatde);
echo "<br>".$check2."<br><br>";



$compteur = 0;
$temps_fin1 = microtime_float();
/* Affichage du temps d'exécution, arrondi à 4 chiffres après la virgule */
echo '<br>Temps d\'execution du script, on rentre dans la boucle : '.round($temps_fin1 - $temps_debut, 4).'<br><br>';


while ($lignede=mysql_fetch_array($resultatde)) 
{
	
	$temps_fin2 = microtime_float();
	/* Affichage du temps d'exécution, arrondi à 4 chiffres après la virgule */
	echo '<br>Temps d\'execution du script, dans la boucle : '.round($temps_fin2 - $temps_fin1, 4).'<br><br>';
	$temps_fin1  = $temps_fin2;
	$compteur=$compteur+1;
	echo '<br>ligne numero '.$compteur.'<br>'; 
	echo "<HR width = 100%>";
	$id_cluster = $lignede['id_cluster'];
	$identifiant_unique = $id_cluster.'_'.$lignede['periode'];
	
if (in_array($identifiant_unique,$clusterdeja))	{echo '<br>deja vu<br>';}
else
{
	
	$list_of_concepts=array();

								
	$periode=$lignede['periode'];
	echo $id_cluster."<br>";
	$periode = str_replace(' ','-',$periode);
	echo $periode."<br>";
	

$list_of_concepts=array();
$sql="SELECT concept FROM cluster WHERE id_cluster=".$id_cluster." AND periode=\"".derange_periode($periode)."\"";
//echo $sql;
$resultat=mysql_query($sql) or die ("Requête non executée.");
while ($ligne=mysql_fetch_array($resultat)) $list_of_concepts[]=$ligne['concept'];




//// BLOC COMPOSITION


$liste_of_posts = scan_billet($list_of_concepts,$periode);



$temps_fin3 = microtime_float();
/* Affichage du temps d'exécution, arrondi à 4 chiffres après la virgule */
echo '<br>avant denumere les billets : '.round($temps_fin3 - $temps_fin2, 4).'<br><br>';


if (count($liste_of_posts)>0)
{
echo "<br>liste de ".count($liste_of_posts)."billets<br>";
//print_r($liste_of_posts);
$cles = array_keys($liste_of_posts);
$resultat = extract_permalink($cles);
$permaliens=array();
$id_billets=array();
$date=array();
$site=array();
$titre=array();
$nb_termes=array();
while( $row  =  mysql_fetch_array ( $resultat )) 
{
	$temps_fin4 = microtime_float();
	/* Affichage du temps d'exécution, arrondi à 4 chiffres après la virgule */
	echo '<br><br>on evalue chaque post : '.round($temps_fin4 - $temps_fin3, 4).'<br><br>';
	$temps_fin3 = $temps_fin4;
	
	$titre[]=str_replace('popostrophe',"'",$row['title']);
	$date[]=$row['date'];
	$id_billets[]=$row['id'];
	$permaliens[$row['id']]=$row['permalink'];
	$site[$row['id']]=$row['site'];

	$nb_auteur = 1+substr_count($row['site']," *** "); 
//	echo $nb_auteur;
	//echo 'nombre d auteurs: '.$nb_auteur.'<br>';
//	echo $row['id'].'<br>';
	
	$nb_termes[$row['id']] = floatval($liste_of_posts[$row['id']])/floatval($nb_auteur); 
	
}

$i=-1;
$periode = str_replace('-',' ',$periode);
echo 'on evalue chaque permalien : ';
foreach($permaliens as $key => $value)
{
	
	$temps_fin5 = microtime_float();
	/* Affichage du temps d'exécution, arrondi à 4 chiffres après la virgule */
	echo 't:'.round($temps_fin5 - $temps_fin4, 4);
	$temps_fin4 = $temps_fin5;
	
	$i = $i+1;
//	echo $i;
	$cluster_size = count($list_of_concepts);
	$billet_size = "0";
	$id_billet= $id_billets[$i];
	$overlap_size =  $nb_termes[$id_billet];
	
	$sql = "SELECT auteur_id from billets where id = '$id_billet'";
	$q1 = mysql_query($sql);
	while ($row = mysql_fetch_array($q1))
	{
		$id_auteur=$row['auteur_id'];
		str_replace('[','[ ',$id_auteur);
		str_replace(']',' ]',$id_auteur);
		str_replace(', ',' , ',$id_auteur);
	}
	
	$temps_fin6 = microtime_float();
	/* Affichage du temps d'exécution, arrondi à 4 chiffres après la virgule */
	//echo '<br><br>on a tourve auteur : '.round($temps_fin6 - $temps_fin5, 4).'<br><br>';

	
	
#	$sql = "SELECT COUNT(*) from socsem where id_b = '$id_billet' group by auteur";
	$sql = "SELECT concepts_id from billets where id = '$id_billet'";
//	echo $sql;
	$q1 = mysql_query($sql);
	while ($row = mysql_fetch_array($q1))
	{	$billet_size = $row[0];}
	$billet_size=1+substr_count($billet_size,","); 
	$temps_fin7 = microtime_float();
	/* Affichage du temps d'exécution, arrondi à 4 chiffres après la virgule */
	//echo '<br><br>on a tourve taille du billet : '.round($temps_fin7 - $temps_fin6, 4).'<br><br>';
	
	
	$champ_unique = $id_cluster.'_'.$periode;
	$champ_reel_unique = $id_cluster.'_'.$periode.'_'.$id_billet;
	
//	echo '<br>'.$champ_unique;
	$sql="INSERT IGNORE INTO  biparti(cluster,periode,id_billet,id_auteur, billet_size,cluster_size,overlap_size,id_unique, champ_unique,champ_reel_unique) VALUES ('$id_cluster','$periode','$id_billet','$id_auteur','$billet_size','$cluster_size','$overlap_size','$id_unique','$champ_unique','$champ_reel_unique')";
//	echo $sql;
	$q1 = mysql_query($sql);	
}



//echo 'fin';
//echo '</TABLE>';
}
else {echo "AUCUN BILLET NE SEMBLE CORREsPONDRE !!!!!!!!!!!!!!!!!!";}

}

}

//on ferme l'acces à la base de donnees
mysql_close();

?>

</body>
</html>
