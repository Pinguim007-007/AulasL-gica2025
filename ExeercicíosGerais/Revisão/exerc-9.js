const prompt = require('prompt-sync')();

function impares() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }    
}
impares();