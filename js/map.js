var mymap = L.map('mapid').setView([33.39,90.44], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibG9zdGIxIiwiYSI6ImNrYWV3eDBhYTA3aGYycm9nMDMzN3g3cGgifQ.PFbvBYtrGPHUW2UhJjA7xg'
}).addTo(mymap);


var old_india = L.geoJSON(old_india).addTo(mymap);
var new_india = L.geoJSON(new_india,{color:'yellow'}).addTo(mymap);
var old_nepal = L.geoJSON(old_nepal,{color:'green'}).addTo(mymap);
var new_nepal = L.geoJSON(new_nepal, { color : 'lime'}).addTo(mymap);
var china = L.geoJSON(china , {color:'pink'}).addTo(mymap);

var baseMaps = {
    "OSM" : mymap
}

var overlayMaps = {
    "New Nepal" : new_nepal,
    "Old Nepal" : old_nepal,
    "New India" : new_india,
    "Old India" : old_india,
    "China" : china
}

L.control.layers(baseMaps, overlayMaps).addTo(mymap);