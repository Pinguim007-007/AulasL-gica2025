const prompt = require('prompt-sync')();

function SenhaL(quantidadeDeCaracteres) {
    let ListaCaracteres = 'rbrsdtgnetrdtjgerygneyjrgu35metjumt465675465346354u5wtrheny rjm653h4ytdjjy4wrtejyrwk5u3a5tjdmfjtyi.6l43owia3u5wjttulido7rxyfkh,vbjgukyikfkdzhsgj,k.ork/m,lufyt8fuplç[] ';
    let senha = '';

    for (let x = 1; x <= quantidadeDeCaracteres; x++){
    let posSorteada = Math.floor(Math.random() * ListaCaracteres.length)
    senha = senha + ListaCaracteres[posSorteada]; 
      }  return senha;
}
let senhaGerada = SenhaL(10)
console.log(senhaGerada)