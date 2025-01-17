'use strict';
let botonCrear = document.getElementById('botonCrear');
let divLista = document.getElementById('divLista');
let input = document.getElementById('toDoName');
const reqUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

botonCrear.addEventListener('click', crearToDo);
actualizarListaToDo();

function crearToDo(event) {
	event.preventDefault();
	let newTodoTitle = input.value;
	console.log(newTodoTitle);

	crearBoton(newTodoTitle);
	crearToDoDB(newTodoTitle);
}

function crearToDoDB(toDoTitle) {
	const reqCrearToDo = new Request(
		'https://jsonplaceholder.typicode.com/todos',
		{
			method: 'POST',
			body: JSON.stringify({
				userId: 1,
				title: `${toDoTitle}`,
			}),
			headers: {
				'Content-type': 'application/json: charset-UTF8',
			},
		}
	);
	fetch(reqCrearToDo)
		.then((response) => response.json())
		.then((dataResponse) => console.log(dataResponse));
}

function actualizarListaToDo() {
	const actualizarRequest = new Request(reqUrl);
	fetch(actualizarRequest)
		.then((response) => response.json())
		.then((data) => mostrarLista(data));
}

function mostrarLista(data) {
	for (const todo of data) {
		crearBoton(todo.title);
	}
}

function crearBoton(toDoTitle) {
	let newEntry = document.createElement('button');
	newEntry.classList.add('btn');
	newEntry.classList.add('btn-outline-info');
	newEntry.addEventListener('click', completarToDo);
	newEntry.style.margin = '5px';
	newEntry.innerText = toDoTitle;
	divLista.append(newEntry);
}

//TODO cambiar background y borrar de la lista
function completarToDo(event) {}
