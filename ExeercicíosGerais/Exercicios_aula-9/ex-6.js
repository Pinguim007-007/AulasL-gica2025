const prompt = require('prompt-sync')();

let salario = Number(prompt('salario'))

if (salario <= 2000) {
    let reajuste = 12 / 100 * salario
    console.log(`exiba o novo valor ${reajuste}`)
} else {
    if (salario > 2000 && salario <= 4000) {
        let reajuste1 = 10 / 100 * salario
        console.log(`exiba o novo valor ${reajuste1}`);
    } else {
        if ( salario > 4000 ) {
            let reajuste2 = 8 / 100 * salario
            console.log(`exiba o novo valor ${reajuste2}`);
        }
    }}
