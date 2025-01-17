'use strict';
let title = document.getElementById('pokeName');
let divImg = document.getElementById('imgContainer');
let divInfo = document.getElementById('infoContainer');
let butonRandom = document.getElementById('generateNumber');

butonRandom.addEventListener('click', recibirPokemon);

function generateRandomNumber() {
	return Math.floor(Math.random() * 1000);
}

function recibirPokemon() {
	let randomId = generateRandomNumber();
	const req = new Request(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

	fetch(req)
		.then((response) => response.json())
		.then((dataPokemon) => mostrarPokemon(dataPokemon))
		.catch((error) => console.log(error));
}

function mostrarPokemon(dataPokemon) {
	let ul = document.createElement('ul');
	let pokeName = document.createElement('li');
	pokeName.innerText = dataPokemon.name;
	let pokeId = document.createElement('li');
	pokeId.innerText = dataPokemon.id;
	let pokeAbility = document.createElement('li');
	console.log(dataPokemon.abilities[0].ability.url);

	pokeAbility.innerText = `Ability: ${getAbility(
		dataPokemon.abilities[0].ability.url
	)}`;

	ul.append(pokeName, pokeId, pokeAbility);
	divInfo.append(ul);
}

function getAbility(abilityUrl) {
	let abilityName = 'ABILITY';
	const req = new Request(abilityUrl);
	fetch(req)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.names[7].name);
			console.log(data);
		})
		.catch((error) => console.log(error));

	return abilityName;
}
