"use strict";

// Include gulp
var gulp = require('gulp');

// Include plugins
var jshint      = require('gulp-jshint');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var mocha       = require('gulp-mocha');
var source      = require('vinyl-source-stream'); // makes browserify bundle compatible with gulp
var streamify   = require('gulp-streamify');
var browserify  = require('browserify');
var livereload  = require('gulp-livereload');

// CSS
gulp.task('styles', function () {
    gulp.src('assets/css/app.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(rename("all.css"))
        .pipe(gulp.dest('public/'))
        .pipe(livereload());
});

// Lint JS
gulp.task('lint-app', function() {
    return gulp.src('assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('lint', ['lint-app']);

// Concatenate, Browserify & Minify JS
gulp.task('scripts', function() {
    return browserify('./assets/js/app.js').bundle()
        .pipe(source('all.min.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./public/'))

        // livereload needs to fire when scripts task is fully finished
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function () {
    var server = livereload();

    gulp.watch(['assets/**/*', 'index.html'],
        function(event) {
            return gulp.src(event.path).pipe(livereload());
        }
    );

    gulp.watch('assets/css/*.scss', ['styles']);

    gulp.watch('assets/js/*.js', ['lint', 'scripts']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'styles', 'watch']);
