(function($) {

$.fn.scrollbar = function(settings)
{
	
this.defaults = {
  width : "6px",
  bg : "#c1c1c1",
  color : "#0a94d5",
  auto: 0,
  step: 'auto'
}

var s = $.extend({}, this.defaults, settings);

$(this).each(function(i) {
//detect IE < 8 and default to normal browser scroll
if ($.browser.msie && $.browser.version.substr(0,1)<8) {
$(this).css('overflow','auto');
return false;
}

var height,width,fullheight,difference,ratio,step,cursorh,cursorStep,numsteps,total;
height = $(this).height();
width = $(this).width();
$(this).append("<div class=\"scroll_content\">\n" + $(this).html() + "</div>\n");
$(this).children().not('.scroll_content').remove();
fullheight = $(this).find('.scroll_content').height();
ratio = height/fullheight;
difference = fullheight - height +10;
if(difference<=0) return false;
cursorh = Math.floor(ratio * height);
if(s.step == "auto") {
step = height/3;
}
else {
step = s.step;	
}
numsteps = difference/step;
cursorStep = Math.floor((height-cursorh)/numsteps);

this.total = height - cursorh;
total = height - cursorh;
$(this).css("overflow","hidden");
$(this).append("<div class=\"track\"><div class=\"cursor\"></div></div>");
$(this).find('.scroll_content').css({width:width-parseInt(s.width.replace("px",""))-8+"px",float:"left",position:"relative",top:"0"});
$(this).find('.cursor').css({height:cursorh+'px',top:'0'});
$(this).find('.track').css({margin:"0 0 0 8px",float:"left",height:"100%"});
// apply settings 
$(this).find('.cursor').css({width:s.width,background:s.color});
$(this).find('.track').css({background:s.bg,width:s.width});
$(this).bind('mousewheel', function(event, delta) {
  scrollPane(delta,$(this));
})
$(this).find('.cursor').draggable({containment:'parent',drag: function(event, ui) {
    var top = parseInt($(this).css('top').replace('px',''));
    var pos = Math.floor(top / total * (difference));
    $(this).parent().parent().find('.scroll_content').css({"top": -pos+'px'});
  }														
});

$(this).find('.track').click(function(e) {
  $(this).find('div').css('top',e.pageY-$(this).offset().top);
  if(e.pageY-$(this).offset().top > total) $(this).find('div').css('top',total);
  lift($(this).parent());
})
var myint;
if(s.auto > 0) {
  myint = setInterval(function() { autoScroll(); },s.auto*1000);
}
else {
	if(myint) { clearInterval(myint); myint = 0; }
}

function lift(e) {
var top = parseInt($(e).find('.cursor').css('top').replace('px',''));
  var pos = Math.floor(top / total * difference);
  $(e).find('.scroll_content').css({"top": -pos+'px'});
}

function scrollPane(delta,e) {
  var top = (parseInt($(e).find('.cursor').css('top').replace('px',''))+cursorStep*delta*-1);
  if (delta<-1) delta = -1;
  if (delta>1) delta = 1;
  if(delta==-1 && (parseInt($(e).find('.cursor').css('top').replace('px','')) + cursorStep) > total) {
  $(e).find('.cursor').css('top',total+"px");
  $(e).find('.scroll_content').css('top',-1*difference+"px");
  return false;
  }
  if(delta==1 && (parseInt($(e).find('.cursor').css('top').replace('px','')) - cursorStep) < 0) { 
  $(e).find('.cursor').css('top',0);
  $(e).find('.scroll_content').css('top',0);
  return false;
  }
  $(e).find('.cursor').css('top',top+'px');
  $(e).find('.scroll_content').css('top',parseInt($(e).find('.scroll_content').css('top').replace('px',''))+step*delta+'px');
}

if (s.auto > 0) {
$(this).find('.scroll_content').parent().hover(function() {
	clearInterval(myint);
  },
  function() {
     myint = setInterval(function() { autoScroll(); },s.auto*1000); 
});
}
var e = $(this);
function autoScroll() {
  var delta = -1;
  var top = (parseInt($(e).find('.cursor').css('top').replace('px',''))+cursorStep*delta*-1);
  if((parseInt($(e).find('.cursor').css('top').replace('px','')) + cursorStep) > total) {
  $(e).find('.cursor').animate({top:0});
  $(e).find('.scroll_content').animate({top:0});
  }
  else {
  $(e).find('.cursor').animate({top:top+'px'});
  $(e).find('.scroll_content').animate({top:parseInt($(e).find('.scroll_content').css('top').replace('px',''))+step*delta+'px'});
  }
}

})
}	
})(jQuery);





/*! Copyright (c) 2009 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * Version: 3.0.2
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

$.event.special.mousewheel = {
	setup: function() {
		if ( this.addEventListener )
			for ( var i=types.length; i; )
				this.addEventListener( types[--i], handler, false );
		else
			this.onmousewheel = handler;
	},
	
	teardown: function() {
		if ( this.removeEventListener )
			for ( var i=types.length; i; )
				this.removeEventListener( types[--i], handler, false );
		else
			this.onmousewheel = null;
	}
};

$.fn.extend({
	mousewheel: function(fn) {
		return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
	},
	
	unmousewheel: function(fn) {
		return this.unbind("mousewheel", fn);
	}
});


function handler(event) {
	if(!$.browser.msie) event.preventDefault();
	var args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true;
	
	event = $.event.fix(event || window.event);
	event.type = "mousewheel";
	
	if ( event.wheelDelta ) delta = event.wheelDelta/120;
	if ( event.detail     ) delta = -event.detail/3;
	
	// Add events and delta to the front of the arguments
	args.unshift(event, delta);

	return $.event.handle.apply(this, args);
}

})(jQuery);