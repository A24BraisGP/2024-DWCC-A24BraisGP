'use strict';

// 1. Descarga o código fonte 03-propiedadesNodo01.html e indica, polo menos, unha forma de acceder ao seguinte contido e mostralo por consola:

// ● O innerHTML, innerText e textContent da etiqueta “Escolle sexo”:

const escolleSexo = document.querySelectorAll('label')[3];

// let form = document.querySelector("form")
// let label = form.lastElementChild.previousElementSibling (colle o penúltimo elemento)

console.log(escolleSexo.innerHTML);
console.log(escolleSexo.innerText);
console.log(escolleSexo.textContent);

// ● O valor do primeiro input de sexo

console.log(escolleSexo.querySelector('input').value);

// ● O valor do sexo que estea seleccionado.

let inputSexo = escolleSexo.querySelectorAll('input');
console.log('O valor do seleccionado é: ');

inputSexo.forEach((el) => {
	console.log(` ${el.hasAttribute('checked') ? el.value : ''}`);
});

//escolleSexo.querySelector("input:checked").value => selecciona por atributo

// ● O texto de cada un dos elementos <li>

const liList = document.querySelectorAll('li');
liList.forEach((el) => {
	console.log(`Contido do li : ${el.innerText}`);
});

// ● Indica cantos elementos <li> hai.

console.log(`Hai ${liList.length} elementos li`);

// ● Indica o valor do atributo data-widget-name

const divs = document.querySelectorAll('div');

divs.forEach((el) => {
	if (el.hasAttribute('data-widget-name')) {
		console.log(el.dataset.widgetName);
	}
});

console.log(document.querySelector('[data-widget-name]').dataset.widgetName);
