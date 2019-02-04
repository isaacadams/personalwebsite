let e = module.exports;

class pathBuilder {
    
    constructor(source, publish) {

        let publish_generated = `${publish}/generated`;

        this.source = source;
        this.publish = {
            path: publish,
            generated: publish_generated,
            scripts: `${publish_generated}/js`,
            styles: `${publish_generated}/styles`,
            data: `${publish_generated}/data`,
            images: `${publish}/assets/imgs`
        };

        String.prototype.rel = function () {
            return this.replace(appPaths.publish.path, '');
        };
    }
}

let appPaths = new pathBuilder('src', 'dist');

e.paths = {
    source: appPaths.source,
    publish: appPaths.publish
};