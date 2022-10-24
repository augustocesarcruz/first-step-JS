/*O IMC é um critério da Organização Mundial de Saúde para dar uma indicação sobre 
a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- ABAIXO DE 18.5 ABAIXO DO PESO;
- ENTRE 18.5 E 25 PESO NORMAL;
- ENTRE 25 E 30 ACIMA DO PESO;
- ENTRE 30 E 40 OBESO;
- ACIMA DE 40 OBESIDADE GRAVE;

*/

const peso = 70;
const altura = 1.63;
const imc = peso / Math.pow(altura, 2);
console.log(imc);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
}
