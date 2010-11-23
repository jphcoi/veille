<?
echo '<html>';
echo '<head>';
if (!isset($titleheader)) $titleheader="v0.2";
if (isset($jsprotovis)) $jsheader='<script type="text/javascript" src="protovis-r3.2.js"></script>'; else $jsheader="";
if (isset($jsjquery)) $jsheader2='<script type="text/javascript" src="jquery-1.4.4.js"></script>'; else $jsheader2="";
echo "<title>".$titleheader." [MESR/VD]</title>";
echo '
'.$jsheader;
echo $jsheader2;
echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
echo '<META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">';
echo '<META HTTP-EQUIV="EXPIRES" CONTENT="0">';
echo '<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">';
echo '<link rel="stylesheet" title="Default" type="text/css" href="style.css" media="screen"/>';
echo '<link rel="stylesheet" title="Default" type="text/css" href="style.css" media="print"/>';
echo '<meta name="author" content="CCR"/>';
echo '</head>';
echo '<body>';
?>