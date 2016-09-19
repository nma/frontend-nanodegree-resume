var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var cssbeautify = require('gulp-cssbeautify');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('cssbeautify', function() {
  return gulp.src(['./css/*.css', '!css/bootstrap*.css'])
    .pipe(cssbeautify())
    .pipe(gulp.dest('./css/'));
});

gulp.task('build', ['sass', 'cssbeautify']);

gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
});
