<<<<<<< HEAD
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
 
gulp.task('compress', function() {
  return gulp.src('jquery.final-countdown.js')  	
    .pipe(uglify())
    .pipe(rename('jquery.final-countdown.min.js'))
    .pipe(gulp.dest('.'));
=======
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
 
gulp.task('compress', function() {
  return gulp.src('jquery.final-countdown.js')  	
    .pipe(uglify())
    .pipe(rename('jquery.final-countdown.min.js'))
    .pipe(gulp.dest('.'));
>>>>>>> 54e1d349ba4af9ed10151700250c142b50dbb767
});