<?
$jscriptmp=''; // string temporaire pour afficher les pop up box
echo '<html>';
echo '<head>';
if (!isset($titleheader)) $titleheader="v0.2";
if (isset($jsprotovis)) $jsheader='<script type="text/javascript" src="protovis-r3.2.js"></script>'; else $jsheader="";
//if (isset($jsjquery)) $jsheader2='<script type="text/javascript" src="js/jquery/jquery-1.4.4.js"></script>'; else $jsheader2="";
$jsheader2='
	<script charset="utf-8" type="text/javascript" src="js/jquery/jquery-1.4.2.min.js" language="javascript"></script>
	<script charset="utf-8" type="text/javascript" src="js/jquery-ui/jquery-ui-1.8.min.js" language="javascript"></script>';

echo "<title>".$titleheader." [MESR/VD]</title>";
echo ' '.$jsheader;
echo $jsheader2;

echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';

echo '<link rel="stylesheet" title="Default" type="text/css" href="style.css" media="screen"/>';
echo '<link rel="stylesheet" title="Default" type="text/css" href="style.css" media="print"/>';
echo '<link rel="stylesheet" type="text/css" href="css/custom-theme/jquery-ui-1.7.3.custom.css"/>';

echo '<meta name="author" content="CCR"/>';
echo '</head>';

if ($nav!="socsem"){
	echo '<script src="slider.js" language="javascript" type="text/javascript"></script>
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
	<link href="slider.css" rel="stylesheet" type="text/css" />';
	}
	
echo "
 	<style>
 	#messageBox{
 	        border-right: 1px solid #000000;
 	        position: fixed;
 	        width: 700px;
 
 	        z-index: 1;
 	        background-color: #C0C0C0;
 	        border-style: solid;
 	        border-width: 2px;
 	        display:none;
 	}
 	#contents{
 	        width: 90%;
 	        height: auto;
 	        z-index: 2;
 	}
 	</style>
 	<script language='javascript'>
 	function show(obj,msg){
 	messageBox.style.top=obj.offsetTop+100
 	messageBox.style.right=obj.offsetLeft+10
 	contents.innerHTML=msg+'<p>'+obj
 	messageBox.style.display='block'
 	}
 	</script>
 ";
echo '<body>';

?>