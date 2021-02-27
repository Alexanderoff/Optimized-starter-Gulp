import gulp from 'gulp';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import config from '../config';

const images = () => {
  return gulp
    .src(`${config.images.src}/**/*`)
    .pipe(changed(config.images.dist))
    .pipe(gulpif(config.isProd, imagemin([
      imagemin.mozjpeg({quality: 75, progressive: true}),
      pngquant({quality: [0.6, 0.8]}),
      imagemin.svgo()
    ])))
    .pipe(gulp.dest(config.images.dist));
};

export default images;