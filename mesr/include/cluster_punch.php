<?
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
echo $nb_termes;
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
$ysize=strval(3*count($yy));
$data= json_encode($dat);
$axisy=json_encode($datalabels);
//echo $axisy;
//        <link rel="stylesheet" href="library/punch/demo-print.css" type="text/css" media="screen" charset="utf-8">

$axisx=json_encode(range($periode_d, $periode_f));
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
                
                r.g.dotchart(0, 0, 600, '.$ysize.', xs, ys, data, {symbol: "o", max: 10, heat: true, axis: "0 0 1 1", axisxstep: '.strval(count(range($periode_d, $periode_f))).', axisystep: '.strval($nb_termes-1).', axisxlabels: axisx, axisxtype: " ", axisytype: " ", axisylabels: axisy}).hover(function () {
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
d.style.height="'.$ysize.'px";
        </script>
';
?>