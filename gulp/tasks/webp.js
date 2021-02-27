import gulp from 'gulp';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';
import webpmin from 'imagemin-webp';
import webp from 'gulp-webp';
import config from '../config';

const conv2webp = () => {
  return gulp.src(`${config.images.src}/**/*`)
    .pipe(changed(config.images.dist))
    .pipe(webp(gulpif(config.isProd, webpmin({
      lossless: true,
      quality: 100,
      alphaQuality: 100
    }))))
    .pipe(gulp.dest(`${config.images.dist}`))
};

export default conv2webp;