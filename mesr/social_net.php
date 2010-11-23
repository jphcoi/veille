<title></title>
<script src="AC_OETags.js" language="javascript"></script>

<style>
body { margin: 0px; overflow:hidden }
</style>

<?
include("login_check.php");
include("include/header.php");
include("banner.php");
include("library/fonctions_php.php");
include("parametre.php");
 


if(isset( $_GET['id_cluster'])) $id_cluster = intval($_GET['id_cluster']); else die("<h1>Agrégat non spécifié.</h1>");
if(isset( $_GET['periode'])) $my_period=$_GET['periode']; else die("<h1>Agrégat non spécifié.</h1>");



$commande_sql = "SELECT label_1, label_2 from cluster where id_cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."'";

$resultat=mysql_query($commande_sql);
while ($billes=mysql_fetch_array($resultat))
	{
		$commande_sql2 = "SELECT forme_principale from concepts where id = '".$billes['label_1']."'";
		$resultat2=mysql_query($commande_sql2);	
		while ($billes2=mysql_fetch_array($resultat2))	
		{
			$label_1 = $billes2['forme_principale'];
		}
		
		$commande_sql2 = "SELECT forme_principale from concepts where id = '".$billes['label_2']."'";
		$resultat2=mysql_query($commande_sql2);	
		while ($billes2=mysql_fetch_array($resultat2))	
		{
			$label_2 = $billes2['forme_principale'];
		}
		$cluster_name =$label_1.' - '.$label_2.' ('.$id_cluster.', '.$my_period.')';
		
	}

$commande_sql = "SELECT id_billet from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."'";
$resultat=mysql_query($commande_sql);
while ($billes=mysql_fetch_array($resultat))
	{
		$billet_index = $billes['id_billet'];
		$sql_auteur = "SELECT auteur_id,site from billets where id = '$billet_index'";
		$res_auteur=mysql_query($sql_auteur);
		while ($sql_auteurs=mysql_fetch_array($res_auteur))
		{
			$auteurs[] = $sql_auteurs['auteur_id'];
			$legende[$sql_auteurs['auteur_id']]=$sql_auteurs['site'];
		}
	}

$aut_occ = array_count_values($auteurs);
//print_r($aut_occ);
//echo "<br>";

//foreach($aut_occ as $key => $value) {
//   print "$key: $value<br>";
//}

foreach($aut_occ as $key => $value) {
$liste_auteur_unique[] = $key;
}

$sql = "SELECT auteur1, auteur2 from soc where (";
$compteur = 0;
foreach($liste_auteur_unique as $value)
{
	$compteur = $compteur+1;
	$sql =$sql."auteur1 = '".$value."'";
	if ($compteur < count($liste_auteur_unique))
	{
		$sql =$sql." OR ";
	}
}
$sql  = $sql.") AND (";

$compteur = 0;
foreach($liste_auteur_unique as $value)
{
	$compteur = $compteur+1;
	$sql =$sql."auteur2 = '".$value."'";
	if ($compteur < count($liste_auteur_unique))
	{
		$sql =$sql." OR ";
	}
}
$sql  = $sql.")";
//echo $sql;

$res = mysql_query($sql);
while ($sql_liens=mysql_fetch_array($res))
{
	$aut1 = $sql_liens[auteur1];
	$aut2 = $sql_liens[auteur2];
	if ($aut1 ==$aut2)
	{}
	else
	{$liens[$aut1]=$aut2;}
}


ecrire_json($liste_auteur_unique,$legende,$aut_occ,$liens,$cluster_name);

?>


<script language="JavaScript" type="text/javascript">
<!--
// -----------------------------------------------------------------------------
// Globals
// Major version of Flash required
var requiredMajorVersion = 9;
// Minor version of Flash required
var requiredMinorVersion = 0;
// Minor version of Flash required
var requiredRevision = 124;
// -----------------------------------------------------------------------------
// -->
</script>
</head>

<body scroll="yes">
<script language="JavaScript" type="text/javascript">
<!--
// Version check for the Flash Player that has the ability to start Player Product Install (6.0r65)
var hasProductInstall = DetectFlashVer(6, 0, 65);

// Version check based upon the values defined in globals
var hasRequestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);

if ( hasProductInstall && !hasRequestedVersion ) {
	// DO NOT MODIFY THE FOLLOWING FOUR LINES
	// Location visited after installation is complete if installation is required
	var MMPlayerType = (isIE == true) ? "ActiveX" : "PlugIn";
	var MMredirectURL = window.location;
    document.title = document.title.slice(0, 47) + " - Flash Player Installation";
    var MMdoctitle = document.title;

	AC_FL_RunContent(
		"src", "playerProductInstall",
		"FlashVars", "MMredirectURL="+MMredirectURL+'&MMplayerType='+MMPlayerType+'&MMdoctitle='+MMdoctitle+"",
		"width", "65%",
		"height", "65%",
		"align", "middle",
		"id", "SitePoint_DataViz_Tutorial_Part3",
		"quality", "high",
		"bgcolor", "#869ca7",
		"name", "SitePoint_DataViz_Tutorial_Part3",
		"allowScriptAccess","sameDomain",
		"type", "application/x-shockwave-flash",
		"pluginspage", "http://www.adobe.com/go/getflashplayer"
	);
} else if (hasRequestedVersion) {
	// if we've detected an acceptable version
	// embed the Flash Content SWF when all tests are passed
	AC_FL_RunContent(
			"src", "SitePoint_DataViz_Tutorial_Part3",
			"width", "65%",
			"height", "65%",
			"align", "middle",
			"id", "SitePoint_DataViz_Tutorial_Part3",
			"quality", "high",
			"bgcolor", "#869ca7",
			"name", "SitePoint_DataViz_Tutorial_Part3",
			"allowScriptAccess","sameDomain",
			"type", "application/x-shockwave-flash",
			"pluginspage", "http://www.adobe.com/go/getflashplayer"
	);
  } else {  // flash is too old or we can't detect the plugin
    var alternateContent = 'Alternate HTML content should be placed here. '
  	+ 'This content requires the Adobe Flash Player. '
   	+ '<a href=http://www.adobe.com/go/getflash/>Get Flash</a>';
    document.write(alternateContent);  // insert non-flash content
  }
// -->
</script>
<noscript>
  	<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			id="SitePoint_DataViz_Tutorial_Part3" width="65%" height="65%"
			codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab">
			<param name="movie" value="SitePoint_DataViz_Tutorial_Part3.swf" />
			<param name="quality" value="high" />
			<param name="bgcolor" value="#869ca7" />
			<param name="allowScriptAccess" value="sameDomain" />
			<embed src="SitePoint_DataViz_Tutorial_Part3.swf" quality="high" bgcolor="#869ca7"
				width="65%" height="65%" name="SitePoint_DataViz_Tutorial_Part3" align="middle"
				play="true"
				loop="false"
				quality="high"
				allowScriptAccess="sameDomain"
				type="application/x-shockwave-flash"
				pluginspage="http://www.adobe.com/go/getflashplayer">
			</embed>
	</object>
</noscript>


<?
include("footer.php");
?>

</body>
</html>
