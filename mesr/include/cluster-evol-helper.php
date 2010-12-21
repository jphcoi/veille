<?

   //if ($norm==1) $helpernormstring='(2)+" fois/1000 billets'; else $helpernormstring='(0)+" fois';
	
   $mydatajson=json_encode($data);
   $mylabels=json_encode($datalabels);
   //print_r($mydatajson);
   
	$mystring="[";
	for ($i=0;$i<count($data);$i++){
		$mystring.='pv.range('.$dated.', '.$datef.').map(function(x) {
   			return { x: parseInt(x), y: x in datajson['.$i.'] ? datajson['.$i.'][x] : 0 }})';
   		if ($i<count($data)-1) $mystring.=', '; else $mystring.=']';
   		}
   	//echo $mystring;
   	
	  
	// echo "<p>";
	$myscript='<script type="text/javascript+protovis">

	var datajson = '.$mydatajson.';
	var myranges = '.$mystring.';
	var mylabels = '.$mylabels.';
	var data = myranges[0];
	
	/* Sizing and scales. */
	var w = .87*document.body.clientWidth,
		h = 380,
		ymax = '.$maxdata.',
		x = pv.Scale.linear(data, function(d) d.x).range(0, w),
		y = pv.Scale.linear(0, ymax+.4).range(0, h);

	var ypos = -1;
	
	
	var DateArray = new Array();
	var periods=x.ticks(20);
	var time;
	for(time in periods) {
	  	var newDate = new Date( );
		newDate.setTime((1279152000+86400*(periods[time]-'.$dated.'))*1000);
		dateString = newDate.toUTCString();
		dt=dateString.split(" ");
		DateArray.push(dt[1]+" "+dt[2]);
	}
	
	var iDateArray = new Array();
	for (time='.$dated.'; time<='.$datef.';time++) {
		var xnewDate = new Date( );	
		xnewDate.setTime((1279152000+86400*(time-'.$dated.'))*1000);
		dateString = xnewDate.toUTCString();
		dt=dateString.split(" ");
		iDateArray.push(dt[1]+" "+dt[2]);
	}
	
	/* The root panel. */
	var vis = new pv.Panel()
		.width(w)
		.height(h)
		.bottom(20)
		.left(25)
		.right(20)
		.top(5);
	
	/* Y-axis and ticks. */
	vis.add(pv.Rule)
		.data(y.ticks(Math.min(10,ymax)))
		.bottom(y)
		.strokeStyle(function(d) d ? "#eee" : "#000")
	  .anchor("left").add(pv.Label)
		.text(y.tickFormat);
	
	/* X-axis and ticks. */
	vis.add(pv.Rule)
		.data(x.ticks(20))
		.visible(function(d) d)
		.left(x)
		.bottom(-5)
		.height(5)
	  .anchor("bottom").add(pv.Label)
		.text(function(d) DateArray[this.index]);
		
	/* The area with top line. */
	for (i=0;i<myranges.length;i++) 
		{
		var area=vis.add(pv.Area)
			.data(myranges[i])
			.bottom(1)
			.left(function(d) x(d.x))
			.height(function(d) y(d.y))
			.fillStyle("rgb(255,255,255)")
		  .anchor("top").add(pv.Line)
			.lineWidth(2);
		}
	
	/* The lines. */
	for (i=0;i<myranges.length;i++) 
	{
		var line = vis.add(pv.Line)
			.data(myranges[i])
			.left(function(d) x(d.x))
			.bottom(function(d) y(d.y))
			.strokeStyle(function () "rgb("+(parseInt(255*Math.random()))+","+(parseInt(255*Math.random()))+","+(parseInt(255*Math.random()))+")")
			.lineWidth(2)
		  .add(pv.Label)
		  	.visible(function (d) ((d.y>ymax/7) && (parseInt(d.x) % 7 == 0)))
			.text(mylabels[i])
		  .add(pv.Dot)
		    .size(6)
		  	.strokeStyle("gray")
		  	.fillStyle("black");
	}
		
	/* The mouseover dots and label. */
	// 	line.add(pv.Dot)
	// 		.visible(function() ypos >= 0)
	// 		.data(function() [data[ypos]])
	// 		.fillStyle(function() line.strokeStyle())
	// 		.strokeStyle("#000")
	// 		.size(12)
	// 		.lineWidth(1)
	// 	  .add(pv.Dot)
	// 		.top(10)
	// 		.left(20)
	// 	  .anchor("right").add(pv.Label)
	// 		.text(function(d) " "+d.y.toFixed'.$helpernormstring.' ("+iDateArray[ypos]+")");

	
	/* An invisible bar to capture events (without flickering). */
	// 	vis.add(pv.Bar)
	// 		.fillStyle("rgba(0,0,0,.001)")
	// 		.event("mouseout", function() {
	// 			ypos = -1;
	// 			return vis;
	// 		  })
	// 		.event("mousemove", function() {
	// 			var mx = x.invert(vis.mouse().x);
	// 			ypos = pv.search(data.map(function(d) d.x), mx);
	// 			ypos = ypos < 0 ? (-ypos - 2) : ypos;
	// 			return vis;
	// 		  });
	
	vis.render();

	</script>';
	
?>