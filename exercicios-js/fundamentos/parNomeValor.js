const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 26,
    peso: 87,
    endereco: {
        logradouro: 'Rua Colibris',
        numero: 360
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
