'use strict';
let lat = 0.0;
let lon = 0.0;

// TODO
// Comprobar por que as veces carga lat e lon 0.0 no mapa
// Comprobar se é posible pasalos datos de xeito asíncrono e usalos normal

if ('geolocation' in navigator) {
	/* geolocation is available */
	navigator.geolocation.getCurrentPosition(
		function (posicion) {
			console.log(posicion);
			// desestruturación de obxectos
			const { latitude, longitude } = posicion.coords;
			lat = latitude;
			lon = longitude;
			console.log(`latitude: ${lat}, lonxitude: ${lon}`);
		},
		function (error) {
			console.log(`ERROR(${error.code}): ${error.message}`);
		}
	);
} else {
	/* geolocation IS NOT available */
}

setTimeout(() => {
	const map = L.map('map', {
		center: [lat, lon],
		zoom: 17,
	});

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);

	map.on('click', showPopup);
	function showPopup(event) {
		let latitudeClick = event.latlng.lat;
		let longitudeClick = event.latlng.lng;
		let marker = L.marker([latitudeClick, longitudeClick]).addTo(map);
		let popup = L.popup();
		popup.setLatLng(event.latlng);
		popup.setContent(
			'Clickaches no punto - ' +
				'<hr>' +
				'latitude: ' +
				event.latlng.lat.toFixed(6) +
				'<br>lonxitude: ' +
				event.latlng.lng.toFixed(6)
		);
		marker.bindPopup(popup);
	}
}, 1000);
