<?
	if ($nav=="cooc")  {
		// réseau de cooccurrences?
		$node_size_function='.5*';
		$node_font_size_function='Math.sqrt';
		$double_click_url_prefix='chart.php?id_concept';
		$double_click_url_postfix='';
		}
	else {
		// réseau social?
		$node_size_function='8+1*';
		$node_font_size_function='1.5*';
		$double_click_url_prefix='source.php?id_source';
		$double_click_url_postfix='&nav=soc';
		}
	$myscript='
	
			<script type="text/javascript+protovis">

				var mynetwork = '.(json_encode($tmp)).';
				
				var w = .8*.9*document.body.clientWidth,
					h = .75*document.body.clientHeight,
					colors = pv.Colors.category19();
				
				var helper = new pv.Panel()
					.def("editmode", 0)
					.width(w)
					.height(20);
				
				var helperbar = helper.add(pv.Bar)
					.data([1])
					.fillStyle(function() helper.editmode() == 0 ? "lightgray" : "darkgray")
					.strokeStyle(function() this.fillStyle().darker())
					.height(20)
					.event("click",function() helper.editmode(1 - helper.editmode()));

				helperbar.anchor("left")
					    .add(pv.Label)
					    .text(function() " Mode "+(helper.editmode()!=0? "édition: double-cliquez sur une source pour l\'ôter du réseau": "navigation: double-cliquez sur une source pour l\'examiner"))
					    .font("bold small-caps 100% verdana");
				helperbar.anchor("right")
					    .add(pv.Label)
					    .text(function() "Cliquez ici pour "+(helper.editmode()==0? "passer en mode édition": "revenir au mode navigation")+" ")
					    .font("normal 100% verdana, sans-serif");
					
				var vis = new pv.Panel()
					.width(w)
					.height(h)
					.fillStyle("lightgray")
					.strokeStyle(function() this.fillStyle().darker())
					.event("mousedown", pv.Behavior.pan())
					.event("mousewheel", pv.Behavior.zoom());
				
				var force = vis.add(pv.Layout.Force)
					.nodes(mynetwork.nodes)
					.links(mynetwork.links);
				
				if (mynetwork.nodes.length>50) force.iterations(100);
				force.bound(true);
				//force.springConstant(0.0001);
				//force.springDamping(0.1);
				force.springLength(50);
				
				force.link.add(pv.Line);
				
				var noeuds = force.node.add(pv.Dot)
					.size(function(d) ('.$node_size_function.'(d.linkDegree)) * Math.pow(this.scale, -1.5))
					.shape(function (d) {if (d.group=="0") {return "square";} else {return "circle";}})
					.fillStyle(function(d) d.fix ? "brown" : colors(d.group))
					.strokeStyle(function() this.fillStyle().darker())
					.lineWidth(1)
					.title(function(d) "lié par "+d.ourDEG+" billets")
					.event("mousedown", pv.Behavior.drag())
					.event("drag", force)
					.event("dblclick", function (d) {
						if (helper.editmode()!=0) {
							// * enleve le noeud selectionne et retrace le reseau *
							mynetwork.nodes=mynetwork.nodes.filter(function (k) k.nodeName != d.nodeName);
							mynetwork.links=mynetwork.links.filter(function (k) (k.source != d.pvID && k.target != d.pvID));
							force.iterations(0);
							force.nodes(mynetwork.nodes);
							force.links(mynetwork.links);
							force.reset();
							vis.render();
							} 
						else {
							if (d.group!="0") self.location="'.$double_click_url_prefix.'="+d.ourID+"&periode='.arrange_periode($my_period).$double_click_url_postfix.'";}
							}
						);
						
				noeuds.anchor("bottom")
					.add(pv.Label)
					.text(function(d) d.nodeName)
					.font(function (d) {
						if (d.group=="0") {return "bold 160% verdana, sans-serif";} 
						else {
						 return (80+'.$node_font_size_function.'(d.ourDEG)).toString()+"% verdana, sans-serif";
						 }
						});
				
				vis.render();
				helper.render();		
				
			</script>';

?>