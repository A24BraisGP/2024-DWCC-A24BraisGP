'use strict';

// Función que engade o elemento e ademais comproba se este é un duplicado recorrendo o contido da lista, se da cun duplicado alerta e sae da función
function engadirElemento(event) {
	event.preventDefault();
	let li = document.createElement('li');
	li.innerText = uArtigo.value;
	let check = li.innerText;
	if (checkDuplicado(check)) {
		li.append(btn);
		listaArtigos.append(li);
		borrarTodo.classList.remove('oculto');
	}
}

function checkDuplicado(check) {
	let lis = listaArtigos.querySelectorAll('li');
	for (const element of lis) {
		// Quítamoslle o que engada o append do botón para consecuentes checks
		let compare = element.innerText.slice(0, element.innerText.length - 1);
		if (compare == check) {
			window.alert('O que intentas engadir xa existe');
			return;
		}
	}
	return true;
}

function borrarElemento(event) {
	let liPai = event.target.closest('li');
	let elim = liPai.innerText.slice(0, liPai.innerText.length - 1);
	if (window.confirm(`Seguro que queres eliminar ${elim}?`)) {
		liPai.remove();
	}
	if (listaArtigos.querySelectorAll('li').length == 0) {
		borrarTodo.classList.add('oculto');
	}
}

function borrarTodoLista(event) {
	event.preventDefault();
	if (window.confirm('Seguro que queres borra todo')) {
		let lis = listaArtigos.querySelectorAll('li');
		lis.forEach((el) => {
			el.remove();
		});
		this.classList.add('oculto');
	}
}

function filtrarLista(event) {
	let listado = listaArtigos.querySelectorAll('li');
	let filtro = this.value;
	listado.forEach((el) => el.classList.add('oculto'));
	for (const element of listado) {
		if (element.innerText.includes(filtro)) {
			element.classList.remove('oculto');
		}
	}
}

function showActualizar(event) {
	toggleSelected(event);
	btnAct.classList.toggle('oculto');
}

function actualizarElemento(event) {
	let novoArt = uArtigo.value;
	let selectedLi = document.getElementsByClassName('selected')[0];
	selectedLi.innerText = novoArt;
}

// Esta función desetaca o elemento do UL no que se pinchou
function toggleSelected(event) {
	let lis = event.currentTarget.querySelectorAll('li');
	let clickedLi = event.target;
	for (const [key, value] of lis.entries()) {
		value.classList.remove('selected');
		if (value == clickedLi) {
			value.classList.add('selected');
		}
	}
}
let btn = document.createElement('button');
btn.addEventListener('click', borrarElemento);
btn.innerHTML = 'X';
let uArtigo = document.getElementById('uArtigo');
let engadir = document.getElementById('engadir');
let filtrado = document.getElementById('filtrado');
let listaArtigos = document.getElementById('listaArtigos');
let borrarTodo = document.getElementById('borrarTodo');
let btnAct = document.getElementById('actualizar');
btnAct.addEventListener('click', actualizarElemento);

borrarTodo.addEventListener('click', borrarTodoLista);
engadir.addEventListener('click', engadirElemento);
filtrado.addEventListener('input', filtrarLista);
listaArtigos.addEventListener('click', showActualizar);
