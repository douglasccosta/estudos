const alunos = [
    { nome: 'João' , nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true  },
    { nome: 'Ana'  , nota: 8.7, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas?
const bolsista = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
    return resultado && bolsista
})

console.log(bolsista)

// Desafio 2: Algum aluno é bolsista?
const algumBolsita = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
    return resultado || bolsista
})

console.log(algumBolsita)