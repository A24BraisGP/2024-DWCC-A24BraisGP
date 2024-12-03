'use strict';

// 1. Crea unha páxina web que teña un div de tamaño 100x100 e cor de fondo (a que queiras). Engade dous campos numéricos con valores entre 0 e 1000 que representarán o alto e ancho do div. Cada vez que se cambie o valor dos campos, debe redimensionarse o div cos valores indicados.

function modificarDiv(event) {
	divEx1.style.width = `${anchura.value}px`;
	divEx1.style.height = `${altura.value}px`;
}

let divEx1 = document.getElementById('divEx1');

let altura = document.getElementById('altura');

let anchura = document.getElementById('anchura');

// Usamos o type input para modificalos valores con cada input novo
altura.addEventListener('input', modificarDiv);
anchura.addEventListener('input', modificarDiv);

console.log('-----------');

// 2. Crea unha páxina web que conteña un elemento <div> con un tamaño preestablecido.
// Cando se pulse no div, este debe ser substituído por un textarea inicializado co textoque había no <div> e co mesmo tamaño que o <div>.
// O elemento textarea debe permitir editar o texto e cando se pulse a tecla “Enter” ou perda o foco, o textarea debe substituírse polo div, establecendo o contido deste ao texto que había na textarea. É dicir, ao pulsar o div, o seu texto convértese en editable

function divEditable(event) {
	div2.classList.add('oculto');
	textarea.value = div2.innerText;
	textarea.classList.remove('oculto');
}
function textareaOut(event) {
	if (event.key === 'Enter' || event.type === 'blur') {
		event.preventDefault();
		textarea.classList.add('oculto');
		div2.innerText = textarea.value;
		div2.classList.remove('oculto');
	}
}
let textarea = document.getElementById('textEx2');
let div2 = document.getElementById('divEx2');

div2.addEventListener('click', divEditable);
textarea.addEventListener('blur', textareaOut);
textarea.addEventListener('keydown', textareaOut);

// 3. Crea unha páxina web que mostre un reloxo seguindo o formato HH:MM:SS AM/PM.
// Sempre deben mostrarse dúas cifras para cada grupo. O reloxo debe mostrar as horas de 01-12, polo que se debe indicar e son AM ou PM.
// Para executar unha función de forma repetida a intervalos constantes pode usarse o método setInterval(), indicando como parámetro intervalo en milisegundos. Este método devolve un ID que identifica de forma única o intevalo, permitindo eliminalo usando o método clearInterval()

function mostrarHora() {
	let hora = new Date();
	// let formato = hora < 12 ? 'AM' : 'PM';
	// hora = hora > 12 ? hora - 12 : hora;
	// let minutos = new Date().getMinutes();
	// let segundos = new Date().getSeconds();
	// let horaFinal = `${hora} : ${minutos} : ${segundos} | ${formato}`;
	reloxo.innerHTML = hora.toLocaleTimeString();
}

let div3 = document.getElementById('divEx3');
let reloxo = document.getElementById('reloxo');

setInterval(mostrarHora);

console.log('--------------');
