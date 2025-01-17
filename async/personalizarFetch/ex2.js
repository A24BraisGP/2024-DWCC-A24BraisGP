'use strict';
let botonCrear = document.getElementById('botonCrear');
let divLista = document.getElementById('divLista');
let input = document.getElementById('toDoName');
const reqUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
let id = 201;

botonCrear.addEventListener('click', crearToDo);
actualizarListaToDo();

function crearToDo(event) {
	event.preventDefault();
	let newTodoTitle = input.value;
	console.log(newTodoTitle);

	crearBotonDeInput(newTodoTitle);
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
				completed: false,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		}
	);
	fetch(reqCrearToDo)
		.then((response) => response.json())
		.then((dataResponse) => console.log(dataResponse))
		.catch((error) => console.log(error));
}

function actualizarListaToDo() {
	const actualizarRequest = new Request(reqUrl);
	fetch(actualizarRequest)
		.then((response) => response.json())
		.then((data) => mostrarLista(data));
}

function mostrarLista(data) {
	for (const todo of data) {
		crearBoton(todo);
	}
}

function crearBoton(toDo) {
	let newEntry = document.createElement('button');
	newEntry.classList.add('btn');
	newEntry.classList.add('btn-outline-info');
	newEntry.addEventListener('click', completarToDo);
	newEntry.addEventListener('contextmenu', disableCompletar);
	newEntry.style.margin = '5px';
	newEntry.dataset.toDoId = toDo.id;
	newEntry.innerText = toDo.title;
	divLista.append(newEntry);
}

function crearBotonDeInput(toDo) {
	let newEntry = document.createElement('button');
	newEntry.classList.add('btn');
	newEntry.classList.add('btn-outline-info');
	newEntry.addEventListener('click', completarToDo);
	newEntry.addEventListener('contextmenu', disableCompletar);
	newEntry.style.margin = '5px';
	newEntry.dataset.toDoId = id;
	newEntry.innerText = toDo;
	divLista.append(newEntry);
	id++;
}

function disableCompletar(event) {
	event.target.classList.remove('completed');
}

function completarToDo(event) {
	if (event.target.classList.contains('completed')) {
		deleteToDo(event.target);
	} else {
		event.target.classList.add('completed');
	}
}

function deleteToDo(toDoToDelete) {
	console.log(toDoToDelete);

	const toDoId = toDoToDelete.dataset.toDoId;
	const reqDelete = new Request(
		`https://jsonplaceholder.typicode.com/todos/${toDoId}`,
		{
			method: 'DELETE',
		}
	);
	fetch(reqDelete);
	divLista.removeChild(toDoToDelete);
}

//TODO implementar actualización
