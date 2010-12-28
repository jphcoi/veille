<?
// Connects to your Database
include("parametre.php");
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
$admins=array();
$admins[]='chavalarias';
$admins[]='cointet';
$admins[]='roth';
$admins[]='mesradmin';
$admins[]='admin';
$admins[]='tari';
$admins[]='philippe';
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");
//checks cookies to make sure they are logged in
if(isset($_COOKIE['ID_my_site']))
{
$username = $_COOKIE['ID_my_site'];
$pass = $_COOKIE['Key_my_site'];
$check = mysql_query("SELECT * FROM users WHERE username = '$username'")or die(mysql_error());
while($info = mysql_fetch_array( $check ))
{
//if the cookie has the wrong password, they are taken to the login page
if ($pass != $info['password'])
{
	$page_origine=$_SERVER['REQUEST_URI'];
	$pieces = explode("/", $page_origine);
	$page_origine = $pieces[2];
	$page_origine = str_replace('?', "**",$page_origine);
	$page_origine = str_replace('&', "@@",$page_origine);
	header("Location: index0.php?origine=".$page_origine);
}}
if (!in_array($username,$admins))
{
	$page_origine=$_SERVER['REQUEST_URI'];
	$pieces = explode("/", $page_origine);
	$page_origine = $pieces[2];
	$page_origine = str_replace('?', "**",$page_origine);
	$page_origine = str_replace('&', "@@",$page_origine);
//	echo $page_origine;
//	echo "index0.php?origine=".$page_origine;
//	echo "vous n'avez pas les droits administrateurs pour inscrire un nouvel utilisateur.";
	header("Location: no-admin.php");

}
}
else
//if the cookie does not exist, they are taken to the login screen
{
	$page_origine=$_SERVER['REQUEST_URI'];
	$pieces = explode("/", $page_origine);
	$page_origine = $pieces[2];
	$page_origine = str_replace('?', "**",$page_origine);
	$page_origine = str_replace('&', "@@",$page_origine);
	header("Location: index0.php?origine=".$page_origine);
}

 
?>
