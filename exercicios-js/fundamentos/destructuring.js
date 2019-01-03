// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //extraindo atributos do objeto
console.log(nome, idade)
const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, perfil = true } = pessoa
console.log(sobrenome, perfil)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)