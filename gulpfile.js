"use strict";

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    merge = require('merge-stream'),
    fs = require("fs"),
    browserify = require("browserify"),
    tsify = require("tsify"),
    babelify = require('babelify'),
    path = require('path'),
    rimraf = require('rimraf');

function css() {

    var lessFiles = gulp.src('./src/**/*.less')
        .pipe(less());

    return merge(lessFiles)
        .pipe(concat('styles.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
}

//gulp.task('build', gulp.series(css, bundle));
gulp.task('css', css);

let app = {
    //entry extension can be .jsx, .js, .ts, or .tsx
    entry: './src/index.tsx',
    publish: './dist/bundle.js',
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

    console.log('Building...');
    return b.bundle()
        .pipe(createFile(app.publish));
});

function getJsonFile(path) {
    return JSON.parse(fs.readFileSync(path));
}

function createFile(pathToFile) {
    //If directory exists, if not, then create it before publishing
    let dir = path.dirname(pathToFile);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    return fs.createWriteStream(pathToFile);
}

/* Creating frontend dependencies/vendors for website */

//Just a quicker and consistent way to organize and create package objects
function CreatePack(name, glob) {
    let self = {
        name: name,
        glob: glob
    };
    return self;
}

//List of dependencies that we want to reference in the frontend
let dependencies = [
    CreatePack('bootstrap', '**/*'),
    CreatePack('jquery', 'dist/*'),
    CreatePack('popper.js', 'dist/umd/*'),
    CreatePack('font-awesome', '**/*'),
    CreatePack('jquery-ajax-unobtrusive', 'dist/*'),
    CreatePack('jquery-validation', 'dist/*'),
    CreatePack('jquery-validation-unobtrusive', 'dist/*')
];

//path to the folder we want to put all the dependencies in
let vendorFolder = 'dist/assets/vendor/';

gulp.task("vendor.clean", function (cb) {
    return rimraf(vendorFolder, cb);
});

gulp.task("vendor.files", function () {

    var streams = [];

    for (let i = 0; i < dependencies.length; i++) {
        let pack = dependencies[i];

        console.log("Prepping Scripts for: " + pack.name);
        streams.push(
            gulp.src("node_modules/" + pack.name + "/" + pack.glob)
                .pipe(gulp.dest(vendorFolder + pack.name + "/"))
        );
    }

    return merge(streams);
});

gulp.task('vendor', gulp.series('vendor.clean', 'vendor.files'));

/* End of vendor section */

gulp.task('app', gulp.series('css', 'vendor', 'build'));


gulp.task('watch', function () {
    gulp.watch(['./src/**/*.{js,jsx,ts,tsx}'], gulp.parallel('build'));
    gulp.watch(['./src/**/*.{css,less}'], gulp.parallel('css'));
})