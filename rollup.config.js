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
      sourcemap: true, // Set to 'inline' if needed
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true, // Set to 'inline' if needed
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'], // Add .jsx to the list of extensions
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
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top',
      },
      plugins: [tailwindcss(tailwindConfig)],
    }),
    terser(), // Minifies the output
    {
      input: "src/index.css",
      output: [{ file: "dist/index.css", format: "es" }],
      plugins: [
          postcss({
              extract: true,
              minimize: true,
          }),
      ],
      },    
  ],
  external: Object.keys(packageJson.peerDependencies || {}),
};
