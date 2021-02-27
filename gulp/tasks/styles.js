import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import config from '../config';

const postcssDev = [
    autoprefixer({
      cascade: true,
      grid: 'autoplace'
    })
  ],
  postcssProd = [
    autoprefixer({
      cascade: false,
      grid: 'autoplace'
    }),
    cssnano()
  ];

const styles = () => {
  return gulp
    .src(`${config.styles.src}/main.scss`)
    .pipe(gulpif(config.isDev, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpif(config.isDev, postcss(postcssDev), postcss(postcssProd)))
    .pipe(gulpif(config.isProd, rename({suffix: '.min'})))
    .pipe(gulpif(config.isDev, sourcemaps.write('.')))
    .pipe(gulp.dest(`${config.styles.dist}`));
};

export default styles;