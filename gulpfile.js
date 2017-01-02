/**
 * Created by Edouard CATTEZ on 02/01/2017.
 */

'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat       = require('gulp-concat');

// Config object
const CONFIG = {};

// Final files
CONFIG.DIST = {};
CONFIG.DIST.ROOT = './dist';
CONFIG.DIST.CSS = CONFIG.DIST.ROOT + '/css';

// Source files
CONFIG.SRC = {};
CONFIG.SRC.ROOT = './src';
CONFIG.SRC.SASS = CONFIG.SRC.ROOT + '/sass/**/*.scss';

gulp.task('sass', function() {
    return gulp.src(CONFIG.SRC.SASS)
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('smocking.min.css'))
        .pipe(gulp.dest(CONFIG.DIST.CSS));
});

gulp.task('default', ['sass'], function() {
    return gulp.watch(CONFIG.SRC.SASS, ['sass']);
});