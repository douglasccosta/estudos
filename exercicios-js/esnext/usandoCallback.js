// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        //Enquanto os dados forem chegando, os mesmos serão concatenados em resultado
        res.on('data', dados => {
            resultado += dados
        })

       //Quando os resutados já forem retornados e concatenados, será chamada a callback
       res.on('end', () => {
           callback(JSON.parse(resultado))
       })     
    })
}

//Callback da linha 16 chemará a função alunos
let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})