import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';

const $ = gulpLoadPlugins({
  pattern: ['browser-sync', 'gulp-*', 'vinyl-ftp'],
});

/**
 * Fonts task
 * @class Fonts
 */
class Fonts {

    /**
     * Build your fonts
     * @returns {*}
     */
    static build() {
        return gulp.src(path.all.fonts)
            .pipe($.newer(path.dest.fonts))
            .pipe($.plumber(config.plumber))
            .pipe(gulp.dest(path.dest.fonts))
            .pipe($.if(config.build.type == "remote", $.vinylFtp.create(config.ftp.conf).dest(path.dest.fonts)))
            .pipe($.if(config.build.type == "local", gulp.dest(path.dest.fonts)))
            .pipe($.browserSync.stream());
    }
}

export default Fonts;
