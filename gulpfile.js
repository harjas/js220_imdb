var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*.js')
        //.pipe(browserify())
        .pipe(uglify({mangle:false}))
        .pipe(gulp.dest('dist/js'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], reload);
gulp.task('html-css-watch', reload);

// use default task to launch Browsersync and watch JS files
gulp.task('server', ['js'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./",
            logLevel: "debug",
            logFileChanges: true
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/*.js", ['js-watch']);
    gulp.watch(["templates/*.html", "css/*.css"]).on("change", reload);
});
