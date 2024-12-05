'use strict';

const div = document.querySelector('div');
let filas = 2;
let columnas = 4;
const letras = crearLetras();
const letrasDes = desordenarLetras(letras);

div.addEventListener('click', darVoltaCarta);
createTable();

//Función que crea a táboa acorde ao número de filas e columnas solicitadas
function createTable() {
	// pídese o número de filas
	// filas = parseInt(prompt('Cuántas filas tiene tu tabla'));
	// pídese o número de columnas
	// columnas = parseInt(prompt('Cuántas columnas tiene tu tabla'));
	let table = document.createElement('table');
	table.classList.add('table');
	let tbody = document.createElement('tbody');
	for (let index = 0; index < filas; index++) {
		let tr = document.createElement('tr');
		for (let indexC = 0; indexC < columnas; indexC++) {
			tr.append(createTd(index, indexC));
		}
		tbody.append(tr);
	}
	table.append(tbody);
	div.append(table);
}

function createTd(index, indexC) {
	let td = document.createElement('td');
	td.innerText = 'X';
	td.classList.add('table-primary');
	td.dataset.fila = index;
	td.dataset.columna = indexC;
	return td;
}

// Función que crea o array de letras de xeito aletario
function crearLetras() {
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let charArr = characters.split('');

	let letras = [];
	for (let index = 0; index < columnas; index++) {
		let charIndex = Math.floor(Math.random() * charArr.length);
		letras[index] = charArr.at(charIndex);
		charArr.splice(charIndex, 1);
	}

	return letras;
}

//Dobrar as letras a fin de ter dúas iguais. Como xa veñen desordeadas da función anterior basta con sobreescribir dúas e remexer
function desordenarLetras(letras) {
	let letrasDes = new Array(2 * letras.length).fill('a');
	for (let index = 0; index < letras.length; index++) {
		letrasDes[index] = letras[index];
		letrasDes[index + letras.length] = letras[index];
	}
	letrasDes.sort((a, b) => {
		return Math.random() * 1 > 0.5 ? 1 : -1;
	});
	console.log(letrasDes);

	return letrasDes;
}

function darVoltaCarta(event) {
	if (event.target.nodeName == 'TD') {
		event.stopPropagation();
		let carta = event.target;
		if (
			carta.classList.contains('table-danger') ||
			carta.classList.contains('table-info')
		) {
			return;
		}
		carta.classList.replace('table-primary', 'table-danger');
		carta.innerText = 'proba';

		if (document.querySelectorAll('.table-danger').length >= 2) {
			checkParella();
		}
		checkVolteadas();
	} else {
		return;
	}
}

// TODO darlle consistencia ao valor das cartas volteadas
function checkVolteadas() {
	let cartasVolteadas = document.querySelectorAll('.table-danger').length;
	let todasCartas = document.querySelectorAll('td');
	let volteadas = false;
	if (cartasVolteadas > 2) {
		todasCartas.forEach((el) => {
			el.classList.replace('table-danger', 'table-primary');
			el.innerText = 'X';
		});
		volteadas = true;
	}
	return volteadas;
}

function checkParella() {
	let cartasVolteadas = document.querySelectorAll('.table-danger');
	console.log(cartasVolteadas.item(0).innerText);
	console.log(cartasVolteadas.item(1).innerText);
	if (
		cartasVolteadas.item(0).innerText == cartasVolteadas.item(1).innerText
	) {
		cartasVolteadas.forEach((el) => {
			el.classList.add('table-info');
		});
	}
}
