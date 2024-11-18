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
