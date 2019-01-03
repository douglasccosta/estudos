process.stdout.write('Está gostando do curso? ')
// Será chamado sempre que o usuário informar um dado e apertar enter
process.stdin.on('data', function(data) {
    process.stdout.write(`Sua Resposta foi ${data.toString()}Obrigado!`)
    process.exit()
})