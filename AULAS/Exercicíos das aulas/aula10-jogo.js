const prompt = require('prompt-sync')();

console.log('|=================================|')
console.log('|=🤔🤔 Jogo da Adivinhação 🤔🤔=|')
console.log('|=================================|')
let nrSecreto = Math.floor(Math.random()*100)+1;
let acertou = false;
let tentativas = 0;

while (acertou == false){
    let chute = Number(prompt('₡ Digite um nº entre 1 e 100 ₡: '))
    tentativas++ // tentativas = tentativas + 1
    if (chute == nrSecreto){
        console.log(` 🏆🏆 Parábens, você GANHOU em ${tentativas}tentativas 🏆🏆`);
        acertou = true;
        
    } else if (chute > nrSecreto){
        console.log(`Você chutou ${chute}, tente um numero 👇🏻`)
    } else if (chute < nrSecreto){
        console.log(`Você chutou ${chute}, tente um numero 👆🏻`)
    } 

}
console.log ('         ✨   Fim   ✨        ')