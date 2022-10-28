/* Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por KM rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso. */

class Carro{
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularGastoViagem(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoPorKm * precoCombustivel;
    }

}

const uno = new Carro ('Fiat', 'Branco', 1/12);
console.log(uno.calcularGastoViagem(70, 5));

const gol = new Carro ('Bolinha', 'Preto', 1/10);
console.log(gol.calcularGastoViagem(70, 5));
