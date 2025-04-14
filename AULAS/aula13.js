const prompt = require('prompt-sync')();
//Interação sobre nossos vetores (arrays/listas)

//Vetor         0         1         2        3
let frutas = ['Maça', 'Banana', 'abacaxi', 'uva'];
//para interar sobre um vetor, utilizamos o for
for (let x = 0; x< frutas.legnght; x++){
    let frutaAtual = frutas[x]
    console.log(`a fruta da posição ${x} é ${frutaAtual[x]}`)
}
console.log("FIM")

// Interando sobre uma lista usando fro or
let listaJogadores = ['Pelé', 'Maradona', 'Messi', 'Ronaldinho'];
for (let jogador of listaJogadores){
    console.log(`o jogador é ${jogador}`);
}

let soma = 0
let numerosLista = [2,6,4,8,3,8,3]
for( let numero of numerosLista){
    console.log(`o numero é ${numero}`)
    soma = numero + soma
}
console.log(soma);

// verificando se um elementon existe em um array
let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = ['b', 'c', 'd', 'f', 'g','h', 'j', 'k', 'l', 'm','n', 'p', 'q', 'v', 'w','x', 'y', 'z'];
let numeros = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16']
let letraParaVerificar = prompt(" Digite uma letra: ")
if (vogais.includes(letraParaVerificar.toLowerCase())){
    console.log(`A letra ${letraParaVerificar} é uma vogal`);
} else if (consoantes.includes(letraParaVerificar.toLowerCase())){
    console.log(`A letra ${letraParaVerificar} é uma consoante`);
} else if (consoantes.includes(letraParaVerificar)){
    console.log(`${letraParaVerificar} é um numero`);
} else  {
    console.log(`${letraParaVerificar} não é uma letra e nem um numero`);
}
//-------------------------------------------------------------------------------------------------------------------------------//

// obtendo a posição de um item em um erray usando o for of e a função entries()
//    posição        0        1          2        3
let listaFrutas = ['Maça', 'Banana', 'abacaxi', 'uva'];
for (const [pos, fruta] of listaFrutas.entries()){
    console.log(fruta)
}

//===============================================================================================================================//
 let produtos = 'celular, tv, tablet, monitor, notbook'
 let listaProdutos = produtos.split(',');
 console.log(produtos);
 console.log(listaProdutos);

 //           01234
let escola = "SENAI"; // ['s','e','n','a','i']
console.log(escola[0]);
//vetor de caracteres  

for (let letra of escola){
    console.log(letra)
}