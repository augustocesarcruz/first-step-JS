/*Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:

1- Preço do combustivel;
2- Gasto médio de combustivel do carro por KM;
3- Distância em KM da viagem;

Imprima no console o valor que será para realizar esta viagem.
*/

//Entradas
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKM = 1580;

//Calculo

const litrosConsumidos = distanciaEmKM / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));

