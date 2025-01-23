'use strict';
let buscarMunicipio = document.getElementById('buscarMun');
buscarMunicipio.addEventListener('input', filtrarMunicipios);

async function getData() {
	const response = await fetch('municipiosCoruna.json');
	const data = await response.json();
	return data;
}

getData().then((data) => imprimirData(data));

function filtrarMunicipios(event) {}

function imprimirData(data) {}
