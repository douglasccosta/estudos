const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 4', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelamento Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})