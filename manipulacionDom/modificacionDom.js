'use strict';
// 1. Imaxinar que a variable elemento fai referencia a un elemento do DOM e text é unha variable con unha cadea de texto que inclúe etiquetas HTML. ¿Cales dos seguintes comandos farán exactamente o mesmo?:

// a. elemento.append(document.createTextNode(text));
// b. elemento.innerHTML = text;
// c. elemento.textContent = text;

//A e C porque incluirán o texto pero non aplicarán as etiquetas interpretadas como etiquetas HTML

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

// Non é html válido, non pode ter nodos sen etiquetado de táboa dentro da táboa. O navegador sácao fóra antes de executar o remove, polo que texto queda fora da táboa

// 4. Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4 elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no navegador

let listaUl = document.getElementById('lista-ul');

for (let index = 1; index <= 4; index++) {
	let li = document.createElement('li');
	li.innerText = `${index}`;
	listaUl.append(li);
}

console.log('---------------');

// 5. Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li> seguintes:

let li2 = document.createElement('li');
let li3 = document.createElement('li');
li2.innerText = '2';
li3.innerText = '3';

document.getElementById('one').after(li2);
document.getElementById('two').before(li3);

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
		if (Object.keys(data[key]).length) {
			li.append(createTree(value));
		}
	}
	return listaUl;
}

console.log(createTree(arbore));
document.getElementById('obx').append(createTree(arbore));
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

trH.style.backgroundColor = 'grey';

let diasSemana = ['L', 'M', 'Me', 'X', 'V', 'S', 'D'];

for (let index = 0; index < 7; index++) {
	let th = document.createElement('th');
	th.innerText = diasSemana[index];
	th.style.fontWeight = 'strong';
	th.style.border = '1px solid black';
	trH.append(th);
}

taboaCalendario.append(trH);

let listaSemanas = [];

for (let index = 0; index < 5; index++) {
	let trSemana = document.createElement('tr');
	listaSemanas[index] = trSemana;
}
function crearCalendario(elemento, ano, mes) {
	// Para sacar o número de días que ten cada mes ->
	mes--;
	// O mes en dates está en array, xaneiro é 0
	let numDias = new Date(ano, mes, 0).getDate();
	let dia1 = new Date(ano, mes, 0).getDay();
	let diasPasados = 0;
	for (let index = 0; index < 5; index++) {
		for (let indexDias = 1; indexDias <= 7; indexDias++) {
			if (diasPasados < dia1) {
				let tdDia = document.createElement('td');
				tdDia.innerText = '';
				tdDia.style.border = '1px solid black';
				listaSemanas[index].append(tdDia);
			} else {
				let tdDia = document.createElement('td');
				tdDia.innerText = `${diasPasados}`;
				tdDia.style.border = '1px solid black';
				listaSemanas[index].append(tdDia);
			}
			if (diasPasados == numDias) {
				diasPasados = '';
			} else if (typeof diasPasados == 'number') {
				diasPasados++;
			}
		}

		taboaCalendario.append(listaSemanas[index]);
	}
	elemento.append(taboaCalendario);
	return elemento;
}
let elementoCal = document.getElementById('cal');
console.log(crearCalendario(elementoCal, 2022, 11));
// console.log(crearCalendario(elementoCal, 2022, 3));
// console.log(crearCalendario(elementoCal, 2024, 5));

console.log('----------------------------');

// 8. Ordena a seguinte táboa pola columna “Nome”. Escribe un código que funcione independentemente do número de filas da táboa.

let taboaOrd = document.getElementById('taboaOrdenar');
let tBodyRows = taboaOrd.tBodies[0].rows;
console.log(tBodyRows);
console.log(taboaOrd);

let ordedRows = Array.from(tBodyRows).sort((a, b) => {
	let name1 = a.cells[0].innerText;
	let name2 = b.cells[0].innerText;
	if (name1 > name2) {
		return 1;
	}
	if (name1 < name2) {
		return -1;
	}
	if (name1 == name2) {
		return 0;
	}
});
// Append move os elementos de lugar, volvemos a poñelos dende 0 xa ordenados, non borra nin sobreescribe, moveos.
ordedRows.forEach((el) => taboaOrd.tBodies[0].append(el));

console.log('---------------------');

// 9. Dada unha lista como a seguinte, escribe o código que engada o número de descendentes.

let listaAnimal = document.getElementById('listaAnimais');

//TODO contar os nodos fillos
function recorrerLi(lista) {}

recorrerLi(listaAnimal);
document.getElementById('listAnim').append(listaAnimal);
