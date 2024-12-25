'use strict';

const map = L.map('map', { center: [42.87876, -8.547238], zoom: 17 });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker = L.marker([42.87876, -8.547238]).addTo(map);
marker.bindPopup('<b>IES San Clemente</b><br>R/ San Clemente.');
let circleMarker = L.circleMarker([42.87876, -8.547238 - 0.001], {
	radius: 50,
	color: 'black',
	fillColor: 'red',
}).addTo(map);

let circle = L.circle([42.87876, -8.547238 + 0.001], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 50,
}).addTo(map);

let line = L.polyline(
	[
		[42.87876, -8.547238],
		[42.8773, -8.54665],
	],
	{ color: 'red', weight: 5 }
).addTo(map);

let pol = L.polygon(
	[
		[42.87876, -8.546838],
		[42.8773, -8.54465],
		[42.8793, -8.54465],
	],
	{ color: 'red', fillColor: 'yellow', weight: 4 }
).addTo(map);

let popup = L.popup()
	.setLatLng([42.87876, -8.547238])
	.setContent('I am a standalone popup.')
	.openOn(map);

let legend = L.control({ position: 'bottomleft' });

legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'legend');
	div.innerHTML =
		'<p><b>Simple shapes in Leaflet</b></p><hr>' +
		'Created with the Leaflet library<br>';
	return div;
};

legend.addTo(map);

let popup2 = L.popup();
function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent(
			'You clicked the map at -<br>' +
				'<b>lon:</b> ' +
				e.latlng.lng +
				'<br>' +
				'<b>lat:</b> ' +
				e.latlng.lat
		)
		.openOn(map);
}
map.on('click', onMapClick);
