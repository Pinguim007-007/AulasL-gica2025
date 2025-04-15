const prompt = require('prompt-sync')();
function divisao(n1, n2) {
    console.log(n1 / n2);}
function soma(n1,n2) {
    consolw.log(n1 + n2)
}
function subtracao(n1, n2) {
    console.log(n1 - n2);}
function multiplicacao(n1, n2) {
        console.log(n1 * n2);}

function mat() {
    let n1 = Number(prompt('Digite um numero: '))
    let n2 = prompt('Digite um operador matematico: ')
    let n3 = Number(prompt('Digite um numero: '))
    console.log(n1,n2,n3)

    if (n2 == '/') {
        divisao(n1,n3) 
    } else if ( n2 == '*'){
        multiplicacao(n1,n3)
    } else if ( n2 == '-'){
        subtracao( n1,n3)
    } else if ( n2 == '+'){
        soma( n1,n3)
    } else {
        console.log('Operador Inválido')
    }
}
mat()