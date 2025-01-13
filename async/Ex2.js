'use strict';
function showRequest(event) {
	console.log(this.response);
	showNames(this.response);
	showKittens(this.response);
}

function showNames(response) {
	let titleNames = document.createElement('h3');
	titleNames.innerText = 'Nomes Gatiños';
	let textNames = document.createElement('p');
	let count = 0;
	for (const cat of response) {
		if (count === response.length - 1) {
			textNames.innerText = textNames.innerText.slice(
				0,
				textNames.innerText.length - 2
			);
			textNames.innerText += ` e ${cat.name}`;
		} else {
			textNames.innerText += `${cat.name} , `;
			count++;
		}
	}
	divResponse.append(titleNames);
	divResponse.append(textNames);
}

function showKittens(response) {
	let textGatiños = document.createElement('p');
	let titleGatiños = document.createElement('h3');
	titleGatiños.innerText = 'Fillos Gatiños';
	let femias = 0;
	let machos = 0;
	for (const cat of response) {
		femias += cat.kittens.filter((el) => el.gender == 'f').length;
		machos += cat.kittens.filter((el) => el.gender == 'm').length;
	}
	textGatiños.innerText = `Hai un total de ${
		femias + machos
	} gatiños: temos ${femias} femias e ${machos} machos`;

	divResponse.append(titleGatiños);
	divResponse.append(textGatiños);
}

let divResponse = document.getElementById('response');
const req = new XMLHttpRequest();
req.addEventListener('load', showRequest);
req.open(
	'GET',
	'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json'
);
req.responseType = 'json';
req.send();
