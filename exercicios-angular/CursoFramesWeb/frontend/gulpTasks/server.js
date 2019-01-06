const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

// Monitora suas alterações, e quando a mesma ocorre, será disparada os métodos para regerar o arquivo
// em questão
gulp.task('watch', () => {
    watch('app/**/*.html', () => gulp.start('app.html'))
    watch('app/**/*.css', () => gulp.start('app.css'))
    watch('app/**/*.js', () => gulp.start('app.js'))
    watch('assets/**/*.*', () => gulp.start('app.assets'))
})

// Inicializar o servidor importado em gulp web server.
gulp.task('server', ['watch'], () => {
    // Monitorando o diretório public
    return gulp.src('public').pipe(webserver({
        livereload: true, // Sempre que algo for alterado, vai dar um reload na aplicação e refresh no browser
        port: 3000,
        open: true
    }))
})