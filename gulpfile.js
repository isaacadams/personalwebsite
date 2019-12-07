"use strict";

var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    fs = require("fs"),
    browserify = require("browserify"),
    tsify = require("tsify"),
    babelify = require('babelify'),
    b_minify = require('minifyify'),
    b_uglify = require('uglifyify'),
    less = require('gulp-less'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    webvendor = require('@isaacadams/webvendor');

let { getJsonFile, createFile } = require('@isaacadams/nodejs-utils');
let { paths } = require('./tasks/settings');

Array.prototype.contains = function (item) {
    return this.indexOf(item) > -1;
};

gulp.task('vendors', function(cb) {
    let opts = {
        html: "index.html",
        output: "dist/generated/styles"
    }

    webvendor(opts)
        .addBootstrap()
        .addFontAwesome()
        .deploy();

    return cb();
});

let { createIndexHtmlFile } = require('./tasks/index');
gulp.task('createIndexHtmlFile', createIndexHtmlFile);

let data = require('./tasks/data');
gulp.task('data.home', data.home);
gulp.task('data.fails', data.fails);
gulp.task('data.projects', data.projects);
gulp.task('data.pictures', data.pictures);

gulp.task('data', gulp.series('data.home', 'data.fails', 'data.projects', 'data.pictures'));

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
        .pipe(minify())
        .pipe(gulp.dest(output));
});

let app = {
    //entry extension can be .jsx, .js, .ts, or .tsx
    entry: paths.source + '/index.tsx',
    publish: paths.publish.scripts + '/bundle.js',
    tsconfig: './tsconfig.json'
};

gulp.task('build', function () {

    let gameofwar = require('gameofwar');
    gameofwar.CreateApp('dist/generated/js');

    let b = browserify({
        entries: [app.entry]
    });

    b.plugin(tsify, getJsonFile(app.tsconfig).compilerOptions);
    b.transform(babelify, {
        presets: ['env', 'react']
    });

    b.plugin(b_uglify);
    b.plugin(b_minify, { map: false });
    
    return b.bundle()
        .pipe(createFile(app.publish));
});



gulp.task('app', gulp.series('clean', 'css', 'data', 'createIndexHtmlFile', 'vendors', 'build'));

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.{js,jsx,ts,tsx}'], gulp.parallel('build'));
    gulp.watch(['./src/**/*.{css,less}'], gulp.parallel('css'));
});