import path from 'path'
import serve from 'rollup-plugin-serve'
import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.js',
  output: {
    file: path.resolve(__dirname, 'dist/bundle.js'),
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    serve({
      // open: true,
      // openPage: '/public/index.html',
      contentBase: '',
      port: '3300'
    })
  ]
}
