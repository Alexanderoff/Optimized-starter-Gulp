const config = {
  vendorsScss: ['swiper/*bundle.css'],
  vendorsJs: ['swiper/*bundle.js'],
  html: {
    src: 'src/pages',
    dist: 'build',
  },
  styles: {
    src: 'src/styles',
    dist: 'build/styles',
  },
  scripts: {
    src: 'src/js',
    dist: 'build/js',
  },
  images: {
    src: 'src/assets/images',
    dist: 'build/assets/images',
  },
  sprite: {
    src: 'src/assets/icons',
  },
  fonts: {
    src: 'src/assets/fonts',
    dist: 'build/assets/fonts',
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
