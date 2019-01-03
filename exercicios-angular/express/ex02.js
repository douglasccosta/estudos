const express = require('express')
const server = express()

// Será executado primeiro pois foi o primeiro associado a URL /
server.get('/', function(req, res, next) {
    console.log('Inicio...')
    next()
    console.log('Fim...') // Sera executado no momento que terminar de executar a função abaixo
})

// Será chamado no momento que chamar o next da função acima
server.get('/', function(req, res) {
    console.log('Resposta...')
    res.send('<h1>Olá Express!</h1>')
})

server.listen(3001, () => console.log('Executando...'))