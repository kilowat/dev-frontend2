import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';
import { errorHandler } from '../helpers';

const $ = gulpLoadPlugins({
  pattern: ['browser-sync', 'gulp-*', 'vinyl-ftp'],
});

/**
 * CSS task
 * @class Css
 */
class Css {

    /**
     * Build your style
     * @returns {*}
     */
    static build() {
        return gulp.src(path.entries.style)
            .pipe($.newer(path.dest.style))
            //.pipe($.plumber(config.plumber))
            //.pipe($.sourcemaps.init(config.sourceMap.init))
            .pipe($.sass(config.sass).on('error', errorHandler))
            //.pipe($.minifyCss(config.minifyCss))
            .pipe($.autoprefixer(config.autoprefixer))
            //.pipe($.sourcemaps.write('./', config.sourceMap.write))
            .pipe($.remember('style'))
            .pipe($.if(config.build.type == "remote", $.vinylFtp.create(config.ftp.conf).dest(path.dest.style)))
            .pipe($.if(config.build.type == "local", gulp.dest(path.dest.style)))
            .pipe($.browserSync.stream());
    }
}

export default Css;
