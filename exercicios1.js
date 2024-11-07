// 'use strict';
// // // 1. Crea unha variable que almacene un día da semana de luns a domingo. En función
// // // do valor da variable mostra unha mensaxe indicando se o día é laborable ou non.

// // let dia = 'Luns';

// // switch (dia) {
// //   case 'Domingo':
// //     console.log('Día non laborable');
// //     break;
// //   case 'Sábado':
// //     console.log('Día ao mellor laborable');
// //     break;
// //   default:
// //     console.log('Toca currar :(');
// // }

// // // 2. Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior dos 3 números.

// // let num1 = 1;
// // let num2 = 300;
// // let num3 = 4;

// // if (num1 > num2 && num1 > num3) console.log(num1);
// // if (num2 > num1 && num2 > num3) console.log(num2);
// // if (num3 > num1 && num3 > num2) console.log(num3);

// // // 3. Escribe os números pares do 0 ao 30, incluídos.

// // for (let i = 2; i < 31; i = i + 2) {
// //   console.log(i);
// // }

// // // // 4. Escribe as potencias de 2, dende 2⁰ ata 2 20. Para cada potencia debe saír un texto similar a “2 elevado a 0 = 1”.43.21
// // let exp = 0;
// // do {
// //   console.log(`2 elevado a ${exp} = ${Math.pow(2, exp)}`);
// //   exp++;
// // } while (exp <= 20);

// // // // 5. Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por consola. (5! = 5*4*3*2*1).

// // let fact = 8;
// // console.log('o factorial de ' + fact);

// // for (let i = fact - 1; i > 0; i--) {
// //   fact *= i;
// // }
// // console.log(fact);

// // // 6. Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)] 2 a. Almacena en variables o peso e altura de dúas persoas.

// // // b. Calcula o IMC das dúas persoas.
// // // c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da primeira persoa é maior que o da segunda persoa (22.5)!'

// // let peso1 = 45.5;
// // let peso2 = 70.33;
// // let altura1 = 180.3;
// // let altura2 = 190.66;
// // let imc = 0;
// // function calcImc(peso, altura) {
// //   imc = peso / Math.pow(altura, 2);
// //   return imc;
// // }
// // let imc1 = calcImc(peso1, altura1);
// // let imc2 = calcImc(peso2, altura2);
// // if (imc1 > imc2) {
// //   console.log('Maior imc da primeira persoa');
// // } else {
// //   console.log('Maior imc da segunda persoa');
// // }

// // // 1. Crea unha función que reciba como parámetro un prezo e unha porcentaxe de desconto. A función debe calcular o prezo final aplicado o desconto e devolver este valor.

// // function prezoFinal(prezo, desconto) {
// //   return (prezo - prezo * (desconto / 100)).toFixed(2);
// // }

// // let prezoInicial = 50;
// // let descontoTotal = 50.5;
// // console.log(
// //   `Este é o prezo final de ${prezoInicial} e ${descontoTotal} : ${prezoFinal(
// //     prezoInicial,
// //     descontoTotal
// //   )}`
// // );
// // prezoInicial = 123;
// // descontoTotal = 8;
// // console.log(
// //   `Este é o prezo final de ${prezoInicial} e ${descontoTotal} : ${prezoFinal(
// //     prezoInicial,
// //     descontoTotal
// //   )}`
// // );

// console.log('---- Strings ----');

// //
// // 1. Dada a seguinte constante, fai as operacións necesarias para que o primeiro
// // carácter estea en maiúscula:
// // const cadea = 'desenvolvemento web';
// // console.log(novaCadea); // 'Desenvolvemento web'

// const cadea = 'desenvolvemento web';
// const novaCadea = cadea.replace(cadea.charAt(0), cadea.charAt(0).toUpperCase());
// console.log(novaCadea);

// console.log('------------------');

// // 2. Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido
// // inverso.
// // console.log(reverseString("I am a string")) // gnirts a ma I

// function reverseString(str) {
// 	let newStr = str.split('').reverse().join('');
// 	return newStr;
// }

// console.log(reverseString('Dabale arroz'));

// console.log('------------------');
// // 3. Crea unha función á que se lle pase unha cadea de números e devolva unha cadea
// // da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada.
// // console.log(enmascarar(“1234123412347777”)); // ************7777

// function enmascarar(strNum) {
// 	return strNum.slice(-4).padStart(strNum.length, '*');
// }

// console.log(enmascarar('1234123412347777'));
// const strNum2 = '1234123412347777';
// console.log(enmascarar(strNum2));
// console.log(strNum2);

// console.log('------------------');

// console.log('--------Number---------');

// // 1. ¿Como calcularías o número de cifras dun número enteiro positivo utilizando
// // propiedades e métodos dos obxectos vistos ata agora?

// function calcCrifas(numeroCif) {
// 	return numeroCif.toString().replaceAll(',', '').replaceAll('-', '').length;
// }
// console.log(calcCrifas(12345678));

// console.log('-------------');

// console.log('-------Math---------');

// // 1. Números aleatorios:
// // a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).
// // b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
// // c. Crea unha función que devolva un número aleatorio entre os dous valores
// // pasados como parámetros. Así, por exemplo, a seguinte instrución debe
// // mostrar un número aleatorio entre 5 e 10 (incluídos):
// // console.log(numeroAleatorio(5, 10));

// console.log(`a. ${Math.ceil(Math.random() * 3)}`);

