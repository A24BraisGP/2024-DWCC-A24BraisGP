'use strict';

console.log('----------DOM-------');

// 1. Descarga o código fonte 01-accesoNodos01.html e indica, polo menos, unha forma de acceder aos seguintes nodos, utilizando os métodos de acceso a nodos:
// ● A táboa con id="age-table".

let taboa = document.getElementById('age-table');
console.log(taboa);

// ● Todos os elementos label dentro da táboa (debería haber 3).

let labelInTaboa = taboa.querySelectorAll('label');
console.log(labelInTaboa);

// ● O primeiro td da táboa.

let primeiroTd = taboa.querySelector('td');
console.log(primeiroTd);

// ● O formulario con name="search".

// let nameSearch = document.getElementsByTagName('form');
// let nameSearchForm = nameSearch.namedItem('search');
let nameSearchForm = document.querySelector("form[name='search']");
nameSearchForm = document.forms['search'];
console.log(nameSearchForm);

// ● O primeiro input do formulario anterior.

let fistInputSearch = nameSearchForm.querySelector('input');
console.log(fistInputSearch);

// ● O último input do formulario do apartado anterior

let lastInputSearch;
let trueLastInputSearch;
lastInputSearch = nameSearchForm
	.querySelectorAll('input')
	.forEach((element) => (trueLastInputSearch = element));
// lastInputSearch = lastInputSearch[lastInputSearch.length - 1];

console.log(trueLastInputSearch);
