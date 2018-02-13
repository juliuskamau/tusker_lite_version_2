function CustomMarker(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var div = this.div;
	
    if (!div) {
		div = this.div = $('' +
			'<div>' +
			// '<div class="shadow"></div>' +
			'<div class="pulse"></div>' +
			'<div class="pin"></div>' +
			'</div>' +
			
			'')[0];
		this.pinWrap = this.div.getElementsByClassName('pin-wrap');
		this.pin = this.div.getElementsByClassName('pin');
		this.pinShadow = this.div.getElementsByClassName('shadow');
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
		google.maps.event.addDomListener(div, "click", function(event) {
			google.maps.event.trigger(self, "click", event);
		});
	  }
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};

//$(function() {
  

  
//});
