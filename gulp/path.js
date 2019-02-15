/**
 * Project path
 */
let srcDir = 'src',
    //publicDir = '/public_html/local/templates/some_template_name/';
    publicDir = 'dist';

export default {
    entries: {
        style: [`./${ srcDir }/style/screen.scss`],
        js: [`./${ srcDir }/js/app.js`]
    },
    vendor: {
        js: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/lodash/lodash.js'
        ]
    },
    all: {
        html: `${ srcDir }/templates/pages/*.html`,
        template: `${ srcDir }/**/*.html`,
        js: `${ srcDir }/js/**/*.js`,
        style: `${ srcDir }/style/**/*.scss`,
        fonts: [`${ srcDir }/fonts/**/*.*`],
        images: `${ srcDir }/images/**/*.{gif,jpg,png,svg}`,
        sprite: `${ srcDir }/sprites/*.png`
    },
    dest: {
        js: `${ publicDir }/js`,
        style: `${ publicDir }/css`,
        html: `${ publicDir }/`,
        fonts: `${ publicDir }/fonts`,
        images: `${ publicDir }/images`,
        spriteSavePath: `${ publicDir }/images/sprite.png`,
        spriteCss: `/images/sprite.png`,
        spriteScss: `${ srcDir }/style/helpers/`,
    },
    publicDir: publicDir
}
