const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src('client/app/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});
