const prompt = require('prompt-sync')();


// Criando nossa primeira variável 
//uma variável serve para armazenar uma informação/valor 
//O mémoria crie um espaço com o nome curso e receba o valor 'desenvolvimento de sistemas'
var curso = 'Desenvolvimento de sistemas';

//exibindo o conteudo de uma variavel
console.log('curso'); //para imprimir uma variavel, não de coloca entre ' ' 
console.log(curso);// jeito correto de usar uma variavel 
console.log('curso', curso);

//criando e atribuindo valorees uma variavel
idade = 16; // inteira //integer
temperatura = 24,5; //real //float
nome = 'Bruno'; //String

console.log('Olá', nome, ',você tem', idade, 'anos');
console.log('está cursando', curso, ',hoje faz', temperatura,'ºC');

console.log('Olá' + nome, '+você tem' + idade+ 'anos');
console.log('está cursando' + curso, '+hoje faz' + temperatura +'ºC');

console.log(`Olá`, nome, `,você tem`, idade, `anos`);
console.log(`está cursando`,  curso, `,hoje faz`, temperatura,`ºC`);

//template string
//utilizo a crase `` para criar string
//para colocar variaveis dentro da string, utilizo ${variavel{}

console.log(`Olá, ${nome} você tem ${idade} anos
    está cursando ${ curso} hoje faz ${ temperatura} ºC`)

var podeDirigir = true;
var EstaChovendo = false;

//declarando uma variavel nula
var escola;

var nome_completo;

// Exercício: 
// Nota1 Válido
// nomeCompleto Válido
// nome Completo inválido
// Média inválido
// console inválido
// _salario Válido
// 9dade inválido
// Minha_Variavel Válido
// Var inválido
// Valor$ inválido
// nome-completo inválido
// escola_ Válido
// TELEFONE Válido
// True inválido


turma = '3º'
console.log(turma);
ano = 2026

nome = 'Bruno'
idade= '16'
peso= '85kg'

_nome = prompt('qual o nome?');
_idade = prompt('qual a idade?');
_peso = prompt('qual o peso?');

console.log(_nome, _idade, _peso);

console.log(`Me chamo ${nome} tenho ${idade} e peso ${peso}`);

//Criem 2 váriaveis num1 e num2 e recebam as informações pelo prompt
num1 = prompt('digite o primeiro numero nº');
num2 = prompt('digite o segundo numero nº');
console.log (num1 + num2);

console.log(typeof num1);  //String
num1 = Number (num1);      //Convertendo a variavel do tipo string para number
console.log(typeof num1);  //Number

let nr1= Number(prompt('Digite o primeiro nº')); //number
let nr2= Number(prompt('digite o segundo nº')); //number
console.log (nr1+ nr2);

// convertendo os dados de uma variavel 
nr1 = "100.14";  //string
nr1 = Number("100.14"); //convertendo string para number
nr1 = parseInt("100.14"); //convertendo string para integer
nr1 = String ("100.14");

_nome = prompt('qual o nome?');                  //String
_idade = parseInt(prompt('qual a idade?'));      //Int
_peso = parseInt(prompt('qual o peso?'));        //Float
console.log(_nome, _idade, _peso);