// console.log(`b. ${Math.floor(Math.random() * 3 + 1)}`);

// function numRan(inicio, maximo) {
// 	return Math.floor(Math.random() * (maximo - inicio + 1) + inicio);
// }
// console.log(`c. ${numRan(5, 10)}`);

// console.log('-------------');

// // 2. Crea unha función á que se lle pase como parámetro o número de minutos e
// // devolva un string indicando a súa equivalencia en horas e minutos.

// function calcHoras(mins) {
// 	let horas = 0;
// 	for (let i = 0; i < mins; i++) {
// 		if (mins > 59) {
// 			horas++;
// 			mins = mins - 60;
// 		} else if (mins < 59) {
// 			break;
// 		}
// 	}
// 	return `Horas: ${horas} + Minutos : ${mins}`;
// }

// console.log(calcHoras(360));

// console.log('--------------');

// // 3. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra
// // función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o
// // resultado das funcións usando dúas cifras decimais

// function calcAreaCirculo(radio) {
// 	return `La area del círculo es: ${(Math.PI * Math.pow(radio, 2)).toFixed(
// 		2
// 	)}`;
// }

// function calcPeriCirculo(radio) {
// 	return `El perímetro del círculo es: ${(2 * Math.PI * radio).toFixed(2)}`;
// }

// console.log(calcAreaCirculo(5));
// console.log(calcPeriCirculo(5));

// console.log('----------------');

// console.log('--------Date-----------');

// // 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual.

// let diaSemana = new Date('2024-7-25');
// console.log(diaSemana);

// switch (diaSemana.getDay()) {
// 	case 0:
// 		console.log('Domigo');
// 		break;
// 	case 1:
// 		console.log('primeira feira');
// 		break;
// 	case 2:
// 		console.log('segunda feira');
// 		break;
// 	case 3:
// 		console.log('terça feira');
// 		break;
// 	case 4:
// 		console.log('cuarta feira');
// 		break;
// 	case 5:
// 		console.log('quinta feira');
// 		break;
// 	default:
// 		console.log('sexta feira');
// 		break;
// }

// console.log('------------------');

// // 2. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes.

// function daysMonth(year, month) {
// 	return new Date(year, month, 0).getDate();
// }

// let yearMonth = new Date(2024, 2);
// console.log(
// 	`O mes ${yearMonth.getMonth()} ten  ${daysMonth(
// 		yearMonth.getFullYear(),
// 		yearMonth.getMonth()
// 	)} días`
// );
// yearMonth = new Date(2024, 10);
// console.log(
// 	`O mes ${yearMonth.getMonth()} ten  ${daysMonth(
// 		yearMonth.getFullYear(),
// 		yearMonth.getMonth()
// 	)} días`
// );
// console.log('----------------');

// // 3. Crea unha función á que se lle pase unha data e que devolva true se é fin de semana.

// function isWeekend(dayWeek) {
// 	if (dayWeek.getDay() == 0 || dayWeek.getDay() == 6) {
// 		console.log('É findeeee');
// 		return true;
// 	} else {
// 		console.log('Hai cole :(');
// 	}
// }

// isWeekend(new Date('August 19, 1975 23:15:30'));
// isWeekend(new Date('August 24, 1975 23:15:30'));

// console.log('--------------');

// // 4. Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano.

// function numDaysPassed(datePassed) {
// 	let year = new Date(datePassed.getFullYear(), 0);
// 	let day = datePassed.getDate();
// 	console.log(year);
// 	console.log(year.valueOf());

// 	console.log(day);
// 	let dayPass = datePassed.valueOf() - year.valueOf();
// 	console.log(
// 		`Pasaron : ${(dayPass / (1000 * 60 * 60 * 24)).toFixed(
// 			0
// 		)} días dende o comezo de ${year} ate ${datePassed}`
// 	);
// }

// let datePassed = new Date('2004-7-24');
// numDaysPassed(datePassed);

// console.log('-----------Arrays-----------');

// // 1. Crea unha función que reciba un elemento e un array como parámetros. A función debe devolver un novo array que conteña os índices onde aparece ese elemento no array.

// function indexIndicator(searched, arrayIndexed) {
// 	let newArray = [];
// 	for (const element of arrayIndexed) {
// 		if (element === searched) {
// 			newArray.push(arrayIndexed.indexOf(element));
// 			arrayIndexed[arrayIndexed.indexOf(element)] = '';
// 		}
// 	}

// 	// let index = newArray.indexOf(searched);
// 	// while (index != -1) {
// 	//   newArray.push(index);
// 	//   index = newArray.indexOf(searched, index + 1);
// 	// }
// 	return newArray;
// }

// const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
// console.log(indexIndicator(1, numeros)); // (4) [0, 3, 5, 9]

// console.log('--------------------');

// // 2. Dado o array froitas (const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];) , fai os seguintes apartados co método splice:

// // a. Elimina as mazás.

// // b. Engade laranxas e sandía detrás dos plátanos,.

// // c. Quita os kiwis e pon no seu lugar cereixas e nésperas.

// // Despois de realizar cada operación mostra por pantalla a lista de froitas do array separadas por unha coma e un espazo. Por exemplo, inicialmente o array debe mostrarse como “peras, mazás, kiwis, plátanos, mandarinas”.
// const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];

// console.log(froitas.join());

// console.log(froitas.splice(1, 1));
// console.log(`a. ${froitas.join(', ')}`);

