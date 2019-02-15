import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';

import { errorHandler } from '../helpers';

const $ = gulpLoadPlugins({
  pattern: ['browser-sync', 'gulp-*', 'vinyl-ftp'],
});


class Upload {

    /**
     * Lint your script
     * @returns {*}
     */
    static run() {
      let conn = $.vinylFtp.create(config.ftp.conf);
      let stream = gulp.src(config.ftp.files, config.ftp.sream)
      .pipe(conn.dest(config.ftp.pathToServer));

      return stream.pipe($.browserSync.stream());
  }
}

export default Upload;
