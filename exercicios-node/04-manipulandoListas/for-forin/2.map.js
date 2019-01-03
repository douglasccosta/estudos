const service = require('./service')

Array.prototype.MeuMap = function (callback) {
    const novoArray = []

    // this no caso é o results da linha 24
    for (let i = 0; i < this.length; i++) {
        const resultado = callback(this[i], i)
        novoArray.push(resultado)
    }
    return novoArray;
}

async function main () {
    try {
        const results = await service.obterPessoas('a')

        //const names = []
        // results.results.forEach(item => {
        //     names.push(item.name)
        // });

        //const names = results.results.map(pessoa => pessoa.name)
        const names = results.results.MeuMap((pessoa, indice) => {
            return `${indice} - ${pessoa.name}`
        })
        console.log('resultado', names)
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()