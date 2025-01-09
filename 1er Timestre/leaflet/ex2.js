'use strict';
let arrayToStore = [];
// localStorage.setItem('array', JSON.stringify(arrayToStore));

// if (localStorage.length > 0) {
// 	if (localStorage.getItem('array')) {
// 		const arrayToPrint = JSON.parse(localStorage.getItem('array'));
// 		arrayToStore = [...arrayToPrint];
// 		console.log(arrayToPrint);
// 	}
// }

//a. Inicialmente debe mostrar un mapa centrado en Galicia ou Santiago de Compostela, o que ti escollas.

const map = L.map('map', {
	center: [42.880555555556, -8.5444444444444],
	zoom: 17,
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// b. No lateral da páxina, haberá unha zona reservada para mostrar o listado de
// puntos creados no mapa.
let ul = document.createElement('ul');

let legend = L.control({ position: 'bottomleft' });
legend.onAdd = function (map) {
	let div = L.DomUtil.create('div', 'legend');
	div.innerText = 'Marker list: ';
	div.append(ul);
	return div;
};

legend.addTo(map);

// c. Cando se pulse sobre punto do mapa aparecerá un formulario no lateral con,
// polo menos, unha caixa de texto para escribir unha descrición do punto. A
// caixa de texto debe ter o foco de forma automática. Podes engadir máis
// campos ao formulario para describir mellor o novo punto.
let eventLat;
let evenLng;

function showForm(event) {
	form.classList.remove('oculto');
	document.querySelector('#markerName').focus();
	eventLat = event.latlng.lat;
	evenLng = event.latlng.lng;
}

let form = document.querySelector('form');
let inputName = document.querySelector('#markerName');
inputName.addEventListener('keydown', addMarker);

map.on('click', showForm);

// d. Para gardar un novo punto no mapa, simplemente haberá que pulsar
// ENTER, estando o foco na caixa de texto.

function addMarker(event) {
	if (event.key == 'Enter') {
		event.preventDefault();
		let name = document.querySelector('#markerName').value;
		let des = document.querySelector('#markerDes').value;

		createMarker(eventLat, evenLng, name, des);
		updateList(name, des);
		document.querySelector('form').classList.add('oculto');
	} else {
		return;
	}
}

function createMarker(eventLat, eventLng, name, description) {
	let marker = L.marker([eventLat, eventLng]).addTo(map);
	let popup = L.popup();
	popup.setContent(name + '<hr>' + description);
	marker.bindPopup(popup);
	arrayToStore.push(marker);
	localStorage.setItem('array', JSON.stringify(arrayToStore));
}

function updateList(name, description) {
	let li = document.createElement('li');
	li.innerText = `Name : ${name} Description: ${description}`;
	ul.append(li);
}
