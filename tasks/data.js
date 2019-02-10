let fs = require('fs');
let { getJsonFile, ensureDirectoriesExist, createFile, bundler } = require('@isaacadams/nodejs-utils');

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
        createBlock('who i am', "I am a web developer based in Malvern, PA. My passion is software development and helping create applications that solve practical problems."),
        createBlock('what i can do', "I create \"mobile first\" web sites and applications. I was previously hired to create a web application that collected health insurance information from an API. See other work I have done in my projects page."),
        createBlock('how i can help', "Need helping creating or fixing your website? Need a web or mobile application solution to your business problems? Send me a message and let's talk about how I can help meet your needs."),
    ];

    return write(file, cb);
};


e.projects = function (cb) {
    let file = createFileObject('projects.json');

    function createProject(title, description, image) {
        return {
            title: title,
            description: description,
            image: image
        };
    }

    file.data = [
        createProject('Game of War','A web based simulation of the classic card game of war','/assets/imgs/projects/not_found')
    ];

    return write(file, cb);
};

function write(file, cb) {
    ensureDirectoriesExist(file.path);
    return fs.writeFile(file.path, JSON.stringify(file.data), 'utf8', cb);
}


//let projects = [
//    'Created a web based simulation of the card game War! using react',
//    'Built an API that retrieves and stores healthcare information',
//    ''
//];