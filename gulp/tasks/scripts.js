import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import config from '../config';
import webpackConfig from '../../webpack.config';

const scripts = () => {
  return gulp
    .src(`${config.scripts.src}/main.js`)
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulpif(config.isProd, rename({ suffix: '.min' })))
    .pipe(gulp.dest(config.scripts.dist));
};

export default scripts;
