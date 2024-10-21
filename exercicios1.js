'use strict';
// // 1. Crea unha variable que almacene un día da semana de luns a domingo. En función
// // do valor da variable mostra unha mensaxe indicando se o día é laborable ou non.

// let dia = 'Luns';

// switch (dia) {
//   case 'Domingo':
//     console.log('Día non laborable');
//     break;
//   case 'Sábado':
//     console.log('Día ao mellor laborable');
//     break;
//   default:
//     console.log('Toca currar :(');
// }

// // 2. Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior dos 3 números.

// let num1 = 1;
// let num2 = 300;
// let num3 = 4;

// if (num1 > num2 && num1 > num3) console.log(num1);
// if (num2 > num1 && num2 > num3) console.log(num2);
// if (num3 > num1 && num3 > num2) console.log(num3);

// // 3. Escribe os números pares do 0 ao 30, incluídos.

// for (let i = 2; i < 31; i = i + 2) {
//   console.log(i);
// }

// // // 4. Escribe as potencias de 2, dende 2⁰ ata 2 20. Para cada potencia debe saír un texto similar a “2 elevado a 0 = 1”.43.21
// let exp = 0;
// do {
//   console.log(`2 elevado a ${exp} = ${Math.pow(2, exp)}`);
//   exp++;
// } while (exp <= 20);

// // // 5. Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por consola. (5! = 5*4*3*2*1).

// let fact = 8;
// console.log('o factorial de ' + fact);

// for (let i = fact - 1; i > 0; i--) {
//   fact *= i;
// }
// console.log(fact);

// // 6. Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)] 2 a. Almacena en variables o peso e altura de dúas persoas.

// // b. Calcula o IMC das dúas persoas.
// // c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da primeira persoa é maior que o da segunda persoa (22.5)!'

// let peso1 = 45.5;
// let peso2 = 70.33;
// let altura1 = 180.3;
// let altura2 = 190.66;
// let imc = 0;
// function calcImc(peso, altura) {
//   imc = peso / Math.pow(altura, 2);
//   return imc;
// }
// let imc1 = calcImc(peso1, altura1);
// let imc2 = calcImc(peso2, altura2);
// if (imc1 > imc2) {
//   console.log('Maior imc da primeira persoa');
// } else {
//   console.log('Maior imc da segunda persoa');
// }

// // 1. Crea unha función que reciba como parámetro un prezo e unha porcentaxe de desconto. A función debe calcular o prezo final aplicado o desconto e devolver este valor.

// function prezoFinal(prezo, desconto) {
//   return (prezo - prezo * (desconto / 100)).toFixed(2);
// }

// let prezoInicial = 50;
// let descontoTotal = 50.5;
// console.log(
//   `Este é o prezo final de ${prezoInicial} e ${descontoTotal} : ${prezoFinal(
//     prezoInicial,
//     descontoTotal
//   )}`
// );
// prezoInicial = 123;
// descontoTotal = 8;
// console.log(
//   `Este é o prezo final de ${prezoInicial} e ${descontoTotal} : ${prezoFinal(
//     prezoInicial,
//     descontoTotal
//   )}`
// );

console.log('---- Strings ----');

//
// 1. Dada a seguinte constante, fai as operacións necesarias para que o primeiro
// carácter estea en maiúscula:
// const cadea = 'desenvolvemento web';
// console.log(novaCadea); // 'Desenvolvemento web'

const cadea = 'desenvolvemento web';
const novaCadea = cadea.replace(cadea.charAt(0), cadea.charAt(0).toUpperCase());
console.log(novaCadea);

console.log('------------------');

// 2. Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido
// inverso.
// console.log(reverseString("I am a string")) // gnirts a ma I

function reverseString(str) {
	let newStr = str.split('').reverse().join('');
	return newStr;
}

console.log(reverseString('Dabale arroz'));

console.log('------------------');
// 3. Crea unha función á que se lle pase unha cadea de números e devolva unha cadea
// da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada.
// console.log(enmascarar(“1234123412347777”)); // ************7777

function enmascarar(strNum) {
	return strNum.slice(-4).padStart(strNum.length, '*');
}

console.log(enmascarar('1234123412347777'));

console.log('------------------');

console.log('--------Number---------');

// 1. ¿Como calcularías o número de cifras dun número enteiro positivo utilizando
// propiedades e métodos dos obxectos vistos ata agora?

