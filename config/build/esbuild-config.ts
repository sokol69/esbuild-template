import { BuildOptions } from 'esbuild';
import path from 'path';
import cssModulesPlugin from 'esbuild-css-modules-plugin';

import { CleanPlugin } from './plugins/cleanPlugin';
import { HTMLPlugin } from './plugins/HTMLPlugin';

const mode = process.env.REACT_APP_ENV || 'development';
const isDev = mode === 'development';
const isProd = mode === 'production';

function resolveRoot(...segments: string[]) {
  return path.resolve(__dirname, '..', '..', ...segments);
}

const config: BuildOptions = {
  outdir: resolveRoot('build'),
  entryPoints: [resolveRoot('src', 'index.jsx')],
  entryNames: '[dir]/bundle.[name]-[hash]',
  allowOverwrite: true,
  bundle: true,
  tsconfig: resolveRoot('tsconfig.json'),
  minify: isProd,
  sourcemap: isDev,
  metafile: true,
  loader: {
    '.jpg': 'file',
    '.png': 'file',
    '.svg': 'file',
  },
  plugins: [CleanPlugin, HTMLPlugin({ title: 'Esbuild Template' }), cssModulesPlugin()],
};

export default config;
