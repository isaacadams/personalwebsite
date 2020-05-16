let fs = require('fs');
let { ensureDirectoriesExist } = require('@isaacadams/nodejs-utils');
let { paths } = require('./settings');

let imgsFolder = paths.publish.images;
let dataFolder = paths.publish.data;

function createFileObject(name) {
    return {
        path: dataFolder + '/' + name,
        data: []
    };
}

let e = module.exports;

e.pictures = function (cb) {
    let file = createFileObject('gallery.json');
    let main_pictures_folder = '/gallery';
    let local_gallery = imgsFolder + main_pictures_folder;
    let http_gallery = imgsFolder.rel() + main_pictures_folder;

    fs.readdirSync(local_gallery).forEach(filename => {
        file.data.push(http_gallery + '/' + filename);
    });

    return write(file, cb);
};

e.home = function (cb) {
    let file = createFileObject('home.json');

    function createBlock(title, message) {
        return {
            title: title,
            message: message
        };
    }

    file.data = [
        createBlock('Who?', "Isaac Adams is a human being 🤖 who has been programmed to... oops, umm *sniff*, eh hem ... he has a NATURAL affinity for computers and somehow manages to understand them at a deeper level."),
        createBlock('Work.', "💻 He currently works at eMoney Advisor as a software engineer doing full stack development using .NET core, SQL, and react."),
        createBlock('Fun.', "He codes for fun, duh. What else would he spend his time doing? 🕹️👨‍👩‍👧‍👦"),
        createBlock('Weird.', "☕🍵 Everyday he consumes 1-3 cups of coffee, 1-3 cups of tea, and 40-80 ozs of water. He spends most of the day in the bathroom. 😬"),
    ];

    return write(file, cb);
};

e.fails = function (cb) {
    let file = createFileObject('fails.json');

    function create(date, message) {
        return {
            date: date,
            message: message
        };
    }

    file.data = [
        create('11/16/2019', 'failed to do something lorem epsum lroasn knsndk askndknen askjndje gpbinb js djndfnds l nsjndf asjnfjas'),
        create('11/16/2019', 'failed to do something lorem epsum lroasn knsndk askndknen askjndje gpbinb js djndfnds l nsjndf asjnfjas'),
        create('11/16/2019', 'failed to do something lorem epsum lroasn knsndk askndknen askjndje gpbinb js djndfnds l nsjndf asjnfjas'),
        create('11/16/2019', 'failed to do something lorem epsum lroasn knsndk askndknen askjndje gpbinb js djndfnds l nsjndf asjnfjas')
    ];

    return write(file, cb);
};

function write(file, cb) {
    ensureDirectoriesExist(file.path);
    return fs.writeFile(file.path, JSON.stringify(file.data), 'utf8', cb);
}