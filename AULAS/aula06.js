const prompt = require('prompt-sync')();

//Declarando variável sem dados (undefined)
let nota;
//declarando variavel como informação
let nome= "Carlos";

nome = "Bruno";
nota = 8.5;

let sobrenome = prompt('digite seu sobrenome');
let nota1= parseFloat(prompt('digite a nota da 1º'));
let nota2= parseFloat(prompt('digite a nota da 2º'));

 media = (nota1+nota2)/2
 nomecompleto = nome + '' + sobrenome
 nomecompleto2 = `${nome} ${sobrenome}`
 idade = Number(promp( "digite sua nota"))


//processamento
console.log(' Relatório Final ')
console.log( `seu nome é: ${nomecompleto} \n sua idade é: ${idade} \n sua media é: ${media}`)

