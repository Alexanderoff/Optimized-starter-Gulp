import del from 'del';

const clean = () => {
  return del('./build');
};

module.exports = clean;
