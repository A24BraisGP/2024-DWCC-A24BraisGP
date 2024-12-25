'use strict';

// Inicializo as variables que usaremos para o localStorage máis a diante, metemos un so item no storage, pero é un array de elementos que faremos string e logo parsearemos
let listStorage = window.localStorage;
let arrayToStore = [];

// Función que engade o elemento e ademais comproba se este é un duplicado recorrendo o contido da lista, se da cun duplicado alerta e sae da función
function engadirElemento(event) {
	event.preventDefault();
	let li = document.createElement('li');
	li.classList.add('list-group-item');
	li.innerText = uArtigo.value.trim();
	let check = li.innerText;
	if (checkDuplicado(check)) {
		arrayToStore.push(li.innerText);
		let btn = document.createElement('button');
		btn.addEventListener('click', borrarElemento);
		btn.innerHTML = 'X';
		li.append(btn);
		listaArtigos.append(li);
		borrarTodo.classList.remove('oculto');
		console.log(listStorage); 
	}
	// Engadimos o item sobre o storage coa chave 'array' para que se sobreescribe cada vez que se engada un elemento
	listStorage.setItem('array', JSON.stringify(arrayToStore));
	uArtigo.value = '';
}

//Función que comproba duplicados na lista collendo cada elemento contra o texto que se procura engadir ou actualizar (Check é o texto a comparar)
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

// Collemos o pai máis próximo do botón pulsado (O li que queremos borrar) e, se o usuario confirma, bórrase co remove, logo diso, actualizamos o array co que estamos a traballar no localStorage sen o elemento borrado
function borrarElemento(event) {
	event.stopPropagation();
	btnAct.classList.add('oculto');
	engadir.classList.remove('oculto');
	let liPai = event.target.closest('li');
	let elim = liPai.innerText.slice(0, liPai.innerText.length - 1);
	if (window.confirm(`Seguro que queres eliminar ${elim}?`)) {
		liPai.remove();
		let index = arrayToStore.indexOf(
			liPai.innerText.slice(0, liPai.innerText.length - 1)
		);

		arrayToStore.splice(index, 1);
		console.log(arrayToStore);
		// De novo, sobreescribise o item, pero neste caso sen o elemento borrado
		listStorage.setItem('array', JSON.stringify(arrayToStore));
	}
	// Se non quedan elementos li, ocultamos o botón de borralos todos
	if (listaArtigos.querySelectorAll('li').length == 0) {
		borrarTodo.classList.add('oculto');
	}
}

// Función que borra toda a lista despois de un confirm. Ocúltaos e limpa o Storage
function borrarTodoLista(event) {
	event.preventDefault();
	if (window.confirm('Seguro que queres borra todo')) {
		let lis = listaArtigos.querySelectorAll('li');
		lis.forEach((el) => {
			el.remove();
		});
		this.classList.add('oculto');
	}
	if (listStorage.length > 0) {
		listStorage.clear();
	}
	btnAct.classList.add('oculto');
	engadir.classList.remove('oculto');
}

//Función que filtra segundo o input do usuario. Cambia a cada input porque ten o listener 'change'. Oculta todolos elementos e comproba por cada un deles que conteña o que se indica no filtro.
function filtrarLista(event) {
	let listado = listaArtigos.querySelectorAll('li');
	let filtro = this.value.trim();
	listado.forEach((el) => el.classList.add('oculto'));
	for (const element of listado) {
		if (element.innerText.includes(filtro)) {
			element.classList.remove('oculto');
		}
	}
}

// Función que mostra o botón de actualizar. Ademais, chama á función que marca o elemento li clickado e SO ese elemento. Tamén pon na caixa de texto o valor do elemento seleccionado
function showActualizar(event) {
	toggleSelected(event);
	engadir.classList.add('oculto');
	btnAct.classList.remove('oculto');
	if (document.querySelector('.active')) {
		let selectedLi = document.querySelector('.active');
		uArtigo.value = selectedLi.innerText.slice(
			0,
			selectedLi.innerText.length - 1
		);
	}
}

// Función que actualiza o elemento cando se clicka o botón. Comproba chamando á función anterior se o elemento a actualizar coincide con outro xa presente. Finalmente, quítalle a seleccion despois de actualizar
function actualizarElemento(event) {
	let novoArt = uArtigo.value;
	let selectedLi = document.querySelector('.active');
	if (checkDuplicado(novoArt)) {
		arrayToStore[indexToAct] = novoArt;
		selectedLi.innerText = novoArt;
		let btn = document.createElement('button');
		btn.addEventListener('click', borrarElemento);
		btn.innerHTML = 'X';
		selectedLi.append(btn);
	}
	engadir.classList.remove('oculto');
	btnAct.classList.add('oculto');
	selectedLi.classList.remove('active');
}

// Esta función destaca o elemento do UL no que se pinchou engadíndolle a clase 'active' de bootstrap e quitándolla ás demais
function toggleSelected(event) {
	let lis = event.currentTarget.querySelectorAll('li');
	let clickedLi = event.target;

	indexToAct = arrayToStore.indexOf(
		clickedLi.innerText.slice(0, clickedLi.innerText.length - 1)
	);
	console.log(indexToAct);

	for (const [key, value] of lis.entries()) {
		value.classList.remove('active');
		if (value == clickedLi) {
			value.classList.add('active');
		}
	}
}

// Declaramos os elementos cos que traballaremos (Hoisting de funcións declaradas arriba)
let uArtigo = document.getElementById('uArtigo');
let engadir = document.getElementById('engadir');
let filtrado = document.getElementById('filtrado');
let listaArtigos = document.getElementById('listaArtigos');
let borrarTodo = document.getElementById('borrarTodo');
let btnAct = document.getElementById('actualizar');
let indexToAct = 0;

init();

// Inicialización da app
function init() {
	borrarTodo.addEventListener('click', borrarTodoLista);
	engadir.addEventListener('click', engadirElemento);
	filtrado.addEventListener('input', filtrarLista);
	listaArtigos.addEventListener('click', showActualizar);
	btnAct.addEventListener('click', actualizarElemento);

	// Finalmente, comprobamos se a storage ten máis dun elemento, accedemos á ela ao recargo da páxina e co parse lemos os elementos do array.

	if (listStorage.length > 0) {
		borrarTodo.classList.remove('oculto');

		if (listStorage.getItem('array')) {
			let arrayToPrint = JSON.parse(listStorage.getItem('array'));
			// Gardamos no array local o anterior do storage para sobreescribilo máis adiante co actualizado
			arrayToStore = [...arrayToPrint];
			//Crea e engade os elementos li acorde coas strings do storage
			for (let index = 0; index < arrayToPrint.length; index++) {
				let li = document.createElement('li');
				li.classList.add('list-group-item');
				li.innerText = arrayToPrint[index];
				let btn = document.createElement('button');
				btn.addEventListener('click', borrarElemento);
				btn.innerHTML = 'X';
				li.append(btn);
				listaArtigos.append(li);
			}
		}
	}
}
