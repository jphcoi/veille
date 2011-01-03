// $Id: $

/*
 * JTip
 * By Cody Lindley (http://www.codylindley.com)
 * Under an Attribution, Share Alike License
 * JTip is built on top of the very light weight jquery library.
 *
 * This version has been modified by Ueli Weiss.
 * - added non-ajax tooltips
 * - width can now also be passed by class name
 */

//on page load (as soon as its ready) call JT_init
$(document).ready(JT_init);

function JT_init(){
	       $(".jTip").hover(
	         function(){JT_show(this.href,this.id,this.name)},
	         function(){$('#JT').remove()}
	         ).click(function(){return false});	   
}

function JT_show(url,linkId,title){
	if(title == false)title="&nbsp;";
	var de = document.documentElement;
	var w = self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var hasArea = w - getAbsoluteLeft(linkId);
	var clickElementy = getAbsoluteTop(linkId) - 3; //set y position
	var elem = $('#' + linkId);
	var arrList = elem.get(0).className.split(' ');
	var content = '';
	
	// default width
	var width = 250;
	var opacityRatio = 1;
	
	// go through class names
	for (var keyVar in arrList ) {
	 if (arrList[keyVar].substr(0,5) == 'jTip_') {
	   if (arrList[keyVar].substr(5,8) == 'element_') {
	     // handle element loading
	     content += $('#'+arrList[keyVar].substr(13)).html();
	   }
	   if (arrList[keyVar].substr(5,6) == 'width_') {
       // handle width
       width = (arrList[keyVar].substr(11))*1;
     }
     if (arrList[keyVar].substr(5,8) == 'opacity_') {
       // handle opacity (between 0 and 100)
       opacityRatio = (arrList[keyVar].substr(13))/100;
     }
	 }
  }

  var doAjax = (content == '' && url !== undefined);
  
  // normal non-ajax tooltip
  if (content.length > 0) {
    if (url !== undefined) {
      $('#' + linkId).bind('click',function(){window.location = url});
    }
    
    if(hasArea>((width*1)+75)){
      $("body").append("<div id='JT' style='width:"+width*1+"px'><div id='JT_arrow_left'></div><div id='JT_close_left'>"+title+"</div><div><div id='JT_copy'></div></div>");//right side
      var arrowOffset = getElementWidth(linkId) + 11;
      var clickElementx = getAbsoluteLeft(linkId) + arrowOffset; //set x position
    }else{
      $("body").append("<div id='JT' style='width:"+width*1+"px'><div id='JT_arrow_right' style='left:"+((width*1)+1)+"px'></div><div id='JT_close_right'>"+title+"</div><div><div id='JT_copy'></div></div>");//left side
      var clickElementx = getAbsoluteLeft(linkId) - (width + 15); //set x position
    }
    $('#JT_copy').append(content);
    $('#JT').css({left: clickElementx+"px", top: clickElementy+"px", opacity: opacityRatio});
    $('#JT').show();
  }
  else if (doAjax) {
		var queryString = url.replace(/^[^\?]+\??/,'');
		var params = parseQuery( queryString );
		if(params['width'] !== undefined){width = params['width']*1;};
    if(params['link'] !== undefined){
      $('#' + linkId).bind('click',function(){window.location = params['link']});
      $('#' + linkId).css('cursor','pointer');
    }
		
		if(hasArea>(width+75)){
			$("body").append("<div id='JT' style='width:"+width+"px'><div id='JT_arrow_left'></div><div id='JT_close_left'>"+title+"</div><div id='JT_copy'><div class='JT_loader'><div></div></div>");//right side
			var arrowOffset = getElementWidth(linkId) + 11;
			var clickElementx = getAbsoluteLeft(linkId) + arrowOffset; //set x position
		}else{
			$("body").append("<div id='JT' style='width:"+width+"px'><div id='JT_arrow_right' style='left:"+(width+1)+"px'></div><div id='JT_close_right'>"+title+"</div><div id='JT_copy'><div class='JT_loader'><div></div></div>");//left side
			var clickElementx = getAbsoluteLeft(linkId) - (width + 15); //set x position
		}
		
		$('#JT_loader').hide();
		$('#JT_copy').append(content);
		
		$('#JT').css({left: clickElementx+"px", top: clickElementy+"px", opacity: opacityRatio});
		$('#JT').show();
	  $('#JT_copy').load(url);
	}
}

function getElementWidth(objectId) {
	x = document.getElementById(objectId);
	return x.offsetWidth;
}

function getAbsoluteLeft(objectId) {
	// Get an object left position from the upper left viewport corner
	o = document.getElementById(objectId)
	oLeft = o.offsetLeft            // Get left position from the parent object
	while(o.offsetParent!=null) {   // Parse the parent hierarchy up to the document element
		oParent = o.offsetParent    // Get parent object reference
		oLeft += oParent.offsetLeft // Add parent left position
		o = oParent
	}
	return oLeft
}

function getAbsoluteTop(objectId) {
	// Get an object top position from the upper left viewport corner
	o = document.getElementById(objectId)
	oTop = o.offsetTop            // Get top position from the parent object
	while(o.offsetParent!=null) { // Parse the parent hierarchy up to the document element
		oParent = o.offsetParent  // Get parent object reference
		oTop += oParent.offsetTop // Add parent top position
		o = oParent
	}
	return oTop
}

function parseQuery ( query ) {
   var Params = new Object ();
   if ( ! query ) return Params; // return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) continue;
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function blockEvents(evt) {
              if(evt.target){
              evt.preventDefault();
              }else{
              evt.returnValue = false;
              }
}
