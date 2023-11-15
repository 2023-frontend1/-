module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	parserOptions: {
		ecmaFeatures: {
			modules: true,
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['react', 'unused-imports', 'simple-import-sort', 'prettier'],
	rules: {
		'no-unused-vars': 'warn', // 미사용 변수 -> 경고 (노란줄)
		'react/jsx-uses-vars': 'error',
		'react/jsx-uses-react': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'ignore',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'unused-imports/no-unused-imports-ts': ['error'],
	},
}
