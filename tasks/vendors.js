let gulp = require('gulp'),
    merge = require('merge-stream'),
    browserify = require("browserify"),
    babelify = require('babelify'),
    rimraf = require('gulp-rimraf'),
    lessify = require('lessify'),
    cssify = require('cssify'),
    b_minify = require('minifyify'),
    b_uglify = require('uglifyify');

let { bundler } = require('./utility');

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

module.exports.clean = function () {

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
};

module.exports.get = function () {
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
};

module.exports.bundle = function () {
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
    b.plugin(b_minify, { map: false });

    return bundler(b, './dist/assets/js/vendors.js');
};


/* End of vendor section */