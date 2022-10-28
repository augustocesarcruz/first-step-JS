//anotações - Objeto é uma coleção dinamica de chave e valor

const /*objeto -> */pessoa = {
/*chave -> */    nome: /*valor -> */ 'Augusto C B Cruz', 
    idade: 25,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();