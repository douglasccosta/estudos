const gulp = require('gulp')

// Monitora suas alterações, e quando a mesma ocorre, será disparada os métodos para regerar o arquivo
// em questão
gulp.task('watch', () => {

})

// Inicializar o servidor importado em gulp web server.
gulp.task('server', ['watch'])