// console.log(
// 	froitas.splice(froitas.indexOf('platanos') - 1, 0, 'laranxas', 'sandía')
// );
// console.log(`b. ${froitas.join(', ')}`);

// console.log(froitas.splice(1, 1, 'cereixas', 'peras'));
// console.log(`c. ${froitas.join(', ')}`);

// console.log('--------------------');

// // 3. Crea unha función á que se lle pase unha frase con varias palabras e devolva a mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en minúsculas

// function upperCased(arrayString) {
// 	let newArrayString = arrayString.split(' ');
// 	let saida = [];
// 	for (const element of newArrayString) {
// 		saida.push(
// 			element.replace(element.charAt(0), element.charAt(0).toUpperCase())
// 		);
// 	}
// 	return saida.join(' ');
// }

// const arrayString = 'hola buenos días que tal';
// console.log(upperCased(arrayString));

// console.log('--------------------');

// console.log('------- Desestruturación de Arrays -----');

// // 1. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web:
// // Utilizando o contido aprendido sobre arrays, proporciona unha única sentencia
// // JavaScript para cada unha das seguintes instrucións:
// // a. Crea as variables players1, players2 que conteñan un array cos xogadores de cada equipo. Así, players1 terá os xogadores do primeiro equipo e players2 os do segundo equipo.

// const players = [
// 	[
// 		'Neuer',
// 		'Pavard',
// 		'Martinez',
// 		'Alaba',
// 		'Davies',
// 		'Kimmich',
// 		'Goretzka',
// 		'Coman',
// 		'Muller',
// 		'Gnarby',
// 		'Lewandowski',
// 	],
// 	[
// 		'Burki',
// 		'Schulz',
// 		'Hummels',
// 		'Akanji',
// 		'Hakimi',
// 		'Weigl',
// 		'Witsel',
// 		'Hazard',
// 		'Brandt',
// 		'Sancho',
// 		'Gotze',
// 	],
// ];
// let players1, players2;
// [players1, players2] = players;
// console.log(players1, players2);

// // b. O primeiro xogador do array é o porteiro e o resto son xogadores de campo. Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e unha variable de tipo array chamada fieldPlayers que conteña o resto de xogadores do equipo.

// let gk, fieldPlayers;

// [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // c. Crea un array allPlayers que conteña os xogadores dos dous equipos.

// let allPlayers = players.slice();
// console.log(allPlayers);

// // d. O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho','Periscic'. Crea unha nova variable de tipo array chamada players1Final que conteña todos os xogadores: os iniciais e tamén os 3 novos.

// let players1Final;
// players1Final = [...players1, 'Thiago', 'Coutinho', 'Pulisic'];

// console.log(players1Final);

// console.log('--------------------');

// // 2. Dado un array con nomes de variables formados por dúas palabras separadas por “_”, fai as operacións necesarias para mostrar por consola os nomes das variables en formato camelCase. Por exemplo, se o array de entrada é ["first_name”, “last_NAME”], deberase mostrar por consola “firtsName” e “lastName”.

// function toCamelCase(arrayCamel) {
// 	let first, second;
// 	for (const element of arrayCamel) {
// 		[first, second] = element.toLowerCase().split('_');
// 		// second = second.charAt(0).toUpperCase() + second.slice(1);
// 		// console.log(first + second);

// 		console.log(
// 			`${first}${second.replace(second[0], second[0].toUpperCase())}`
// 		);
// 	}
// }

// toCamelCase(['first_name', 'second_name']);

// console.log('--------------------------');

// // 3. Escribe o código necesario para procesar unha cadea con información de voos como a do exemplo e mostrar a información por consola formateada como aparece na imaxe:

// const flightsInfo =
// 	'_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;vq7439299980;cq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30';

// function getCode(str) {
// 	return str.slice(0, 3).toUpperCase();
// }

// for (const flight of flightsInfo.split('+')) {
// 	const [type, from, to, time] = flight.split(';');

// 	const output = `${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(
// 		to
// 	)} (${time.replace(':', 'h')})`;
// 	console.log(output.padStart(40));
// }

// console.log('--------------Obxectos --------');

// // 1. Crea un obxecto chamado television coas propiedades marca, categoría (televisores), unidades (4), prezo (354.99) e un método chamado importe que devolva o prezo total das unidades (unidades x prezo).

// const television = {
// 	marca: 'Samsung',
// 	categoria: 'televisores',
// 	unidades: 4,
// 	prezo: 354.99,
// 	importe() {
// 		return this.prezo * this.unidades;
// 	},
// };
// console.log(television.importe());

// console.log('-----------------');

// // 2. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor:
// // const game = {
// // odds: {
// // team1: 1.33,
// // x: 3.25,
// // team2: 6.5,
// // }
// // };
// // Utilizando a desestruturación de obxectos crea as seguintes variables:
// // ● team1: debe inicializarse co valor da propiedade team1 do obxecto inicial.
// // ● draw: debe inicializarse co valor da propiedade x do obxecto inicial.
// // ● team2: debe inicializarse co valor da propiedade team2 do obxecto inicial.

// const game = {
// 	odds: {
// 		team1: 1.33,
// 		x: 3.25,
// 		team2: 6.5,
// 	},
// };

// const {
// 	odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// console.log('-----------------');

// // 3. Dado o seguinte obxecto:
// // const game = {
// // scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
// // };

