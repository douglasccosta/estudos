const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Pláscico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

const frageis    = p => p.fragil 
const faixaPreco = p => p.preco >= 500

const listaFinal = produtos.filter(frageis).filter(faixaPreco)
console.log(listaFinal)