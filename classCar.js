/*Exercícios

1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor, e um gasto médio de combustível poe kilometro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível, nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    constructor(marca, cor, gastoMedioKm){
        this.marca = marca
        this.cor = cor
        this.gastoMedioKm = gastoMedioKm
    }
    /*Agora tudo que precisamos fazer, é criar o método do nosso objeto, que calcula o valor que gastaremos pra fazer essa viagem*/
    calcularGastoViagem(distancia, precoCombustivel){
        return distancia * this.gastoMedioKm * precoCombustivel // 12 é o gasto médio de 12km por litro
    }
}

const onix = new Carro('Chevrolet', 'branco', 1/12) // gasto médio de 12km por litro
const prisma = new Carro('Chevrolet', 'vermelho', 1/8) // gasto médio de 8km por litro
const ferrari = new Carro('Ferrari', 'amarela', 1/10) 

/*Vamos supor que vamos viajar de São Paulo até o Rio de Janeiro:
- A distância entre os 2 estados é de aproximadamente 437 KM
- O preço atual da gasolina, é de R$ 5,69 */


console.log(onix.calcularGastoViagem(437, 5.69)) // nosso carro faz 12 km por litro, em uma viagem de 436km, e o preço de 5.69 o litro da gasolina
console.log(prisma.calcularGastoViagem(800, 5.69))
console.log(ferrari.calcularGastoViagem(690, 5.59))




