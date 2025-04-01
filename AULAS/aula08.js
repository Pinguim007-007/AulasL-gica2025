//  Estrutura condicional composta e encadeada
//  Operadores logícos
//  && - e
//  || - ou
//  !- não

let a = 2;
let b = 3;
let c = 4;

console.log(a > 2 && b < 2); // False pq 2 condição é F
console.log(a > 2 && b < 2); // False pq 1 condição é V
console.log(a > 2 && b < 2); // True pq 2 condição é V
console.log(a > 2 && b < 2); // False

let altura = Number(prompt("Digite sua altura?"));
let peso = Number(prompt("Digite seu peso?"));
let imc = peso / (altura * altura);

if (imc < 18.5) { console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {console.log("Peso normal");
} else if (imc >= 25 && imc < 29.9) { console.log("Acima do peso");
} else if (imc >= 30) { console.log("Obesidade");}

Primeiro  = parseFloat (prompt('Primeiro Numero'))
SegundoLado = parseFloat (prompt('Segundo Numero'))
TerceiroLado = parseFloat (prompt('Terceiro Numero'))  

if (PrimeiroLado!=SegundoLado && SegundoLado!=TerceiroLado && PrimeiroLado!=TerceiroLado) (console.log('Escaleno'))

else if (PrimeiroLado==SegundoLado && SegundoLado==TerceiroLado ) (console.log('Equilatero'))

else (console.log('Isosceles'))