import gulp from 'gulp';
import browserSync from 'browser-sync';
import html from './html';
import styles from './styles';
import scripts from './scripts';
import images from './images';
import conv2webp from './webp';
import sprites from './sprites';
import config from '../config';

const watcher = (cb) => {
  browserSync.create().init({
    server: {
      baseDir: 'build/',
    },
    files: [
      `${config.html.dist}/*.html`,
      `${config.styles.dist}/*.css`,
      `${config.scripts.dist}/*.js`,
      {
        match: `${config.images.dist}/**/*`,
        fn() {
          this.reload();
        },
      },
    ],
  });

  gulp.watch(`${config.styles.src}/**/*.scss`, styles);
  gulp.watch(`${config.scripts.src}/**/*.js`, scripts);
  gulp.watch(`${config.html.src}/**/*.html`, html);
  gulp.watch(`${config.images.src}/**/*`, images);
  gulp.watch(`${config.images.src}/**/*`, conv2webp);
  gulp.watch(`${config.sprite.src}/**/*`, sprites);

  cb();
};

export default watcher;