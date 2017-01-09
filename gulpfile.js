/**
 * Created by Edouard CATTEZ on 02/01/2017.
 */

'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat       = require('gulp-concat');
const minify       = require('gulp-minify');

// Config object
const CONFIG = {};

// Final files
CONFIG.DIST = {};
CONFIG.DIST.ROOT = './dist';
CONFIG.DIST.SASS = CONFIG.DIST.ROOT + '/css';
CONFIG.DIST.SCRIPT = CONFIG.DIST.ROOT + '/js';

// Source files
CONFIG.SRC = {};
CONFIG.SRC.ROOT = './src';
CONFIG.SRC.SASS = CONFIG.SRC.ROOT + '/sass/**/*.scss';
CONFIG.SRC.SCRIPT = CONFIG.SRC.ROOT + '/js/**/*.js';

gulp.task('sass', function() {
    return gulp.src(CONFIG.SRC.SASS)
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('smocking.min.css'))
        .pipe(gulp.dest(CONFIG.DIST.SASS));
});

gulp.task('scripts', function() {
    return gulp.src(CONFIG.SRC.SCRIPT)
        .pipe(concat('smocking.js'))
        .pipe(minify({
            noSource: true,
            ext:{
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest(CONFIG.DIST.SCRIPT));
});

gulp.task('default', ['sass', 'scripts'], function() {
    gulp.watch(CONFIG.SRC.SASS, ['sass']);
    gulp.watch(CONFIG.SRC.SCRIPT, ['sscripts'])
});