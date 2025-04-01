const prompt = require('prompt-sync')();

const v = prompt ('Insira um Valor em metros')

cm= v*100
mm= v*1000
km= v/1000

console.log(`cm: ${cm}\n mm:${mm} \n km ${km}`)

//---------------------------------------------------forma do Douglas-----------------------------------------------------------//

let metros = Number(prompt('digite uma medida em metros: '))
let cm = metros * 100;
let mm = metros * 1000;
let km = metros / 1000;
console.log(`${metros}m é ${cm}cm, ${mm}mm e ${km}km`)
