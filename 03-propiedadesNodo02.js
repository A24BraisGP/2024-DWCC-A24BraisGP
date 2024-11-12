'use strict';
// 2. Descarga o código fonte 03-propiedadesNodo02.html e mostra por consola:

// ● O número de ligazóns da páxina.

const ligazons = document.querySelectorAll('a');
console.log(`Hai ${ligazons.length} ligazóns`);

// ● A dirección da penúltima ligazón.

console.log(ligazons);

console.log(ligazons[ligazons.length - 2].href);

// ● O número de ligazóns que apuntan a http://proba

let count = 0;
const reg = new RegExp('[http:// proba].*');
ligazons.forEach((lig) => {
	if (reg.test(lig.href)) {
		count++;
	}
});
console.log(`${count} ligazóns apuntan a proba`);

// ● O número de ligazóns do terceiro parágrafo.

const terP = document.querySelectorAll('p')[2];

let nLigTerP = terP.querySelectorAll('a').length;

console.log(nLigTerP);

// ● Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o texto de cor laranxa.

ligazons.forEach((lig) => {
	if (reg.test(lig.href)) {
		lig.style.color = 'orange';
	}
});
