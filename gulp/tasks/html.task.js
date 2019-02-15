import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';
import { errorHandler } from '../helpers';

const $ = gulpLoadPlugins({
  pattern: ['browser-sync', 'gulp-*'],
});

/**
 * HTML task
 * @class Html
 */
class Html {

    /**
     * Build your template
     * @returns {*}
     */
    static build() {
        return gulp.src(path.all.html)
                .pipe($.plumber(config.plumber))
                .pipe($.swig(config.swig).on('error', errorHandler))
                .pipe($.htmlBeautify())
                .pipe(gulp.dest(path.dest.html))
                .pipe($.browserSync.stream())
    }
}

export default Html;
