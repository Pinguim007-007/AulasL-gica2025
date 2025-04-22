const prompt = require('prompt-sync')();

let listaPar = []
let listaImpar = []
let A = [1,2,3,4,5]

for (num of A){
    if (num % 2 == 1){
        listaImpar.push(num)
    } if (num % 2 == 0){
        listaPar.push(num)
    }

}
console.log(listaPar);
console.log(listaImpar);