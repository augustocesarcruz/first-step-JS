// Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada Par encontrado

const numeros = [7, 12, 26, 34];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero % 2 === 0){
        console.log(numero);
    }
}