var overlay;

function initialize() {
    var myLatLng = new google.maps.LatLng(44.73532729516236, 14.806330871582077);
    var mapOptions = {
        zoom: 14,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.READMAP
    };
    
    var gmap = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    
    function HTMLMarker(lat,lng){
        this.lat = lat;
        this.lng = lng;
        this.pos = new google.maps.LatLng(lat,lng);
    }
    
    HTMLMarker.prototype = new google.maps.OverlayView();
    HTMLMarker.prototype.onRemove= function(){}
    
    //init your html element here
    HTMLMarker.prototype.onAdd= function(){
        div = document.createElement('DIV');
        div.className = "arrow_box";
      div.innerHTML = "<img src='http://sve.hr/oglasnik/apartmani/male/vYfWhoqazs1-sItPo.jpg' alt=''>";
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }
    
    HTMLMarker.prototype.draw = function(){
        var overlayProjection = this.getProjection();
        var position = overlayProjection.fromLatLngToDivPixel(this.pos);
        var panes = this.getPanes();
        panes.overlayImage.style.left = position.x + 'px';
        panes.overlayImage.style.top = position.y - 30 + 'px';
    }
    
    //to use it
    var htmlMarker = new HTMLMarker(44.73532729516236, 14.806330871582077);
    htmlMarker.setMap(gmap);
  
}