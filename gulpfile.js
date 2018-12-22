"use strict";

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    cssminify = require('gulp-minify-css'),
    merge = require('merge-stream'),
    fs = require("fs"),
    browserify = require("browserify"),
    tsify = require("tsify"),
    babelify = require('babelify'),
    path = require('path'),
    rimraf = require('gulp-rimraf'),
    lessify = require('lessify'),
    cssify = require('cssify'),
    minify = require('gulp-minify'),
    uglify = require('gulp-uglify'),
    b_minify = require('minifyify'),
    b_uglify = require('uglifyify');

Array.prototype.contains = function (item) {
    return (this.indexOf(item) > -1);
};

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
    entry: './src/index.tsx',
    publish: {
        folder: './dist',
        bundle: '/assets/js/bundle.js'
    },
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

    return bundler(b, app.publish.folder + app.publish.bundle);
});

function getJsonFile(path) {
    return JSON.parse(fs.readFileSync(path));
}

function ensureDirectoriesExist(filePath) {
    //If directory exists, if not, then create it before publishing
    let dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

function createFile(pathToFile) {
    ensureDirectoriesExist(pathToFile);
    return fs.createWriteStream(pathToFile);
}

/* Creating frontend dependencies/vendors for website */

//Just a quicker and consistent way to organize and create package objects
function CreatePack(name, glob, destination = '') {
    let defaultDestination = 'src/vendors/';
    destination = destination === '' ? defaultDestination : destination;
    let self = {
        name: name,
        glob: glob,
        root: destination,
        destination: destination === defaultDestination ? defaultDestination + name : destination
    };
    return self;
}

//List of dependencies that we want to reference in the frontend
let dependencies = [
    CreatePack('bootstrap', '**/*'),
    CreatePack('jquery', 'dist/*'),
    CreatePack('popper.js', 'dist/umd/*'),
    CreatePack('font-awesome', '**/*'),
    CreatePack('font-awesome', 'fonts/*', 'dist/fonts'),
    CreatePack('jquery-ajax-unobtrusive', 'dist/*'),
    CreatePack('jquery-validation', 'dist/*'),
    CreatePack('jquery-validation-unobtrusive', 'dist/*')
];

gulp.task("vendors.clean", function () {

    let folders = [];
    let streams = [];
    
    dependencies.forEach((pack) => {
        let lookFor = pack.root;

        if (!folders.contains(lookFor)) {
            folders.push(lookFor);

            streams.push(
                gulp.src(lookFor, { allowEmpty: true })
                    //.pipe(console.log('Deleting ' + lookFor))
                    .on('end', function () { console.log('Deleting ' + lookFor); })
                    .pipe(rimraf())
            );
        }
            
    });

    return merge(streams);
});



gulp.task("vendors.get", function () {

    let streams = [];

    for (let i = 0; i < dependencies.length; i++) {
        let pack = dependencies[i];

        streams.push(
            gulp.src("node_modules/" + pack.name + "/" + pack.glob)
                //.pipe(console.log("Prepping Scripts for: " + pack.name))
                .on('end', function () { console.log("Prepping Scripts for: " + pack.name); })
                .pipe(gulp.dest(pack.destination))
        );
    }

    //merge(streams.deletion);
    return merge(streams);
});

gulp.task('vendors.bundle', function () {
    let b = browserify({
        entries: ['./src/vendors.js']
    });
        
    b.transform(lessify);
    b.transform(cssify);
    b.transform(babelify,
        {
            presets: ['env', 'react']
        }
    );
    b.plugin(b_uglify);
    b.plugin(b_minify, {map: false} );

    return bundler(b, './dist/assets/js/vendors.js');
});

function bundler(b, outputPath) {
    console.log('Building...');
    return b.bundle()
        .pipe(createFile(outputPath));
}

gulp.task('vendors', gulp.series('vendors.clean', 'vendors.get', 'vendors.bundle'));
/* End of vendor section */

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.{js,jsx,ts,tsx}'], gulp.parallel('build'));
    gulp.watch(['./src/**/*.{css,less}'], gulp.parallel('vendors.bundle'));
});


gulp.task('data', function (cb) {
    //const testFolder = './dist/assets/imgs/gallery';
    let gallery = {
        folder: '/assets/imgs/gallery',
        path: app.publish.folder + '/assets/data/gallery.json',
        data: []
    };
    
    fs.readdirSync(app.publish.folder + gallery.folder).forEach(file => {
        gallery.data.push(gallery.folder + '/' + file);
        //console.log(file);
    });

    ensureDirectoriesExist(gallery.path);
    return fs.writeFile(gallery.path, JSON.stringify(gallery.data), 'utf8', cb);
});

gulp.task('app', gulp.series('data', 'vendors', 'build'));