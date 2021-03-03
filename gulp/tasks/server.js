import gulp from 'gulp';
import bs from 'browser-sync';
import html from './html';
import styles from './styles';
import scripts from './scripts';
import images from './images';
import fonts from './fonts';
import config from '../config';

const browserSync = bs.create();
const reload = cb => {
  browserSync.reload();
  cb();
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: './build/',
    },
    open: false,
    port: 4000,
    // tunnel: 'host-tunnel',
  });

  gulp.watch(`${config.html.src}/**/*.html`, gulp.series(html, reload));
  gulp.watch(`${config.styles.src}/**/*.scss`, gulp.series(styles, reload));
  gulp.watch(`${config.scripts.src}/**/*.js`, gulp.series(scripts, reload));
  gulp.watch(`${config.images.src}/**/*`, gulp.series(images, reload));
  gulp.watch(`${config.fonts.src}/**/*.`, gulp.series(fonts, reload));
};

module.exports = server;
