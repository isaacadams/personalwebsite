//task that builds the index.html page

let { paths } = require('./settings');

let fs = require('fs');

let e = module.exports;

e.createIndexHtmlFile = function (cb) {

    let create = fs.createWriteStream(`${paths.source}/index.html`);
    let node_modules = '../node_modules';

    create.write(
`<!DOCTYPE html>
<html>
    <head>
        <meta id="view" name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"> 
    </head>

    <body>    
        <div id="app"></div>
    </body>

    <footer>
        <script src="index.tsx"></script>
    </footer>
</html>`
    );

    create.close();

    return cb();
};