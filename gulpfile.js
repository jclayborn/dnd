var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('scripts', function () {
    'use strict';
    return gulp.src(['src/**/*.js', '!src/{assets/,/assets/**}'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('src/assets/bundles/'))
        .pipe(uglify());
});

gulp.task('styles', function () {
    'use strict';
    return gulp.src(['src/**/*.css', '!src/{assets/,/assets/**}'])
        .pipe(concat('cssBundle.css'))
        .pipe(gulp.dest('src/assets/bundles/'));
});

gulp.task('delete', function () {
    'use strict';
    return del(['src/assets/bundles/']);
});

gulp.task('main', ['scripts', 'styles']);
