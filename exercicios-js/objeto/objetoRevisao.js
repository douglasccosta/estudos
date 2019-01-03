// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do prodtuto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do prodtuto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Douglas',
        idade: 26,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Anderson',
        idade: 30
    }, {
        nome: 'Mayara',
        idade: 28
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1253
carro['proprietario']['endereco']['logradouro'] = 'Rua Colibri'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)