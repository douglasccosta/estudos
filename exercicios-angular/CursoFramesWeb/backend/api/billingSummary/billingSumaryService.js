const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

// Mais uma função middleware
function getSummary(req, res) {
    // aggregate -> função de agregação do mongoose
    BillingCycle.aggregate([{
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        // Somando os valores de credit e debt
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        // Apenas os campos credit e debt serão apresentados
        $project: {_id: 0, credit: 1, debt: 1}
    }]).exec((error, result) => {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            // result -> um array
            // Quando result null ou undefined:
            // _.defaults fará tipo um merge de results com o objeto com valores credit e debit
            // Ou seja, sempre terá credito ou debito
            res.json(_.defaults(result[0], {credit: 0, debt: 0}))    
        }
    })
}

module.exports = { getSummary }