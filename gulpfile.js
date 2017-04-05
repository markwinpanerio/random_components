var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
          baseDir: './public'
        },
    })
})

gulp.task('default', ['browserSync', 'sass'], function(){
    gulp.watch('./src/sass/**/*.scss', ['sass'])
    gulp.watch('./src/*.html', browserSync.reload)
    gulp.watch('./src/js/**/*.js', browserSync.reload)
});
