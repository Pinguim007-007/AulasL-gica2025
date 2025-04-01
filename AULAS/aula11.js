const prompt = require('prompt-sync')();
// inicialização da variavel, condição de For, incremento da variavel

for ( let contador = 1; contador <=5; contador++){
    console.log(contador);
}
//===============================================================================================================================//
console.log('================')
for ( let contador = 5; contador <=50; contador++){
    console.log(contador);
}
//===============================================================================================================================//
for(let contador = 1; contador <=500; contador++){
    console.log(contador);
    if( contador == 50){
        break
    }
}
//===============================================================================================================================//
console.log('Entregando os notboks')
for (let nr = 1; nr <= 32; nr++){
    let nome = prompt(`Quem é o numero ${nr}: `)
    let presente = prompt(`o/a ${nome} esta presente? s/n?`)
    if(presente == "s"){
        console.log(`pegar o notebok ${nr}`)
        console.log(`levar o notebok até o/a ${nome}`)
    } else {
        console.log(`não pegar o notebok ${nr}`)
    }
}
//===============================================================================================================================//
// Tabuada com For

let nr = 6;
for(let contador = 1; contador <= 10; contador++){
    console.log(`${nr} x ${contador}= ${nr*contador}`);
}
