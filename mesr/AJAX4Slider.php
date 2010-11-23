<!--//---------------------------------+
//  Slider Using Ajax and PHP        |
//  Developed by Roshan Bhattarai    |
//	http://roshanbh.com.np           |
//  Contact for custom scripts       |
//  or implementation help.          |
//  email-nepaliboy007@yahoo.com     |
//---------------------------------+-->
<? 
include("login_check.php");
include("include/header.php");
include("banner.php");
include("library/fonctions_php.php");
include("parametre.php");
$sliderval=$_GET['sliderval']; //get the value from ajax function	
$sliderval=(int) $_GET['sliderval']; //get the value from ajax function
$query="UPDATE tbl_slider SET slider_val= ".strval($sliderval)." WHERE user='".$_COOKIE['ID_my_site']."'";
$result=mysql_query($query);

			
?>