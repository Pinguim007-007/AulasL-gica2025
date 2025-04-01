const prompt = require('prompt-sync')();

let maiorV = 0
let menorV = 10000000000
a= 1
b= 0
while (a >= 0){
    a = Number(prompt('digite o valor do produto: '))
    if (a > maiorV){    
        maiorV = Valor  
    } else if (a < menorV){
        menorV = a}
        b= b+ Valor
        a++
    }
    console.log(`O maior valor foi ${maiorV} e o menor foi ${menorV}
        e a media foi ${b}`)
        