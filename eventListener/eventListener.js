'use strict';
// 1. Dado o seguinte código HTML, engade a configuración de estilos CSS para que inicialmente o span estea oculto. Ademais, crea o JavaScript necesario para que ao pulsar a ligazón se faga visible o contido do span e desapareza a ligazón.
function quitarClassOculto(element) {
	document.getElementById('adicional').classList.toggle('oculto');
	document.getElementById('ligazon').classList.toggle('oculto');
}
let ligazon = document.getElementById('ligazon');
ligazon.addEventListener('click', quitarClassOculto);

console.log('--------------');

// 2. Crea unha páxina web que teña unha caixa de texto, un botón e unha lista. Fai que ao pulsar o botón se engada o texto da caixa de texto como novo elemento da lista.
// Inicialmente, a páxina debería mostrar algo similar á seguinte imaxe:

let submit = document.getElementById('submitButton');
let listaUl = document.getElementById('lista');

submit.addEventListener('click', engadirTextLista);

function engadirTextLista(event) {
	event.preventDefault();
	let text = document.getElementById('texto');
	let li = document.createElement('li');
	li.innerText = text.value;
	listaUl.append(li);
	text.value = '';
}
console.log('-----------------');

// 3. Nunha páxina HTML hai un botón ao que fai referencia a variable button do
// seguinte código. Indica que manexadores de eventos se executan dos seguintes:

// button.addEventListener('click', () => console.log('1'));
// button.removeEventListener('click', () => console.log('1'));
// button.onclick = () => console.log(2);

// execútase o primeiro, o segundo non borra porque non é a mesma dirección de memoria da función e o último engade o atributo pero non executa a función

// 4. Crea un menú que se abra/colapse ao facer clic sobre el. Inicialmente o menú debe
// estar colapsado e ao pulsar no texto “Sweeties (click me)!” deben mostrarse as
// opcións do menú.

// Debes asegurarte que a funcionalidade só se habilita cando se pulsa sobre o texto
// “Sweeties (click me)!” e non sobre calquera outra zona da páxina/liña.

// Nestes casos é útil modificar o cursor cando pase por riba do texto para que teña estilo “pointer” e informar á persoa usuaria que esa é unha zona na que se pode pulsar.

let ul = document.createElement('ul');
ul.classList.add('oculto');
let names = ['cake', 'donut', 'honey'];
names.forEach((el) => {
	let li = document.createElement('option');
	li.value = el;
	li.innerText = el;
	ul.append(li);
});

function showSelect(event) {
	event.preventDefault();
	ul.classList.toggle('oculto');
}

document.getElementById('aSelect').after(ul);
document.getElementById('aSelect').addEventListener('click', showSelect);

// 5. Insire unha imaxe nunha páxina web e engádelle un listener para cada un dos seguintes eventos: click, dblclick, contextmenu, mousedown, mouseup, wheel, mouseover, mouseout, dragstart, drag, dragend. Cada vez que suceda un destes eventos mostra por consola unha mensaxe informando do evento que sucedeu.

// Proba os diferentes eventos e observa a orde na que suceden.

function showTypeEvent(event) {
	console.log(`Pasou o evento : ${event.type}`);
}
document.getElementById('imgDog').addEventListener('click', showTypeEvent);
document.getElementById('imgDog').addEventListener('dblclick', showTypeEvent);
document
	.getElementById('imgDog')
	.addEventListener('contextmenu', showTypeEvent);
document.getElementById('imgDog').addEventListener('mousedown', showTypeEvent);
document.getElementById('imgDog').addEventListener('mouseup', showTypeEvent);
document.getElementById('imgDog').addEventListener('wheel', showTypeEvent);
document.getElementById('imgDog').addEventListener('mouseover', showTypeEvent);
document.getElementById('imgDog').addEventListener('mouseout', showTypeEvent);
document.getElementById('imgDog').addEventListener('dragstart', showTypeEvent);
document.getElementById('imgDog').addEventListener('drag', showTypeEvent);
document.getElementById('imgDog').addEventListener('dragend', showTypeEvent);

console.log('--------------');

// 1. Dado o seguinte código HTML:

// Engade os seguintes eventos:
// ● Cando o cursor do rato entre e saia do botón, mostra unha mensaxe por
// consola indicándoo.
// ● Ao pulsar o botón debe desaparecer o div con id=texto.
// ● Cando se escriba algo na caixa de texto, debe mostrarse información da
// tecla pulsada no div e tamén o código da tecla pulsada. Ademais, se o div
// estaba oculto, debe mostrarse.

function showMouseOutBoton(event) {
	console.log(`Pasou o rato por riba do botón`);
}
function ocultarTextoDiv() {
	document.getElementById('texto2').classList.toggle('oculto');
}
function mostrarTecla(event) {
	let divText = document.getElementById('texto2');
	divText.classList.remove('oculto');
	divText.innerText = `A tecla que pulsaches é :  ${event.key}`;
}
document
	.getElementById('ocultar')
	.addEventListener('mouseout', showMouseOutBoton);
document.getElementById('ocultar').addEventListener('click', ocultarTextoDiv);
document
	.getElementById('textoExercicio2')
	.addEventListener('keydown', mostrarTecla);
