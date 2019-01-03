const service = require('./service')

async function main() {
    try {0
        const result = await service.obterPessoas('a')
        const nomes = []

        console.time('for')
        for(let i = 0; i < result.results.length; i++) {
            const pessoa = result.results[i]
            nomes.push(pessoa.name)
        }
        console.timeEnd('for')
        
        console.time('forin')
        for(let i in result.results) {
           const pessoa = result.results[i]
           nomes.push(pessoa.name) 
        }
        console.timeEnd('forin')

        console.time('forof')
        for(let pessoa of result.results) {
           nomes.push(pessoa.name) 
        }
        console.timeEnd('forof')

        console.log('names', nomes)
    } catch (error) {
        console.error('erro interno', error)
    }
}

main()