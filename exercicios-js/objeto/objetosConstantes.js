// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joso' }
pessoa.nome =  'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua dos Canários'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joaquim' })
console.log(pessoaConstante)