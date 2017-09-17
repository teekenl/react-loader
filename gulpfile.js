const gulp = require('gulp');
const eslint = require('gulp-eslint');


// Watch, task, default, src

gulp.task('lint', function() {
  return gulp.src('client/src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('build',function(){
  // return build command here.
});

gulp.task('deploy', function(){
  // return deploy command here.
});

