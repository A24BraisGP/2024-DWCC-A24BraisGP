'use strict';

let nodoDiv = document.querySelector('div');
console.log(nodoDiv);

let nodoUl = document.querySelector('ul');
console.log(nodoUl);

let nodoLi = document.querySelectorAll('li');

nodoLi = nodoLi.forEach((element) => (nodoLi = element));
console.log(nodoLi);
