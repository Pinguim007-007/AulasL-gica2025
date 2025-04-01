const prompt = require('prompt-sync')();

const num1 = Number(prompt('qual o numero? '))
if(num1 >= 0){
   console.log(`${num1} é um numero positivo`) 
} else {
    console.log(`${num1} é um numero negativo`)
}