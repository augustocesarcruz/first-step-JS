// alt + shift + f
/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

// Entradas

const precoEtanol = 3.49;
const precoGasolina = 6.99;
const kmPorLitros = 10;
const tipoCombustivel = 'Etanol';
const gastoMedioKM = 100;

const litrosConsumidos = gastoMedioKM / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoEtanol
    console.log(valorGasto.toFixed(2));
}

// Calculos


