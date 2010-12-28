<?
// recuperer la variable de voisinage semantique temporel depuis la base SQL
$resultat=mysql_query("select term2,distances,force_moy,direction FROM termneighbour WHERE term1=$id_concept LIMIT 20");
//echo "select term2,distances,forcemoy,direction FROM termneighbour WHERE term1=$id_concept LIMIT 10";
//echo "select term2,distances,forcemoy,direction FROM term_neighbour WHERE term1=$id_concept";
$temp_neighborhood=mysql_fetch_array($resultat);

$json_data ="var years=[";

foreach (range($dated, $datef-1) as $number) {
    $json_data= $json_data.$number.',';}
$json_data=substr($json_data,0,strlen($json_data)-1)."]; var dynamics= {";
create_concept_string();

while ($ligne=mysql_fetch_array($resultat))
{
	$evo = array();
	$semaines = explode(',',$ligne['distances']);
	foreach ($semaines as $sem) 
	{$evo[]=$sem;$evo[]=$sem;$evo[]=$sem;$evo[]=$sem;$evo[]=$sem;$evo[]=$sem;$evo[]=$sem; }
	//print_r($evo);
	$evo_texte = implode(',',$evo);
	//echo $evo_texte;
$json_data =$json_data.'"'.strval(remove_popo($liste_termes[$ligne['term2']])).'": { activity: ['.$evo_texte.'] },';
}
$delcaract = substr($string,0,strlen($string)-1);
$json_data=substr($json_data,0,strlen($json_data)-1).'};';
//version antérieure du script d'import avec importation des données depuis la table term_neighborhood
// $resultat=mysql_query("select idx,js FROM term_neighborhood WHERE idx=$id_concept");
// $temp_neighborhood=mysql_fetch_array($resultat);
// $myabove='<script type="text/javascript">'.$temp_neighborhood['js'].'</script>'.'
$myabove='<script type="text/javascript">'.$json_data.'</script>'.'
<hr>
<table class=tableitems width="100%">
<tr valign=bottom>
<td align="left">
ACTIVITÉ DES TERMES PROCHES
</td><td align="right" style="font-variant:small-caps;">
<label for="query">rechercher: </label>
<input id="query" type="text" onkeyup="search(this.value);">
&nbsp;&nbsp;&nbsp;&nbsp;vue:
<select onchange="update_viz_type(event);">
<option value="zero">Activité totale</option>
<option value="expand">Pourcentage</option>
</select>
</td></tr></table>
</div>
';

$myscript='<script type="text/javascript+protovis">

