/* faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre de faculdadade calcule e
imprima a sua média e a sua classificação conforme a tabela abaixo.

média = (nota 1 + nota 2 + nota 3) / 3;

classificação: 

- média menor que 5, reprovação
- média entre 5 e 7, recuperação
- média acima de 7, aprovação

*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovado');
 } else if (media >= 5 && media <=7) {
    console.log('Recuperação');
} else {
    console.log('Passou de semestre');
}

