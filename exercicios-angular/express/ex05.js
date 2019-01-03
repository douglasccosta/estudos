const express = require('express')
const server = express()
const router = require('./ex05_routes')

server.use('/api', router)

server.listen(3002, () => console.log('Executando...'))