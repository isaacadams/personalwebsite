let e = module.exports;

let source = 'src',
    publish = 'dist',
    publish_generated = publish + '/generated',
    publish_js = publish_generated + '/js',
    publish_styles = publish_generated + '/styles',
    publish_data = publish_generated + '/data';


e.paths = {
    source: source,
    publish: {
        path: publish,
        generated: publish_generated,
        scripts: publish_js,
        styles: publish_styles,
        data: publish_data,
        images: publish + '/assets/imgs'
    }
};