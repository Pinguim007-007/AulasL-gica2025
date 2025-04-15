const prompt = require('prompt-sync')();

function ExibirCores() {
    let cores = ['Vermelho', 'Azul', 'Amarelo']
    for (let x = 0; x < 3; x++) {
        console.log(cores[x]);
    }
}
ExibirCores()