'use strict';
let title = document.getElementById('pokeName');
let divImg = document.getElementById('imgContainer');
let divInfo = document.getElementById('infoContainer');
let butonRandom = document.getElementById('generateNumber');

butonRandom.addEventListener('click', cleanAndRequest);
recibirPokemon();

//Xera número aleatorio para collelo como id do que buscar pokemons
function generateRandomNumber() {
	let randomId = Math.floor(Math.random() * 1025);
	while (randomId === 0) {
		randomId = generateRandomNumber();
	}
	return randomId;
}

//Limpamos a páxina de contido
function cleanAndRequest() {
	while (divInfo.firstChild) {
		divInfo.removeChild(divInfo.lastChild);
	}
	divImg.removeChild(divImg.lastChild);
	recibirPokemon();
}

// Concatenamos fecth a fin de obter dous JSON con toda a info (para saber o id da abilidade a procurar primeiro precisamos de sabelo pokémon co que estamos a traballar)

function recibirPokemon() {
	let randomId = generateRandomNumber();
	const req = new Request(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

	fetch(req)
		.then((response) => response.json())
		.then((dataPokemon) => recibirAbility(dataPokemon))
		.catch((error) => console.log(error));
}

function recibirAbility(dataPokemon) {
	const reqAbility = new Request(dataPokemon.abilities[0].ability.url);
	fetch(reqAbility)
		.then((response) => response.json())
		.then((dataAbility) => {
			mostrarPokemon(dataPokemon, dataAbility);
		})
		.catch((error) => console.log(error));
}

function mostrarPokemon(dataPokemon, dataAbility) {
	//Comprobamos cada atributo para asignalo a un li e mostralo na web
	let ul = document.createElement('ul');
	ul.classList.add('list-group');
	let pokeName = document.createElement('li');
	pokeName.classList.add('list-group-item');
	pokeName.innerText =
		'Pokémon Name: ' +
		dataPokemon.name.slice(0, 1).toUpperCase() +
		dataPokemon.name.slice(1);
	let pokeId = document.createElement('li');
	pokeId.classList.add('list-group-item');
	pokeId.innerText = 'Pokémon Id:  ' + dataPokemon.id;
	let pokeAbility = document.createElement('li');
	pokeAbility.classList.add('list-group-item');
	let abilityNameSpanish = dataAbility.names.filter(
		(el) => el.language.name == 'es'
	)[0].name;
	pokeAbility.innerText = `Ability: ${abilityNameSpanish}`;

	//Procuro os tipos, pode ter varios polo que é menester un check ao respecto
	let pokeType = document.createElement('li');
	pokeType.classList.add('list-group-item');
	pokeType.innerText = `Type: ${
		dataPokemon.types[0].type.name.slice(0, 1).toUpperCase() +
		dataPokemon.types[0].type.name.slice(1)
	}`;
	if (dataPokemon.types.length > 1) {
		pokeType.innerText += ` - ${
			dataPokemon.types[1].type.name.slice(0, 1).toUpperCase() +
			dataPokemon.types[1].type.name.slice(1)
		}`;
	}

	//Creo o elemento imaxe e poño de src a ligazón que da a api
	let pokeImg = document.createElement('img');
	pokeImg.classList.add('rounded');
	pokeImg.classList.add('mx-auto');
	pokeImg.classList.add('d-block');
	pokeImg.height = 250;
	pokeImg.width = 250;
	pokeImg.src = dataPokemon.sprites.other.home.front_default;
	ul.append(pokeName, pokeId, pokeAbility, pokeType);
	divInfo.append(ul);
	divImg.append(pokeImg);
	console.log(dataPokemon);
}

//TODO poñer ligazón nas habilidades a api
