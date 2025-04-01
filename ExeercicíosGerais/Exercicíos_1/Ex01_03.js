const prompt = require('prompt-sync')();

entrada1= prompt('Primeiro Numero');

nr1=parseFloat (entrada1);

console.log(`Dobro:${nr1*2} \n triplo: ${nr1*3} \n Ao cubo: ${nr1**3}`)