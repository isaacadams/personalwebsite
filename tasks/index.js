//task that builds the index.html page

let { paths } = require('./settings');

let fs = require('fs');

let e = module.exports;

e.createIndexHtmlFile = function (cb) {


    let create = fs.createWriteStream(`${paths.publish.path}/index.html`);
    let node_modules = '../node_modules';

    create.write(
`<head>
    <meta id="view" name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" /> 

    <!-- <link href="${paths.publish.styles.rel()}/styles.min.css" rel="stylesheet" /> -->
    <link href="${node_modules}/bootstrap/dist/css/bootstrap.css" type="text/css" rel="stylesheet" />
    <script src="${node_modules}/bootstrap/dist/js/bootstrap.bundle.js"></script>
</head>

<body>    
    <div id="app">
    </div>
</body>

<footer>
    <script src="index.tsx"></script>
</footer>`
    );

    create.close();

    return cb();
};