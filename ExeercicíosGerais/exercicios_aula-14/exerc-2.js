const prompt = require('prompt-sync')();

function ParImpar(nr) 
{
    nr = Number(prompt(`Qual se numero? `))

        if (nr%2 == 0){
           
            console.log( 'È par ')
        }
        if(nr %2 == 1){
            console.log(' È impar ')

        }
    }

ParImpar()
ParImpar()