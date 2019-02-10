//task that builds the index.html page

let { paths } = require('./settings');

let fs = require('fs');

let e = module.exports;

e.createIndexHtmlFile = function (cb) {


    let create = fs.createWriteStream(`${paths.publish.path}/index.html`);
    
    create.write(
`<head>
    <meta name="viewport" content="width=device-width">

    <script src="${paths.publish.scripts.rel()}/vendors.js"></script>

    <link href="${paths.publish.styles.rel()}/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="${paths.publish.styles.rel()}/styles.min.css" rel="stylesheet" />
</head>

<body>    
    <div id="app">
    </div>
</body>

<footer>
    <script src="${paths.publish.scripts.rel()}/bundle.js"></script>
</footer>`
    );

    create.close();

    return cb();
};