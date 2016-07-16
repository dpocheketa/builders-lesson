var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var path = [
      './src/css/reset.css',
      './src/css/style.css',
      './src/css/mobile.css'
    ];


gulp.task('cssConcat', function(){
  return gulp.src(path)
    .pipe(concat('main.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('jsConcat', function(){
  return gulp.src([
      './src/js/slider.js',
      './src/js/script.js'
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('build', ['jsConcat', 'cssConcat']);
gulp.task('build-dev', function(){

  path = './dev-build/';

}, ['jsConcat', 'cssConcat']);

gulp.task('watch', function(){
  gulp.watch('./src/css/*.css', ['cssConcat']);
  gulp.watch('./src/js/*.js', ['jsConcat']);
});

gulp.task('default', ['build', 'watch']);

