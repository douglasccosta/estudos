Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
        {
            newArray.push(this[i])
        }        
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Pláscico', preco: 18.99, fragil: false }
]

const frageis    = p => p.fragil 
const faixaPreco = p => p.preco >= 500

const listaFinal = produtos.filter2(frageis).filter2(faixaPreco)
console.log(listaFinal)