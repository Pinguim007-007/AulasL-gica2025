const prompt = require('prompt-sync')();
// Estrutura condicional alinhada 
// Switch case

let valorcompra = 120;
let clienteVIP = true;

if (valorcompra >= 100) {
    if(clienteVIP==true) {
        console.log(`você ganhou R$ ${valorcompra * 10/100}`)
    } else{
        let desconto = valorcompra * 5/100;
        console.log(`você ganhou R$ ${desconto} de desconto`)
    }
    } else {
        let restante = 100 - valorcompra;
        console.log(`Compre mais R$ ${restante} e ganhe desconto`);
}

//------------------------------------------------------------------------------------------------------------------------------//
let idade = Number(prompt("Qual sua idade?"));
if (idade){
    if (idade < 16) {console.log('Não pode votar')}

    if (idade >= 16 && idade <= 18) {console.log('Voto Facultativo')}

    if (idade >= 18 && idade <= 70) {console.log('Voto Obrigatório')}

    if (idade > 70) {console.log('Voto Facultativo')}
}

//------------------------------------------------------------------------------------------------------------------------------//

entrada1= prompt('Primeiro Numero');
entrada2= prompt('Segundo |Numero');

nr1=parseFloat (entrada1);
num2=parseFloat (entrada2);

console.log('Soma:', nr1+nr2,'Divisão:', nr1/nr2,'Multiplicação:', nr1*nr2, 'Subtração:', nr1-nr2);
