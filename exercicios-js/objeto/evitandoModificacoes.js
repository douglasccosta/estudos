// Object.preventExtentions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag

console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.nome = 'Maria'
pessoa.sobrenome = 'Araujo'
delete pessoa.idade
console.log(pessoa)

// Object.freeze = selado + valores constantes