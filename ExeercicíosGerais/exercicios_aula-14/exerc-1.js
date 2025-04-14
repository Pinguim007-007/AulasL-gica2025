const prompt = require('prompt-sync')();


function saudacao() {
    nome = prompt('Qual é o seu nome? ')
    console.log(`${nome}, tenha um bom dia`)
}
for( let x= 0; x<3; x++){
 saudacao()
}