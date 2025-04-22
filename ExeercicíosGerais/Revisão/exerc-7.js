const prompt = require('prompt-sync')();

let valorHora = Number(prompt('Digite um numero: '));
let horasTrabalhadas = Number(prompt('Digite um numero: '));
let salarioT = valorHora * horasTrabalhadas;
console.log(`Seu salario por hora é ${salarioT}`);

let salarioBruto = prompt('Quanto você recebe de salário bruto? ')
let impostoDeRenda = (hora/100) * 11
console.log(`Você pagou ${impostoDeRenda} de imposto de renda`)
let INSS = (hora/100) * 8
console.log(`Você pagou ${INSS} de INSS`)
let Sindicato = (hora/100) * 5
console.log(`Você pagou ${Sindicato} de Sindicato`)
let Descontos = impostoDeRenda + INSS + Sindicato 
console.log(`Você pagou cerca de $${Descontos} de descontos`);
let SalarioLiquido = salarioBruto - Descontos
console.log(`Seu salario Liquido é de ${SalarioLiquido}`);
