/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
Faça um programa que recebe os 5 números sorteados para os alunos e mostre o maior numero.

    DADOS DA ENTRADA:
    5
    50
    10
    98
    23

    Saída
    98

*/

const {gets, print} = require('/Projetos/aulajs/importacao/funcoes-auxiliares')


let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado
    }
}

print(maiorValorEncontrado)
