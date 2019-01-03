const port = 3003

const bodyParser = require('body-parser')
const express    = require('express')
const server     = express()


// urlencoded -> formato dos dados quando se faz a submissão dos formulários em frontend ao servidor (sever)
// Resumindo, o bodyParser é o responsável para interpretar as informações submetidas ao servidor server
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`Backend is running on port ${port}.`)
})

module.exports = server