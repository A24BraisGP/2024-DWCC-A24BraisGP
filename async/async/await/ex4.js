'use strict';
let buscarMunicipio = document.getElementById('buscarMun');
buscarMunicipio.addEventListener('input', filtrarMunicipios);

let taboa = document.querySelector('table');

taboa.addEventListener('click', mostrarDatosEspecificos);

function mostrarDatosEspecificos(event) {}

async function getData() {
	const response = await fetch('municipiosCoruna.json');
	const data = await response.json();
	return data;
}

getData().then((dataMunicipios) => imprimirData(dataMunicipios));

function filtrarMunicipios(event) {}

function imprimirData(dataMunicipios) {
	for (let index = 0; index < dataMunicipios.length; index++) {
		let tr = document.createElement('tr');
		let capitalidade = document.createElement('td');
		let denominacion = document.createElement('td');
		let densidade = document.createElement('td');
		let habitantes = document.createElement('td');
		let superficie = document.createElement('td');

		capitalidade.innerText = dataMunicipios[index].Capitalidad;
		denominacion.innerText = dataMunicipios[index].Denominación;
		densidade.innerText = dataMunicipios[index].Densidad;
		habitantes.innerText = dataMunicipios[index].Habitantes;
		superficie.innerText = dataMunicipios[index].Superficie;
		console.log(tr);

		tr.append(
			capitalidade,
			denominacion,
			densidade,
			habitantes,
			superficie
		);

		taboa.append(tr);
	}
}
