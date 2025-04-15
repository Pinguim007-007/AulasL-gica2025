const prompt = require('prompt-sync')();

function Tabuada() {
    let num = Number(prompt('Digite uma palavra: '))
    for(let x=0;x<=10;x++){
        console.log(num * x);
        
} return num
}
Tabuada()
