// npm install commander
const Commander = require('commander')
const DataBase  = require('./database')
const Heroi  = require('./heroi')

async function main() {
    Commander
        .version('v1')
        .option('-n, --nome [value]', "Nome do Heroi")
        .option('-p, --poder [value]', "Poder do Heroi")
        .option('-i, --id [value]', "Id do Heroi")
        .option('-c, --cadastrar [value]', "Cadastrar um Heroi")
        .option('-l, --listar', "Listar um Herois")
        .option('-r, --remover', "Remove um Heroi pelo id")
        .option('-a, --atualizar [value]', "Atualiza um Heroi pelo id")

        .parse(process.argv)

        // Recuperando somente os atributos necessários do objeto commander
        const heroi = new Heroi(Commander)

        try {
            if (Commander.cadastrar) {
                // Se heroi.id vier undefined, o atributo será removido
                delete heroi.id
                const resultado = await DataBase.cadastrar(heroi)
                if(!resultado) {
                    console.error('Heroi não cadastrado!')
                    return;
                } 
                console.log('Heroi cadastrado com sucesso!')
            }
            if (Commander.listar) {
                const resultado = await DataBase.listar()
                console.log(resultado)
                return;
            }
            if (Commander.remover) {
                const resultado = await DataBase.remover(heroi.id)
                if(!resultado) {
                    console.error('Não foi possível remover o heroi')
                    return;
                }
                console.log('Heroi removido com sucesso!')
            }
            if (Commander.atualizar) {
                const idParaAtualizar = parseInt(Commander.atualizar)
                // Remover todas as chaves que estiverem com undefined | null
                const dado = JSON.stringify(heroi)
                const heroiAtualizar =  JSON.parse(dado)
                const resultado = await DataBase.atualizar(idParaAtualizar, heroiAtualizar)

                if(!resultado) {
                    console.error('Não foi possivel atualizar o heroi')
                    return;
                }

                console.log('Heroi atualizado com sucesso!')
            }
            
        } catch (error) {
            console.error('DEU RUIM', error)
        }
}

main()