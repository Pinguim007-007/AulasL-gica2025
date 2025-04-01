const prompt = require('prompt-sync')();

const num1 = prompt('digite um numero ')
if(num1 % 2 == 0){
    console.log('o numero é par ')
}else(
    console.log('o numero é impar ')
)