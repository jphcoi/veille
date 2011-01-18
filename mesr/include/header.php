<?
$jscriptmp=''; // string temporaire pour afficher les pop up box
echo '<html>';
echo '<head>';
if (!isset($titleheader)) $titleheader="v1.34";
if (isset($jsprotovis)) $jsheader='<script type="text/javascript" src="protovis-r3.2.js"></script>'; else $jsheader="";
//if (isset($jsjquery)) $jsheader2='<script type="text/javascript" src="js/jquery/jquery-1.4.4.js"></script>'; else $jsheader2="";
$jsheader2='
<script charset="utf-8" type="text/javascript" src="js/jquery/jquery-1.4.2.min.js" language="javascript"></script>
<script charset="utf-8" type="text/javascript" src="js/jquery-ui/jquery-ui-1.8.min.js" language="javascript"></script>
<script charset="utf-8" type="text/javascript" src="js/getUrlParam.js" language="javascript"></script>
';

echo "<title>".$titleheader." [MESR/VD]</title>";
echo ' '.$jsheader;
echo $jsheader2;

//echo '<script src="js/jtip.js" type="text/javascript"></script>';
echo '<script type="text/javascript" src="js/jquery.scrollbar.js"></script>';

echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';

echo '<link rel="stylesheet" title="Default" type="text/css" href="style.css" media="screen"/>';
echo '<link rel="stylesheet" title="Default" type="text/css" href="style.css" media="print"/>';
echo '<link rel="stylesheet" type="text/css" href="css/custom-theme/jquery-ui-1.7.3.custom.css"/>';



echo '<meta name="author" content="CCR"/>';

echo '</head>';

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