const path = require("path");

const mode = process.env.REACT_APP_ENV || 'development';
const isDev = mode === 'development';
const isProd = mode === 'production';

function resolveRoot(...segments) {
  return path.resolve(__dirname, '..', '..', ...segments);
}

module.exports = {
  outdir: resolveRoot('build'),
  entryPoints: [resolveRoot('src', 'index.jsx')],
  entryNames: 'bundle',
  bundle: true,
  tsconfig: resolveRoot('tsconfig.json'),
  minify: isProd,
  sourcemap: isDev
}