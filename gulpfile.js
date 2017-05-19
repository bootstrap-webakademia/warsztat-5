var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var combineMq = require('gulp-combine-mq');
var rename = require('gulp-rename');
var images = require('gulp-imagemin');

gulp.task('scripts', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/foundation-sites/dist/js/foundation.min.js',
        'resources/scripts/app.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('images', function(){
    gulp.src('resources/images/*')
      .pipe(images())
      .pipe(gulp.dest('public/images'))
});

gulp.task('sass', function() {
    return gulp.src('resources/styles/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(combineMq())
    .pipe(cssmin())
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
    gulp.watch(['resources/styles/*.scss', 'resources/styles/*/*.scss'], ['sass']);
});
