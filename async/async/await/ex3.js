'use strict';

import { Octokit, App } from 'https://esm.sh/octokit';

let buttonBuscar = document.querySelector('button');
let inputUsuario = document.getElementById('buscarUsuario');

let tr = document.querySelectorAll('tr')[1];

let img = document.querySelector('img');

buttonBuscar.addEventListener('click', buscarUsuario);

const octokit = new Octokit({
	auth: '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',
});

const res = await octokit.request('GET /user', {
	headers: {
		'X-GitHub-Api-Version': '2022-11-28',
	},
});

async function obterUsuarios(nomeUsuario) {
	const response = await octokit.request(`GET /users/${nomeUsuario}`, {
		username: 'USERNAME',
		headers: {
			'X-Github-Api-Version': '2022-11-28',
		},
	});
	return response;
}

obterUsuarios(nomeUsuario).then((datosUsusario) =>
	mostrarUsuario(datosUsusario)
);

function buscarUsuario(event) {
	while (tr.firstChild) {
		tr.removeChild(tr.lastChild);
	}

	let usuarioABuscar = inputUsuario.value;
	obterUsuarios(usuarioABuscar).then((datosUsusario) =>
		mostrarUsuario(datosUsusario)
	);
}

function mostrarUsuario(datosUsusario) {
	console.log(datosUsusario);

	img.src = datosUsusario.data.avatar_url;
	let login = document.createElement('td');
	login.innerText = datosUsusario.data.login;
	let followers = document.createElement('td');
	followers.innerText = datosUsusario.data.followers;
	let following = document.createElement('td');
	following.innerText = datosUsusario.data.following;
	let publicRepos = document.createElement('td');
	publicRepos = datosUsusario.data.public_repos;
	let bio = document.createElement('td');
	bio.innerText = datosUsusario.data.bio;
	let emailTd = document.createElement('td');
	emailTd.innerText = datosUsusario.data.email;
	tr.append(login, followers, following, publicRepos, bio, emailTd);
}
