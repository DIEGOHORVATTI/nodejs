/*--------Importações de Modulos Externos-------*/

/*Modulo de core module para ler a inportação de input do usuário */
const readline = require("readline");

/*Modulo de cor para facilitar  avisualização*/
const chalk = require("chalk");

/*  Modulo de pergunta de input eu poderia usar readline porem não não vi 
    a necessidade de não usar uma ferramenta já feita para esse fim porem
    vou deixar aqui em baixo o modelo que eu usaria apenas para faalr que
    eu sei usar o core modulo padrão e não apenas um importado

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
    const num__1 = readline.question(`${colorInterrrogacao}x²x?+?x(?-?) `, (num_1) => {
      console.log(`${chalk.red(`${num_1}`)}x²x?+?x(?-?)`);
      readline.close();
      return num_1;
    });
*/
const inquirer = require("inquirer");

/* ---------questões objetivas a serem feitas (algoritimos) usando nodejs------- */

/*
3)
Faça um algoritmo para calcular o volume de uma esfera de raio R, 
em que R é um valor fornecido pelo usuário. O volume de uma esfera 
é dado por V = 4/3 𝝿R3.
*/

readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`\n4𝝿${chalk.red("R")}³\n 3\n-----------------\n`);

/*formula formula 
4𝝿R³
 3
*/
// Bibiobrafia da formula https://mundoeducacao.uol.com.br/matematica/volume-esfera.htm

inquirer
  .prompt([
    { name: "valorR", message: `Valor ${chalk.red('R')}? ` },
  ])
  .then((answers) => {

    function algoritimos() {
      const valorR = parseFloat(answers.valorR);

      console.log("-----------------");

      const pi = parseFloat(3.14);
      console.log(`V = 4x${pi}x${valorR}³\n        3`);
      const valorTerceiraPotencia = parseInt(Math.pow(valorR, 3));
      const valorNumerador = parseInt(4*pi*valorTerceiraPotencia);
      console.log(`V = ${valorNumerador}\n      3`);
      const valorDividido_3 = parseInt(valorNumerador/3);
      console.log(`V ≈ ${chalk.yellow(valorDividido_3)} cm³\n`);
      
    }

    algoritimos();
  })
  .catch((err) => {
    console.log(err);
  }); 