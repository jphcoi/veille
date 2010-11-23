<?
if (isset($_GET['id_concept'])) {
	$idc=$_GET['id_concept'];
	$sidc='id_concept='.$idc;
	}
else {$idc='';$sidc='';}

if (isset($_GET['id_source'])) {
	$ids=$_GET['id_source']; 
	$sids='id_source='.$ids;
	}
else {$ids='';$sids='';}

if (isset($_GET['periode'])) $my_period=$_GET['periode']; else $my_period='';
$op=$_GET['op'];
//echo $idc.'<br>'.$ids.'<br>'.$my_period.'<br>'.$op.'<br>';

$com='';
if ($op=='Explorer') {
	if ($idc!='') $com.='chart.php'; //concept?
	else $com.='source.php'; // source?
}
if ($op=='Projeter') $com.='global.php';

$com.='?'.$sids.$sidc.'&periode='.$my_period;
header("Location: ".$com);
?>