// // a. Recorre o array game.scored e mostra por pantalla información do xogador que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”.
// // b. Crea un novo obxecto chamado scorers que conteña como propiedades o nome dos xogadores que marcaron e como valor o número de goles que marcaron respectivamente. Neste exemplo sería algo así: {Lewandowski: 2, Gnarby: 1, Hummels: 1}

// const gameFootball = {
// 	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// };
// console.log('a: ');

// for (const [key, value] of gameFootball.scored.entries()) {
// 	console.log(`Gol ${key + 1}: ${value} `);
// }

// console.log('b: ');
// //TODO revisar este exercicio

// const scorers = {};

// for (const element of Object.values(gameFootball.scored)) {
// 	// if (scorers.hasOwnProperty([element])) {
// 	//   scorers[element] = scorers[element] + 1;
// 	// } else {
// 	//   scorers[element] = 1;
// 	// }

// 	scorers[element] ? scorers[element]++ : (scorers[element] = 1);
// }

// console.log(scorers);

// console.log('-------Set e Map-------------');

// // 1. O seguinte mapa almacena información dos eventos ocorridos durante un partido
// // indicando o minuto no que se produciron:
// // const gameEvents = new Map([
// // [17, "GOAL"],
// // [36, "Substitution"],
// // [47, "GOAL"],
// // [61, "Substitution"],
// // [64, "Yellow card"],
// // [69, "Red card"],
// // [70, "Substitution"],
// // [72, "Substitution"],
// // [76, "GOAL"],
// // [80, "GOAL"],
// // [92, "Yellow card"],
// // ]);
// // a. Crea un novo array chamado eventos que almacene os diferentes eventos (non o minuto) ocorridos durante o partido (sen que haxa duplicados).
// // b. Recorre con un bucle o mapa gameEvents e mostra información de cada evento, indicando se ocorreu na primeira metade ou na segunda metade do partido, por exemplo: [PRIMEIRA PARTE] 17: GOAL.

// const gameEvents = new Map([
// 	[17, 'GOAL'],
// 	[36, 'Substitution'],
// 	[47, 'GOAL'],
// 	[61, 'Substitution'],
// 	[64, 'Yellow card'],
// 	[69, 'Red card'],
// 	[70, 'Substitution'],
// 	[72, 'Substitution'],
// 	[76, 'GOAL'],
// 	[80, 'GOAL'],
// 	[92, 'Yellow card'],
// ]);

// console.log('a: ');

// const eventos = Array.from(new Set(gameEvents.values()));
// // const eventos2 = [...new Set(gameEvents.values())];

// console.log(eventos);

// console.log('b: ');

// for (const [minuto, evento] of gameEvents) {
// 	console.log(
// 		`En el minuto ${minuto} de la ${
// 			minuto <= 45 ? 'primera' : 'segunda'
// 		} parte: ${evento}`
// 	);
// }

// //
// console.log('--------Funcións----------');
// //
// // 1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.

// const cubeNumer = (numberToCube) => numberToCube * numberToCube * numberToCube;

// console.log(cubeNumer(6));
// console.log('----------------------');

// // 2. Crea unha función frecha á que se lle pase un array e devolva como resultado un array cos elementos impares do array de entrada.

// const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];

// const numerosImpares = (arrayAll) => {
// 	const arraySalida = [];
// 	for (const element in arrayAll) {
// 		if (arrayAll[element] % 2 != 0) {
// 			arraySalida.push(arrayAll[element]);
// 		}
// 	}
// 	return arraySalida;
// };

// console.log(numerosImpares(arrayEntrada)); // (4) [3, 5, 7, 23]

// // 3. Crea unha función frecha que sume todos os valores pasados como parámetros, sendo estes un número indeterminado.

// const sumaRest = (...array) => {
// 	let sumTotal = 0;
// 	console.log(array);

// 	for (const numeros of array) {
// 		sumTotal += parseInt(numeros);
// 	}
// 	return sumTotal;
// };

// console.log(sumaRest(1, 2, 3, 4, 5, 6, 7));
// console.log('----------------------');

// // 4. Crea unha función á que se lle pasen varios números como parámetros (un número indeterminado de parámetros) e que devolva a media deses números.

// function mediaNumeros(...array) {
// 	let sumTotal = 0;

// 	for (const numero of array) {
// 		sumTotal += parseInt(numero);
// 	}

// 	return sumTotal / array.length;
// }

// console.log(mediaNumeros(1, 2, 3, 4, 5, 6, 7));

// // 5. Crea unha función frecha chamada minMax() que reciba como parámetro un array de números e devolva un obxecto co valor mínimo e máximo do array de entrada:
// // console.log(minMax([1, 2, 3, 4, 5])); // Debe devolver { min: 1, max: 5 }

// const minMax = (numArray) => {
// 	numArray.sort((a, b) => a - b);
// 	let min = numArray[0];
// 	let max = numArray[numArray.length - 1];
// 	return {
// 		minimo: min,
// 		maximo: max,
// 	};
// };

// const minMax = (numArray) => ({
// 	min: Math.min(...numArray),
// 	max: Math.max(...numArray),
// });

// console.log(minMax([12, 4, 1, 2, 3, 4, 5, -1]));

// console.log('---------------');

// // 6. Crea unha función autoinvocada á que se lle pase a lonxitude e ancho dun rectángulo. A función debe mostrar por consola unha mensaxe indicando o valor da área do rectángulo.

