import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

module.exports = [
  // {
  //   input: 'public/js/client.js',
  //   output: {
  //     file: 'public/js/client.min.js',
  //     format: 'iife' // for browsers
  //   },
  //   plugins: []
  // },
  {
    input: 'src/server.mjs',
    output: {
      file: 'dist/main.js',
      format: 'cjs', // for Node.jS
      name: 'flagindex'
    },
    plugins: [
      nodeResolve({
        preferBuiltins: false,
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      json(),
      nodePolyfills()
    ],
    external: ['express', 'fs']
  }
]
