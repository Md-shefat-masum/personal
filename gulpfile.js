 var gulp = require("gulp");
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});



gulp.task('browser-sync', ["sass"], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ["browser-sync"], function () {
  gulp.watch('assets/sass/*.scss', ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});
