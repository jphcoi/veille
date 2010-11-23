<?
// Connects to your Database
include("parametre.php");
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
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
	$page_origine = $pieces[count($pieces)-1];
	$page_origine = str_replace('?', "**",$page_origine);
	$page_origine = str_replace('&', "@@",$page_origine);
	header("Location: index0.php?origine=".$page_origine);
}
}
}
else
//if the cookie does not exist, they are taken to the login screen
{
	$page_origine=$_SERVER['REQUEST_URI'];
	$pieces = explode("/", $page_origine);
	$page_origine = $pieces[count($pieces)-1];
	$page_origine = str_replace('?', "**",$page_origine);
	$page_origine = str_replace('&', "@@",$page_origine);
	header("Location: index0.php?origine=".$page_origine);
}
?>