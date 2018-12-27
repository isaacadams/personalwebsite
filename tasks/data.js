let fs = require('fs');
let { getJsonFile, ensureDirectoriesExist, createFile, bundler } = require('./utility');

let publishFolder = require('./settings').paths.publish;

let e = module.exports;

e.pictures = function (cb) {
    let gallery = '/assets/imgs/gallery';

    let file = {
        path: publishFolder + '/assets/data/gallery.json',
        data: []
    };

    fs.readdirSync(publishFolder + gallery).forEach(filename => {
        file.data.push(gallery + '/' + filename);
        //console.log(file);
    });

    ensureDirectoriesExist(file.path);
    return fs.writeFile(file.path, JSON.stringify(file.data), 'utf8', cb);
};

e.home = function (cb) {
    let file = {
        path: publishFolder + '/assets/data/home.json',
        data: []
    };

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

    ensureDirectoriesExist(file.path);
    return fs.writeFile(file.path, JSON.stringify(file.data), 'utf8', cb);
};


//let projects = [
//    'Created a web based simulation of the card game War! using react',
//    'Built an API that retrieves and stores healthcare information',
//    ''
//];