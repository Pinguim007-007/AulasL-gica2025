const prompt = require('prompt-sync')();
// Variaveis compostas -- Vetores -- Arrays

// Variaveis simples -- cabe apenas 1 dado por vez

let fruta = 'Maçã'
fruta = 'Banana'

// variavel composta cabe mais de 1 dado

let frutas = ['Maçã', 'Banana', 'Abacaxi', 'Uva']
console.log(frutas)
// depende de onde eu quero acessar, a primeira casa é o 0, depois segue normal, a primeira sempre sera o 0
console.log(frutas[1])

// Declarando uma lista vazia
let listaVazia =[];

// declaração de lista de numeros 
let numeros = [1,2,8,5,9];

// declaração de uma lista de strings 
let nomes = ['ana', 'joão', 'Maria'];

// declaração de uma lista mista
let listaMista = [4, 'feijão', true, 7.55];

// declaração de uma lista com outras listas
let listaDeVetores = [['coca-cola', 'hot-dog'],[5.00,10.00]]
console.log(listaDeVetores[0][1]);

console.log(frutas);
// alterando o conteudo de um item da lista
frutas[3] = 'Melancia'
console.log(frutas);

// inserindo um novo item na lista - mas se aplica apenas quando se sabe o proximo numero da lista
frutas[4]= 'laranja';

// push = adiciona um novo item a nossa lista
frutas.push('laranja');

//===============================================================================================================================//
// inserindo um novo item na lista
// frutas[4]= 'laranja'
frutas.push('laranja'); //utilizando o método |= PUSH =|

frutas = [...frutas, 'laranja']; // utilizando o operador |= SPREAD =|

// inserindo um novo item em uma posição expecífica
frutas.splice(2,0,"Morango");

//   2 - posição
//   0 - quantidade de itens a serem removidos 
console.log(frutas);
//===============================================================================================================================//
// comandos para excluir itens da lista
frutas.splice(3,1)//o primeiro antes da virgula, se refera a o numero da casa.O depois da primeira, é a quantidade de casas tiradas

//----------------//
frutas.shift()// Remove o primeiro item da lista

//----------------//

frutas.pop()// Exclui o ultimo item da lista
console.log(frutas);
//===============================================================================================================================//

frutas = ['Maçã', 'Banana','Morango', 'Abacaxi','Melancia','Laranja', 'Uva']
console.log(frutas[4])// posição especifica

console.log(frutas.slice(0,4))// da posição 0 até 4 itens

console.log(frutas.slice(1))// da posição 1 até o ultimo, sem o 0

console.log(frutas.slice(-1))// numero de itens do fim ao inicio, o ultimo resumindo

console.log(frutas.length)// total se itens da lista
//===============================================================================================================================//

frutas.sort()// organiza por ordem crescente
console.log(frutas)

frutas.reverse()// organiza a lista por ordem decrescente
console.log(frutas)