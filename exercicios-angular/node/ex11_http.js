const http = require('http')
const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end('<h1> Acho melhor usar o express, beleza?</h1>')
})

const porta = 3456

server.listen(porta, function() {
    console.log(`Escutando a porta ${porta}`)
})