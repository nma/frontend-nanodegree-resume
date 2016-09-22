var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var cssbeautify = require('gulp-cssbeautify');
var jsbeautify = require('gulp-jsbeautify');

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

gulp.task('jsbeautify', function() {
  return gulp.src(['./js/*.js'])
    .pipe(jsbeautify())
    .pipe(gulp.dest('./js/'));
});

gulp.task('build', ['sass', 'cssbeautify', 'jsbeautify']);

gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch(['./js/*.js', './js/**/*.js']).on('change', browserSync.reload);
});
