const prompt = require('prompt-sync')();

a = parseFloat(prompt('Valor vendido:'))
if (a>5000) {console.log(`sua comissão é ${(a*5)/100}\n o valor total recebido é ${((a*5)/100)+a}`)
}else (console.log(`sua comissão é: ${(a*3)/100} \n o valor total recebido é ${((a*3)/100)+a}`)
)