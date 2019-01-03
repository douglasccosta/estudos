console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Iphone'
//obj1['nome'] = 'Iphone2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Mesa')
const obj3 = new Obj('Cadeira')
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
