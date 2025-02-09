import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import packageJson from './package.json' with { type: "json" };
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.cjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true, 
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true, 
    },
    {
      file: 'dist/DragFormX.umd.js', // UMD output
      format: 'umd',
      name: 'DragFormX', // Global variable name
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        jquery: '$',  // Make sure jQuery is accessible globally as $ (common alias)
      },
      sourcemap: false,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    peerDepsExternal(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      presets: ['@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    postcss({
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top',
      },
      plugins: [tailwindcss(tailwindConfig)],
    }),
    terser(),
  ],
  external: ['jquery'], // Mark jQuery as external
};