/* Interaction state. */
var offset="zero";
var gender = 0,
re = "";
/* Flatten the tree into an array to faciliate transformation. */
var dynamics = pv.flatten(dynamics)
.key("job")
.key("gender", function(g) (g == "activity") ? 1 : 2)
.key("year", function(i) years[i])
.key("people")
.array();
/*
* Use per-year sums to normalize the data, so we can compute a
* percentage. Use per-gender+job sums to determine a saturation encoding.
*/
var sumByYear = pv.nest(dynamics)
.key(function(d) d.year)
.rollup(function(v) pv.sum(v, function(d) d.people)),
sumByJob = pv.nest(dynamics)
.key(function(d) d.gender + d.job)
.rollup(function(v) pv.sum(v, function(d) d.people));
/* Cache the percentage of people employed per year. */
dynamics.forEach(function(d) d.percent = 100 * d.people / sumByYear[d.year]);
/* Cache the coarse number of notices per year. */
dynamics.forEach(function(d) d.coarse = d.people);
/* Sizing parameters and scales. */
var sw = .88*document.body.clientWidth,
sh = 270,
sx = pv.Scale.linear('.$dated.', '.$datef.').range(0, sw),
sy = pv.Scale.linear(0, 10).range(0, sh),
color = pv.Scale.ordinal(1, 2).range("#33f", "#f33"),
alpha = pv.Scale.linear(pv.values(sumByJob)).range(.4, .8),
startyear='.$dated.',
endyear='.$datef.',
sp = pv.Scale.linear(0,1).range(0,sh);
var sDateArray = new Array();
var speriods=sx.ticks(20);
for(var time in speriods) {
var snewDate = new Date( );
//14610 = nombre de jours écoulés entre 1er janvier 70 et 1er janvier 2010
snewDate.setTime((86400*(14609+speriods[time]))*1000);
sdateString = snewDate.toUTCString();
sdt=sdateString.split(" ")
sDateArray.push(sdt[1]+" "+sdt[2]);
}
/* The root panel. */
var svis = new pv.Panel()
.width(sw)
.height(sh)
.left(25)
.right(15)
.top(9.5)
.bottom(30);
/* A background bar to reset the search query. */
svis.add(pv.Bar)
.fillStyle("lightgray")
.event("click", function() search(""))
.cursor("pointer");
/* Y-axis ticks and labels. */
svis.add(pv.Rule)
.visible(function() offset=="zero")
.data(function() sy.ticks(10))
.bottom(sy)
.strokeStyle(function(d) d==0 ? "black" : "#cccccc")
.anchor("left").add(pv.Label)
.text(function(d) sy.tickFormat(d)+(d>0?"":""));
/* Y-axis gridlines (shown with "expand" baseline). */
svis.add(pv.Rule)
.visible(function() offset=="expand")
.data(function() sp.ticks())
.left(-2).right(0)
.bottom(sp)
.strokeStyle(function(d) d==0 ? "black" : "#cccccc")
.anchor("left").add(pv.Label)
.text(function(d) (100*d).toFixed(0)+"%");
/* Stack layout. */
var area = svis.add(pv.Layout.Stack)
.offset(function() offset)
//on définit le type de vis souhaitée
.layers(function() pv.nest(dynamics.filter(test))
.key(function(d) d.gender + d.job)
.sortKeys(function(a, b) pv.reverseOrder(a.substring(1), b.substring(1)))
.entries())
.values(function(d) d.values)
.x(function(d) sx(d.year))
// ancienneactivityt on faisait toujours la normalisation... .y(function(d) sy(d.percent))
.y(function(d) sy(d.coarse))
.layer.add(pv.Area)
.def("alpha", function(d) alpha(sumByJob[d.key]))
.interpolate("basis")
.fillStyle(function(d) color(d.gender).alpha(this.alpha()))
.fillStyle(pv.Colors.category20().by(function() this.parent.index))
.cursor("pointer")
.event("mouseover", function(d) this.alpha(1).title(d.job))
.event("mouseout", function(d) this.alpha(null))
.event("click", function(d) search("^" + d.job + "$"));
/* Stack labels. */
svis.add(pv.Panel)
.extend(area.parent)
.add(pv.Area)
.extend(area)
.fillStyle(null)
.anchor("center").add(pv.Label)
.def("max", function(d) pv.max.index(d.values, function(d) d.coarse))
.visible(function() this.index == this.max())
.font(function(d) Math.round(8 + Math.sqrt(sy(d.coarse))) + "px sans-serif")
.textMargin(6)
//.textStyle("#fff")
.textStyle(function(d) "rgba(0, 0, 0, " + (Math.sqrt(sy(d.percent))) + ")")
.textAlign(function() this.index < 5 ? "left" : "right")
.text(function(d, sp) sp.key.substring(1));
/* X-axis ticks and labels. */
svis.add(pv.Rule)
.data(sx.ticks(20))
.left(sx)
.bottom(-6)
.height(5)
.anchor("bottom").add(pv.Label)
.text(function(d) sDateArray[this.index]);
/* Update the query regular expression when text is entered. */
function search(text) {
if (text != re) {
if (query.value != text) {
query.value = text;
query.focus();
}
re = new RegExp(text, "i");
update();
}
}
/* Tests to see whether the specified datum matches the current filters. */
function test(d) {
return (!gender || d.gender == gender) && d.job.match(re);
}
/* Recompute the y-scale domain based on query filtering. */
function update() {
sy.domain(0, Math.min(100, pv.max(pv.values(pv.nest(dynamics.filter(test))
.key(function(d) d.year)
.rollup(function(v) pv.sum(v, function(d) d.coarse))))));
svis.render();
}
/*// Recompute the y-scale domain based on query filtering.
function update() {
sy.domain(0, pv.max(pv.values(pv.nest(dynamics.filter(test)
.key(function(d) d.year)
.rollup(function(v) pv.sum(v, function(d) d.coarse))))));
svis.render();
}*/
function update_viz_type(e) {
offset = e.target.value;
svis.render();}
svis.render();
</script>';

?>