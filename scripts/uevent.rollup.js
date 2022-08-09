import commonjs from '@rollup/plugin-commonjs';

/** @type { import('rollup').RollupOptions } */
const opt = {
  input: [
    'node_modules/uevent/browser.js'
  ],
  output: {
    dir: 'dist/libs/uevent',
    format: 'es',
    exports: 'auto',
    sourcemap: false
  },
  plugins: [
    commonjs()
  ]
};

export default [opt];
