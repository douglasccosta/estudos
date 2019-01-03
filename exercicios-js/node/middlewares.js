// middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 =(ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'


const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            //Exemplo: middleware chama os passos - ctx é o parametro de entrada contexto e execPasso é
            //uma chamada recursiva utilizando a função next existentes nos passos acima
            middlewares[indice](ctx, () => execPasso(indice + 1)) 

    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

//como passo3 não tem next, não foi reaizada a recursividade na funçã execPasso acima
const ctx2 = {}
exec(ctx2, passo3, passo1, passo2)
console.log(ctx2)