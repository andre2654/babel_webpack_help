// ? Aqui ficarão as configurações relacionadas ao babel, a maneira que o
// ? javascript é convertida para uma maneira que o browser entenda

module.exports = {
	presets: [
		"@babel/preset-env", // preset que converte o javascript mais moderno para um mais antigo, baseado no ambiente da aplicação.
		"@babel/preset-react", // adiciona as funcionalidades do react nessa conversão
	],
};
