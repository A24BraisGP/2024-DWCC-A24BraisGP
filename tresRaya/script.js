'use strict';

let tablero = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
];
let tabla = document.querySelector('table');
let resultado = document.querySelector('#resultado');
let lista = document.querySelector('ul');
let turno = prompt('Quién empieza [X-O]', 'X').toUpperCase();
while (turno.charAt(0) != 'X' && turno.charAt(0) != 'O') {
	turno = prompt('Quién empieza [X-O]').toUpperCase();
}
function marcarCasilla(event) {
	let casilla = event.target;
	console.log(casilla);
	let posicionFila = event.target.closest('tr').rowIndex;
	let posicionCelda = casilla.cellIndex;
	let posicionFinal = `[${posicionFila} , ${posicionCelda}]`;
	console.log(event.target.closest('tr').rowIndex);

	let li = document.createElement('li');
	li.innerText = `El jugador ${turno} ha puesto su casilla en la posición ${posicionFinal}`;
	lista.append(li);

	if (turno == 'O') {
		window.confirm(
			`Quieres tu casilla en la posicion ${posicionFinal}? [O]`
		)
			? (casilla.innerText = 'O')
			: marcarCasilla();
		turno = 'X';
	} else if (turno == 'X') {
		window.confirm(
			`Quieres tu casilla en la posicion ${posicionFinal}? [X]`
		)
			? (casilla.innerText = 'X')
			: marcarCasilla();
		turno = 'O';
	}
	tablero[posicionFila][posicionCelda] = casilla.innerText;

	comprobarTablero(posicionFila, posicionCelda, casilla.innerText);
}

tabla.addEventListener('click', marcarCasilla);

// TODO Creo que se pode facer co rowIndex  propiedades da táboa HTML
function comprobarTablero(fila, celda, valorCasilla) {
	if (fila == 0) {
		console.log('fila 0');

		if (tablero[fila][celda + 1] == valorCasilla) {
			console.log('izquierda');
		}
		if (tablero[fila + 1][celda] == valorCasilla) {
			console.log(abajo);
		}
	}
	if (fila == 1) {
		console.log('fila 1');
	}
	if (fila == 2) {
		console.log('fila 2');
	}
}
