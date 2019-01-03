const valores = [7.7, 8.6, 1.2, 4.7]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 45
console.log(valores[4])
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //inserindo valores no array
console.log(valores)

console.log(valores.pop()) //removendo o ultimo valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores)



