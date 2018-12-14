"use strict";

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    merge = require('merge-stream'),
    fs = require("fs"),
    browserify = require("browserify"),
    tsify = require("tsify"),
    vueify = require('vueify'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer');

function css() {

    var lessFiles = gulp.src('./src/**/*.less')
        .pipe(less());

    return merge(lessFiles)
        .pipe(concat('styles.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('./dir'));
}

gulp.task('build', gulp.series(css, bundle));
gulp.task('css', css);

let app = {
    //entry extension can be .jsx, .js, .ts, or .tsx
    entry: './src/index.ts',
    publish_filename: 'bundle.js',
    publish_directory: './dir',
    tsconfig: './tsconfig.json'
};

function bundle() {

    let b = browserify({
        entries: [app.entry]
    });

    b.plugin(tsify, getJsonFile(app.tsconfig).compilerOptions);
    b.transform(vueify);
    b.transform(babelify,
        {
            presets: ['env', 'es2015', 'react']
        });

    console.log('Building...');
    return b.bundle()
        .pipe(source(app.publish_filename))
        .pipe(buffer())
        .pipe(gulp.dest(app.publish_directory));
}

function getJsonFile(path) {
    return JSON.parse(fs.readFileSync(path));
}