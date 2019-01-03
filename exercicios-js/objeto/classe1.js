class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome  = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancementos = []
    }

    addLancamentos(...lancementos) {
        lancementos.forEach(l => this.lancementos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancementos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz =  new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())