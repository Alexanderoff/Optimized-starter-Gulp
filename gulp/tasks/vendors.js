import gulp from 'gulp';
import merge from 'merge-stream';
import config from '../config';

const vendorsStyles = cb => {
  return config.vendorsScss.length
    ? merge(
        config.vendorsScss.map(vendor => {
          return gulp
            .src(`node_modules/${vendor}`)
            .pipe(gulp.dest(`${config.styles.src}/vendors/${vendor.replace(/\/.*/, '')}`));
        }),
      )
    : cb(console.log('========== Vendors Styles not found =========='));
};

const vendorsScripts = cb => {
  return config.vendorsJs.length
    ? merge(
        config.vendorsJs.map(vendor => {
          return gulp
            .src(`node_modules/${vendor}`)
            .pipe(gulp.dest(`${config.scripts.src}/vendors/${vendor.replace(/\/.*/, '')}`));
        }),
      )
    : cb(console.log('========== Vendors Scripts not found =========='));
};

export const vendorsCopy = gulp.parallel(vendorsStyles, vendorsScripts);
