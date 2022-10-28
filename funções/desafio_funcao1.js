function escreverNome(name){
    return 'Meu nome é: ' + name;
}


function verificarIdade(idade){
    if (idade >= 18){
        console.log(escreverNome('Augusto' + 'Maior de idade'))
    } else {
        console.log('Menor de idade')
    }
}

verificarIdade(17);