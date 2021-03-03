import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import changed from 'gulp-changed';
import size from 'gulp-size';
import config from '../config';

const sizeConfig = {
  gzip: true,
  pretty: true,
  showFiles: true,
  showTotal: true,
};

const fonts = () => {
  gulp
    .src(`${config.fonts.src}/**/*.ttf`)
    .pipe(changed(config.fonts.dist, { extension: '.woff' }))
    .pipe(ttf2woff())
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(config.fonts.dist));
  return gulp
    .src(`${config.fonts.src}/**/*.ttf`)
    .pipe(changed(config.fonts.dist, { extension: '.woff2' }))
    .pipe(ttf2woff2())
    .pipe(size(sizeConfig))
    .pipe(gulp.dest(config.fonts.dist));
};

module.exports = fonts;
