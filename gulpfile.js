var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true,
    headers: {
        allow: 'GET, HEAD, POST, OPTIONS'
    }
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html', './less/*.less'], ['html', 'less']);
});

gulp.task('default', ['connect', 'less', 'watch']);