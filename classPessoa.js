/*
Exercícios

2- Crie uma classe para representar pessoas.
Para cada pessoa, teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura * altura))
Instancie uma pessoa chamada José, que tenha 70kg e 1,75 de altura, e peça ao José, para dizer o valor do seu IMC
*/

class Pessoa {
    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        const imc = this.peso / (this.altura * this.altura)
        let classificacao
        
        if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade grau 1';
    } else if (imc < 40) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3';
    }

    return `Meu nome é ${this.nome}, e meu IMC é de ${imc.toFixed(2)}, que é ${classificacao}.` // ${imc.toFixed(2) arredonda pra 2 casas decimais
    }
}

const jose = new Pessoa('José', 70, 1.75)
const joao = new Pessoa('João', 100, 1.74)

console.log(jose.calcularIMC())
console.log(joao.calcularIMC())


