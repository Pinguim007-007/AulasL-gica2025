// Estrutura de laço de repetição While
const prompt = require('prompt-sync')();

let resposta = 'Sim';

while (resposta == 'S'){
    console.log('Você está dentro do bloco');
    resposta = prompt( ' Deseja continuar ? S/N: ')
}
console.log('Fim');

// Exemplo 3
let contador = 1;
while (contador <= 5){
    console.log(`O contador está no nº ${contador}`);
    contador++; //contador= contador + 1;
}

// Exemplo 4 - posso deixar meu laço executando sem uma condição especirfica, apenas com while (true) e encerrar o loop com comando

let total = 0;
let qtde = 0;
 
while (true){
    let valor = Number(prompt('digite o valor do produto (0 para encerrar): '))
    if (valor == 0){
        break;
    } else {
        total = valor + total;
        qtde = qtde++
    }
 }
 console.log(`você comprou no total ${qtde} produtos `);
 console.log(`valor total da compra R$ ${ total.toFixed(2)}`);
