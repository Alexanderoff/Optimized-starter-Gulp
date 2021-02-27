import gulp from 'gulp';
import html from './gulp/tasks/html';
import styles from './gulp/tasks/styles';
import scripts from './gulp/tasks/scripts';
import images from './gulp/tasks/images';
import conv2webp from './gulp/tasks/webp';
import sprites from './gulp/tasks/sprites';
import {woff, woff2} from './gulp/tasks/fonts';
import watcher from './gulp/tasks/watcher';
import clean from './gulp/tasks/clean';
import config from './gulp/config';

config.setEnv();

export const build = gulp.series(
  clean,
  gulp.parallel(html, styles, scripts, images, conv2webp, sprites, woff, woff2)
);

export const dev = gulp.series(build, watcher);
