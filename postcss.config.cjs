const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')

module.exports = {
	plugins: [
		postcssJitProps(OpenProps),
		require('autoprefixer')
		// require('postcss-class-name-shortener'),
		// require('postcss-easing-gradients')
	]
}
