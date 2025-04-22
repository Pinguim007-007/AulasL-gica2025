const prompt = require('prompt-sync')();

let Sexo = prompt("Digite F para Feminino e M para Masculino: ")
if (Sexo== 'M') {
    console.log('Masculino');
} else if (Sexo == 'F') {
    console.log("Feminino");
} else {
    console.log( 'Sexo Inválido');
}