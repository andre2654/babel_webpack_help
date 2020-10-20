// ? teste
// ! Arrow function nem todos os browsers conhecem
// ! o @babel/cli permite que a gente use a linha de comandos
// * yarn babel src/index.js --out-file public/bundle.js
// * cria um arquivo chamado bundle.js com a conversão dessa arrow function

import { soma } from "./soma";

console.log(soma(231, 133));
