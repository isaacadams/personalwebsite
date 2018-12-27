"use strict";

var gulp = require('gulp'),
    fs = require("fs"),
    browserify = require("browserify"),
    tsify = require("tsify"),
    babelify = require('babelify'),
    b_minify = require('minifyify'),
    b_uglify = require('uglifyify'),
    less = require('gulp-less'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css');

let { getJsonFile, ensureDirectoriesExist, createFile, bundler } = require('./tasks/utility');
let settings = require('./tasks/settings');

Array.prototype.contains = function (item) {
    return this.indexOf(item) > -1;
};

let vendors = require('./tasks/vendors');
gulp.task('vendors.clean', vendors.clean);
gulp.task('vendors.get', vendors.get);
gulp.task('vendors.bundle', vendors.bundle);
gulp.task('vendors', gulp.series('vendors.clean', 'vendors.get', 'vendors.bundle'));


let data = require('./tasks/data');
gulp.task('data.home', data.home);
gulp.task('data.projects', data.projects);
gulp.task('data.pictures', data.pictures);
gulp.task('data', gulp.series('data.home', 'data.projects', 'data.pictures'));


function css() {
    let styles = settings.paths.source + '/styles';
    let output = settings.paths.publish + '/assets/styles';
    var lessFiles = gulp.src(styles + '/style.less')
        .pipe(less());
    
    let testLess = gulp.src(styles + '/test.less')
        .pipe(less());

    merge(testLess)
        .pipe(concat('test.css'))
        .pipe(gulp.dest(output));

    return merge(lessFiles)
        .pipe(concat('styles.min.css'))
        .pipe(minify())
        .pipe(gulp.dest(output));
}

//gulp.task('build', gulp.series(css, bundle));
gulp.task('css', css);

let app = {
    //entry extension can be .jsx, .js, .ts, or .tsx
    entry: settings.paths.source + '/index.tsx',
    publish: settings.paths.publish + '/assets/js/bundle.js',
    tsconfig: './tsconfig.json'
};

gulp.task('build', function () {

    let b = browserify({
        entries: [app.entry]
    });

    b.plugin(tsify, getJsonFile(app.tsconfig).compilerOptions);
    b.transform(babelify,
        {
            presets: ['env', 'react']
        }
    );
    b.plugin(b_uglify);
    b.plugin(b_minify, { map: false });
    
    return bundler(b, app.publish);
});



gulp.task('app', gulp.series('css', 'data', 'vendors', 'build'));

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.{js,jsx,ts,tsx}'], gulp.parallel('build'));
    gulp.watch(['./src/**/*.{css,less}'], gulp.parallel('css'));
    //gulp.watch(['./dist/assets/imgs/**/*.{.jpg,.png,.jpeg}'], gulp.parallel('data'));
});