/**
 * ! Para iniciar execute: webpack --mode development
 * ! Para iniciar o servidor execute: webpack-dev-server --mode development
 */

const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "src", "index.js"), // ! Entrada
	output: {
		path: path.resolve(__dirname, "public"), // ! Saida
		filename: "bundle.js", // ! Nome do arquivo da saida
	},
	// ! Inicia o servidor para reload
	devServer: {
		contentBase: path.resolve(__dirname, "public"),
	},
	// ! Regras
	module: {
		rules: [
			{
				// ! entende como converte javascript
				test: /\.js$/, // ? procura por uma arquivos que terminam com .js
				exclude: /node_modules/,
				use: {
					loader: "babel-loader", // Converte importações do js para 1 arquivo
				},
			},
			{
				test: /\.css$/, // ? procura por uma arquivos que terminam com .css
				exclude: /node_modules/,
				use: [
					{ loader: "style-loader" }, // Pega o resultado do css-loader e injeta no html
					{ loader: "css-loader" }, // Converta importações dentro do css
				],
			},
		],
	},
};
