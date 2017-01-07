var gulp = require('gulp');

//import uglify
var uglify = require('gulp-uglify');

//import css min
var cssmin = require('gulp-cssmin');

//unused css
var uncss = require('gulp-uncss');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

//default task
gulp.task('default', ['minjs', 'mincss']);

//minjs
gulp.task('minjs', function() {
	gulp.src('../app/src/main/webapp/theme/**/*.js')
	.pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../docker/volumes/nginx/html/static/dist/js'));
});

//css min task
gulp.task('mincss', function () {
    gulp.src('../app/src/main/webapp/**/*.css')
        .pipe(concat('style.css'))
    	.pipe(gulp.dest('dist/css'))
    	.pipe(rename('style.min.css'))
    	.pipe(cssmin())
        .pipe(gulp.dest('../docker/volumes/nginx/html/static/dist/css'));
});

gulp.task('cleancss', function () {
    return gulp.src('../app/src/main/webapp/**/*.css')
        .pipe(uncss())
        .pipe(gulp.dest('dist/css'));
});
