const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
    
gulp.task('sass', ()=>
    gulp.src('./pages/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./styles'))
);