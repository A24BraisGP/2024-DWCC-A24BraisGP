'use strict';

const div = document.querySelector('div');
let filas = parseInt(prompt('Cuántas filas tiene tu tabla'));
let columnas = parseInt(prompt('Cuántas columnas tiene tu tabla'));
const letras = crearLetras();
const letrasDes = desordenarLetras(letras);
let reset = document.querySelector('button');
const textoCartas = [...letrasDes];
const randIndList = [];
let coordenada = 0;
let intento = 0;
const resultado = document.querySelector('p');
console.log(letras);
console.log(letrasDes);
console.log();

for (let index = 0; index < letrasDes.length; index++) {
	randIndList.push(index);
}

randIndList.sort((a, b) => {
	return Math.random() * 1 > 0.5 ? 1 : -1;
});

reset.addEventListener('click', resetGame);
div.addEventListener('click', darVoltaCarta);
createTable();

//Función que crea a táboa acorde ao número de filas e columnas solicitadas
function createTable() {
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

function createTd() {
	let td = document.createElement('td');
	td.innerText = ' X';

	td.classList.add('table-primary');
	td.dataset.coordenada = coordenada;
	coordenada++;
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
	// Dobramos o array orixinal creando un co dobre de tamaño e metendo en cada posición o valor do primeiro na posición orixinal e na equivalente + o seu tamaño total (o mesmo valor na posición 0 e 0+n e así)
	let letrasDes = new Array(2 * letras.length).fill('a');
	for (let index = 0; index < letras.length; index++) {
		letrasDes[index] = letras[index];
		letrasDes[index + letras.length] = letras[index];
	}

	// Algoritmo para desordear e barallar as letras random. Sort pero devolve 1 ou -1 random
	letrasDes.sort((a, b) => {
		return Math.random() * 1 > 0.5 ? 1 : -1;
	});

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
		asignarValor(carta);
		if (document.querySelectorAll('.table-danger').length >= 2) {
			checkParella();
		}
		checkVolteadas();
	} else {
		return;
	}
}

function asignarValor(carta) {
	if (carta.classList.contains('table-danger')) {
		carta.innerText = textoCartas[randIndList[carta.dataset.coordenada]];
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
	if (intento == 3) {
		perderGame();
	}
	return volteadas;
}

function checkParella() {
	let cartasVolteadas = document.querySelectorAll('.table-danger');
	if (
		cartasVolteadas.item(0).innerText == cartasVolteadas.item(1).innerText
	) {
		cartasVolteadas.forEach((el) => {
			el.classList.replace('table-danger', 'table-info');
		});
	} else {
		cartasVolteadas.forEach((el) => {
			el.classList.replace('table-danger', 'table-primary');
			el.innerText = 'X';
		});
		intento++;
	}
	if (document.querySelectorAll('.table-info') == coordenada) {
		ganarGame();
	}
}

function resetGame(event) {
	event.preventDefault();
	location.reload();
}

function perderGame() {
	resultado.innerText = 'YOU LOST';
	let cartas = document.querySelectorAll('td');

	cartas.forEach((el) => {
		if (el.classList.contains('table-primary')) {
			el.classList.replace('table-primary', 'table-danger');
		} else {
			el.classList.add('table-danger');
		}
	});
	console.log(cartas);
}

function ganarGame() {
	resultado.innerText = 'YOU WON';
}