// (function rectData(lonxitude = 100, ancho = 78) {
// 	console.log(`A lonxitude é ${lonxitude} e o ancho é ${ancho}`);
// })();

// // 7. Crea unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e devolva se é correcto ou non.

// 	const dniLetter = [
// 		't',
// 		'r',
// 		'w',
// 		'a',
// 		'g',
// 		'm',
// 		'y',
// 		'f',
// 		'p',
// 		'd',
// 		'x',
// 		'b',
// 		'n',
// 		'j',
// 		'z',
// 		's',
// 		'q',
// 		'v',
// 		'h',
// 		'l',
// 		'c',
// 		'k',
// 		'e',
// 	];

// function dniCheck(dni) {
// 	let dniNum = parseInt(dni.slice(0, 8));

// 	let dniRest = dniNum % 23;

// 	let result;
// 	if (
// 		dniRest <= 22 &&
// 		dni[dni.length - 1].toLowerCase() == dniLetter[dniRest]
// 	) {
// 		result = 'dni válido';
// 	} else result = 'dni non válido';
// 	return result;
// }
// console.log(dniCheck('87654321T'));
// console.log(dniCheck('44093993A'));
// console.log(dniCheck('12345678w'));

// console.log('--------------');

// //8. Crea unha función que reciba como parámetro unha cantidade enteira e faga o desglose do número de billetes e moedas necesarios para obtela. Debe usarse o número mínimo de billetes e moedas.
// const arrayBilletes = [500, 200, 100, 50, 20, 10, 5];
// const arrayMonedas = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
// const calcDesglose = (euros) => {
// 	if (euros < 0) return console.log('Te deben pasta');
// 	for (const valor of arrayBilletes) {
// 		if (euros >= valor) {
// 			console.log(
// 				`El número mínimo de billetes de ${valor} es ${Math.floor(
// 					euros / valor
// 				)}`
// 			);
// 			euros = euros % valor;
// 		}
// 	}

// 	for (const valor of arrayMonedas) {
// 		if (euros >= valor) {
// 			console.log(
// 				`El número mínimo de monedas de ${valor} es ${Math.floor(
// 					euros / valor
// 				)}`
// 			);
// 			euros = euros % valor;
// 		}
// 	}
// };
// calcDesglose(90);
// calcDesglose(206);
// calcDesglose(-2);

// console.log('----------------');

// // 9. Crea unha función chamada buscarPatron(texto, patron) que reciba como parámetros un texto e un patrón. A función debe devolver como resultado o número de veces que aparece o patrón no texto, tendo en conta que un carácter pode formar parte de máis dun patrón encontrado.
// // Debe implementarse a función de forma manual sen utilizar as funcións proporcionadas pola linguaxe JavaScript para buscar en cadeas. Non se deben distinguir maiúsculas de minúsculas.
// //Exemplo: buscarPatron(“000111101000ABCHA”, “00”) debe devolver 4.

// function buscarPatron(texto, patron) {
// 	let countPatron = 0;
// 	let patronPass = 1;
// 	for (let i = 0; i < texto.length; i++) {
// 		if (texto[i] == patron[0]) {
// 			for (let j = 0; j < patron.length; j++) {
// 				if (texto[i + patronPass] == patron[j + 1]) {
// 					patronPass++;
// 					continue;
// 				} else {
// 					break;
// 				}
// 			}
// 			if (patronPass == patron.length) {
// 				countPatron++;
// 				patronPass = 1;
// 			}
// 		}
// 	}
// 	console.log(countPatron);

// 	return countPatron;
// }

// buscarPatron('000111101000ABCHA', '00'); // 4
// buscarPatron('000111101000ABCHA', '11'); // 4
// buscarPatron('000111101000ABCHA', 'AB'); // 4
// buscarPatron('000111101000ABCHA', '00'); // 4

// console.log('------------------');

// // 10. Crea unha función JavaScript que comprobe se é posible axendar unha reunión dentro do horario laboral.

// // A estrutura da función e do programa proporciónanse a continuación. O seguinte código inclúe comprobacións con assert, que mostrarán por pantalla unha mensaxe en caso de que a aserción sexa falsa. É dicir, se a comprobación é correcta, o programa non mostrará ningunha mensaxe:

// const inicioXornada = '07:30';
// const finalXornada = '17:45';
// const horaFinal = new Date();
// horaFinal.setHours(parseInt(finalXornada.split(':')));
// const minutoFinal = new Date();
// horaFinal.setMinutes(parseInt(finalXornada.split(':')[1]));
// let horaInicioX = new Date();
// horaInicioX.setHours(parseInt(inicioXornada.split(':')));
// horaInicioX.setMinutes(parseInt(inicioXornada.split(':')[1]));

// function axendarReunion(horaInicioReunion, duracionEnMinutos) {
// 	let reunionPosible = true;
// 	let horaInicioR = new Date();
// 	horaInicioR.setHours(parseInt(horaInicioReunion.split(':')));
// 	horaInicioR.setMinutes(parseInt(horaInicioReunion.split(':')[1]));
// 	let finalReunion = new Date();
// 	finalReunion.setHours(
// 		duracionEnMinutos > 60
// 			? horaInicioR.getHours() + 1
// 			: horaInicioR.getHours()
// 	);

