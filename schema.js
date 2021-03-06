module.exports = {
	prompt: {
		properties: {
			name: {
				description: "Name of your application",
				type: "string"
			},
			description: {
				description: "Description of your application",
				type: "string"
			},
			homepage: {
				description: "Homepage of your application",
				type: "string"
			},
			requirejs: {
				description: "Use RequireJS",
				validator: /y[es]*|n[o]?/,
				warning: "Must respond yes or no",
				default: "y"
			},
			install: {
				description: "Run Install",
				validator: /y[es]*|n[o]?/,
				warning: "Must respond yes or no",
				default: "y"
			}
		}
	}
};