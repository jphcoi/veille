<?

   if ($norm==1) $helpernormstring='(2)+" fois/1000 billets'; else $helpernormstring='(0)+" fois';
	
   $mydata2=json_encode($data);
   $mydata='pv.range('.$dated.', '.$datef.').map(function(x) {
   			return { x: parseInt(x), y: x in data2 ? data2[x] : 0 }
   		})';
	  
	$step = strval(($datef-$dated) /7);
    $step=  20;

   $myscript='<script type="text/javascript+protovis">

	var data2= '.$mydata2.';
	var data = '.$mydata.';
	
	/* Sizing and scales. */
	var w = .865*document.body.clientWidth,
		h = 120,
		ymax = '.$maxdata.',
		x = pv.Scale.linear(data, function(d) d.x).range(0, w),
		y = pv.Scale.linear(0, ymax+.4).range(0, h);

	var i = -1;
	
	
	var DateArray = new Array();
	var periods=x.ticks('.$step.');
	var time;
	for(time in periods) {
	  	var newDate = new Date( );
		//newDate.setTime((1279152000+86400*(periods[time]-'.$dated.'))*1000);
		newDate.setTime((86400*(14609+periods[time]))*1000);
		dateString = newDate.toUTCString();
		dt=dateString.split(" ");
		DateArray.push(dt[1]+" "+dt[2]);
	}
	
	var iDateArray = new Array();
	for (time='.$dated.'; time<='.$datef.';time++) {
		var xnewDate = new Date( );	
		//xnewDate.setTime((1279152000+86400*(time-'.$dated.'))*1000);
		xnewDate.setTime((86400*(14609+time))*1000);
		dateString = xnewDate.toUTCString();
		dt=dateString.split(" ");
		iDateArray.push(dt[1]+" "+dt[2]);
	}
	
	/* The root panel. */
	var vis = new pv.Panel()
		.width(w+5)
		.height(h)
		.bottom(20)
		.left(25)
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
		.data(x.ticks('.$step.'))
		.visible(function(d) d)
		.left(x)
		.bottom(-5)
		.height(5)
	  .anchor("bottom").add(pv.Label)
		.text(function(d) DateArray[this.index]);
		
	/* The area with top line. */
	vis.add(pv.Area)
		.data(data)
		.bottom(1)
		.left(function(d) x(d.x))
		.height(function(d) y(d.y))
		.fillStyle("rgb(121,173,210)")
	  .anchor("top").add(pv.Line)
		.lineWidth(2);
	
	/* The line. */
	var line = vis.add(pv.Line)
    	.data(data)
	    .left(function(d) x(d.x))
    	.bottom(function(d) y(d.y))
	    .lineWidth(2);

	/* The mouseover dots and label. */
	line.add(pv.Dot)
		.visible(function() i >= 0)
		.data(function() [data[i]])
		.fillStyle(function() line.strokeStyle())
		.strokeStyle("#000")
		.size(12)
		.lineWidth(1)
	  .add(pv.Dot)
		.top(10)
		.left(20)
	  .anchor("right").add(pv.Label)
		.text(function(d) " "+d.y.toFixed'.$helpernormstring.' ("+iDateArray[i]+")");
	
	/* An invisible bar to capture events (without flickering). */
	vis.add(pv.Bar)
		.fillStyle("rgba(0,0,0,.001)")
		.event("mouseout", function() {
			i = -1;
			return vis;
		  })
		.event("mousemove", function() {
			var mx = x.invert(vis.mouse().x);
			i = pv.search(data.map(function(d) d.x), mx);
			i = i < 0 ? (-i - 2) : i;
			return vis;
		  });
	
	vis.render();

	</script>';
	
?>