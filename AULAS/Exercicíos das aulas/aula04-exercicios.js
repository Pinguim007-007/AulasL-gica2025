const prompt = require('prompt-sync')();


//Exercícios Váriaveis 

// 1--------------------------------------------------//
let nomeAluno = "Bruno";
let altura = 1.65;
let escola = 'Sesi';
let anoatual = '2ºb';

// 2--------------------------------------------------//
let nomedoprofessor= "Edcarlos";
let materia = 'Matematica';
let aondeingresso = 2014;
console.log(nomedoprofessor, materia, aondeingresso);

// 3--------------------------------------------------//
nomeAluno = prompt("qual é o nome do aluno?");
altura = Number (prompt("qual sua altura?"));
escola= prompt("qual sua escola?");
anoatual = prompt("qual ano atual?");
console.log (nomeAluno, altura, escola, anoatual);
//------------------------=---------------------------//