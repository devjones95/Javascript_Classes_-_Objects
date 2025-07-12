// CRIANDO CLASSES E INSTÂNCIAS

/*A classe é o modelo, o template de como algum objeto deve ser e o que ele deve
conter e fazer */
class Pessoa {
    nome
    idade

    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, e tenho ${this.altura}m de altura.`);
    }
}

// As instâncias são objetos que carregam as características da classe

const joao = new Pessoa()
joao.nome = 'João Pedro'
joao.idade = 29
joao.altura = 1.75

const vitoria = new Pessoa()
vitoria.nome = 'Vitória'
vitoria.idade = 25
vitoria.altura = 1.59


console.log(joao) // Pessoa { nome: 'João Pedro', idade: 29 }
console.log(vitoria) // Pessoa { nome: 'Vitória', idade: 25 }

joao.descrever() // Meu nome é João Pedro, tenho 29 anos, e tenho 1.75m de altura.
vitoria.descrever() // Meu nome é Vitória, tenho 25 anos, e tenho 1.59m de altura.


