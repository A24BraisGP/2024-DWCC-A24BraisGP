'use strict';
let botonCrear = document.getElementById('botonCrear');
let divLista = document.getElementById('divLista');
let botonActualizar = document.getElementById('botonActualizar');
let input = document.getElementById('toDoName');
const reqUrl = 'http://localhost:3000/todos';
let id = 201;

botonCrear.addEventListener('click', crearToDo);
actualizarListaToDo();
botonActualizar.addEventListener('click', actualizarTitleTodo);

function crearToDo(event) {
	event.preventDefault();
	let newTodoTitle = input.value;
	console.log(newTodoTitle);

	crearBotonDeInput(newTodoTitle);
	crearToDoDB(newTodoTitle);
}

function crearToDoDB(toDoTitle) {
	const reqCrearToDo = new Request('http://localhost:3000/todos', {
		method: 'POST',
		body: JSON.stringify({
			userId: 1,
			title: `${toDoTitle}`,
			completed: false,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	fetch(reqCrearToDo)
		.then((response) => response.json())
		.then((dataResponse) => console.log(dataResponse))
		.catch((error) => console.log(error));
}

async function actualizarListaToDo() {
	try {
		let response = await fetch('http://localhost:3000/todos');
		let data = await response.json();
		mostrarLista(data);
	} catch (error) {
		console.log('Erro - ' + error);
	}

	// const actualizarRequest = new Request(reqUrl);
	// fetch(actualizarRequest)
	// 	.then((response) => response.json())
	// 	.then((data) => mostrarLista(data))
	// 	.catch((error) => console.log(error));
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
	if (toDo.completed) {
		newEntry.classList.add('completed');
	}
	newEntry.addEventListener('click', completarToDo);
	newEntry.addEventListener('auxclick', disableCompletar);
	newEntry.style.margin = '5px';
	newEntry.dataset.toDoId = toDo.id;
	newEntry.innerText = toDo.title;
	divLista.append(newEntry);
}

function crearBotonDeInput(toDo) {
	let newEntry = document.createElement('button');
	newEntry.classList.add('btn');
	newEntry.classList.add('btn-outline-info');
	if (toDo.completed) {
		newEntry.classList.add('completed');
	}
	newEntry.addEventListener('click', completarToDo);
	newEntry.addEventListener('auxclick', disableCompletar);
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
	input.value = event.target.innerText;
	botonActualizar.classList.remove('oculto');
	actualizarTitleTodo(event.target.dataset.toDoId);
	if (event.target.classList.contains('completed')) {
		deleteToDo(event.target);
	} else {
		event.target.classList.add('completed');
	}
}

function deleteToDo(toDoToDelete) {
	const toDoId = toDoToDelete.dataset.toDoId;
	const reqDelete = new Request(`http://localhost:3000/todos?_id=${toDoId}`, {
		method: 'DELETE',
	});
	fetch(reqDelete);
	divLista.removeChild(toDoToDelete);
}

//TODO implementar actualización
async function actualizarTitleTodo(toDoId) {
	const post = { title: input.value };
	await fetch(`http://localhost:3000/todos?_id=${toDoId}`, {
		method: 'PATCH',
		body: JSON.stringify(post),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	actualizarListaToDo();
}
