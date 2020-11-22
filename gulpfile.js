"use strict";

var gulp = require('gulp'),
    rimraf = require('gulp-rimraf');

let { paths } = require('./tasks/settings');

Array.prototype.contains = function (item) {
    return this.indexOf(item) > -1;
};

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

gulp.task('app', gulp.series('clean', 'data'));