// 	if (
// 		horaInicioR.getHours() < horaInicioX.getHours() ||
// 		horaInicioR.getHours() > horaFinal.getHours() ||
// 		finalReunion.getHours() > horaFinal.getHours()
// 	) {
// 		reunionPosible = false;
// 	}
// 	if (
// 		horaInicioR.getHours() == horaInicioX.getHours() &&
// 		horaInicioR.getMinutes() < horaInicioX.getMinutes()
// 	) {
// 		reunionPosible = false;
// 	}
// 	if (
// 		horaInicioR.getHours() == horaFinal.getHours() &&
// 		horaInicioR.getMinutes() + duracionEnMinutos > horaFinal.getMinutes()
// 	) {
// 		reunionPosible = false;
// 	}

// 	return reunionPosible;
// }

// // // Comprobacións
// console.assert(
// 	axendarReunion('7:00', 15) == false,
// 	'Fallo comprobando axendarReunión("7:00", 15) == false'
// );
// console.assert(
// 	axendarReunion('7:15', 30) == false,
// 	'Fallo comprobando axendarReunión("7:15", 30) == false'
// );
// console.assert(
// 	axendarReunion('7:30', 30) == true,
// 	'Fallo comprobando axendarReunión("7:30", 30) == true'
// );
// console.assert(
// 	axendarReunion('11:30', 60) == true,
// 	'Fallo comprobando axendarReunion("11:30", 60) == true'
// );
// console.assert(
// 	axendarReunion('17:00', 45) == true,
// 	'Fallo comprobando axendarReunion("17:00", 45) == true'
// );
// console.assert(
// 	axendarReunion('17:30', 30) == false,
// 	'Fallo comprobando axendarReunion("17:30", 30) == false'
// );

// console.log('------------------');

// Conversión a tipos máis comprensibles que faciliten as mates (Unha hora son 60 minutos, ás 7 am * 60 sempre da a mesma)

// // // 11. Crea unha función que reciba un array bidimensional de lonxitude variable que se corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1 nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un array bidimensional onde cada posición que non teña mina, debe ter a información do número de minas adxacentes (diagonal, horizontal e vertical).

// // // // Exemplo:
// const arrayEntrada = [
// 	[0, 0, -1, 0],
// 	[0, -1, -1, 0],
// ];

// // // arraySaida = [[1, 3, -1, 2],
// // // [1, -1, -1, 2]];

// const arrayEntrada2 = [
// 	[0, 0, -1, 0],
// 	[0, -1, -1, 0],
// 	[0, -1, 0, -1],
// ];

// function contMinas(tabla, fil, col) {
// 	let contadoMinas = 0;
// 	for (let i = -1; i <= 1; i++) {
// 		for (let j = -1; j <= 1; j++) {
// 			if (tabla[fil + i]?.[col + j] == -1) contadoMinas++;
// 		}
// 	}
// 	return contadoMinas;
// }

// function buscaminas(array) {
// 	let arraySaida = JSON.parse(JSON.stringify(array));
// 	for (let fila = 0; fila < array.length; fila++) {
// 		for (let col = 0; col < array[fila].length; col++) {
// 			if (arraySaida[fila][col] == 0) {
// 				arraySaida[fila][col] = contMinas(arraySaida, fila, col);
// 			}
// 		}
// 	}

// 	return arraySaida;
// }

// console.log(buscaminas(arrayEntrada));
// console.log(arrayEntrada);
// console.log(buscaminas(arrayEntrada2));

// console.log('------------Outras funcións de arrays-----');

// // 1. Suma os valores da propiedade price do seguinte array de obxectos:

// const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

// console.log(objects.reduce((acc, curr) => acc + curr.price, 0));

// // Desestructuración de objetos

// console.log(objects.reduce((acc, { price }) => acc + price, 0));

// // console.log(
// // 	objects.reduce((acc, curr, index) => acc + curr.price, objects[0].price));

// console.log('---------------------');

// // 2. Utilizando a función reduce, obtén o valor mínimo dun array de números

// const arrayNum = [1, 2, -3, 4, 5, 6, 7];

// console.log(arrayNum.reduce((acc, curr) => Math.min(acc, curr)));

// console.log('-----------Función arrays 2.0-----------');

// // 1. Dado o seguinte array:

// // a. Crea un novo array que conteña só as persoas maiores de idade.
// // b. Crea un novo array que conteña os nomes (só os nomes) de todas as persoas.
// // c. Crea un novo array que conteña, en maiúsculas, os nomes das persoas  maiores de idade.
// // d. Crea un novo array que conteña obxectos só co id e o nome das persoas.

// const persoas = [
// 	{ nome: 'aaron', idade: 65, id: 1 },
// 	{ nome: 'beth', idade: 2, id: 2 },
// 	{ nome: 'ánxeles', idade: 13, id: 3 },
// 	{ nome: 'daniel', idade: 3, id: 4 },
// 	{ nome: 'ada', idade: 25, id: 5 },
// 	{ nome: 'erea', idade: 1, id: 6 },
// 	{ nome: 'navia', idade: 43, id: 7 },
// ];

// console.log('a) ');

// let persoasMaiores = persoas.filter(({ idade }) => idade >= 18);
// console.log(persoasMaiores);

// console.log('b )');
// let nomePersoas = persoas.map(({ nome }) => nome);
// console.log(nomePersoas);

// console.log('c)');

// let nomePersoasUpper = persoas
// 	.filter(({ idade }) => idade >= 18)
// 	.map(({ nome }) => nome.toUpperCase());
// console.log(nomePersoasUpper);

