const prompt = require('prompt-sync')();

let a = Number (prompt('Numere um valor: '))
let b = 1
while (a>1){
    b= b*a
    a--
}
    console.log(b)