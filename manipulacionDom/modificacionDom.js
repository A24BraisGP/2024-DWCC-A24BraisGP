'use strict';
// 1. Imaxinar que a variable elemento fai referencia a un elemento do DOM e text é unha variable con unha cadea de texto que inclúe etiquetas HTML. ¿Cales dos seguintes comandos farán exactamente o mesmo?:

// a. elemento.append(document.createTextNode(text));
// b. elemento.innerHTML = text;
// c. elemento.textContent = text;

// element.innerHTML

// 2. Dada unha lista <ol> con varios elementos <li>, crea o código necesario para eliminar todos os <li> da lista

let listaOl = document.createElement('ol');
let li;
for (let index = 1; index < 6; index++) {
	li = document.createElement('li');
	li.innerText = `${index}`;
	listaOl.append(li);
}

console.log(listaOl);

const novaLista = Array.from(listaOl.childNodes).forEach((el) => {
	if (listaOl.hasChildNodes()) {
		listaOl.removeChild(el);
	}
});

console.log('----------------');

// 3. Dado o seguinte código, ¿por que segue aparecendo o “Texto” despois de borrar a táboa?

let taboa = document.getElementById('taboa');
taboa.remove();

// Porque se trata dun nodo texto, non dun elemento ao que ataque o método remove()

// 4. Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4 elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no navegador

let listaUl = document.getElementById('lista-ul');

let liUl = document.createElement('li');
let liUl2 = document.createElement('li');
let liUl3 = document.createElement('li');
let liUl4 = document.createElement('li');

let listaLiUl = [liUl, liUl2, liUl3, liUl4];
for (const element of listaLiUl) {
	element.innerText = `${listaLiUl.indexOf(element) + 1}`;
	listaUl.append(element);
}

console.log('---------------');

// 5. Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li> seguintes:

let li1 = document.getElementById('one');
let li4 = document.getElementById('two');
let li2 = document.createElement('li');
let li3 = document.createElement('li');

li2.innerText = '2';
li3.innerText = '3';
li1.after(li2);
li4.before(li3);

console.log('------------');

// 6. Dado un obxecto como o seguinte:

let arbore = {
	Fish: {
		trout: {},
		salmon: {},
	},
	Tree: {
		Huge: {
			sequoia: {},
			oak: {},
		},
		Flowering: {
			appletree: {},
			magnolia: {},
		},
	},
};

// Crea unha función createTree(data) que devolva unha lista ul/li coma a da imaxe da dereita, para os datos proporcionados.

function createTree(data) {
	let listaUl = document.createElement('ul');
	for (const [key, value] of Object.entries(data)) {
		let li = document.createElement('li');
		li.innerText = `${key}`;
		listaUl.append(li);
	}
	return listaUl;
}

console.log(createTree(arbore));

console.log('----------------');

// 7. Escribe unha función crearCalendario(elemento, ano, mes) que engada ao elemento pasado como parámetro un calendario do ano e mes indicados.
// O calendario debe ser unha táboa, onde cada
// semana é un <tr> e cada día un <td>. A cabeceira da táboa está creada con <th>.
// Por exemplo, o calendario resultado de chamar á
// función cos seguintes parámetros vese na imaxe
// seguinte. Observar que se aplicaron estilos CSS
// para mellorar o aspecto.

// crearCalendario(calendario, 2022, 11);

let taboaCalendario = document.createElement('table');
taboaCalendario.style.border = '1px solid black';
let trH = document.createElement('tr');
let th = document.createElement('th');
th.style.backgroundColor = 'grey';
th.style.fontWeight = 'strong';
let td = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
let td4 = document.createElement('td');
let td5 = document.createElement('td');
let td6 = document.createElement('td');
let td7 = document.createElement('td');

td.innerText = 'L';
td2.innerText = 'M';
td3.innerText = 'Me';
td4.innerText = 'X';
td5.innerText = 'V';
td6.innerText = 'S';
td7.innerText = 'D';
th.append(td, td2, td3, td4, td5, td6, td7);
trH.append(th);
taboaCalendario.append(trH);

let tdDia;
let trSemana = document.createElement('tr');
function crearCalendario(elemento, ano, mes) {
	// Para sacar o número de días que ten cada mes ->
	let numDias = new Date(ano, mes, 0).getDate();
	for (let index = 0; index < 5; index++) {
		for (let index = 1; index <= numDias; index++) {
			tdDia = document.createElement('td');
			tdDia.innerText = `${index}`;
			tdDia.style.border = '1px solid black';
			trSemana.append(tdDia);
		}
		taboaCalendario.append(trSemana);
	}
	elemento.append(taboaCalendario);
	return elemento;
}
let elementoCal = document.getElementById('cal');
console.log(crearCalendario(elementoCal, 1999, 1));
