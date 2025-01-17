'use strict';
// 1. Implementa unha función escribirNumeros(desde, ata) que xere un número cada segundo, comezando en “desde” e rematando en “ata”. Fai dúas variantes da función: unha usando setInterval e outra usando setTimeout.

function escribirNumeros(desde, ata) {
	while (desde < ata) {
		setTimeout(() => {
			console.log('Timeout: ' + Math.floor(Math.random() * 100));
		}, desde);
		desde = desde + 1000;
	}
	const intervalID = setInterval(() => {
		console.log('Interval: ' + Math.floor(Math.random() * 100));
	}, 500);
	setTimeout(() => {
		clearInterval(intervalID);
	}, ata);
}
escribirNumeros(1000, 5000);

// 2. Crea unha páxina web con un título <h1> e dous botóns. Un dos botóns debe iniciar un intervalo que cambie alternativamente cada segundo a cor do título <h1> alternando entre dúas cores, as que escollas. O outro botón debe deter o intervalo e parar o cambio de cores.

let title = document.getElementById('title');
let intervalButton = document.getElementById('interval');
let stopButton = document.getElementById('stop');
let colorIntervalID;
intervalButton.addEventListener('click', changeColor);
stopButton.addEventListener('click', stopChangeColor);

function changeColor(event) {
	if (!colorIntervalID) {
		colorIntervalID = setInterval(() => {
			setTimeout(() => {
				// Mellor a través de clases, solo con un intervalo sen timeouts. Pouco eficiente
				title.style.color = 'orange';
			}, 500);
			setTimeout(() => {
				title.style.color = 'red';
			}, 1000);
		}, 1000);
	}
}

function stopChangeColor(event) {
	clearInterval(colorIntervalID);
	colorIntervalID = null;
}

// 3. Busca unha imaxe grande en internet para probar que tarda tempo en descargarse.
// Carga esa imaxe remota dende JavaScript. Cando a imaxe estea cargada, mostra unha mensaxe en consola

let img = document.createElement('img');
document.body.append(img);
img.src =
	'https://upload.wikimedia.org/wikipedia/commons/6/6d/Praia_Area_Grande_02-01_O_Grove.jpg';

img.addEventListener('load', function () {
	console.log('Imaxe cargada');
});
