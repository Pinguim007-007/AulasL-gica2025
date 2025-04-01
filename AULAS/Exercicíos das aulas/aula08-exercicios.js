const prompt = require('prompt-sync')();

ValorVendas = Number( prompt('Qual o valor das vendas?'))
HorasTrabalhadas = Number( prompt('Quantas horas trabalhadas?'))

if (ValorVendas > 5000 || HorasTrabalhadas > 40) {
    console.log('Vendedor recebe bônus')}
else {
    console.log('Vendedor recebe não recebe bônus')}


// Exercício -------------------------------------------------------------------------------------------------------------------//

caracte = String (prompt('Qual a letra?'))

if (caracte == 'a' || caracte == 'e' || caracte == 'i' || caracte == 'o' || caracte == 'u') {
        console.log('Vogal')}
    else {
        console.log('Consoante')}
