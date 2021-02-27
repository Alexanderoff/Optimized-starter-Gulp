const config = {
  html: {
    src: 'src/pages',
    dist: 'build',
    watch: 'src/pages'
  },
  styles: {
    src: 'src/styles',
    dist: 'build/styles',
    watch: 'src/styles'
  },
  scripts: {
    src: 'src/js',
    dist: 'build/js',
    watch: 'src/js'
  },
  images: {
    src: 'src/assets/images',
    dist: 'build/assets/images',
    watch: 'src/assets/images'
  },
  sprite: {
    src: 'src/assets/icons',
    watch: 'src/assets/icons'
  },
  fonts: {
    src: 'src/assets/fonts',
    dist: 'build/assets/fonts'
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  }
}

export default config;
