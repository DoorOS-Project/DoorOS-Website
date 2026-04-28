// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([{
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'@stylistic/indent': ['error', 'tab'],
		'@stylistic/no-tabs': ['error', { allowIndentationTabs: true }]
	}
}])
