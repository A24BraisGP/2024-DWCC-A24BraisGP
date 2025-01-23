// 1. Reescribe o seguinte código usando async/await:
// function loadJson(url) {
// return fetch(url)
// .then(response => {
// if (response.status == 200) {
// return response.json();
// } else {
// throw new Error(response.status);
// }
// });
// }
// loadJson('https://no-such-user.json')
// .catch(console.log);

async function loadJson(url) {
	try {
		let result = await fetch(url);

		if (!result.ok) throw new Error('Erro na promesa');
		let data = await result.text();
		console.log(data);

		return data;
	} catch (error) {
		console.log(error);
	}
}

loadJson('https://pokeapi.co/api/v2/pokemon/3');

//2. Dado o seguinte código, escribe o corpo da función imprimirResultado() para que
// chame á función wait e imprima o resultado da promesa que devolve.
// async function wait() {
// await new Promise((resolve) => setTimeout(resolve, 3000));
// return 10;
// }
// function imprimirResultado() {
// // Recorda, aquí non se pode usar "await"
// // ¿que escribir aquí?
// }
// imprimirResultado();

async function wait() {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return 10;
}
function imprimirResultado() {
	let promise = wait();
	promise
		.then((response) => console.log(response))
		.catch((error) => console.log(error));
}
imprimirResultado();
