'use strict';
// 1. Crea unha variable que almacene un día da semana de luns a domingo. En función
// do valor da variable mostra unha mensaxe indicando se o día é laborable ou non.

let dia = 'Luns';

switch (dia) {
  case 'Domingo':
    console.log('Día non laborable');
    break;
  case 'Sábado':
    console.log('Día ao mellor laborable');
    break;
  default:
    console.log('Toca currar :(');
}

// 2. Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior dos 3 números.

let num1 = 1;
let num2 = 300;
let num3 = 4;

if (num1 > num2 && num1 > num3) console.log(num1);
if (num2 > num1 && num2 > num3) console.log(num2);
if (num3 > num1 && num3 > num2) console.log(num3);

// 3. Escribe os números pares do 0 ao 30, incluídos.

for (let i = 2; i < 31; i = i + 2) {
  console.log(i);
}

// // 4. Escribe as potencias de 2, dende 2⁰ ata 2 20. Para cada potencia debe saír un texto similar a “2 elevado a 0 = 1”.43.21
let exp = 0;
do {
  console.log(`2 elevado a ${exp} = ${Math.pow(2, exp)}`);
  exp++;
} while (exp <= 20);

// // 5. Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por consola. (5! = 5*4*3*2*1).

let fact = 8;
console.log('o factorial de ' + fact);

for (let i = fact - 1; i > 0; i--) {
  fact *= i;
}
console.log(fact);

// 6. Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)] 2 a. Almacena en variables o peso e altura de dúas persoas.

// b. Calcula o IMC das dúas persoas.
// c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da primeira persoa é maior que o da segunda persoa (22.5)!'

let peso1 = 45.5;
let peso2 = 70.33;
let altura1 = 180.3;
let altura2 = 190.66;
let imc = 0;
function calcImc(peso, altura) {
  imc = peso / Math.pow(altura, 2);
  return imc;
}
let imc1 = calcImc(peso1, altura1);
let imc2 = calcImc(peso2, altura2);
if (imc1 > imc2) {
  console.log('Maior imc da primeira persoa');
} else {
  console.log('Maior imc da segunda persoa');
}

// 1. Crea unha función que reciba como parámetro un prezo e unha porcentaxe de desconto. A función debe calcular o prezo final aplicado o desconto e devolver este valor.

function prezoFinal(prezo, desconto) {
  return (prezo - prezo * (desconto / 100)).toFixed(2);
}

let prezoInicial = 50;
let descontoTotal = 50.5;
console.log(
  `Este é o prezo final de ${prezoInicial} e ${descontoTotal} : ${prezoFinal(
    prezoInicial,
    descontoTotal
  )}`
);
prezoInicial = 123;
descontoTotal = 8;
console.log(
  `Este é o prezo final de ${prezoInicial} e ${descontoTotal} : ${prezoFinal(
    prezoInicial,
    descontoTotal
  )}`
);
