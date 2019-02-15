import gulp from 'gulp';

import config from './gulp/config';
import path from './gulp/path';
import Css from './gulp/tasks/css.task';
import Js from './gulp/tasks/js.task';
import Html from './gulp/tasks/html.task';
import Fonts from './gulp/tasks/fonts.task';
import Images from './gulp/tasks/images.task';
import Sprite from './gulp/tasks/sprite.task';
import Clean from './gulp/tasks/clean.task';
import Server from './gulp/tasks/server.task';
import Upload from './gulp/tasks/upload.task';
import Grid from './gulp/tasks/grid.task';

gulp.task('js:build', Js.build);
gulp.task('js:vendor', Js.vendor);
gulp.task('style:build', Css.build);
gulp.task('html:build', Html.build);
gulp.task('fonts:build', Fonts.build);
gulp.task('images:build', Images.build);
gulp.task('sprite:build', Sprite.build);
gulp.task('clean', Clean.delete);
gulp.task('upload', Upload.run);
gulp.task('server', Server.run);
gulp.task('grid', Grid.build);
gulp.task('build', ['images:build', 'js:vendor', 'js:build', 'style:build', 'html:build', 'fonts:build','sprite:build', 'server']);

gulp.task('watch', () => {
    gulp.watch(path.all.js, ['js:build']).on('unlink', (filepath)=>{
       return $.remember.forget('js', $.resolvePath(filepath));
    });
    gulp.watch(path.all.style, ['style:build']).on('unlink', (filepath)=>{
      return $.remember.forget('style', $.resolvePath(filepath));
    });
    gulp.watch(path.all.template, ['html:build']).on('unlink',(filepath)=>{
       return $.remember.forget('html', $.resolvePath(filepath));
    });
    gulp.watch(path.all.images, ['images:build']).on('unlink', (filepath)=>{
       return $.remember.forget('image', $.resolvePath(filepath));
    });
    gulp.watch(path.all.sprite, ['sprite:build']).on('unlink', (filepath)=>{
      return $.remember.forget('sprite', $.resolvePath(filepath));
    });
    gulp.watch(path.all.fonts, ['fonts:build']);
});
gulp.task('default', ['build', 'watch']);
