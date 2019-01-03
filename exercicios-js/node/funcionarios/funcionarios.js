const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulher  = m => m.genero === 'M'
const china   = p => p.pais === 'China'

//buscar menor salario a partir da função reduce
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const listafuncionarios = response.data

    const mulherChinesa = listafuncionarios.filter(china).filter(mulher).reduce(menorSalario)
    console.log(mulherChinesa)
})
