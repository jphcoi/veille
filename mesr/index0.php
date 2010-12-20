<?php
// Connects to your Database
//mysql_connect("your.hostaddress.com", "username", "password") or die(mysql_error());
//mysql_select_db("Database_Name") or die(mysql_error());
include("parametre.php");
$con = mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database - Reviser les paramétres de connexion");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");
/**
 * Delete a file, or a folder and its contents (recursive algorithm)
 *
 * @author      Aidan Lister <aidan@php.net>
 * @version     1.0.3
 * @link        http://aidanlister.com/repos/v/function.rmdirr.php
 * @param       string   $dirname    Directory to delete
 * @return      bool     Returns TRUE on success, FALSE on failure
 */
function rmdirr($dirname)
{
    // Sanity check
    if (!file_exists($dirname)) {
        return false;
    }
    // Simple delete for a file
    if (is_file($dirname) || is_link($dirname)) {
        return unlink($dirname);
    }
    // Loop through the folder
    $dir = dir($dirname);
    while (false !== $entry = $dir->read()) {
        // Skip pointers
        if ($entry == '.' || $entry == '..') {
            continue;
        }
        // Recurse
        rmdirr($dirname . DIRECTORY_SEPARATOR . $entry);
    }
    // Clean up
    $dir->close();
    return rmdir($dirname);
}
$title='<html>
	<head>
	<title> Étude MESR - Veille Dynamique</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" title="Default" type="text/css" href="style.css" media="screen"/>
	<!-- JQUERY UI CSS -->
	<link type="text/css" rel="stylesheet" href="css/custom-theme/jquery-ui-1.7.3.custom.css"/>	
	<link type="text/css" rel="stylesheet" href="ex.css?3.2"/>

	<meta name="author" content="CCR"/>
	</head>
	<body>
	<div id="hd"  class="ui-widget">
	<div id="hdb">
	<div id="htoolbar" class="toolbardiv fg-toolbar ui-widget-header ui-corner-all ui-helper-clearfix">
	<div id="title" class="noSelect">
	<table width="100%" style="font-size:x-large; font-weight:bold; color:DarkSlateGray; font-variant:small-caps;"><tr><td align=left>
	étude MESR</td></tr></table>
	</div>
	<div class=subbanner><table width=100% class=subbanner><tr><td>page de connexion</td></tr></table></div>
	</div>
	</div>
	</div>
	';
function diehard() 
	{
	sleep(2);
	die('<p><div class=subbanner style="background-color:#FF4747;"><table class=subbanner width=100%><tr><td style="color:white;">combinaison utilisateur/mot de passe incorrecte, <b><a href=index0.php style="color:#E0E0F0;">veuillez réessayer en cliquant ici</a></b></td></tr></table>');
	}
	if (isset($_GET['origine']))
	{
		$page_ori =$_GET['origine'];
		$page_origine=$page_ori;
		$page_origine=str_replace('@@', "&",$page_origine);
		$page_origine=str_replace('**', "?",$page_origine);
		
	//	$page_origine='phylo.php';
	}
	else
	{
		$page_origine='phylo.php';
		$page_ori='phylo.php';
	}
	//$page_origine='global.php';
	//echo $page_origine;
	//echo 'rien';
//Checks if there is a login cookie
if(isset($_COOKIE['ID_my_site']))
//if there is, it logs you in and directes you to the members page
{
	$username = $_COOKIE['ID_my_site'];
	$pass = $_COOKIE['Key_my_site'];
	$check = mysql_query("SELECT * FROM users WHERE username = '$username'")or die(mysql_error());
	while($info = mysql_fetch_array( $check ))
		{
		if ($pass != $info['password'])
		{
		}
		else
		{
			if (is_dir("TMP_cooc/".$_COOKIE['ID_my_site']))
			{rmdirr("TMP_cooc/".$_COOKIE['ID_my_site']);}
			if (is_dir("TMP/".$_COOKIE['ID_my_site']))
			{rmdirr("TMP/".$_COOKIE['ID_my_site']);}
		header("Location: ".$page_origine);		
		}
	}
}
//if the login form is submitted
if (isset($_POST['submit'])) { // if form has been submitted
// makes sure they filled it in
if(!$_POST['username']) $username='';
if(!$_POST['pass']) $pass='';
// 	echo($title);
// 	die('You did not fill in a required field.');
// }
// checks it against the database
if (!get_magic_quotes_gpc()) {
$_POST['email'] = addslashes($_POST['email']);
}
$check = mysql_query("SELECT * FROM users WHERE username = '".$_POST['username']."'")or die(mysql_error());
//Gives error if user doesn't exist
$check2 = mysql_num_rows($check);
if ($check2 == 0) {
	echo $title;
	diehard();
}
while($info = mysql_fetch_array( $check ))
{
$_POST['pass'] = stripslashes($_POST['pass']);
$info['password'] = stripslashes($info['password']);
$_POST['pass'] = md5($_POST['pass']);
//gives error if the password is wrong
if ($_POST['pass'] != $info['password']) { 
	echo $title;
	diehard();//die('Mot de passe incorrect, <a href=index0.php>réessayez</a>.');
}
else
{
// if login is ok then we add a cookie
$_POST['username'] = stripslashes($_POST['username']);
$hour = time() + 22000;
setcookie("ID_my_site", $_POST['username'], $hour);
setcookie("Key_my_site", $_POST['pass'], $hour);
	if (is_dir("TMP_cooc/".$_POST['username']))
	{rmdirr("TMP_cooc/".$_POST['username']);}
	if (is_dir("TMP/".$_POST['username']))
	{rmdirr("TMP/".$_POST['username']);}	
//then redirect them to the members area
header("Location: ".$page_origine);
}
}
}
else
{
echo $title;
?>
<form action="<?php echo $_SERVER['PHP_SELF'].'?origine='.$page_ori ?>" method="post">
<p><table border="0">
<tr><td width=2.5%></td><td colspan=2><div class=tableitems><b>Veuillez fournir vos identifiants:</b></h1></td></tr>
<tr><td width=2.5%></td><td class=tableitems>Nom d'utilisateur:</td><td>
<input type="text" name="username" maxlength="40">
</td></tr>
<tr><td width=2.5%></td><td class=tableitems>Mot de passe:</td><td>
<input type="password" name="pass" maxlength="50">
</td></tr>
<tr><td width=2.5%></td><td></td><td colspan="2" align="right">
<input type="submit" name="submit" value="Se connecter">
</td></tr>
</table>
</form>
<?php
}
mysql_close($con);
?>