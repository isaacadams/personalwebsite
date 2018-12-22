"use strict";

var gulp = require('gulp'),
    fs = require("fs"),
    browserify = require("browserify"),
    tsify = require("tsify"),
    babelify = require('babelify'),
    b_minify = require('minifyify'),
    b_uglify = require('uglifyify');

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
gulp.task('data.pictures', data.pictures);
gulp.task('data.home', data.home);
gulp.task('data', gulp.series('data.pictures', 'data.home'));


//function css() {

//    var lessFiles = gulp.src('./src/**/*.less')
//        .pipe(less());

//    return merge(lessFiles)
//        .pipe(concat('styles.min.css'))
//        .pipe(minify())
//        .pipe(gulp.dest('./dist'));
//}

////gulp.task('build', gulp.series(css, bundle));
//gulp.task('css', css);

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



gulp.task('app', gulp.series('data', 'vendors', 'build'));

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.{js,jsx,ts,tsx}'], gulp.parallel('build'));
    gulp.watch(['./src/**/*.{css,less}'], gulp.parallel('vendors.bundle'));
    //gulp.watch(['./dist/assets/imgs/**/*.{.jpg,.png,.jpeg}'], gulp.parallel('data'));
});