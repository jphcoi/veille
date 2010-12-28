<?php

// What you will probably do is:
include('parametre.php');
include("library/fonctions_php.php");
$steps_nb=5;
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");


$colors =array('#9933CC','#CC3399','#$dateda033','#FF7F00','#8B8378','#458B74','#838B8B','#8B7D6B','#EEAD0E','#0000CD','#EE3B3B','#7FFF00','#CD661D','#DC143C','#EED5B7','#9933CC','#CC3399','#$dateda033','#FF7F00');

$data = array();
$max_data =1;

if( isset( $_GET['id_concept'] ) )
{
  $pieces = explode("_",$_GET['id_concept']);
  }
echo '<br>';
print_r($pieces);
include_once( '../php-ofc-library/open-flash-chart.php' );

$periode = $_GET['id_periode'];
echo '<br>periode:';
echo $periode;
echo '<br>';
echo intval($periode);
echo '<br>';
if (intval($periode)>0)
{$periodes = explode_period($periode);
}
else
{
$periodes['from']=$dated;
$periodes['to']=$datef;}

$g = new graph();
$j=-1;
echo 'ici<br><br>';
//print_r($idconcept);
foreach($pieces as $idconcept)
{
	$j=$j+1;
//	echo '<br>';
	
	$id_concept = intval( $idconcept);
	echo '<br>'.'on traite le concept'.$id_concept.'<br>';
	$sql = 'SELECT COUNT(*), Reponse.jours FROM(SELECT id_b,jours FROM socsem WHERE concept='.$id_concept.' and jours>= '.$dated.' GROUP by id_b) Reponse GROUP by jours';
	$resultat=mysql_query($sql);
//	echo $sql;
	$data=array();
	while ($ligne=mysql_fetch_array($resultat))
	{
		$data[$ligne[1]]=$ligne[0];
		//echo "jour:".$ligne[1].' nb de billets= '.$ligne[0].'<br>';
	}

	$sql = 'SELECT forme_principale FROM concepts WHERE id='.$id_concept;
	$resultat=mysql_query($sql);
//	echo $sql;
	while ($ligne=mysql_fetch_array($resultat))
	{
		$label=$ligne['forme_principale'];
	}
//	echo 'dont la forme principale est'.$label.$id_concept;
	$label=str_replace('é','e',$label);
	$label=str_replace('%E9','e',$label);

	$label =clean_text(clean_utf8($label));
//	echo $label;

	$data_propre= array();
	$xlab_an=array();
	echo '***************<br>';
	
	echo $periodes['from'];
	echo '<br>***************<br>';
	
	for ( $i=$periodes['from']; $i<=$periodes['to']; $i+=1)
	{
		$xlab_an[]=$i;
		if (array_key_exists($i,$data))
			{$data_propre[$i] =$data[$i]+$j/45; }
		else
			{$data_propre[$i] =0+$j/45;}



	}

	//print_r($data_propre);

	//$g->set_data( $data_propre );
	echo '<br>'.'couleur'.$colors[$j].'<br>';
	$data_1 = new line( 2, $colors[$j] );
	$data_1->key( $label, 10 );
	for( $i=$periodes['from']; $i<=$periodes['to']; $i+=1 )
	{
		echo $i.'<br>';
		echo '<br>('.$label.': Billets: '.$data_propre[$i].')'.'<br>';
		$data_1->add_data_tip( $data_propre[$i], '('.$label.': Billets: '.intval($data_propre[$i]).')' );
	}


	$g->data_sets[] = $data_1;
	$max_data = max(5,max(intval(ceil(max($data_propre) * 1.1)/$steps_nb)*$steps_nb,$max_data));
	echo $max_data;
}
print_r($g);

echo '<br>on a envoye toutes les donnees<br>';
if ($racine=='veille')
{

$xlab = array('','','','21/09','','','','','','','28/09','','','','','','','5/10','','','','','','','12/10','','','','','','','19/10','','','','','','','26/10','','','','','','','2/11','','','','','','','9/11','','','','','','','16/11','','','','','','','23/11','','','','','','','30/11','','','','','','','7/12','','','','','','','14/12','',''); }
elseif ($racine=='biofuel'){
	$xlab = array('1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010'); 
	}


	elseif ($racine=='biodiv'){
		$xlab = array('1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009'); 
		}
echo '<br>';
echo $type_date;
echo '<br>';

if ($type_date='annee')
{
	$xlab_periode=$xlab_an;
}
if ($type_date='jour')
{
	$xlab_periode=array();
	echo 'ixi';
	echo $type_date;
	echo '<br>';
	echo $periodes['from']	;	
	echo '<br>';
	echo $periodes['to'];		
	print_r($xlab);
	for ( $k=0; $k<count($xlab); $k+=1)
	{
	if ($k+$dated+1>$periodes['from'] and $k+$dated-1<$periodes['to']) 
		{
			echo $k;
			echo '<br>';
			$xlab_periode[]	= $xlab[$k];
		}
	}
}
echo '<br>kldjqdklsjmqdjqsmkldjsqsùljdsq';

print_r($xlab_periode);
	$g->set_x_labels($xlab_periode);
echo '<br>kldjqdklsjmqdjqsmkldjsqsùljdsq';
$g -> set_x_axis_steps( 1 );
$g->set_x_label_style( 10, '#9933CC', 0, 1, '#00A000' );
$g->set_x_labels( $xlab_periode);

$g->set_tool_tip( '#x_label# [#val#]<br>#tip#' );


$g->set_y_max($max_data);
$g->y_label_steps( min($max_data,$steps_nb) );
// display the data
echo $g->render();



?>


