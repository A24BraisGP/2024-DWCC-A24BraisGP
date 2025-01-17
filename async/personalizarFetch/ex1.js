'use strict';
let boton = document.querySelector('button');
let inputUserId = document.querySelector('input');
let tabla = document.querySelector('table');

boton.addEventListener('click', enviarPeticionConUserID);

function enviarPeticionConUserID(event) {
	event.preventDefault();
	let userId = inputUserId.value;
	hacerRequest(userId);
}

function hacerRequest(userId) {
	const req = new Request(
		`https://jsonplaceholder.typicode.com/users/${userId}/posts`
	);
	fetch(req)
		.then((response) => response.json())
		.then((data) => actualizarTabla(data));
}

function actualizarTabla(data) {
	let tr;
	let tdUserId, tdPostId, tdTitle, tdBody;
	console.log(data);

	for (const post of data) {
		tr = document.createElement('tr');
		tdPostId = document.createElement('td');
		tdUserId = document.createElement('td');
		tdUserId.innerText = data[0].userId;
		tdTitle = document.createElement('td');
		tdBody = document.createElement('td');
		tdPostId.innerText = post.id;
		tdTitle.innerText = post.title;
		tdBody.innerText = post.body;
		console.log(tr);
		console.log(tdBody);

		tr.append(tdUserId);
		tr.append(tdPostId);
		tr.append(tdTitle);
		tr.append(tdBody);
		tabla.append(tr);
	}
}
