import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/cjs/index.js',
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: 'dist/esm/index.js',
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript(),
			esbuild({
				// tsconfig: 'tsconfig.json',
				// target: 'es2015',

				// All options are optional
				include: /\.[jt]sx?$/, // default, inferred from `loaders` option
				exclude: /node_modules/, // default
				sourceMap: true, // default
				minify: process.env.NODE_ENV === 'production',
				target: 'es2017', // default, or 'es20XX', 'esnext'
				jsx: 'transform', // default, or 'preserve'
				jsxFactory: 'React.createElement',
				jsxFragment: 'React.Fragment',
				// Like @rollup/plugin-replace
				define: {
					__VERSION__: '"x.y.z"',
				},
				tsconfig: 'tsconfig.json', // default
				// Add extra loaders
				loaders: {
					// Add .json files support
					// require @rollup/plugin-commonjs
					'.json': 'json',
					// Enable JSX in .js files too
					'.js': 'jsx',
				},
			}),
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
	},
];
