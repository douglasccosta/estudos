const { obterPessoas } = require('./service') // exraia uma função em especifico

Array.prototype.MeuFilter = function (callback) {
    const novoArray = []
    for(item of this) {
        const result = callback(item, this)
        if (!result) continue; // vai para o próximo item
        novoArray.push(item)
    }
    return novoArray;
}

async function main () {
    try {
        const { 
            results 
        } = await obterPessoas('a')

        // const familiaLars = results.filter(item => {
        //     // por padrão pecisa retornar booleano
        //     // para informar se deve manter ou remover da lista
        //     // false > remove da lista
        //     // true > mantém
        //     // toLowerCase - todos ficaram com letra minuscula
        //     // indexOf - verifica se contem determinada palavra
        //     // não encontrou = -1
        //     // encontrou = posicaoNoArray
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // })

        const familiaLars = results.MeuFilter((item) => {
            return item.name.toLowerCase().indexOf('lars') !== -1
        }).map(pessoa => pessoa.name)
        
        console.log(familiaLars)
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()