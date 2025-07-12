// FUNÇÕES RECEBENDO OBJETOS

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

function compararPessoas(p1, p2) {

    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}.`)
    } else if (p2.idade > p1.idade) { 
        console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}.`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

const joao = new Pessoa('João', 29)
const vitoria = new Pessoa('Vitória', 25)

compararPessoas(joao, vitoria)