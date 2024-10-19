// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13);

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);


var Lugaresimportantes_icon = L.icon({
  iconUrl: 'aventuras1.png', 
  iconSize: [52, 54], 
  iconAnchor: [19, 32], 
  popupAnchor: [0, -32] 
});

var universidadicon = L.icon({
  iconUrl: 'escuela.png', 
  iconSize: [52, 54], 
  iconAnchor: [19, 32], 
  popupAnchor: [0, -32] 
});

var Bienvenidos = L.icon({
  iconUrl: 'aventuras.png', 
  iconSize: [52, 54], 
  iconAnchor: [19, 32], 
  popupAnchor: [0, -32] 
});
var museo = L.icon({
  iconUrl: 'museo.png', 
  iconSize: [52, 54], 
  iconAnchor: [19, 32], 
  popupAnchor: [0, -32] 
});




// Añadir un marcador en Aguascalientes capital
var marker = L.marker([21.88234, -102.28259],{ icon: Bienvenidos }).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador en la Plaza de la Patria
var plazaPatria = L.marker([21.88187, -102.29495],{ icon: Lugaresimportantes_icon }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

var museoMuerte = L.marker([21.88417, -102.28878],{ icon: museo }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

var museoDescu = L.marker([21.856523616394632, -102.2888649],{ icon: museo }).addTo(map);
museoDescu.bindPopup("<b>Museo Descubre</b><br>Un lugar único.");


var templodelsaver = L.marker([21.839413980219927, -102.35292191135225],{ icon: universidadicon }).addTo(map);
templodelsaver.bindPopup("<b> Unibersidad Tecnolojica Aguascaliente </b><br> universidad.");


var losmuertitos = L.circle([21.887530073560455, -102.31161753442989], {
    color: 'orange',
    fillColor: '#ffa500',
    fillOpacity: 0.5,
    radius: 300
  }).addTo(map);
  losmuertitos.bindPopup("<b> tiangus de los muertiros </b><br> festival.<br>Una joya colonial.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
  color: 'green',
  fillColor: '#0f3',
  fillOpacity: 0.5,
  radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de muertos de Aguascalientes.");

// Dibuja un polígono para delimitar el área del Centro Histórico
var centroHistorico = L.polygon([
  [21.8821, -102.2935],
  [21.8829, -102.2865],
  [21.8797, -102.2860],
  [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

// Añadir controles de capas
var baseMaps = {
  "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};

var overlayMaps = {
  "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte,museoDescu]),
  "Feria de San Marcos": feriaSanMarcos,
  "Centro Histórico": centroHistorico,
  "Universidades": templodelsaver,
  "Festival" : L.layerGroup([losmuertitos,feriaSanMarcos]),
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
