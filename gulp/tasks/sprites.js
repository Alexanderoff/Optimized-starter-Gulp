import gulp from 'gulp';
import sprite from 'gulp-svg-sprite';
import config from '../config';

const sprites = () => {
  return gulp
    .src(`${config.sprite.src}/svg/**/*.svg`)
    .pipe(sprite({
      mode: {
        symbol: {
          sprite: '../sprites/sprite.svg',
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name'],
                  },
                },
                {
                  removeUselessStrokeAndFill: false,
                },
                {
                  inlineStyles: true,
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(gulp.dest(config.images.dist));
};

export default sprites;