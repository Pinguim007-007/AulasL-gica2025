const prompt = require('prompt-sync')();

const num1 = Number(prompt('Qual o numero?'))
if(num1 >= 18){
    console.log(' é maior que idade ')
}else {
    console.log( ' não é maior de idade')
}