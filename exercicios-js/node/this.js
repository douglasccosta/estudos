console.log(this === global)
console.log(this === global)

// fora de uma função, this aponta para exports
console.log(this === module.exports)
console.log(this === exports)

// dentro de uma função, this não aponta para exports
// this aponta para global
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()