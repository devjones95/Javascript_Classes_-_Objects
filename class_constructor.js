// CRIANDO INSTÂNCIAS COM O MÉTODO CONTRUCTOR()

/*Vamos supor que os atributos nome, idade e altura de uma classe Pessoa, sejam obrigatórios,
o constructor é um método que podemos inserir parâmetros que serão pedidos
na hora em que formos criar nossas instâncias */

class Pessoa {

    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade}, e tenho ${this.altura}`)
    }
}

/* Agora que os parâmetros nome, idade e altura, serão obrigatórios na hora em que formos criar nossas instâncias da classe Pessoa,
precisaremos evidenciá-los na hora em que formos criar nossas instâncias da seguinte forma: */

const joao = new Pessoa('João', 29, 1.74) // dessa forma, colocando os valores obrigatórios dentro dos ()
const vitoria = new Pessoa('Vitória', 25, 1.59) // dessa forma, colocando os valores obrigatórios dentro dos ()








