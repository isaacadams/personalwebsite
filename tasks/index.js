//task that builds the index.html page

let { paths } = require('./settings');

let fs = require('fs');

let e = module.exports;

e.createIndexHtmlFile = function (cb) {


    let create = fs.createWriteStream(`${paths.publish.path}/index.html`);
    
    create.write(
`<head>
    <meta name="viewport" content="width=device-width">

    <link href="${paths.publish.styles.rel()}/styles.min.css" rel="stylesheet" />
    <link type="text/css" rel="stylesheet" href="${paths.publish.styles.rel()}/bootstrap/bootstrap.min.css" />
    <script src="${paths.publish.styles.rel()}/bootstrap/bootstrap.bundle.min.js"></script>
    <link type="text/css" rel="stylesheet" href="${paths.publish.styles.rel()}/font-awesome/fonts/font-awesome.min.css" />
</head>

<body>    
    <div id="app">
    </div>
</body>

<footer>
    <script src="${paths.publish.scripts.rel()}/bundle.js"></script>
    <script src="${paths.publish.scripts.rel()}/gameofwar/index.js" type="text/js"></script>
</footer>`
    );

    create.close();

    return cb();
};