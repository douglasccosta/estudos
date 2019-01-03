const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let resultado1 = nums.map(soma10)
let resultado2 = nums.map(triplo)
let resultado3 = nums.map(paraDinheiro)
let resultado4 = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
