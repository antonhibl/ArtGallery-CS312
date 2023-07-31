const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('minify-js', function() {
  return gulp.src('src/js/*.js') // Adjust the path to match your JavaScript files
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('dist/js')); // Adjust the destination path if needed
});

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', gulp.series('minify-js'));
});

gulp.task('default', gulp.series('minify-js'));

