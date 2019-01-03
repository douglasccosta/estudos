function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(5) //Not a number
imprimirSoma(5, 5, 8, 7)

//Funao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(5, 4))
console.log(soma(5))