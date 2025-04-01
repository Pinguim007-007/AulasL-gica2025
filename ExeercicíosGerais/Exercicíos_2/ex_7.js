const prompt = require('prompt-sync')();

a= parseFloat(prompt('Velocidade do carro: '))

if(a <80){console.log( 'não foi multado')
    } else (console.log(`foi multado \n valor da multa é: ${(a-80)*7.00}`)
)