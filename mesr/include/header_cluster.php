<?
//header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); 
//header("cache-Control: no-store, no-cache, must-revalidate"); 
//header("cache-Control: post-check=0, pre-check=0", false); 
// HTTP/1.0 
//header("Pragma: no-cache"); 
//if (isset($_GET['al']))
//{
	
//}
//else
//{
//	$new_url=$_SERVER['REQUEST_URI'].'&al='.strval(rand(1,10000));
//	header("Location: ".$new_url);
//}
echo '<html>';
echo '<head>';
if (!isset($titleheader)) $titleheader="v0.2";
if (isset($jsprotovis)) $jsheader='<script type="text/javascript" src="protovis-r3.2.js"></script>'; else $jsheader="";
echo "<title>".$titleheader." [MESR/VD]</title>";
echo $jsheader;
echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
echo '<META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">';
echo '<META HTTP-EQUIV="EXPIRES" CONTENT="2">';
echo '<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">';
//echo 'ETag:'.'aleatoire'.strval(mt_rand(1,10000));
//echo 'META HTTP-EQUIV="Expires" CONTENT="Mon, 04 Dec 1999 21:29:02 GMT">';
echo '<link rel="stylesheet" title="Default" type="text/css" href="style.css" media="screen"/>';
echo '<link rel="stylesheet" title="Default" type="text/css" href="style.css" media="print"/>';
echo '<meta name="author" content="CCR"/>';


?>
<script src="slider.js" language="javascript" type="text/javascript"></script>
<script language="javascript" type="text/javascript">
function setSliderVal(value)
{
	xmlHttp=getXMLHTTP();
	if (xmlHttp==null)
 	 {
 	 	alert ("Your browser does not support AJAX!");
 		return;
 	 }
	
	xmlHttp.onreadystatechange=function() 
	{
	  if (req.readyState == 4) { // only if "OK"
		if (req.status == 200) {						
			//dont do any thing here we just need to save the valued in the database				
		} else {
			alert("There was a problem while using XMLHTTP:\n" + req.statusText);
				}
		}				
	}
	var queryString = "?sliderval=" + value.substring(0,value.length-2); //stripping last two letter which is px 				
	xmlHttp.open("GET","AJAX4Slider.php"+queryString,true);
	xmlHttp.send(null);
	
}

function getXMLHTTP() { //fuction to return the xml http object
		var xmlhttp=false;	
		try{
			xmlhttp=new XMLHttpRequest();
		}
		catch(e)	{		
			try{			
				xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				try{
				req = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e1){
					xmlhttp=false;
				}
			}
		}
		 	
		return xmlhttp;
	}
	
	function Lien() {
		i = document.Choix.Liste.selectedIndex;
		if (i == 0) return;
		url = document.Choix.Liste.options[i].value;
		parent.location.href = url;
	}
	
</script>
<link href="slider.css" rel="stylesheet" type="text/css" />

<?
echo '</head>';
echo '<body>';

?>