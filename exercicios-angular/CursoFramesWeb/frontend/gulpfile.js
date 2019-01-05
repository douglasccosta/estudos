const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

// Defaul é uma convenção do gulp que temos que seguir
// Será chamada no momento que invocarmos o comando gulp
gulp.task('default', () => {
    if(util.env.production) {
        sequence('deps', 'app')
    } else {
        sequence('deps', 'app', 'server')
    }
})