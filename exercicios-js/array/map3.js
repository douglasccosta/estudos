// Map cria um novo array
Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i ++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
const getPrecos = (e) => {
    return JSON.parse(e).preco
}

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let preco = carrinho.map2(getPrecos).map(paraDinheiro)
console.log(preco)

// Outra solução
const paraObjeto = json => JSON.parse(json)
const paraPreco  = produto => produto.preco

const preco2 = carrinho.map2(paraObjeto).map(paraPreco)
console.log(preco2)