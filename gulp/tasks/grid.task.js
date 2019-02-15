import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';
import { errorHandler } from '../helpers';

const $ = gulpLoadPlugins({
  pattern: ['smart-grid'],
});

/**
 * CSS task
 * @class Css
 */
class Grid {

    /**
     * Build your style
     * @returns {*}
     */
    static build() {
      $.smartGrid('./src/style/helpers/', config.grid);

    }
}

export default Grid;
