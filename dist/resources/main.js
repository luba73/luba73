
var map;

DG.then(function () {
    map = DG.map('map', {
        center: [51.545863, 46.018537],
        zoom: 18
    });
    // DG.marker([51.545863, 46.018537]).addTo(map).bindPopup('Режим работы: 08:00 - 20:00');
    var myIcon = DG.icon({
        iconUrl: '../icon.png',
        iconSize: [30, 30],
        iconAnchor: [35, 35],
        popupAnchor: [-20, -20],
        shadowAnchor: [22, 94]
    });
    
    DG.marker([51.545863, 46.018537], {icon: myIcon}).addTo(map).bindPopup('Режим&nbsp;работы: <br> 08:00 - 20:00');
});
