'use strict';

// 1. Utilizando as diferentes propiedades para recorrer o DOM, indica, polo menos, unha
// forma de acceder aos seguintes nodos:

// ● o nodo <div>
// ● o nodo <ul>
// ● o segundo <li>

let nodoDiv = document.querySelector('div');
console.log(nodoDiv);

let nodoUl = document.querySelector('ul');
console.log(nodoUl);

let nodoLi;
let lastNodoLi;
nodoLi = document
	.querySelectorAll('li')
	.forEach((element) => (lastNodoLi = element));
console.log(lastNodoLi);

// lastNodoLi = document.body.children[1].lastChild;
// console.log(lastNodoLi);

// 2. Dado un elemento calquera dunha árbore DOM:

// a. ¿É certo que elemento.lastChild.nextSibling é sempre null?

// Si, posto que con lastChild comprobamos verticalmente o último fillo do nodo, mentres que con nextSibling miramos horizontalmente ao seu seguinte irman. nextSibling sempre da null cando é o último fillo.

// b. ¿É certo que elemento.children[0].previousSibling é sempre null?

// Si, posto que o previousSibling sobre o primeiro fillo sempre da nulo, en tanto que é o primeiro fillo do elemento.

// 3. Escribe o código para pintar as celas diagonais dunha táboa de vermello. Debes investigar en internet como cambiar a cor de fondo dunha cela mediante JavaScript.

let taboa = document.querySelector('table');

let filasTaboa = taboa.rows;

for (let fila of filasTaboa) {
	const cell = fila.cells[fila.rowIndex];

	// TODO preguntar se solo se reprensentan os cambios feitos mediante js no editor e non é posible redirixilos ao css ou así

	// Metense como estilos en liña (Mellor atacar dende clases css)
	cell.style.backgroundColor = 'red';
	console.log(cell);
}
