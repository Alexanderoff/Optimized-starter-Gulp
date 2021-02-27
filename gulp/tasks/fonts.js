import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import changed from 'gulp-changed';
import config from '../config';

export const woff = () => {
  return gulp
    .src(`${config.fonts.src}/**/*.ttf`)
    .pipe(changed(config.fonts.dist, {extension: '.woff'}))
    .pipe(ttf2woff())
    .pipe(gulp.dest(config.fonts.dist));
};

export const woff2 = () => {
  return gulp
    .src(`${config.fonts.src}/**/*.ttf`)
    .pipe(changed(config.fonts.dist, {extension: '.woff2'}))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(config.fonts.dist));
};
