const notas = [6.5, 8.9, 7.1, 3.6, 4.3, 4.6]

for (let i in  notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 27,
    peso: 62
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)