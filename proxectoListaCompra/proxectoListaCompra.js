'use strict';

// Función que engade o elemento e ademais comproba se este é un duplicado recorrendo o contido da lista, se da cun duplicado alerta e sae da función
function engadirElemento(event) {
	event.preventDefault();
	let li = document.createElement('li');
	let lis = listaArtigos.querySelectorAll('li');
	li.innerText = uArtigo.value;
	for (const element of lis) {
		let compare = element.innerText.slice(0, element.innerText.length - 1);
		console.log(compare);

		if (compare == uArtigo.value) {
			window.alert('O que intentas engadir xa existe');
			return;
		}
	}
	let btn = document.createElement('button');
	btn.addEventListener('click', borrarElemento);
	btn.innerHTML = 'X';
	li.append(btn);
	listaArtigos.append(li);
}

function borrarElemento(event) {
	let liPai = event.target.closest('li');
	let elim = liPai.innerText.slice(0, liPai.innerText.length - 1);
	if (window.confirm(`Seguro que queres eliminar ${elim}?`)) {
		liPai.classList.add('oculto');
	}
}

let uArtigo = document.getElementById('uArtigo');
let engadir = document.getElementById('engadir');
let filtrado = document.getElementById('filtrado');
let listaArtigos = document.getElementById('listaArtigos');

engadir.addEventListener('click', engadirElemento);
