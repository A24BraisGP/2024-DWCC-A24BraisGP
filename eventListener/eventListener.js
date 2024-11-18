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

function engadirTextLista() {
	let text = document.getElementById('texto').value;
	let li = document.createElement('li');
	li.innerText = text;
	listaUl.append(li);
	text.value = '';
}

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

// Nestes casos é útil modificar o cursor cando pase por riba do texto para que teña
// estilo “pointer” e informar á persoa usuaria que esa é unha zona na que se pode
// pulsar.
