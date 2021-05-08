const config = {
	useTabs: true,
	tabWidth: 4,
	printWidth: 140,
	singleQuote: true,
	trailingComma: 'none',
	arrowParens: 'always',
	endOfLine: 'auto',
	bracketSpacing: true,
	semi: true,
	jsxBracketSameLine: true,
	overrides: [
		{
			files: ['*.json', '*.yml', '*.yaml'],
			options: {
				tabWidth: 2
			}
		}
	]
};

module.exports = config;
