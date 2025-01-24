'use strict';
let buscarMunicipio = document.getElementById('buscarMun');
buscarMunicipio.addEventListener('input', filtrarMunicipios);

let taboa = document.querySelector('table');
taboa.addEventListener('click', mostrarDatosEspecificos);

let datosEspecificosUl = document.getElementById('datosEspecificos');
let comeBackA = document.createElement('a');
comeBackA.href = '';
comeBackA.innerText = 'Volver a Todos';
comeBackA.addEventListener('click', reloadPage);

function reloadPage(event) {
	event.preventDefault();
	window.location.reload();
}

function mostrarDatosEspecificos(event) {
	getData().then((dataMunicipios) => {
		let listado = document.querySelectorAll('.denominacion');
		listado.forEach((el) => el.closest('tr').classList.add('oculto'));

		event.target.closest('tr').classList.remove('oculto');
		console.log(event.target);
		let filtroDeno = event.target
			.closest('tr')
			.querySelector('.denominacion').innerText;
		let municipioClickado = dataMunicipios.find(
			(object) => object.Denominación === filtroDeno
		);
		console.log(municipioClickado);

		for (const [clave, valor] of Object.entries(municipioClickado)) {
			let liInfo = document.createElement('li');
			liInfo.innerText = `${clave} : ${valor}`;
			datosEspecificosUl.append(liInfo);
		}
		datosEspecificosUl.after(comeBackA);
	});
}

async function getData() {
	const response = await fetch('municipiosCoruna.json');
	const data = await response.json();
	return data;
}

getData().then((dataMunicipios) => imprimirData(dataMunicipios));

function filtrarMunicipios(event) {
	let listado = document.querySelectorAll('.denominacion');
	let filtro = this.value.trim();

	listado.forEach((el) => el.closest('tr').classList.add('oculto'));
	for (const denominacion of listado) {
		if (denominacion.innerText.toLowerCase().startsWith(filtro)) {
			denominacion.closest('tr').classList.remove('oculto');
		}
	}
}

function imprimirData(dataMunicipios) {
	for (let index = 0; index < dataMunicipios.length; index++) {
		let tr = document.createElement('tr');
		let capitalidade = document.createElement('td');
		let denominacion = document.createElement('td');
		denominacion.classList.add('denominacion');
		let densidade = document.createElement('td');
		let habitantes = document.createElement('td');
		let superficie = document.createElement('td');

		capitalidade.innerText = dataMunicipios[index].Capitalidad;
		denominacion.innerText = dataMunicipios[index].Denominación;
		densidade.innerText = dataMunicipios[index].Densidad;
		habitantes.innerText = dataMunicipios[index].Habitantes;
		superficie.innerText = dataMunicipios[index].Superficie;

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
