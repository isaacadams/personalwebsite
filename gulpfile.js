"use strict";

var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    less = require('gulp-less'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css');

let { paths } = require('./tasks/settings');

Array.prototype.contains = function (item) {
    return this.indexOf(item) > -1;
};

let { createIndexHtmlFile } = require('./tasks/index');
gulp.task('createIndexHtmlFile', createIndexHtmlFile);

let data = require('./tasks/data');
gulp.task('data.home', data.home);
gulp.task('data.fails', data.fails);
gulp.task('data.pictures', data.pictures);

gulp.task('data', gulp.series('data.home', 'data.fails', 'data.pictures'));

gulp.task('clean', function () {
    return gulp.src(paths.publish.generated, { allowEmpty: true })
        .on('error', function (err) { console.log('clean ERROR\n' + err); })
        .on('end', function () { console.log('clean: COMPLETE'); })
        .pipe(rimraf());
});

gulp.task('css', function () {
    let styles = paths.source + '/styles';
    let output = paths.publish.styles;

    let streams = [];

    streams.push(
        gulp.src(styles + '/**/*.less').pipe(less())
    );

    streams.push(
        gulp.src('**/*/react-animation/dist/keyframes.css')
    );

    return merge(streams)
        .pipe(concat('styles.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(output));
});

gulp.task('app', gulp.series('clean', gulp.parallel('css', 'createIndexHtmlFile'), 'data'));

gulp.task('watch', function () {
    //gulp.watch(['./src/**/*.{js,jsx,ts,tsx}'], gulp.parallel('build'));
    gulp.watch(['./src/**/*.{css,less}'], gulp.parallel('css'));
});