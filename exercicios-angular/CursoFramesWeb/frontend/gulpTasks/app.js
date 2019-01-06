const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

// Para executar a task app, deverá ser chamada antes todas as tasks ['app.html', 'app.css', 'app.js', 'app.assets']
gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])

gulp.task('app.html', () => {
    return gulp.src('app/**/*.html') // Irá localizar todos os arquivos .html que esteja em app, idependente de suas subpastas
        .pipe(htmlmin({ collapseWhitespace: true })) // Remove os espaços em branco html
        .pipe(gulp.dest('public'))
})

gulp.task('app.css', () => {
    return gulp.src('app/**/*.css')
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css')) // Serve para concatenar todos os arquivos minificados e gerar o deps.min.css
        .pipe(gulp.dest('public/assets/css')) // O arquivo será salvo no seguinte diretório
})

gulp.task('app.js', () => {
    return gulp.src('app/**/*.js')
        .pipe(babel({ presets:['env'] })) // Transpile do es6 para es5
        .pipe(uglify()) // Serve para minificar os arquivos
        .pipe(concat('app.min.js')) // Serve para concatenar todos os arquivos minificados e gerar o deps.min.js
        .pipe(gulp.dest('public/assets/js')) // O arquivo será salvo no seguinte diretório
})

gulp.task('app.assets', () => {
    return gulp.src('assets/**/*.*')
        .pipe(gulp.dest('public/assets'))
})