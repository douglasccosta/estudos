const pessoa = {
    nome: 'Laura',
    idade: 7,
    peso: 23
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    //console.log(`${element[0]}: ${element[1]}`)
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, //não lista nas propriedades do objeto
    writable: false,
    value: '03/08/1992'
})

pessoa.dataNascimento = '04/08/1994'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4 }
const obj  = Object.assign(dest, obj1, obj2)

Object.freeze(obj)
obj.c = 1234

console.log(obj)