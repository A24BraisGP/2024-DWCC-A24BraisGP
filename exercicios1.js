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

console.log(`a. ${Math.ceil(Math.random(3))}`);

console.log(`b. ${Math.ceil(Math.random(3)) + 1}`);

function numRan(inicio, maximo) {
  return Math.random() * (maximo - inicio) + inicio;
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

let diaSemana = new Date(2024, 6, 25);
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

function daysMonth(yearMonth) {
  let year = yearMonth.getFullYear();
  let month = yearMonth.getMonth();
}

let yearMonth = new Date('August 19, 1975 23:15:30');

console.log('----------------');

// 3. Crea unha función á que se lle pase unha data e que devolva true se é fin de semana.

function isWeekend(dayWeek) {
  if (dayWeek.getDay() == 0 || dayWeek.getDay() == 1) {
    console.log('É findeeee');
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
      newArray.push(indexOf(element));
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

console.log('--------------------');

// 3. Crea unha función á que se lle pase unha frase con varias palabras e devolva a mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en minúsculas

console.log('--------------------');
