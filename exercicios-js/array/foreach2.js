// callback é a função que está sendo recebida
// a mesma está sendo executada na linha 5
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// forEach lista os dados do array original
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
});