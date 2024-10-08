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
  let strNumlen = strNum.length;
  return strNum.slice(-4).padStart(strNumlen, '*');
}

console.log(enmascarar('1234123412347777'));

console.log('------------------');

console.log('--------Number---------');

// 1. ¿Como calcularías o número de cifras dun número enteiro positivo utilizando
// propiedades e métodos dos obxectos vistos ata agora?

function calcCrifas(numeroCif) {
  return numeroCif.toString().length;
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
