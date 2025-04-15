// Escopo de Váriaveis 
// Variaveis Globais podem ser acessadas em qualquer lugar 
// Variaveis Locais podem ser acessadas apenas dentro de um bloco
function NomeEscola(){
    let escola = 'Sesi';
    console.log(`Valor fora da função:  ${escola}`);
}
let escola = 'Senai';
console.log(`Valor fora da função:  ${escola}`);
NomeEscola();
console.log(`Valor após da função:  ${escola}`);

//==============================================================================================================//

// documentando funções
/** 
 * soma de dois numeros 
 * @PARAM {number} a - primeiro numero
 * @PARAM {number} b - segundo numero  
 * @returns {number} - soma dos dois numeros
*/
function Soma(a, b){
    return a + b
}
Soma(2,4)