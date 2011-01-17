<?
include('../admin_check.php');

// Connects to your Database
//mysql_connect("your.hostaddress.com", "username", "password") or die(mysql_error());
//mysql_select_db("Database_Name") or die(mysql_error());

// Connects to your Database
//mysql_connect("your.hostaddress.com", "username", "password") or die(mysql_error());
//mysql_select_db("Database_Name") or die(mysql_error());
include("../parametre.php");
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
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
die('Your passwords did not match. ');
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

$insert = "INSERT INTO users (username, password)
VALUES ('".$_POST['username']."', '".$_POST['pass']."')";
$add_member = mysql_query($insert);

$insert ="INSERT INTO tbl_slider(slider_val,user) VALUES(0,'".$_POST['username']."')";
$add_slider = mysql_query($insert);


?>


<h1>Registered</h1>
<p>Thank you, you have registered - you may now login</a>.</p>



<?php
}
else
{
?>


<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
<table border="0">
<tr><td>Username:</td><td>
<input type="text" name="username" maxlength="60">
</td></tr>
<tr><td>Password:</td><td>
<input type="password" name="pass" maxlength="10">
</td></tr>
<tr><td>Confirm Password:</td><td>
<input type="password" name="pass2" maxlength="10">
</td></tr>
<tr><th colspan=2><input type="submit" name="submit" value="Register"></th></tr> </table>
</form>

<?php
}
?>
