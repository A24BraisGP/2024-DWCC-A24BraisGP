'use strict';
// 1. ¿Son iguais os seguintes fragmentos de código? ¿Que pasa se se produce un erro en f1?

// promise.then(f1).catch(f2);
// promise.then(f1, f2);

// Son iguales a nivel funcional, pero se falla a primeira saltará o catch, mentres que se falla a segunda devolve a promesa rexeitada. No primeiro caso captúrase o erro na promesa, mentres que no segundo non, procésase o erro.

// - - - - - - -- - - - - - - -

// 2. ¿Cal é a saída do seguinte código? ¿Por que?

// function job() {
// return new Promise(function(resolve, reject) {
// reject();
// });
// }
// let promise = job();
// promise
// .then(() => console.log("Success 1"))
// .then(() => console.log("Success 2"))
// .then(() => console.log("Success 3"))
// .catch(() => console.log("Error 1"))
// .then(() => console.log("Success 4"));

// O catch devolve unha promesa que ten concatenado outro then e que como non da erro móstrase succes 4

// 3. ¿Cal é o resultado do seguinte código? ¿Por que?

// let promise = new Promise(function(resolve, reject) {
// resolve(1);
// setTimeout(() => resolve(2), 1000);
// });
// promise.then(console.log);

// resólvese na primeira liña, en tanto que solo se resolve a primeira instancia do resolve(1). A primeira vez que unha promesa se resolve xa queda resolta.

// 4. ¿Cal é a saída do seguinte código? ¿Por que?

// function job(state) {
// return new Promise(function (resolve, reject) {
// if (state) {
// resolve("success");
// } else {
// reject("error");
// }
// });
// }
// let promise = job(true);
// promise
// .then(function (data) {
// console.log(data);
// return job(false);
// })
// .catch(function (error) {
// console.log(error);
// return "Error caught";
// })
// .then(function (data) {
// console.log(data);
// return job(true);
// })
// .catch((error) => console.log(error));

// A partir dunha promesa resolta non se sigue executando sobre a mesma

// 5. Crea unha función á que se lle pase un parámetro e que devolva unha promesa. A promesa debe resolverse despois de tres segundos dende que se chamou á función e debe devolver o parámetro pasado á función.
// Para probala, fai unha chamada á túa función e mostra por consola o que devolve.

function job(state) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve(state);
		}, 3000);
		setTimeout(resolve, 3000, state);
	});
}
let promise = job(true);
promise.then(function (data) {
	console.log(data);
});

// 6. Crea unha función que reciba un parámetro e devolva unha promesa.

// function isNumber(num) {
// 	return new Promise(function (resolve, reject) {
// 		if (isNaN(num) || typeof num != 'number') {
// 			reject('Erro. O parámetro non é un número');
// 		} else if (num % 2 == 0) setTimeout(reject, 2000, 'par');
// 		else setTimeout(resolve, 1000, 'impar');
// 	});
// }
// //TODO repasar
// let promesaNum = new Promise();

// a. Se o parámetro non é un número, debe rexeitar a promesa inmediatamente e devolver unha mensaxe indicando que “Erro. O parámetro non é un número”.

// b. Se o parámetro é un número impar, debe resolver a promesa despois de 1 segundo e devolver “impar”.

// c. Se o parámetro é un número par, debe rexeitar a promesa despois de 2 segundos e devolver “par”.

//----------------------------

// 1. Repite os exercicios onde se mostraba información das gatas e o do heroes usando a API fetch.

function actKittens(response) {
	showNames(response);
	showKittens(response);
}

function showNames(response) {
	let titleNames = document.createElement('h3');
	titleNames.innerText = 'Nomes Gatiños';
	let textNames = document.createElement('p');
	textNames.innerText += 'Os nomes das gatas son: ';
	let count = 0;
	for (const cat of response) {
		if (count === response.length - 1) {
			textNames.innerText = textNames.innerText.slice(
				0,
				textNames.innerText.length - 2
			);
			textNames.innerText += ` e ${cat.name} [${cat.breed}]`;
		} else {
			textNames.innerText += `${cat.name} [${cat.breed}] , `;
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
let promGat = fetch(
	'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json'
);
promGat.then((response) => response.json()).then((data) => actKittens(data));

// O mesmo pero co dos heroes
