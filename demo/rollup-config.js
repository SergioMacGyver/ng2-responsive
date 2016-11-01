import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'
//paths are relative to the execution path
export default {
  entry: 'public/compiled-aot/src/main.aot.js',
  dest: 'public/build.js', // output a single application bundle
  sourceMap: true,
  sourceMapFile: 'public/build.js.map',
  format: 'iife',
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: [
          'node_modules/rxjs/**',
          'node_modules/ng2-responsive/**'
          ]
      }),
      uglify()
  ]
}