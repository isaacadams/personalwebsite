let gulp = require('gulp'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');

let { paths } = require('./settings');

/* Creating frontend dependencies/vendors for website */

module.exports.vendors = function () {
    
    let streams = [];
        
    //move font-awesome to dist folder
    streams.push(
        gulp.src(['node_modules/font-awesome/{fonts,css}/*'])
            .pipe(gulp.dest(paths.publish.styles + '/font-awesome'))
    );

    //collect and concat the scripts together
    streams.push(
        gulp.src(['node_modules/{jquery,popper.js,jquery-validation-unobtrusive,jquery-unobtrusive,jquery-ajax-unobtrusive}/dist/*.js','!**/*.{min,slim}.js'])
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(concat('vendors.js'))
            .pipe(gulp.dest(paths.publish.scripts))
    );
    
    return merge(streams);
};

/* End of vendor section */