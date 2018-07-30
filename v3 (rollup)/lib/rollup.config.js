import typescript from 'rollup-plugin-typescript';

export default {
  entry: './src/index.ts',

  output: {
    file: './index.js',
    format: 'umd',
    name: 'lib'
  },

  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ]
}