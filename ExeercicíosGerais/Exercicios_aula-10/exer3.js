const prompt = require('prompt-sync')();

let total = 0
let total1 = 0
let qtde = 0
let qtde1 = 0

while (true){
    let valor = Number(prompt('digite o valor do produto (0 para encerrar): '))
    if (valor == 0){
        break;
    } else if ((valor % 2)= 0) {total1 = valor+ total1
        qtde1++
    } else if ((valor % 2)= 1){ total= valor + total
        qtde++
    } 
    }
     console.log(`A qualidade de produtos impares é ${qtde}
        e somam ${total}`)
     console.log(`A qualidade de produtos pares é ${qtde1}
        e somam ${total1}`)
    