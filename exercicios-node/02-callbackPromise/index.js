/*
 0 - Obter um usuário
 1 - Obter o numero de telefone de um usuario a partir de seu Id
 2 - Obter o endereço do usuário pelo Id
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Goku',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback (null, {
            telefone: '998453268',
            ddd: 14
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setInterval(() => {
        return callback (null, {
            rua: 'Rua Kameramera',
            numero: 7
        })
    }, 2000);
}

obterUsuario((erro, usuario) => {
    // null || "" || 0 === false
    if(erro) {
        console.error('DEU RUIM em USUÁRIO', erro)
        return;
    }

    obterTelefone(usuario.id, (erroTel, telefone) => {
        if(erroTel) {
            console.error('DEU RUIM em TELEFONE', erroTel)
            return;
        }        

        obterEndereco(usuario.id, (erroEnd, enderenco) => {
            if(erroEnd) {
                console.error('DEU RUIM em ENDEREÇO', erroEnd)
                return;
            }

            console.log(`
            Nome: ${usuario.nome}
            Endereco: ${enderenco.rua}, nº${enderenco.numero}
            Tel: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})