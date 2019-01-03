const express = require('express')

//Server instanciado em server.js..a função está sendo chamada em loader.js
module.exports = function(server) {
    // API Routes
    const router = express.Router()
    //Tudo que for passado a partir de '/api' será passado para router
    server.use('/api', router)

    // rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    // Todos os serviços usuaram como URL raiz billingCycles
    // Registrando os serviços em router
    billingCycleService.register(router, '/billingCycles')  
}