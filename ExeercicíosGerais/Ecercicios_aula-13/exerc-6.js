const prompt = require('prompt-sync')();
var palava= prompt('Digite a palavra: ')
let vogais= ['a','e','i','o','u']
var nrvogais= 0
for(const p of pslavra){
    if(vogais.includes(p.toLowerCase())){
        nrvogais++
    }
}
console.log(`a palavra ${palavra} tem ${nrvogais} vogais`)