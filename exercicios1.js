// 'use strict';
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
  return `La area del círculo es: ${(Math.PI * Math.pow(radio, 2)).toFixed(2)}`;
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
  for (element of arrayIndexed) {
    if (element == searched) {
      newArray.push(arrayIndexed.indexOf(element));
      arrayIndexed[arrayIndexed.indexOf(element)] = '';
    }
  }
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
console.log(`a. ${froitas.join()}`);
console.log(froitas.splice(froitas.length, 0, 'laranxas', 'sandía'));

console.log(`b. ${froitas.join()}`);
console.log(froitas.splice(1, 1, 'cereixas', 'peras'));

console.log(`c. ${froitas.join()}`);

console.log('--------------------');

// 3. Crea unha función á que se lle pase unha frase con varias palabras e devolva a mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en minúsculas

function upperCased(arrayString) {
  let newArrayString = [];
  for (const element of arrayString) {
    newArrayString.push(
      element.replace(element.charAt(0), element.charAt(0).toUpperCase())
    );
  }
  console.log(newArrayString.join(' '));
}

const arrayString = ['hola', 'buenos', 'días', 'que', 'tal'];
upperCased(arrayString);

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
[players1, players2] = [players[0], players[1]];
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

let arrayCamel = ['variable_uno', 'variable_dos'];

let variableuno, variabledos;
[variableuno, variabledos] = arrayCamel;
function toCamelCase(variable) {
  let vCamel = variable.toLowerCase().slice('_');
  vCamel.at(1).charAt(0).toUpperCase();
  console.log(vCamel);

  return vCamel;
}
console.log(toCamelCase(variableuno));
