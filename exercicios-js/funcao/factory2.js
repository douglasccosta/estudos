function criarProduto(produto, preco, desconto = 5) {
    return {
        nome: produto,
        preco: preco,
        valorComDesconto: preco - desconto
    }
}

console.log(criarProduto('mouse', 37))
console.log(criarProduto('notebook ', 3745.45))