const BillingCycle = require('./billingCycle')

// Definindo que será criado serviços rest para todos os seguintes verbos HTTP
BillingCycle.methods(['get', 'post', 'put', 'delete'])
// Toda vez quer der update em um objeto, o novo será retornado
// runValidators: true -> serve para que seja validado também no momento do update, já que nã valida por padrão
BillingCycle.updateOptions({ new: true, runValidators: true })

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