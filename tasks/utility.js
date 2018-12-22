let fs = require('fs'),
    path = require('path');

let e = module.exports;

e.getJsonFile = function (path) {
    return JSON.parse(fs.readFileSync(path));
};

e.ensureDirectoriesExist = function (filePath) {
    //If directory exists, if not, then create it before publishing
    let dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};

e.createFile = (pathToFile) => {
    e.ensureDirectoriesExist(pathToFile);
    return fs.createWriteStream(pathToFile);
};

e.bundler = function (b, outputPath) {
    console.log('Building...');
    return b.bundle()
        .pipe(e.createFile(outputPath));
};

