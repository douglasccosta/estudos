const BillingCycle = require('./billingCycle')
const _ = require('lodash')

// Definindo que será criado serviços rest para todos os seguintes verbos HTTP
BillingCycle.methods(['get', 'post', 'put', 'delete'])
// Toda vez quer der update em um objeto, o novo será retornado
// runValidators: true -> serve para que seja validado também no momento do update, já que nã valida por padrão
BillingCycle.updateOptions({ new: true, runValidators: true })

// TRATAMENTO DE MENSAGENS DE ERROS
// Depois do método post, chamar a seguinte função sendErrorsOrNext
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

// Selecionando o retorno através do bundle, se houver erros, será chamado a função de parse
function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

// Através de uma unção do lodash, está sendo incluído todas as mensagens de erros no array
function parseErrors(nodeRestfulErrors) {
    const errors = []
    // error está contido em de nodeRestfulErrors, é um valor de seus atributos
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

BillingCycle.route('count', function (req, res, next) { // Route - express
    BillingCycle.count(function (error, valor) {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ valor })
        }
    }) // Count - mongoose
})

module.exports = BillingCycle