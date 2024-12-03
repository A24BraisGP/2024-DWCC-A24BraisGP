'use strict';
// 4. Crea unha páxina web que permita xogar ao 3 en raia cumprindo as seguintes
// restricións:
// a. A páxina debe estar composta, polo menos, dun parágrafo para mostrar información, un taboleiro 3x3 e un botón para reiniciar o xogo. Escolle os estilos CSS ao teu gusto.

// b. Inicialmente:

// i. O parágrafo mostra información indicando a quen lle toca xogar, a “X” ou a “0”. A decisión de quen empeza debe ser realizada aleatoriamente.

// ii. O taboleiro aparece baleiro.

// c. Cada vez que se fai clic nunha cela, colocarase nela un “X” ou un “0”, dependendo de a quen lle toque. Só se cambiará o valor da cela, se este estaba baleiro. Ademais, debe actualizarse o parágrafo de información indicando a quen lle toca a continuación.

// d. Despois de cada xogada comprobarase se a partida rematou. Unha partida remata cando gañe “X”, cando gañe “0” ou cando se produza un empate. No caso de rematar a partida, o parágrafo de información debe mostrar un texto indicando quen gañou ou se houbo empate.

// e. Cada vez que se pulse o botón para reiniciar o xogo, volverase ao estado inicial dos compoñentes.
let tablero = ['', '', '', '', '', '', '', '', ''];
let combinacionsGanadoras = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 4, 6],
	[2, 5, 8],
	[3, 4, 5],
	[6, 7, 8],
];
let tabla = document.querySelector('table');
let resultado = document.querySelector('#resultado');
let lista = document.querySelector('ul');
let tocaTurno = document.getElementById('tocaTurno');
let turno = Math.floor(Math.random() * 2) == 0 ? 'O' : 'X';
tocaTurno.innerText = `Tócalle a ${turno}`;

let turnCount = 0;
let win = false;
let reset = document.querySelector('button');
reset.addEventListener('click', resetPagina);

function resetPagina(event) {
	event.preventDefault();
	location.reload();
}

function marcarCasilla(event) {
	let casilla = event.target;
	let posicionFila = event.target.closest('tr').rowIndex;
	let posicionCelda = casilla.cellIndex;
	let posicionFinal = `[${posicionFila} , ${posicionCelda}]`;

	if (casilla.innerText == 'X' || casilla.innerText == 'O') {
		return;
	}

	let li = document.createElement('li');
	li.innerText = `El jugador ${turno} ha puesto su casilla en la posición ${posicionFinal}`;
	lista.append(li);
	if (turno == 'O') {
		window.confirm(
			`Quieres tu casilla en la posicion ${posicionFinal}? [O]`
		)
			? (casilla.innerText = 'O')
			: marcarCasilla();
		casilla.style.backgroundColor = 'blanchedalmond';
		turno = 'X';
	} else if (turno == 'X') {
		window.confirm(
			`Quieres tu casilla en la posicion ${posicionFinal}? [X]`
		)
			? (casilla.innerText = 'X')
			: marcarCasilla();
		casilla.style.backgroundColor = 'lightgreen';
		turno = 'O';
	}
	tablero[casilla.dataset.coordenada] = casilla.innerText;
	turnCount++;
	if (turnCount >= 5) {
		comprobarTablero(casilla.innerText);
	}
	if (turnCount == 9) {
		imprimirResultado(win);
	}
	console.log(tablero);
	tocaTurno.innerText = `Tócalle a ${turno}`;
}

tabla.addEventListener('click', marcarCasilla);

// TODO Creo que se pode facer co rowIndex  propiedades da táboa HTML
// Tamén se pode comprobar o número de turnos para solo iniciar o proceso de comprobación cando o primeiro xogador leve 3 turnos e finalizar o programa no turno 9.
function comprobarTablero(valorCasilla) {
	let index = 0;
	for (const combinacion of combinacionsGanadoras) {
		for (index = 0; index < combinacion.length; index++) {
			console.log('Combinación ' + combinacion[index]);

			console.log('Tablero :' + tablero[combinacion[index]]);
			console.log('Valor casilla : ' + valorCasilla);

			if (tablero[combinacion[index]] == valorCasilla) {
				continue;
			} else {
				break;
			}
		}
		if (index == 2) {
			break;
		}
	}
	console.log('index ' + index);
	if (index == 2) {
		win = true;
		imprimirResultado(win, turno);
	}
}

function imprimirResultado(win, turno = '') {
	tabla.removeEventListener('click', marcarCasilla);
	if (!win) {
		resultado.innerHTML = `O RESULTADO É UN EMPATE`;
	}
	if (win) {
		resultado.innerHTML = `NORABOA GAÑOU ${turno == 'O' ? 'X' : 'O'}`;
	}
}
