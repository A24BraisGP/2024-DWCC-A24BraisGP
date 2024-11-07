'use strict';

// 2. Descarga o código fonte 01-accesoNodos02.html e indica, polo menos, unha forma de acceder aos seguintes nodos, utilizando os métodos de acceso a nodos:
// ● O elemento con id “input2”.

let input2 = document.getElementById('input2');
console.log(input2);

// ● A colección de parágrafos

let pharagraphsCollection = document.getElementsByTagName('p');
console.log(pharagraphsCollection);

// ● Todos os parágrafos dentro do div con id “lipsum”.

let pharagraphsInLipsum = document.querySelectorAll('#lipsums p');
console.log(pharagraphsInLipsum);

// ● O formulario

let formulario = document.getElementsByTagName('form');
console.log(formulario);

// ● Todos os inputs

let inputList = document.getElementsByTagName('input');
console.log(inputList);

// ● Só os inputs con nome “sexo”.

let inputSexo = document.getElementsByName('sexo');
inputSexo = document.querySelectorAll('input[name="sexo"]');
console.log(inputSexo);

// ● Os items da lista con clase “important”.

let importantList = document.querySelectorAll('li.important');
console.log(importantList);