// console.log('d)');
// let nomeIdPersoas = persoas.map((persoa) => {
// 	return { nome: persoa.nome, id: persoa.id };
// });
// let nomeIdPersoas2 = persoas.map(({ nome, id }) => {
// 	return { nome, id };
// });
// console.log(nomeIdPersoas2);

// console.log('---------------');

// // 2. Dado un array cos días da semana en minúsculas:
// // a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.
// // b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.
// // c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’.
// // d. Mostra por consola o primeiro día que empece por “m”.
// // e. Mostra por consola a posición no array do primeiro día que empeza por “m”.
// // f. Crea un novo array cos días da semana en maiúsculas

// const diasSemana = [
// 	'luns',
// 	'martes',
// 	'mercores',
// 	'xoves',
// 	'venres',
// 	'sabado',
// 	'domingo',
// ];

// console.log('a)');
// let diasM = diasSemana.filter((dia) => dia.startsWith('m'));
// console.log(diasM);

// console.log('b)');
// console.log(
// 	diasSemana.some((dia) => dia.startsWith('s'))
// 		? 'Algún día comeza por s'
// 		: 'Ningún día comeza por s'
// );

// console.log('c)');
// console.log(
// 	diasSemana.every((dia) => dia.endsWith('s'))
// 		? 'Todolos días rematan en s'
// 		: 'Non todolos días rematan en s'
// );

// console.log('d)');
// console.log(diasSemana.find((dia) => dia.startsWith('m')));

// console.log('e)');
// console.log(diasSemana.findIndex((dia) => dia.startsWith('m')));

// console.log('f)');
// let diasUpper = diasSemana.map((dia) => dia.toUpperCase());
// console.log(diasUpper);

// console.log('-------------');

// // 3. Fai unha función que ordene as notas dun array pasado como parámetro. Por exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a función sort e pasarlle como parámetro unha función que ti definas que serva para realizar a comparación de elementos.

// const arrayNumeros = [4, 8, 30, 10, 5];

// function ordenarNotas(arrayNum) {
// 	return arrayNum.sort((a, b) => a - b);
// }

// // function ordenarNotasBen(nota1, nota2) {
// // 	if (nota1 < nota2) {
// // 		return -1;
// // 	}
// // 	if (nota1 > nota2) {
// // 		return 1;
// // 	}
// // 	return 0;
// // }

// console.log(ordenarNotas(arrayNumeros));
// // console.log(arrayNum.sort(ordenarNotasBen));
// console.log('-------------');

// // 4. Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para traballar con arrays).

// console.log(arrayNumeros.sort((a, b) => b - a)[0]);
// console.log(arrayNumeros.reduce((acc, curr) => (acc > curr ? acc : curr)));

// console.log('------------');

// // 5. Dada a seguinte información:
// // a. Filtra o array de inventores e crea un array só cos inventores que naceron no século XVI.
// // b. Crea un array co nome completo dos inventores: ["Albert Einstein", "Isaac
// // Newton", ...]
// // c. Unha vez obtido o array co nome completo dos inventores do exercicio anterior, ordénao alfabeticamente polo apelido.
// // d. Ordena alfabeticamente polo apelido o array de obxectos inventores inicial.
// // e. Ordena o array de inventores pola data de nacemento.
// // f. Calcula a suma dos anos que viviron todos os inventores.
// // g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo

// const inventors = [
// 	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
// 	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
// 	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
// 	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
// 	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
// 	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
// 	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
// 	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
// 	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
// 	{ first: 'Sarah', last: 'Goode', year: 1855, passed: 1905 },
// 	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
// 	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
// ];

// console.log('a)');
// let bornXvi = inventors.filter(({ year }) => year >= 1501 && year <= 1600);
// console.log(bornXvi);

// console.log('b)');
// let completeName = inventors.map(({ first, last }) => `${first} ${last}`);
// console.log(completeName);

// console.log('c)');
// console.table(
// 	completeName.sort((a, b) => {
// 		const ap1 = a.split(' ')[1];
// 		const ap2 = b.split(' ')[1];
// 		if (ap1 < ap2) {
// 			return -1;
// 		}
// 		if (ap1 > ap2) {
// 			return 1;
// 		}
// 		// names must be equal
// 		return 0;
// 	})
// );

// console.log('d)');

// console.table(
// 	inventors.sort((a, b) => {
// 		const lastA = a.last.toUpperCase();
// 		const lastB = b.last.toUpperCase();
// 		if (lastA < lastB) {
// 			return -1;
// 		}
// 		if (lastA > lastB) {
// 			return 1;
// 		}
// 		// names must be equal
// 		return 0;
// 	})
// );

// console.log('e)');
// console.table(
// 	inventors.sort((a, b) => {
// 		const yearA = a.year;
// 		const yearB = b.year;
// 		if (yearA < yearB) {
// 			return -1;
// 		}
// 		if (yearA > yearB) {
// 			return 1;
// 		}
// 		// names must be equal
// 		return 0;
// 	})
// );

// console.log('f)');
// const sumaAños = inventors.map(({ year, passed }) => {
// 	return { year, passed };
// });
// console.log(sumaAños);

// const anos = [];
// sumaAños.forEach(({ year, passed }) => anos.push(passed - year));
// console.log(anos);

// console.log(
// 	`O total de anos vividos polos científicos é : ${anos.reduce(
// 		(acc, curr) => acc + curr
// 	)}`
// );

// // console.table(inventors.reduce((acc, curr) => acc + (curr.passed - curr.year)));

