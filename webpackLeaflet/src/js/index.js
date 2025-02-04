'use strict';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS (optional)
import 'bootstrap';
('use strict');

// Declaramos o obxecto global L que contén os métodos dispoñibles en Leaflet. Dámoslle as coordenadas do mapa e o nivel de zoom que queiramos
getAllMarkers();
//A función L.map devolve un obxecto map que almacenamos nunha variable
const map = L.map('map', { center: [43.386025, -8.406214], zoom: 17 });
// map.removeLayer(marker);
let markerArray = [];
// const mapDiv = document.getElementById('map');

let infoMeteo = document.getElementById('infoMeteo');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	inertia: true,
}).addTo(map);

let ul = document.createElement('ul');

let legend = L.control({ position: 'bottomleft' });
legend.onAdd = function (map) {
	let div = L.DomUtil.create('div', 'legend');
	div.innerText = 'Marker list: ';
	div.append(ul);
	return div;
};

legend.addTo(map);

//Cando se pulse sobre punto do mapa aparecerá un formulario no lateral con,
// polo menos, unha caixa de texto para escribir unha descrición do punto. A
// caixa de texto debe ter o foco de forma automática. Podes engadir máis
// campos ao formulario para describir mellor o novo punto.
let eventLat;
let eventLng;

function showForm(event) {
	form.classList.remove('oculto');
	document.querySelector('#markerName').focus();
	eventLat = event.latlng.lat;
	eventLng = event.latlng.lng;
}

let form = document.querySelector('form');
let inputName = document.querySelector('#markerName');
inputName.addEventListener('keydown', addMarker);

map.on('click', showForm);

// Para gardar un novo punto no mapa, simplemente haberá que pulsar
// ENTER, estando o foco na caixa de texto.

function addMarker(event) {
	if (event.key == 'Enter') {
		event.preventDefault();
		let name = document.querySelector('#markerName').value;
		let des = document.querySelector('#markerDes').value;

		createMarker(eventLat, eventLng, name, des);
		document.querySelector('form').classList.add('oculto');
		saveMarker(eventLat, eventLng, name, des);
	} else {
		return;
	}
}

function createMarker(eventLat, eventLng, name, description) {
	let marker = L.marker([eventLat, eventLng]);
	let popup = L.popup();
	marker.addTo(map);
	markerArray.push(marker);
	let leafletId = marker._leaflet_id;

	popup.setContent(name + '<hr>' + description);
	marker.bindPopup(popup);
}

function updateList(eventLat, eventLng, name, description, markerId) {
	let li = document.createElement('li');
	li.innerText = `Name : ${name} Description: ${description}`;
	li.dataset.lat = eventLat;
	li.dataset.lng = eventLng;
	li.dataset.markerId = markerId;
	li.addEventListener('click', zoomToLi);
	let eraseButton = document.createElement('button');
	eraseButton.type = 'button';
	eraseButton.innerText = ' X ';
	eraseButton.addEventListener('click', eraseMarker);
	li.append(eraseButton);
	ul.append(li);
	getMeteoData(eventLat, eventLng, name);
}

//Cando se pulsa sobre un punto da lista especificada no apartado anterior o mapa reposicionarase mostrando o marcador no centro e un popup coa descrición do punto

function zoomToLi(event) {
	if (event.target.nodeName == 'BUTTON') {
		return;
	}
	let selectedLi = event.target;
	let newLat = selectedLi.dataset.lat;
	let newLng = selectedLi.dataset.lng;
	const location = [newLat, newLng];

	map.setView(location, map.getZoom());
}

async function saveMarker(eventLat, eventLng, name, des) {
	const post = {
		eventLat: eventLat,
		eventLng: eventLng,
		name: name,
		des: des,
	};

	try {
		let response = await fetch('http://localhost:3000/markers', {
			method: 'POST',
			body: JSON.stringify(post),
			header: {
				'Content-type': 'application/json:charset=utf-8',
			},
		});
		let data = await response.json();
		let markerId = data.id;
		updateList(eventLat, eventLng, name, des, markerId);
	} catch (error) {
		console.log('Erro  ' + error);
	}
}

async function getAllMarkers() {
	try {
		let response = await fetch('http://localhost:3000/markers');
		let data = await response.json();

		recreateAllMarkers(data);
	} catch (error) {
		console.log('Erro  ' + error);
	}
}

function recreateAllMarkers(dataAllMarkers) {
	for (const marker of dataAllMarkers) {
		createMarker(marker.eventLat, marker.eventLng, marker.name, marker.des);
		updateList(
			marker.eventLat,
			marker.eventLng,
			marker.name,
			marker.des,
			marker.id
		);
	}
}

// Deben poder eliminarse marcadores
//Función que se chama ao clickar no botón engadido no li
function eraseMarker(event) {
	if (event.target != event.currentTarget) {
		return;
	} else {
		let selectedLi = event.target.closest('li');
		let markerId = selectedLi.dataset.markerId;
		eraseMarkerFromDatabase(markerId);
		selectedLi.classList.add('oculto');
	}
}

async function eraseMarkerFromDatabase(markerId) {
	try {
		let response = await fetch(
			`http://localhost:3000/markers/${markerId}`,
			{
				method: 'DELETE',
			}
		);
	} catch (error) {
		console.log('Erro ' + error);
	}
}

// Predición meteorolóxica: usando a API de open-meteo ou a de MeteoSIX, engade aos puntos marcados no mapa a predición meteorolóxica do día seguinte ao actual.

async function getMeteoData(lat, lng, name) {
	try {
		let response = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m&hourly=temperature_2m,precipitation&forecast_days=1`
		);

		let data = await response.json();

		updateMeteoTable(data, name);
	} catch (error) {
		console.log('Erro getMeteoData -> ' + error);
	}
}

function updateMeteoTable(data, name) {
	let tr = document.createElement('tr');
	let maxTemp = Math.max(...data.hourly.temperature_2m);
	let minTemp = Math.min(...data.hourly.temperature_2m);

	let temperatureTd = document.createElement('td');
	let nameTd = document.createElement('td');
	nameTd.innerText = name + ' : ';

	temperatureTd.innerText = minTemp + ' ºC  // ' + maxTemp + 'ºC';
	tr.append(nameTd, temperatureTd);
	infoMeteo.append(tr);
}

//TODO borrar marker
