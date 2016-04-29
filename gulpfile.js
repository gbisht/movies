var gulp, util, webpack;

gulp = require('gulp');
util = require('gulp-util');
webpack = require('gulp-webpack');

gulp.task('default', ['compile-js']);

gulp.task('compile-js', function(){
  return gulp.src('app/assets/javascripts/index.js')
    .pipe(webpack(require('./config/webpack.config.js')))
    .pipe(gulp.dest('app/assets/javascripts/'))

});

gulp.task('watch', ['watch-js']);

gulp.task('watch-js', function(){
  gulp.watch(['app/assets/javascripts/**/*.js',
    '!app/assets/javascripts/bundle.js',
    'app/assets/javascripts/**/*.jsx'], ['compile-js']);
});