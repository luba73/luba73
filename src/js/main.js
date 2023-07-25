
var map;

DG.then(function () {
    map = DG.map('map', {
        center: [51.532161, 46.020288],
        zoom: 18
    });
   
    var myIcon = DG.icon({
        iconUrl: '../icon.png',
        iconSize: [30, 30],
        iconAnchor: [35, 35],
        popupAnchor: [-20, -20],
        shadowAnchor: [22, 94]
    });
    
    DG.marker([51.532161, 46.020288], {icon: myIcon}).addTo(map).bindPopup('Режим&nbsp;работы: <br> 08:00 - 17:30');
});
