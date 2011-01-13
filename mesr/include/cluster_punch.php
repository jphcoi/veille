<?          
//include("../library/fonctions_php.php");

 function concat() {
    $vars=func_get_args();
    $array=array();
    foreach ($vars as $var) {
       if (is_array($var)) {
          foreach ($var as $val) {$array[]=$val;}
       } else {
          $array[]=$var;
       }
    }
    return $array;
 }

$step = explode('-',$my_period);
$periode_d = $step[0];
$periode_f = $step[1];
$nb_termes=0;
$nb_termes = count($data);
//on prépare l'axe des x
$xx = array();
$dat = array();
$yy = array();
foreach (range(0, $nb_termes-1) as $terme_index) {
	$evo = $data[$terme_index];
	$arr_x = array();
	$arr_y = array();	
	$da = array();	
	foreach (range($periode_d, $periode_f) as $jour) 
	{
		if (array_key_exists($jour, $evo)) 
		{
			$da[]= $evo[$jour];			
		}
		else
		{
			$da[]= 0;			
		}
    	$arr_x[]= $jour;
    	$arr_y[]= $terme_index;

	}
	$xx=concat($xx,$arr_x);
	$yy=concat($yy,$arr_y);
	$dat=concat($dat,$da);
}

$xs= json_encode($xx);
$ys= json_encode($yy);
$ysize_mine=strval(180+40*$nb_termes);

//$ysize_mines=strval(150+100*nb_termes);

$data= json_encode($dat);
$axisy=json_encode($datalabels);
$ysize_mine2  =$ysize_mine-150;
$xlabels = array();
foreach (range($periode_d, $periode_f) as $jour) 
{
	    if ($jour%2 == 0)
	{
		$xlabels[]=get_date($date_depart,$jour,1);
	}
	else
	{
		$xlabels[]=get_date($date_depart,$jour,1);
	}
}
$axisx=json_encode($xlabels);

echo '<p>';

echo '
	<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;">';
echo '<tr valign=top>';
// PANEL DE GAUCHE: PERIODES PRECEDENTES

if ($nopred) $back_avant='background-color:'.$backdarker.';';
echo '<td width=22% class=tableitems style="font-variant:small-caps; size:small; font-style:italic;'.$back_avant.'">';
if ($nopred) echo '<div align=center style="font-style:normal;">(pas de prédécesseur)</div>';
else {
	if (count($pred)>1) $plural_string="s"; else $plural_string="";
	echo '<span align=left style="font-weight:bold; font-style:normal;">&nbsp;champ'.$plural_string.' antérieur'.$plural_string.'</span><div style="height:4px;"></div>';
	echo '<table width=100% cellspacing=0 cellpadding=0>';
	echo '<tr width=100% class=commentitems style="font-variant:small-caps; background-color:'.$backdark.';"><td width=5px></td><td>période</td><td></td><td>champ</td></tr>';
	$last_display_periode="";
	foreach ($pred as $p) display_cluster_title($p,"pred");
	echo '</table>';
	}
echo '</td>';


// PANEL CENTRAL
echo '<td align=top width=56%>';
$ggraph = '
		<script src="library/punch/raphael.js" type="text/javascript" charset="utf-8"></script>
        <script src="library/punch/g.raphael.js" type="text/javascript" charset="utf-8"></script>
        <script src="library/punch/g.dot.js" type="text/javascript" charset="utf-8"></script>
        <link rel="stylesheet" href="library/punch/demo.css" type="text/css" media="screen" charset="utf-8">
        <script type="text/javascript" charset="utf-8">

            window.onload = function () {
                var r = Raphael("holder"),
                    xs ='.$xs.',
                    ys ='.$ys.',
                    data = '.$data.',
                    axisy = '.$axisy.',
                    axisx = '.$axisx.';
                r.g.txtattr.font = "11px \'Fontin Sans\', Fontin-Sans, sans-serif";
                
                r.g.dotchart(40, -90, 700, '.$ysize_mine.', xs, ys, data, {symbol: "O", max: 10, heat: true, axis: "0 0 1 1", axisxstep: '.strval(count(range($periode_d, $periode_f-1))).', axisystep: '.strval($nb_termes-1).', axisxlabels: axisx, axisxtype: " ", axisytype: " ", axisylabels: axisy}).hover(function () {
                    this.tag = this.tag || r.g.tag(this.x, this.y, this.value, 0, this.r + 2).insertBefore(this);
                    this.tag.show();
                }, function () {
                    this.tag && this.tag.hide();
                });
            };
        </script>

        <div id="holder" width="600px"></div>
        
        <script>
		d = document.getElementById(\'holder\');
		// set the width
	
		d.style.height="'.$ysize_mine2.'px";
       </script>
		';
echo '</td>';
// PANEL DE DROITE: PERIODES SUIVANTES

if ($nosucc) $back_apres='background-color:'.$backdarker.';';
echo '<td width=22% class=tableitems style="font-variant:small-caps; size:small; font-style:italic;'.$back_apres.'">';
if ($nosucc) echo '<div align=center style="font-style:normal;">(pas de successeur)</div>';
else {
	if (count($succ)>1) $plural_string="s"; else $plural_string="";
	echo '<span align=left style="font-weight:bold; font-style:normal;">&nbsp;champ'.$plural_string.' ultérieur'.$plural_string.'</span><div style="height:4px;"></div>';
	echo '<table width=100% cellspacing=0 cellpadding=0>';
	echo '<tr class=commentitems style="font-variant:small-caps; background-color:'.$backdark.';"><td width=5px></td><td>période</td><td></td><td>champ</td></tr>';
	$last_display_periode="";
	foreach ($succ as $s)
		display_cluster_title($s,"succ");
	echo '</table>';
	}
echo '</td>';

echo "</tr>";

echo '</table>';



?>