import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import packageJson from './package.json' with { type: "json" };
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.cjs';

const createConfig = (input, output) => ({
  input,
  output,
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
});

export default [
  // ES6 and CommonJS builds using React entry point
  createConfig('src/indexReact.js', [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: false,
    }
  ]),
  
  // UMD build using jQuery entry point
  createConfig('src/indexjQuery.js', [
    {
      file: 'dist/Formalute.umd.js',
      format: 'umd',
      name: 'Formalute',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        jquery: '$',
      },
      sourcemap: false,
    }
  ])
];
