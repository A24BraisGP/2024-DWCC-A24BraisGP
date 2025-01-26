'use strict';
getData().then((data) => showData(data));

let pName = document.getElementById('pName');
let searchBut = document.querySelector('button');
let resultDiv = document.getElementById('result');
let imgContainer = document.querySelector('aside');
let quoteUl = document.getElementById('quotes');
searchBut.addEventListener('click', showPhilosopher);

async function getData() {
	try {
		const req = `https://philosophersapi.com/api/philosophers`;

		const response = await fetch(req);

		if (!response.ok) throw new Error(`${response.statusText}`);

		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
}

function showData(data) {
	console.log(data);
}

function showPhilosopher(event) {
	event.preventDefault();
	let name = pName.value.slice(0, 1).toUpperCase() + pName.value.slice(1);
	getPhilosopher(name).then((pData) => processData(pData));
}

async function getPhilosopher(name) {
	const req = `https://philosophersapi.com/api/philosophers/name/${name}`;

	const response = await fetch(req);

	const data = await response.json();

	return data;
}

function processData(pData) {
	let img = document.createElement('img');
	img.src = `https://philosophersapi.com${pData.images.illustrations.ill500x500}`;
	img.alt = pData.wikiTitle;
	imgContainer.append(img);
	let description = document.createElement('p');
	description.innerText = pData.topicalDescription;
	let linkToSpe = document.createElement('a');
	linkToSpe.href = pData.speLink;
	linkToSpe.innerText = `Link to the Stanford Encyclopedia`;
	for (const quote of pData.quotes) {
		let litQuote = document.createElement('li');
		litQuote.innerText = `From ${quote.work}  => ${quote.quote}`;
		quoteUl.append(litQuote);
	}
}
