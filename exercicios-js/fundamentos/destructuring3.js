function rand({ min = 0, max = 1000 }) { //Operador Destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 } //Operador Objeto
console.log(rand(obj))
console.log(rand({ min: 956 }))
console.log(rand({}))
//console.log(rand())