function calcCrifas(numeroCif) {
	return numeroCif.toString().replaceAll(',', '').replaceAll('-', '').length;
}
console.log(calcCrifas(12345678));

console.log('-------------');

console.log('-------Math---------');

// 1. Números aleatorios:
// a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).
// b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
// c. Crea unha función que devolva un número aleatorio entre os dous valores
// pasados como parámetros. Así, por exemplo, a seguinte instrución debe
// mostrar un número aleatorio entre 5 e 10 (incluídos):
// console.log(numeroAleatorio(5, 10));

console.log(`a. ${Math.ceil(Math.random() * 3)}`);

console.log(`b. ${Math.floor(Math.random() * 3 + 1)}`);

function numRan(inicio, maximo) {
	return Math.floor(Math.random() * (maximo - inicio + 1) + inicio);
}
console.log(`c. ${numRan(5, 10)}`);

console.log('-------------');

// 2. Crea unha función á que se lle pase como parámetro o número de minutos e
// devolva un string indicando a súa equivalencia en horas e minutos.

function calcHoras(mins) {
	let horas = 0;
	for (let i = 0; i < mins; i++) {
		if (mins > 59) {
			horas++;
			mins = mins - 60;
		} else if (mins < 59) {
			break;
		}
	}
	return `Horas: ${horas} + Minutos : ${mins}`;
}

console.log(calcHoras(360));

console.log('--------------');

// 3. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra
// función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o
// resultado das funcións usando dúas cifras decimais

function calcAreaCirculo(radio) {
	return `La area del círculo es: ${(Math.PI * Math.pow(radio, 2)).toFixed(
		2
	)}`;
}

function calcPeriCirculo(radio) {
	return `El perímetro del círculo es: ${(2 * Math.PI * radio).toFixed(2)}`;
}

console.log(calcAreaCirculo(5));
console.log(calcPeriCirculo(5));

console.log('----------------');

console.log('--------Date-----------');

// 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual.

let diaSemana = new Date('2024-7-25');
console.log(diaSemana);

switch (diaSemana.getDay()) {
	case 0:
		console.log('Domigo');
		break;
	case 1:
		console.log('primeira feira');
		break;
	case 2:
		console.log('segunda feira');
		break;
	case 3:
		console.log('terça feira');
		break;
	case 4:
		console.log('cuarta feira');
		break;
	case 5:
		console.log('quinta feira');
		break;
	default:
		console.log('sexta feira');
		break;
}

console.log('------------------');

// 2. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes.

function daysMonth(year, month) {
	return new Date(year, month, 0).getDate();
}

let yearMonth = new Date(2024, 2);
console.log(
	`O mes ${yearMonth.getMonth()} ten  ${daysMonth(
		yearMonth.getFullYear(),
		yearMonth.getMonth()
	)} días`
);
yearMonth = new Date(2024, 10);
console.log(
	`O mes ${yearMonth.getMonth()} ten  ${daysMonth(
		yearMonth.getFullYear(),
		yearMonth.getMonth()
	)} días`
);
console.log('----------------');

// 3. Crea unha función á que se lle pase unha data e que devolva true se é fin de semana.

function isWeekend(dayWeek) {
	if (dayWeek.getDay() == 0 || dayWeek.getDay() == 6) {
		console.log('É findeeee');
		return true;
	} else {
		console.log('Hai cole :(');
	}
}

isWeekend(new Date('August 19, 1975 23:15:30'));
isWeekend(new Date('August 24, 1975 23:15:30'));

console.log('--------------');

// 4. Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano.

function numDaysPassed(datePassed) {
	let year = new Date(datePassed.getFullYear(), 0);
	let day = datePassed.getDate();
	console.log(year);
	console.log(year.valueOf());

	console.log(day);
	let dayPass = datePassed.valueOf() - year.valueOf();
	console.log(
		`Pasaron : ${(dayPass / (1000 * 60 * 60 * 24)).toFixed(
			0
		)} días dende o comezo de ${year} ate ${datePassed}`
	);
}

let datePassed = new Date('2004-7-24');
numDaysPassed(datePassed);

console.log('-----------Arrays-----------');

// 1. Crea unha función que reciba un elemento e un array como parámetros. A función debe devolver un novo array que conteña os índices onde aparece ese elemento no array.

