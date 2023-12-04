const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function comprimeJS() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/styles'))
}

function comprimeImagem() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(compilaSass, comprimeImagem, comprimeJS)
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compilaSass))
    gulp.watch('./src/scripts/*.js', gulp.parallel(comprimeJS))
}