// Criando nosso objeto, que nada mais é do que uma coleção de chaves e valores
const Pessoa = {
    nome: 'João Pedro',
    idade: 29,
    descrever: function() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, e tenho ${this.altura}m de altura.`);
    }
}


// Acessando os valores do objeto:
console.log(Pessoa.nome) // 'João Pedro'
console.log(Pessoa.idade) // 29
console.log(Pessoa) // { nome: 'João Pedro', idade: 29 }


// Adicionando ou incrementando valores dentro do objeto
Pessoa.altura = 1.74 // adicionamos altura dentro do nosso objeto

console.log(Pessoa.altura) // 1.74
console.log(Pessoa) //{ nome: 'João Pedro', idade: 29 }


/* Podemos colocar funções dentro de nossos objetos também. Quando isso acontece,
as funções dentro do objeto passam a se chamar de MÉTODOS.

   No caso, a função criada seria essa:

   descrever: function() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, e tenho ${this.altura} de altura.`);
    }
*/

// Chamos executar nossa função, ou no caso, nosso método:
Pessoa.descrever()


// E assim podemos usar nosso objeto 'Pessoa' para qualquer outros dados de chave e valor:

Pessoa.nome = 'Vitória'
Pessoa.idade = 25
Pessoa.altura = 1.59

Pessoa.descrever()


// ACESSANDO DINAMICAMENTE OS VALORES DE UM OBJETO

/*Podemos acessar os atributos do nosso objeto usando [] */

console.log(Pessoa['nome']) // Vitória
console.log(Pessoa['idade']) // 25



