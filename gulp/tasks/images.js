import gulp from 'gulp';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';
import size from 'gulp-size';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import imageminWebp from 'imagemin-webp';
import config from '../config';

const sizeConfig = {
  gzip: true,
  pretty: true,
  showFiles: true,
  showTotal: true,
};

const imageMinConfig = {
  gifsicle: { interlaced: true },
  mozjpeg: { quality: 70, progressive: true },
  optipng: { optimizationLevel: 5 },
  svgo: {
    plugins: [
      { removeViewBox: false },
      { removeUnusedNS: false },
      { removeUselessStrokeAndFill: false },
      { cleanupIDs: false },
      { removeComments: true },
      { removeEmptyAttrs: true },
      { removeEmptyText: true },
      { collapseGroups: true },
    ],
  },
};

const imgMin = () => {
  return gulp
    .src(`${config.images.src}/**/*.{jpg,jpeg,png,gif,svg,webp}`)
    .pipe(changed(config.images.dist))
    .pipe(
      gulpif(
        config.isProd,
        imagemin([
          imagemin.gifsicle(imageMinConfig.gifsicle),
          imagemin.mozjpeg(imageMinConfig.mozjpeg),
          imagemin.optipng(imageMinConfig.optipng),
          imagemin.svgo(imageMinConfig.svgo),
        ]),
      ),
    )
    .pipe(size(sizeConfig))
    .pipe(gulp.dest(config.images.dist));
};

const img2webp = () => {
  return gulp
    .src(`${config.images.src}/**/*.{jpg,jpeg,png}`)
    .pipe(changed(config.images.dist, { extension: '.webp' }))
    .pipe(imagemin([imageminWebp({ quality: 60, alphaQuality: 80 })]))
    .pipe(rename({ extname: '.webp' }))
    .pipe(size(sizeConfig))
    .pipe(gulp.dest(config.images.dist));
};

export default gulp.parallel(imgMin, img2webp);