function indexIndicator(searched, arrayIndexed) {
	let newArray = [];
	for (const element of arrayIndexed) {
		if (element === searched) {
			newArray.push(arrayIndexed.indexOf(element));
			arrayIndexed[arrayIndexed.indexOf(element)] = '';
		}
	}

	// let index = newArray.indexOf(searched);
	// while (index != -1) {
	//   newArray.push(index);
	//   index = newArray.indexOf(searched, index + 1);
	// }
	return newArray;
}

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
console.log(indexIndicator(1, numeros)); // (4) [0, 3, 5, 9]

console.log('--------------------');

// 2. Dado o array froitas (const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];) , fai os seguintes apartados co método splice:

// a. Elimina as mazás.

// b. Engade laranxas e sandía detrás dos plátanos,.

// c. Quita os kiwis e pon no seu lugar cereixas e nésperas.

// Despois de realizar cada operación mostra por pantalla a lista de froitas do array separadas por unha coma e un espazo. Por exemplo, inicialmente o array debe mostrarse como “peras, mazás, kiwis, plátanos, mandarinas”.
const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];

console.log(froitas.join());

console.log(froitas.splice(1, 1));
console.log(`a. ${froitas.join(', ')}`);

console.log(
	froitas.splice(froitas.indexOf('platanos') - 1, 0, 'laranxas', 'sandía')
);
console.log(`b. ${froitas.join(', ')}`);

console.log(froitas.splice(1, 1, 'cereixas', 'peras'));
console.log(`c. ${froitas.join(', ')}`);

console.log('--------------------');

// 3. Crea unha función á que se lle pase unha frase con varias palabras e devolva a mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en minúsculas

function upperCased(arrayString) {
	let newArrayString = arrayString.split(' ');
	let saida = [];
	for (const element of newArrayString) {
		saida.push(
			element.replace(element.charAt(0), element.charAt(0).toUpperCase())
		);
	}
	return saida.join(' ');
}

const arrayString = 'hola buenos días que tal';
console.log(upperCased(arrayString));

console.log('--------------------');

console.log('------- Desestruturación de Arrays -----');

// 1. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web:
// Utilizando o contido aprendido sobre arrays, proporciona unha única sentencia
// JavaScript para cada unha das seguintes instrucións:
// a. Crea as variables players1, players2 que conteñan un array cos xogadores de cada equipo. Así, players1 terá os xogadores do primeiro equipo e players2 os do segundo equipo.

const players = [
	[
		'Neuer',
		'Pavard',
		'Martinez',
		'Alaba',
		'Davies',
		'Kimmich',
		'Goretzka',
		'Coman',
		'Muller',
		'Gnarby',
		'Lewandowski',
	],
	[
		'Burki',
		'Schulz',
		'Hummels',
		'Akanji',
		'Hakimi',
		'Weigl',
		'Witsel',
		'Hazard',
		'Brandt',
		'Sancho',
		'Gotze',
	],
];
let players1, players2;
[players1, players2] = players;
console.log(players1, players2);

// b. O primeiro xogador do array é o porteiro e o resto son xogadores de campo. Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e unha variable de tipo array chamada fieldPlayers que conteña o resto de xogadores do equipo.

let gk, fieldPlayers;

[gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// c. Crea un array allPlayers que conteña os xogadores dos dous equipos.

let allPlayers = players.slice();
console.log(allPlayers);

// d. O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho','Periscic'. Crea unha nova variable de tipo array chamada players1Final que conteña todos os xogadores: os iniciais e tamén os 3 novos.

let players1Final;
players1Final = [...players1, 'Thiago', 'Coutinho', 'Pulisic'];

console.log(players1Final);

console.log('--------------------');

// 2. Dado un array con nomes de variables formados por dúas palabras separadas por “_”, fai as operacións necesarias para mostrar por consola os nomes das variables en formato camelCase. Por exemplo, se o array de entrada é ["first_name”, “last_NAME”], deberase mostrar por consola “firtsName” e “lastName”.

function toCamelCase(arrayCamel) {
	let first, second;
	for (const element of arrayCamel) {
		[first, second] = element.toLowerCase().split('_');
		// second = second.charAt(0).toUpperCase() + second.slice(1);
		// console.log(first + second);

		console.log(
			`${first}${second.replace(second[0], second[0].toUpperCase())}`
		);
	}
}

toCamelCase(['first_name', 'second_name']);

console.log('--------------------------');

// 3. Escribe o código necesario para procesar unha cadea con información de voos como a do exemplo e mostrar a información por consola formateada como aparece na imaxe:

const flightsInfo =
	'_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;vq7439299980;cq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30';

function getCode(str) {
	return str.slice(0, 3).toUpperCase();
}

for (const flight of flightsInfo.split('+')) {
	const [type, from, to, time] = flight.split(';');

	const output = `${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(
		to
	)} (${time.replace(':', 'h')})`;
	console.log(output.padStart(40));
}

console.log('--------------Obxectos --------');

// 1. Crea un obxecto chamado television coas propiedades marca, categoría (televisores), unidades (4), prezo (354.99) e un método chamado importe que devolva o prezo total das unidades (unidades x prezo).

const television = {
	marca: 'Samsung',
	categoria: 'televisores',
	unidades: 4,
	prezo: 354.99,
	importe() {
		return this.prezo * this.unidades;
	},
};
console.log(television.importe());

console.log('-----------------');

// 2. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor:
// const game = {
// odds: {
// team1: 1.33,
// x: 3.25,
// team2: 6.5,
// }
// };
// Utilizando a desestruturación de obxectos crea as seguintes variables:
// ● team1: debe inicializarse co valor da propiedade team1 do obxecto inicial.
// ● draw: debe inicializarse co valor da propiedade x do obxecto inicial.
// ● team2: debe inicializarse co valor da propiedade team2 do obxecto inicial.

const game = {
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

const {
	odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

console.log('-----------------');

// 3. Dado o seguinte obxecto:
// const game = {
// scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
// };

// a. Recorre o array game.scored e mostra por pantalla información do xogador que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”.
// b. Crea un novo obxecto chamado scorers que conteña como propiedades o nome dos xogadores que marcaron e como valor o número de goles que marcaron respectivamente. Neste exemplo sería algo así: {Lewandowski: 2, Gnarby: 1, Hummels: 1}

const gameFootball = {
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};
console.log('a: ');

for (const [key, value] of gameFootball.scored.entries()) {
	console.log(`Gol ${key + 1}: ${value} `);
}

console.log('b: ');
//TODO revisar este exercicio

const scorers = {};

for (const element of Object.values(gameFootball.scored)) {
	// if (scorers.hasOwnProperty([element])) {
	//   scorers[element] = scorers[element] + 1;
	// } else {
	//   scorers[element] = 1;
	// }

	scorers[element] ? scorers[element]++ : (scorers[element] = 1);
}

console.log(scorers);

console.log('-------Set e Map-------------');

// 1. O seguinte mapa almacena información dos eventos ocorridos durante un partido
// indicando o minuto no que se produciron:
// const gameEvents = new Map([
// [17, "GOAL"],
// [36, "Substitution"],
// [47, "GOAL"],
// [61, "Substitution"],
// [64, "Yellow card"],
// [69, "Red card"],
// [70, "Substitution"],
// [72, "Substitution"],
// [76, "GOAL"],
// [80, "GOAL"],
// [92, "Yellow card"],
// ]);
// a. Crea un novo array chamado eventos que almacene os diferentes eventos (non o minuto) ocorridos durante o partido (sen que haxa duplicados).
// b. Recorre con un bucle o mapa gameEvents e mostra información de cada evento, indicando se ocorreu na primeira metade ou na segunda metade do partido, por exemplo: [PRIMEIRA PARTE] 17: GOAL.

const gameEvents = new Map([
	[17, 'GOAL'],
	[36, 'Substitution'],
	[47, 'GOAL'],
	[61, 'Substitution'],
	[64, 'Yellow card'],
	[69, 'Red card'],
	[70, 'Substitution'],
	[72, 'Substitution'],
	[76, 'GOAL'],
	[80, 'GOAL'],
	[92, 'Yellow card'],
]);

console.log('a: ');

const eventos = Array.from(new Set(gameEvents.values()));
// const eventos2 = [...new Set(gameEvents.values())];

console.log(eventos);

console.log('b: ');

for (const [minuto, evento] of gameEvents) {
	console.log(
		`En el minuto ${minuto} de la ${
			minuto <= 45 ? 'primera' : 'segunda'
		} parte: ${evento}`
	);
}

//
console.log('--------Funcións----------');
//
// 1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.

const cubeNumer = (numberToCube) => numberToCube * numberToCube * numberToCube;

console.log(cubeNumer(6));
console.log('----------------------');

// 2. Crea unha función frecha á que se lle pase un array e devolva como resultado un array cos elementos impares do array de entrada.

const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];

const numerosImpares = (arrayAll) => {
	const arraySalida = [];
	for (const element in arrayAll) {
		if (arrayAll[element] % 2 != 0) {
			arraySalida.push(arrayAll[element]);
		}
	}
	return arraySalida;
};

console.log(numerosImpares(arrayEntrada)); // (4) [3, 5, 7, 23]

// 3. Crea unha función frecha que sume todos os valores pasados como parámetros, sendo estes un número indeterminado.

const sumaRest = (...array) => {
	let sumTotal = 0;
	console.log(array);

	for (const numeros of array) {
		sumTotal += parseInt(numeros);
	}
	return sumTotal;
};

console.log(sumaRest(1, 2, 3, 4, 5, 6, 7));
console.log('----------------------');

// 4. Crea unha función á que se lle pasen varios números como parámetros (un número indeterminado de parámetros) e que devolva a media deses números.

function mediaNumeros(...array) {
	let sumTotal = 0;

	for (const numero of array) {
		sumTotal += parseInt(numero);
	}

	return sumTotal / array.length;
}

console.log(mediaNumeros(1, 2, 3, 4, 5, 6, 7));

// 5. Crea unha función frecha chamada minMax() que reciba como parámetro un array de números e devolva un obxecto co valor mínimo e máximo do array de entrada:
// console.log(minMax([1, 2, 3, 4, 5])); // Debe devolver { min: 1, max: 5 }

const minMax = (numArray) => {
	numArray.sort((a, b) => a - b);
	let min = numArray[0];
	let max = numArray[numArray.length - 1];
	return {
		minimo: min,
		maximo: max,
	};
};

console.log(minMax([12, 4, 1, 2, 3, 4, 5, -1])); // Debe devolver { min: 1, max: 5 }

console.log('---------------');

// 6. Crea unha función autoinvocada á que se lle pase a lonxitude e ancho dun rectángulo. A función debe mostrar por consola unha mensaxe indicando o valor da área do rectángulo.

(function rectData(lonxitude = 100, ancho = 78) {
	console.log(`A lonxitude é ${lonxitude} e o ancho é ${ancho}`);
})();

// 7. Crea unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e devolva se é correcto ou non.

function dniCheck(dni) {
	const dniLetter = [
		't',
		'r',
		'w',
		'a',
		'g',
		'm',
		'y',
		'f',
		'p',
		'd',
		'x',
		'b',
		'n',
		'j',
		'z',
		's',
		'q',
		'v',
		'h',
		'l',
		'c',
		'k',
		'e',
	];
	let dniNum = parseInt(dni.slice(0, 8));

	let dniRest = dniNum % 23;

	let result;
	if (
		dniRest <= 22 &&
		dni[dni.length - 1].toLowerCase() == dniLetter[dniRest]
	) {
		result = 'dni válido';
	} else result = 'dni non válido';
	return result;
}
console.log(dniCheck('87654321T'));
console.log(dniCheck('44093993A'));
console.log(dniCheck('12345678w'));

console.log('--------------');

//8. Crea unha función que reciba como parámetro unha cantidade enteira e faga o desglose do número de billetes e moedas necesarios para obtela. Debe usarse o número mínimo de billetes e moedas.

const calcDesglose = (euros) => {
	let count = 0;
};

// 9. Crea unha función chamada buscarPatron(texto, patron) que reciba como parámetros un texto e un patrón. A función debe devolver como resultado o número de veces que aparece o patrón no texto, tendo en conta que un carácter pode formar parte de máis dun patrón encontrado.
// Debe implementarse a función de forma manual sen utilizar as funcións proporcionadas pola linguaxe JavaScript para buscar en cadeas. Non se deben distinguir maiúsculas de minúsculas.
//Exemplo: buscarPatron(“000111101000ABCHA”, “00”) debe devolver 4.

function buscarPatron(texto, patron) {
	let patronCount = patron.slice('').length;
	let count = 0;
	for (const element of texto.slice('')) {
		if (texto.at(element) + texto.at(element + patronCount) != patron) {
			count++;
		}
	}
	return count;
}

console.log(buscarPatron('000111101000ABCHA', '00'));
