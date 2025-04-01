const prompt = require('prompt-sync')();

let num1 = prompt(" ano atual ")
let num2 = prompt(" ano de nascimento ")
let idade = num1 -num2

    if (idade <= 10) {console.log('criança')}

    if (idade >= 11 && idade <= 17) {console.log('adolescente')}

    if (idade >= 18 && idade <= 59) {console.log('adulto')}

    if (idade > 60) {console.log('idoso')} 