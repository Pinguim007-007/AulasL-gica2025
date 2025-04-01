const prompt = require('prompt-sync')();

entrada1 =prompt('primeira nota');
entrada2 =prompt('segunda nota');
nt1=parseFloat(entrada1);
nt2=parseFloat(entrada2);
media = (nt1+nt2)/2;
if(media < 7 )(console.log('esta aprovado'));
else( media > 7)(console.log('esta reprovado'));