// console.log('g)');
// inventors.sort((a, b) => {
// 	const livedA = a.passed - a.year;
// 	const livedB = b.passed - b.year;
// 	if (livedA < livedB) {
// 		return 1;
// 	}
// 	if (livedA > livedB) {
// 		return -1;
// 	}
// 	// names must be equal
// 	return 0;
// });
// console.table(inventors);

// console.log('--------------------------');

// // 6. Dada a seguinte información, obtén un obxecto con unha propiedade para cada medio de transporte, indicando o número de veces que se repite no array. É dicir, o resultado debería ser {car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1}. Intentar facer o exercicio usando o método reduce
// const data = [
// 	'car',
// 	'car',
// 	'truck',
// 	'truck',
// 	'bike',
// 	'walk',
// 	'car',
// 	'van',
// 	'bike',
// 	'walk',
// 	'car',
// 	'van',
// 	'car',
// 	'truck',
// 	'pogostick',
// ];

// const dataObject = data.reduce((acc, curr) => {
// 	// if (Object.hasOwn(acc, curr)) {
// 	// 	acc[curr] += 1;
// 	// } else if (!Object.hasOwn(acc, curr)) {
// 	// 	acc[curr] = 1;
// 	// }
// 	Object.hasOwn(acc, curr) ? (acc[curr] += 1) : (acc[curr] = 1);
// 	return acc;
// }, {});

// console.table(dataObject);

console.log('--------REGEXP-------');

// 2. Escribe unha expresión regular para comprobar que cada un dos seguintes elementos aparece nunha cadea.
// a. car e cat
// b. pop e prop
// c. ferret, ferry e ferrari
// d. Calquera palabra rematada en ious
// e. Un espazo seguido de punto, coma, dous puntos ou punto e coma.
// f. Unha palabra con máis de 6 letras.
// g. Unha palabra sen a letra e (ou E).
// Unha vez teñas a expresión regular creada, comproba se se pode facer máis pequena.
// Utiliza o seguinte código para comprobar o resultado, colocando como primeiro parámetro da función verify a túa expresión regular:

function verify(regexp, yes, no) {
	// Ignore unfinished exercises
	if (regexp.source == '...') return;
	for (let str of yes)
		if (!regexp.test(str)) {
			console.log(`Failure to match '${str}'`);
		}
	for (let str of no)
		if (regexp.test(str)) {
			console.log(`Unexpected match for '${str}'`);
		}
}
verify(/ca(?:t|r)/, ['my car', 'bad cats'], ['camper', 'high art']);
verify(/pr?op/, ['pop culture', 'mad props'], ['plop', 'prrrop']);
verify(
	/ferr(?:et|y|ari)/,
	['ferret', 'ferry', 'ferrari'],
	['ferrum', 'transfer A']
);
verify(
	/ious\b/,
	['how delicious', 'spacious room'],
	['ruinous', 'consciousness']
);
verify(/\s[.|,|:|;]/, ['bad punctuation .'], ['escape the period']);
verify(
	/\w{6,}/,
	['Siebentausenddreihundertzweiundzwanzig'],
	['no', 'three small words']
);
verify(
	/\b[^e]\b/gi,
	['red platypus', 'wobbling nest'],
	['earth bed', 'learning ape', 'BEET']
);

// 3. Unha dirección de rede MAC está composta por 6 grupos de dous números hexadecimais separados por “:”. Por exemplo "01:32:54:67:89:AB".
// Escribe unha expresión regular que comprobe se unha dirección MAC é correcta.

let regexpMac = /(([A-F]|\d){0,2}:){5}([A-F]|\d){0,2}/g;
console.log(regexpMac.exec('B1:32:C4:E7:89:AB'));

// 4. Crea unha función que comprobe se un contrasinal é válido, é dicir, cumpre as seguintes condicións:
// a. Mínimo 8 caracteres.
// b. Sen espazos en branco.
// c. Que teña, polo menos, 3 das seguintes tipos de caracteres:
// i. maiúsculas
// ii. minúsculas
// iii. números
// iv. caracteres especiais: ¡!$?%&#@/\()=¿?*[];,:._<>+-

let password = 'abcABC123.';
let regexpPass = /(?=.*\d)(?=.*\W)(?=.*[A-Z])(?=.*[a-z]){8,}/;
console.log(regexpPass.exec(password));

// 5. Ás veces é útil eliminar as etiquetas HTML dun texto para evitar que se inclúa código mal intencionado nunha páxina web. Crea unha función á que se lle pase un texto e devolva o mesmo texto coas etiquetas HTML eliminadas

function cleanHTML(text) {
	const regex = /Dog/i;
	text.replace(regex, ' ');
	return text;
}

let textToClean = '<h1>ALA</h1> <span>QUE CHULO</span>';
console.log(cleanHTML(textToClean));

// 6. Dado o seguinte array de insultos, fai un script tal que cada vez que apareza un deles nun texto o substitúa pola primeira letra do insulto e un número de asteriscos igual á lonxitude do insulto - 1.

// let insultos = ["testán", "langrán", "fervellasverzas", "baldreo", "lacazán", "pillabán"];

// Así, por exemplo, cada vez que apareza testán nun texto, debe substituírse por
// "t*****".

let insultos = [
	'testán',
	'langrán',
	'fervellasverzas',
	'baldreo',
	'lacazán',
	'pillabán',
];

function eufemismos(text) {
	text.split('');
}
