import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';

import { errorHandler } from '../helpers';

const $ = gulpLoadPlugins({
  pattern: ['browser-sync', 'gulp-*', 'vinyl-ftp'],
});

/**
 * Javascript task
 * @class Js
 */
class Js {

    /**
     * Lint your script
     * @returns {*}
     */
    static lint() {
        return gulp.src(path.all.js)
            .pipe($.jshint(config.jshint))
            .pipe($.jshint.reporter('jshint-stylish'))
            .pipe($.browserSync.stream());
    }

    /**
     * Bundle your script
     * @returns {*}
     */
     /*
    static build() {
        return gulp.src(path.entries.js)
            .pipe($.plumber(config.plumber))
            .pipe($.rollup(config.rollup))
            .on('error', errorHandler)
            .pipe($.uglify(config.uglify))
            .pipe($.sourcemaps.write('./', config.sourceMap.write))
            .pipe($.if(config.build.type == "remote", $.vinylFtp.create(config.ftp.conf).dest(path.dest.js)))
            .pipe($.if(config.build.type == "local", gulp.dest(path.dest.js)));
    }
    */

    static build() {
      return gulp.src(path.all.js)
          //.pipe($.plumber(config.plumber))
          .pipe($.concat('app.js'))
          .on('error', errorHandler)
        //  .pipe($.uglify(config.uglify))
          .pipe($.if(config.build.type == "remote", $.vinylFtp.create(config.ftp.conf).dest(path.dest.js)))
          .pipe($.if(config.build.type == "local", gulp.dest(path.dest.js)));
    }

    /**
     * Bundle your vendor scripts
     * @returns {*}
     */
    static vendor() {
        return gulp.src(path.vendor.js)
            .pipe($.plumber(config.plumber))
            .pipe($.concat('vendor.js'))
            .on('error', errorHandler)
            .pipe($.uglify(config.uglify))
            .pipe($.if(config.build.type == "remote", $.vinylFtp.create(config.ftp.conf).dest(path.dest.js)))
            .pipe($.if(config.build.type == "local", gulp.dest(path.dest.js)));
    }
}

export default Js;
