'use strict';

let textarea = document.getElementById('comment');

textarea.addEventListener('focus', showFocused);
textarea.addEventListener('blur', showFocused);
function showFocused(event) {
	this.classList.toggle('focused');
	if (event.type == 'blur' && this.innerText == '') {
		console.log('Perdeu o foco e está baleira');
	}
}

let form = document.querySelectorAll('form')[1];

form.addEventListener('submit', showAllValues);

function showAllValues(event) {
	event.preventDefault();
	console.log('O nome é: ' + document.getElementById('uName').value);
	console.log(
		'O seleccionado é: ' + document.getElementById('uSelect').value
	);
	console.log(
		'O radio seleccionado é: ' +
			(document.getElementById('uRadio').checked ? 'radio 1' : 'radio 2')
	);
	let check1 = document.getElementById('check1').checked;
	let check2 = document.getElementById('check2').checked;
	console.log(
		(document.getElementById('check1').checked ? 'check 1' : '') +
			(document.getElementById('check2').checked ? ' check 2' : '')
	);
	console.log('O area ten escrito: ' + document.getElementById('area').value);
}
