import gulp from 'gulp';
import include from 'gulp-file-include';
import replace from 'gulp-replace';
import gulpif from 'gulp-if';
import config from '../config';

const html = () => {
  return gulp
    .src([`${config.html.src}/*.html`])
    .pipe(include())
    .pipe(gulpif(config.isProd, replace('.css', '.min.css')))
    .pipe(gulpif(config.isProd, replace('.js', '.min.js')))
    .pipe(gulp.dest(config.html.dist));
};

export default html;
