//task that builds the index.html page
let gulp = require('gulp'),
    merge = require('merge-stream'),
    browserify = require("browserify"),
    babelify = require('babelify'),
    rimraf = require('gulp-rimraf'),
    lessify = require('lessify'),
    cssify = require('cssify'),
    b_minify = require('minifyify'),
    b_uglify = require('uglifyify'),
    fs = require('fs'),
    path = require('path'),
    progress = require('progress-stream');

let { getJsonFile, ensureDirectoriesExist, createFile, bundler } = require('./tasks/utility');
let settings = require('./tasks/settings');



let e = module.exports;

e.createIndex = function () {


    document.createDocumentFragment();
    head = document.createElement('head');


};