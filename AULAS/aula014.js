function Linha() {
    console.log('|====================================|')
    console.log('|------------------------------------|')
    console.log('|====================================|')
}
Linha()
console.log(' SESI / SENAI ')
Linha()


function Cabecalho () {
    Linha()
    console.log(' SESI / SENAI ')
    console.log(' Nome: ')
    console.log(' Escola Sesi-025')
    console.log(' Data: ')
    console.log(' Ano Escolar: ')
    Linha()
}

Cabecalho()

//
function cabecalhoEscola(nomeEscola) {
    Linha()
    console.log(nomeEscola)
    Linha()    
}

cabecalhoEscola('USP')
cabecalhoEscola('SESI')

function soma (nr1, nr2) {
    let resultado = nr1 + nr2;
    console.log(resultado);
}
soma(5, 8);

// função com parâmetros e retorno
function Media (n1, n2) {
    let resultado = (n1+n2)/2
    return resultado;      
}
let valor = Media (5,8)