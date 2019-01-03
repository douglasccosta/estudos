const prod1 = {} //Criar objeto ---- {} - Objeto [] - Array
prod1.nome  = 'Celular Ultra Mega'
prod1.preco = 3568.84
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 85.21,
    obj: {
        teste: 1,
        obj: {
            teste2: 2
        }
    }
}

console.log(prod2)

`{ "nome": "Camisa Polo", "preco": 79.90 }`