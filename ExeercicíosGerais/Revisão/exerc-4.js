const prompt = require('prompt-sync')();

console.log('Quanto você ganha por hora? ');
console.log('Quantas horas trabalha por mês? ');

let valorHora = Number(prompt('Digite um numero: '));
let horasTrabalhadas = Number(prompt('Digite um numero: '));
let salario = valorHora * horasTrabalhadas;
console.log(`Seu salario por hora é ${salario}`);
