import { errorHandler } from './helpers';
import babel from 'rollup-plugin-babel';
import path from './path';

 var crypto = require('crypto');
 var hash = crypto.createHash('md5').update(new Date().toISOString()).digest('hex');
/**
 * Plugins settings
 */
export default {

    // https://www.npmjs.com/package/rollup
    rollup: {
        format: 'es6',
        sourceMap: true,
        onwarn: (error) => {
            throw new Error(error);
        },
        plugins: [
            // https://github.com/rollup/rollup-plugin-babel
            babel({
                presets: ['es2015-rollup'],
                babelrc: false,
                exclude: 'node_modules/**'
            })
        ]
    },

    //  https://www.npmjs.com/package/gulp-sass
    sass: {},
    sprite:{
      imgName: 'sprite.png',
      imgPath:path.dest.spriteCss+'?hash='+hash,
      cssName: '_sprite.scss',
      cssTemplate: 'src/style/helpers/_sprite_template.handlebars',
      //retinaSrcFilter: ['src/sprites/*@2x.png'],
      //retinaImgName: 'sprite@2x.png',
      cssOpts: {
        cssSelector: function (item) {
          if (item.name.indexOf('-hover') !== -1) {
            return '.icon-' + item.name.replace('-hover', ':hover');
          } else {
            return '.icon-' + item.name;
          }
        }
      }
    },
    //  https://www.npmjs.com/package/gulp-autoprefixer
    autoprefixer: { browsers: ['last 2 versions'] },

    //  https://www.npmjs.com/package/gulp-minify-css
    minifyCss: {},

    //  https://www.npmjs.com/package/gulp-sourcemaps
    sourceMap: {
        init: {
            loadMaps: true
        },
        write: {}
    },

    // https://www.npmjs.com/package/gulp-jshint
    jshint: { esnext: true },

    // https://www.npmjs.com/package/gulp-uglify
    uglify: {},

    // https://www.npmjs.com/package/gulp-jade
    jade: {},

    // https://www.npmjs.com/package/gulp-imagemin
    imagemin: {},

    //  https://www.npmjs.com/package/gulp-plumber
    plumber: { errorHandler: errorHandler },
    swig:{
      load_json: true,
      json_path: 'src/templates/data/',
      defaults: {
        cache: false
      }
    },
    //https://www.npmjs.com/package/browser-sync
    browserSync:{
      tunnel: false,
      host: 'dev-frontend2',
      logPrefix: "Frontend_Devil",
      proxy: 'dev-frontend2',
      port: 9000,
      browser: "firefox"
    },
    build:{
      "type": "local" //local | remote
    },
    ftp:{
      "conf": {
    		"host": "rem.local",
    		"user": "root",
    		"password": "root",
    		"parallel": "10"
  	},
    "stream":{
        base: 'dist',
        buffer: true
    },
  	"files": [
  		"dist/**/*.*"
  	  ]
    },
    "grid":{
       outputStyle: 'scss', /* less || scss || sass || styl */
       columns: 12, /* number of grid columns */
       offset: "30px", /* gutter width px || % */
       container: {
           maxWidth: '1200px', /* max-width оn very large screen */
           fields: '30px' /* side fields */
       },
       breakPoints: {
           lg: {
               'width': '1100px', /* -> @media (max-width: 1100px) */
               'fields': '30px' /* side fields */
           },
           md: {
               'width': '960px',
               'fields': '15px'
           },
           sm: {
               'width': '780px',
               'fields': '15px'
           },
           xs: {
               'width': '560px',
               'fields': '15px'
           }
           /*
           We can create any quantity of break points.

           some_name: {
               some_width: 'Npx',
               some_offset: 'N(px|%)'
           }
           */
       }
    }
}
