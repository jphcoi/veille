<?php

// What you will probably do is:
include('parametre.php');
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");

$steps_nb=5;
$max_data=1;
$data = array();
$data_t = array();

if( isset( $_GET['id_concept'] ) )
{
  echo 'inside';
  $id_concept = intval( $_GET['id_concept'] );
  $sql = 'SELECT COUNT(id_b),jours FROM socsem WHERE concept='.$id_concept.' GROUP by jours ';
  $resultat=mysql_query($sql);
  echo $id_concept;
while ($ligne=mysql_fetch_array($resultat))
{
	$data[$ligne[1]]=$ligne[0];
}


  $sql = 'SELECT COUNT(id),jours FROM billets GROUP by jours ';
  $resultat=mysql_query($sql);
  echo $id_concept;
while ($ligne=mysql_fetch_array($resultat))
{
	$data_t[$ligne[1]]=$ligne[0];
}

}
$xlab_an = array();
$data_propre_0= array();
$data_propre= array();
print_r($data_t);
for ( $i=$dated; $i<$datef+1; $i+=1)
{
		$xlab_an[]=$i;
		if (array_key_exists($i,$data))
		{$data_propre_0[$i]=$data[$i];}
		else
		{$data_propre_0[$i] =0;}
}

echo '<br>';
echo 'avant norm';
echo '<br>';

print_r($data_propre_0);
echo '<br>';
$data_propre_old=array();

for ( $i=$dated; $i<$datef+1; $i+=1)
{		
				echo '<br>';
								echo $i;
												echo '<br>';
										echo  $data_propre_0[$i];
		echo '<br>';
		echo $data_t[$i];
				echo '<br>';
				if (intval($data_t[$i])>0)
				{
		$data_propre_old[$i] =intval($data_propre_0[$i])*1000/intval($data_t[$i]);}
		else
		{$data_propre_old[$i]=0;}
		echo $data_propre_old[$i];
		echo '<br>';
}
//$data_propre_old=$data_propre;
print_r($data_propre_old);
//lissage sur 3 jours
$data_propre=array();
//$data_propre[$dated]=($data_propre_old[81]+$data_propre_old[$dated])/2;
//$data_propre[$datef-1]=($data_propre_old[$datef-1]+$data_propre_old[167])/2;


//for ( $i=81; $i<$datef-1; $i+=1)
//{
//	// $data_propre[$i] =($data_propre_old[$i]+$data_propre_old[$i-1]+$data_propre_old[$i+1])/3; 
//}
$data_propre=$data_propre_old;
echo '<br>';
echo 'apres norm';
echo '<br>';
print_r($data_propre);
echo '<br>';
include_once( '../php-ofc-library/open-flash-chart.php' );
//$data_1=$data_propre;
$g = new graph();
//$g->set_data( $data_propre );
echo '<br>';
print_r($data_propre);
$data_1 = new line( 2, '#9933CC' );
$data_1->key( 'Nombre d\'occurrences normalisé (pour mille billets)', 10 );
for( $i=$dated; $i<$datef+1; $i+=1 )
{
	  $data_1->add_data_tip( $data_propre[$i], '(Billets: '.$data_propre[$i].')' );
}



$g->data_sets[] = $data_1;



//$g->title( 'Evolution temporelle du terme'.$id_concept );
//$g->line_dot( 2, 4, '#9933CC', '', 18 );
$g -> set_x_axis_steps( 1 );
$g->set_x_label_style( 10, '#9933CC', 0, 1, '#00A000' );
if ($racine=='veille')
{
$g->set_x_labels( array('','','','21/09','','','','','','','28/09','','','','','','','5/10','','','','','','','12/10','','','','','','','19/10','','','','','','','26/10','','','','','','','2/11','','','','','','','9/11','','','','','','','16/11','','','','','','','23/11','','','','','','','30/11','','','','','','','7/12','','','','','','','14/12','','')); 
}

elseif ($racine=='biofuel'){
	$g->set_x_labels( array('1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010')); 
	}


	elseif ($racine=='biodiv'){
		$g->set_x_labels( array('1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009')); 
		}

		else{$g->set_x_labels($xlab);}
if ($type_date='annee')
{
	$g->set_x_labels($xlab_an);
}


if ($type_date='jour')
{
	$g->set_x_labels($xlab);
}
//$max_data = ceil(max($data_propre) * 1.1);
//echo ceil(ceil(max($data_propre) * 1.10)/$steps_nb);
echo 'on en est là:';
//print_r(array_keys);
echo ceil(max(array_keys($data_propre)) * 1.10);
echo 'on en est là.';
$max_data = intval(ceil(ceil(max($data_propre) * 1.10)/$steps_nb)) *$steps_nb;
echo $max_data;
echo 'on en est là.';
$g->set_y_max($max_data);
$g->y_label_steps( min($max_data,$steps_nb) );
// display the data
echo $g->render();
?>


