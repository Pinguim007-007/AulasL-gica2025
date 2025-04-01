const prompt = require('prompt-sync')();

let num1 = Number(prompt(" digite a primeira nota "))
let num2 = Number(prompt(" digite a segunda nota "))
let media = (num1 + num2) / 2

if (media < 5) {console.log('Reprovado')}

    if (media >= 5 && media <= 7) {console.log('Recuperação')}

    if (media > 7) {console.log('Aprovado')} 
