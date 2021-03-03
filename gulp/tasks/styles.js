import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import size from 'gulp-size';
import mediaGroup from 'gulp-group-css-media-queries';
import plumber from 'gulp-plumber';
import config from '../config';

const sizeConfig = {
  gzip: true,
  pretty: true,
  showFiles: true,
  showTotal: true,
};

const postcssDev = [
  autoprefixer({
    cascade: true,
    grid: 'autoplace',
  }),
];
const postcssProd = [
  autoprefixer({
    cascade: false,
    grid: 'autoplace',
  }),
  cssnano(),
];

const styles = () => {
  return gulp
    .src(`${config.styles.src}/main.scss`)
    .pipe(plumber())
    .pipe(gulpif(config.isDev, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpif(config.isProd, mediaGroup()))
    .pipe(gulpif(config.isDev, postcss(postcssDev), postcss(postcssProd)))
    .pipe(gulpif(config.isDev, sourcemaps.write('.')))
    .pipe(size(sizeConfig))
    .pipe(gulpif(config.isProd, rename({ suffix: '.min' })))
    .pipe(gulp.dest(`${config.styles.dist}`));
};

module.exports = styles;
