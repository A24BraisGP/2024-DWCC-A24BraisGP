'use strict';
function showResponse(event) {
	console.log(this.response);
	actHeader(this.response);
	actSection(this.response);
}

function actHeader(response) {
	let header = document.querySelector('header');
	let title = document.createElement('h1');
	let text = document.createElement('p');
	title.innerText = response.squadName;
	text.innerText = `Hometown: ${response.homeTown} // Formed: ${response.formed}`;
	header.append(title, text);
}

function actSection(response) {
	let section = document.querySelector('section');
	for (const hero of response.members) {
		let article = document.createElement('article');
		let titleHero = document.createElement('h2');
		titleHero.innerText = hero.name;
		let secretIdentity = document.createElement('p');
		secretIdentity.innerText = `Secret Identity: ${hero.secretIdentity}`;
		let age = document.createElement('p');
		age.innerText = `Age: ${hero.age}`;
		let superPowers = document.createElement('p');
		hero.powers.length > 0
			? (superPowers.innerText = 'SuperPowers:')
			: (superPowers.innerText = '');
		let powerList = document.createElement('ul');
		hero.powers.forEach((el) => {
			let powerLi = document.createElement('li');
			powerLi.innerText = el;
			powerList.append(powerLi);
		});
		article.append(titleHero, secretIdentity, age, superPowers, powerList);
		section.append(article);
	}
}

const req = new XMLHttpRequest();
req.addEventListener('load', showResponse);
req.open(
	'GET',
	'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
);

req.responseType = 'json';
req.send();
