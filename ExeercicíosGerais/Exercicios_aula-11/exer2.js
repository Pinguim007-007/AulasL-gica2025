const prompt = require('prompt-sync')();

for(let i= 1; i<=60; i++){
    let nrSecreto = Math.floor(Math.random()*60)+1;
    console.log(nrSecreto)
}
