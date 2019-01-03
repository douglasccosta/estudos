/*
 0 - Obter um usuário
 1 - Obter o numero de telefone de um usuario a partir de seu Id
 2 - Obter o endereço do usuário pelo Id
*/
// importamos um modulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario() {
    // quando der problema -> reject(ERRO)
    // quando sucess -> resolve 
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            //return reject(new Error('DEU RUIM DE VERDADE!'))

            return resolve({
                id: 1,
                nome: 'Goku',
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve ({
                telefone: '998453268',
                ddd: 14
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setInterval(() => {
        return callback (null, {
            rua: 'Rua Kameramera',
            numero: 7
        })
    }, 2000);
}

/*
function obterEndereco(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setInterval(() => {
            return resolve ({
                rua: 'Rua Kameramera',
                numero: 7
            })
        }, 2000);
    })
}
*/

const usuarioPromise = obterUsuario()
// para manipular o sucesso usamos a função .then
// para manipular erros, usamos catch
usuarioPromise
    .then(usuario => {
        return obterTelefone(usuario.id)
            // foi necessário chamar .then para concatenar o retorno de usuário com o telefone
            // o retorno só seria o da função obter telefone
            .then(result => {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(resultado => {
        const enderenco = obterEnderecoAsync(resultado.usuario.id)
        return enderenco.then(result => {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                enderenco: result
            }
        });
    })
    .then(result => {
        console.log(`
            Nome: ${result.usuario.nome}
            Endereco: ${result.enderenco.rua}, nº${result.enderenco.numero}
            Tel: (${result.telefone.ddd}) ${result.telefone.telefone}
            `)
    })
    .catch(erro => {
        console.error('DEU RUIM', erro)
    })

/*
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
*/