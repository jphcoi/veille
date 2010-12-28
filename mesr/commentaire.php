<?php

function fetch_url() {
$url = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
return $url;
}

?>


<?php
function delete_comm($comm_unique)
{
	$sql = "delete from commentaires where id='".$comm_unique."'";
	mysql_query($sql);
	$adresse=$_SERVER['REQUEST_URI'];
	//on enleve le suppr
}

	//on entre les données dans la base
	include("parametre.php");
	mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
	@mysql_select_db($database) or die( "Unable to select database");
	//à préciser lorsqu'on est sur sciencemapping.com
	if ($user!="root") mysql_query("SET NAMES utf8;");

	
	if(isset($_GET['suppr'])) {delete_comm($_GET['suppr']);}

	if(isset( $_GET['id_concept'] ) ){
			  $id_concept = intval($_GET['id_concept'] );}
			else
			 { $id_concept='';}
	if(isset( $_GET['id_cluster'] ) ){
			  $id_cluster = intval($_GET['id_cluster'] );}
			else
			 { $id_cluster='';}
	
	if( isset( $_GET['id_source'] ) )
			{
			  $id_source = intval($_GET['id_source'] );}
			else
			  {$id_source='';
			}
	if( isset( $_GET['periode'] ) )
			{
			  $periode =  $_GET['periode'] ;}
			else{
			  $periode='';
			}
	$ur = $_SERVER['REQUEST_URI'];
//	$urs = explode("?", $ur);
//	$vue = $urs[0];
//	$urs = explode("/", $vue);
//	$vue = end($urs);
	$urs = explode("&suppr=", $ur);
	$vue=$urs[0];
	$username = $_COOKIE['ID_my_site'];
	$day=date('Y-m-d');
		
		
		
    if (isset($_POST["commentaire"]))
    {
		$commentaire = $_POST["commentaire"];
			
        $comm_unique = ' '.$username.' '.$commentaire.' '.$vue.' '.$day.' '.$id_periode.' '.$id_concept.' '.$id_source.' '.$id_cluster;
		
		// on insère le commentaire courant dans la table commentaire.
		$sql = "INSERT IGNORE INTO commentaires(id, username, commentaire,jour,periode, concept,blog,vue,comm_unique,cluster) VALUES('','$username','$commentaire','$day' ,'$periode','$id_concept','$id_source','$vue','$comm_unique','$id_cluster')";


	    mysql_query($sql) or die('Erreur SQL !'.$sql.'<br>'.mysql_error());

	}

	//Affichage des commentaires associés à la vue courante:
		
	$sql ='';	
		
		if (strlen($vue)>0) $sql = $sql." AND vue = '".$vue."'";
		if (strlen($id_concept)>0) $sql = $sql." AND concept = '".$id_concept."'";	
		if (strlen($id_source)>0) $sql = $sql." AND blog = '".$id_source."'";	
		if (strlen($id_cluster)>0) $sql = $sql." AND cluster = '".$id_cluster."'";	
		if (strlen($periode)>0) $sql = $sql." AND periode = '".$periode."'";	

	$sql = "SELECT * FROM commentaires WHERE 1=1  ".$sql;
	$resultat=mysql_query($sql);

	$check2 = mysql_num_rows($resultat);
	//echo 'nombre de res'.$check2;
	//if the name exists it gives an error
	if ($check2 != 0) {
		echo  '<table class=tableitems>';
		// lecture et affichage des résultats sur 2 colonnes, 1 résultat par ligne.    
		while( $row  =  mysql_fetch_array ( $resultat )) {
			$ccv = explode('?',$_SERVER['REQUEST_URI']);
			if (count($ccv)>1)
			{$cc='&';}
			else
			{$cc='?';}
			
			//bouton de suppression qu'on rajoute à la fin de la ligne
			if ($username==$row['username'])
			{$suppression='<input type="button" name="refresh" value="X" onclick="location.replace(\''.$_SERVER['REQUEST_URI'].$cc.'suppr='.$row['ID'].'\');">'; 
}else{$suppression='';}


			echo  '<tr class=commentitems valign=top
			 width=10%><td><b>'.$row['username']."</b> (".$row['jour']."):</td><td width=80%>".'"<i>'.$row['commentaire'].'</i>"</td><td width=10%>'.$suppression.'</td>';
 			echo  '</tr>' . "\n" ;
		}
			
		
		echo  '</tr></table><table width=97.5%><tr><td width=100% style="background-color:cyan;"></td></tr></table>';
	}
	mysql_close();


?>


<table><tr><td class=commentitems valign=top><b>utilisateur "<? echo $username;?>"</b><br>ajoutez votre<br>commentaire ici:</td><td width=2.5%></td>
<td><form id="test2" method="POST" action="<?php echo fetch_url()?>">
<textarea rows="4" cols="80" name="commentaire" wrap="physical" MAXLENGTH="1000"></textarea></td>
<td>

<table>
<tr valign=top>
<td valign=top>
<input type="button" name="refresh" value="Afficher tous les commentaires" onclick="location.replace('commentaires.php');">
<br><br>
</td>
</tr>
<tr valign=bottom>
<td valign=bottom>
<input id="envoyer" type="submit" value="Enregistrer commentaire" />
</td></tr>
</table>

</td>
</table>
</form>

