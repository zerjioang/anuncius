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
	gulp.src('../app/src/main/webapp/theme/js/**/*.js')
	.pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(rename('vendor.min.js'))
        .pipe(gulp.dest('../docker/volumes/nginx/html/static/dist/app/js'));
});

//css min task
gulp.task('mincss', function () {
    gulp
	.src('../app/src/main/webapp/theme/css/**/*.css')
        .pipe(concat('style.css'))
    	.pipe(cssmin())
    	.pipe(rename('style.min.css'))
        .pipe(gulp.dest('../docker/volumes/nginx/html/static/dist/app/css'));
});

gulp.task('cleancss', function () {
    return gulp.src('../app/src/main/webapp/**/*.css')
        .pipe(uncss())
        .pipe(gulp.dest('dist/css'));
});
