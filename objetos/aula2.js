//anotações - classes

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const augusto = new Pessoa('Augusto', 26);
const izamara = new Pessoa('Izamara', 27);

augusto.descrever();
izamara.descrever();

console.log(izamara);