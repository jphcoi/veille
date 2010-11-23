<?
include('admin_check.php');
include("include/header.php");
include("banner.php");
function delete_user($user)
{
	$sql = "delete from users where username='".$user."'";
	mysql_query($sql);
	//$adresse=$_SERVER['REQUEST_URI'];
}


if(isset($_GET['suppr'])) {delete_user($_GET['suppr']);}
include("parametre.php");
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

//This code runs if the form has been submitted
if (isset($_POST['submit'])) {

//This makes sure they did not leave any fields blank
if (!$_POST['username'] | !$_POST['pass'] | !$_POST['pass2'] ) {
die('You did not complete all of the required fields');
}

// checks if the username is in use
if (!get_magic_quotes_gpc()) {
$_POST['username'] = addslashes($_POST['username']);
}
$usercheck = $_POST['username'];
$check = mysql_query("SELECT username FROM users WHERE username = '$usercheck'")
or die(mysql_error());
$check2 = mysql_num_rows($check);

//if the name exists it gives an error
if ($check2 != 0) {
die('Sorry, the username '.$_POST['username'].' is already in use.');
}

// this makes sure both passwords entered match
if ($_POST['pass'] != $_POST['pass2']) {
die('Les deux mots de passe entrés ne sont pas identiques. ');
}

// here we encrypt the password and add slashes if needed
$_POST['pass'] = md5($_POST['pass']);
if (!get_magic_quotes_gpc()) {
$_POST['pass'] = addslashes($_POST['pass']);
$_POST['username'] = addslashes($_POST['username']);
}

// now we insert it into the database
$insert = "INSERT INTO users (username, password)
VALUES ('".$_POST['username']."', '".$_POST['pass']."')";
$add_member = mysql_query($insert);

//$insert = "INSERT INTO users (username, password)
//VALUES ('".$_POST['username']."', '".$_POST['pass']."')";
//$add_member = mysql_query($insert);

$insert ="INSERT INTO tbl_slider(slider_val,user) VALUES(0,'".$_POST['username']."')";
$add_slider = mysql_query($insert);


?>


<h1>Utilisateur <? echo $_POST['username'];?> Enregistré</h1>
<p>Merci vous avez créé un nouveau compte utilisateur, vous pouvez maintenant vous  <a href="deconnexion.php">déconnecter </a> pour utiliser ce nouveau compte, <a href="index.php">continuer </a> votre navigation avec votre compte courant, ou, <a href="registration.php">revenir </a> à l'interface d'enregistrement de nouveaux utilisateurs.</p>



<?php
}
else
{
	
	echo '<p><table width=100% class=tableitems>';
	echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>Formulaire d\'enregistrement d\' un nouvel utilisateur</h2></td><td width=2.5%></td></tr></table>';
	echo '<table width=100% class=tableitems><tr>';
	echo '<td width=2.5%></td>';
	echo '<td width=95%>';
	
?>


<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
<table border="0">
<tr><td>Nom d'utilisateur:</td><td>
<input type="text" name="username" maxlength="60">
</td></tr>
<tr><td>Mot de passe:</td><td>
<input type="password" name="pass" maxlength="10">
</td></tr>
<tr><td>Confirmez mot de passe:</td><td>
<input type="password" name="pass2" maxlength="10">
</td></tr>
<tr><th colspan=2><input type="submit" name="submit" value="Validez"></th></tr> </table>
</form>

<?php


echo '</td>';
echo '<td width=2.5%></td>';
echo "</tr>";
echo '<tr valign=top><td width=2.5%></td><td><h2 class=subtitle>  utilisateurs déjà enregistrés (cliquez sur X pour supprimer un compte)</h2></td><td width=5%></td><td width=2.5%></td></tr>';

$sql = mysql_query("SELECT username FROM users");
	while ($ligne = mysql_fetch_array($sql)) {
	
	$ccv = explode('?',$_SERVER['REQUEST_URI']);
	if (count($ccv)>1)
		{$cc='&';}
	else
		{$cc='?';}
	if (!in_array($ligne['username'],$admins))
		{
		$suppression='<input type="button" name="refresh" value="X" onclick="location.replace(\''.$_SERVER['REQUEST_URI'].$cc.'suppr='.$ligne['username'].'\');">'; 
		}
	else {$suppression='';}
//	echo '<td width=5%>'.$suppression.'</td>';
	echo('<tr><td width=2.5%></td><td width=50%>'.$ligne['username'].'  '.$suppression.'<br></td>');
	echo '<td width=2.5% >'.'</td></tr>';
	}


}



echo "</tr>";
echo '</table>';
?>
