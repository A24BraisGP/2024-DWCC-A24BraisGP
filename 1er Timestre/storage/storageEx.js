'use strict';

// 1. Crea unha páxina web con un formulario que conteña diferentes campos, polo menos caixas de texto, botóns de radio e checkboxes.
// Fai que a páxina permita almacenar en local os valores de todos os campos do formulario de forma automática e transparente para a persoa usuaria. Isto permitirá que se a páxina se pecha accidentalmente e se volve a abrir, o formulario aparecerá cuberto cos últimos valores introducidos.

let localStorage = window.localStorage;
let arrayToStore = [];
let nome = document.getElementById('uName');
let apelidos = document.getElementById('uSurname');
let sexH = document.getElementById('uSexH');
let sexM = document.getElementById('uSexM');
let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let enviar = document.querySelector('#enviar');

console.log(enviar);

enviar.addEventListener('click', saveData);

function saveData(event) {
	event.preventDefault();
	arrayToStore[0] = nome.value;
	arrayToStore[1] = apelidos.value;
	arrayToStore[2] = sexH.checked;
	arrayToStore[3] = sexM.checked;
	arrayToStore[4] = check1.checked;
	arrayToStore[5] = check2.checked;

	localStorage.setItem('array', JSON.stringify(arrayToStore));
	console.log(localStorage);
}

if (localStorage.length > 0) {
	let arrayToPrint = JSON.parse(localStorage.getItem('array'));
	arrayToStore = [...arrayToPrint];
	nome.value = arrayToStore[0];
	apelidos.value = arrayToStore[1];
	sexH.checked = arrayToStore[2];
	sexM.checked = arrayToStore[3];
	check1.checked = arrayToStore[4];
	check2.checked = arrayToStore[5];

	console.log(arrayToPrint);
}
