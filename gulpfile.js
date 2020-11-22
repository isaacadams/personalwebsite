'use strict';

var gulp = require('gulp'),
  grimraf = require('gulp-rimraf'),
  globby = require('globby'),
  rimraf = require('rimraf');

let {paths} = require('./tasks/settings');

Array.prototype.contains = function (item) {
  return this.indexOf(item) > -1;
};

let data = require('./tasks/data');
gulp.task('data.home', data.home);
gulp.task('data.fails', data.fails);
gulp.task('data.pictures', data.pictures);

gulp.task('data', gulp.series('data.home', 'data.fails', 'data.pictures'));

gulp.task('clean', function () {
  return gulp
    .src(paths.publish.generated, {allowEmpty: true})
    .on('error', function (err) {
      console.log('clean ERROR\n' + err);
    })
    .on('end', function () {
      console.log('clean: COMPLETE');
    })
    .pipe(grimraf());
});

function cleanDist(cb) {
  return globby(['dist/*', '!dist/assets/imgs/*']).then(function then(paths) {
    paths.map(function map(item) {
      rimraf.sync(item);
    });
  });
}

module.exports = {
  app: gulp.series('clean', 'data'),
  cleanDist,
};
