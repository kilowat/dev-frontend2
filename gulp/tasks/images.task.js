import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';

const $ = gulpLoadPlugins({
  pattern: ['browser-sync', 'gulp-*', 'vinyl-ftp'],
});


/**
 * Images task
 * @class Images
 */
class Images {

    /**
     * Build your images
     * @returns {*}
     */
    static build() {
        return gulp.src(path.all.images)
            .pipe($.plumber(config.plumber))
            .pipe($.imagemin(config.imagemin))
            .pipe($.remember('image'))
            .pipe($.if(config.build.type == "remote", $.vinylFtp.create(config.ftp.conf).dest(path.dest.images)))
            .pipe($.if(config.build.type == "local", gulp.dest(path.dest.images)))
            .pipe($.browserSync.stream());
    }
}

export default Images;
