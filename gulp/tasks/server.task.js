import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';

import { errorHandler } from '../helpers';

const $ = gulpLoadPlugins({
  pattern: ['browser-sync', 'gulp-*', 'vinyl-ftp'],
});


class Server {

    /**
     * Lint your script
     * @returns {*}
     */
    static run() {
        return $.browserSync.init(config.browserSync);
    }

}

export default Server;
