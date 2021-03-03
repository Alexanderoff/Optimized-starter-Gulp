import gulp from 'gulp';
import config from './gulp/config';
import clean from './gulp/tasks/clean';
import html from './gulp/tasks/html';
import styles from './gulp/tasks/styles';
import scripts from './gulp/tasks/scripts';
import images from './gulp/tasks/images';
import fonts from './gulp/tasks/fonts';
import server from './gulp/tasks/server';

config.setEnv();

exports.build = gulp.series(clean, html, styles, scripts, images, fonts);

exports.server = gulp.series(server);

exports.default = gulp.series(exports.build, server);
