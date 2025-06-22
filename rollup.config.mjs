import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
// import copy from 'rollup-plugin-copy';
import { readFileSync } from 'fs';
const packageJson = JSON.parse(readFileSync('./package.json'));

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: false,
      exports: 'named',
      name: packageJson.name,
    },
    {
      file: packageJson.module,
      format: 'es',
      exports: 'named',
      sourcemap: false,
    },
  ],
  plugins: [
    resolve({
      extensions,
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
      rootDir: 'src',
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    }),
    terser()
    // copy({
    //   targets: [
    //     { src: 'src/icons/**/*', dest: 'dist/icons' },
    //   ],
    // }),
  ],
  external: [
    ...Object.keys(packageJson.peerDependencies || {}),
    ...Object.keys(packageJson.dependencies || {}),
    'react',
  ],
};