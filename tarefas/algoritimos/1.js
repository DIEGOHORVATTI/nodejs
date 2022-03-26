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
1)
Construa um algoritmo para calcular as raízes de uma equação do 2º 
grau (Ax? + Bx + C), sendo que os valores A, B e C são fornecidos 
pelo usuário (considere que a equação possui duas raízes reais)
*/

//Ax² + Bx + C

readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  `\n${chalk.red("A")}x² + ${chalk.red("B")}x + ${chalk.red("C")}\n\n-----------------\n`
); 

inquirer
  .prompt([
    { name: "quest_A", message: `${chalk.red("A")}x² + Bx + C` },
    { name: "quest_B", message: `Ax² + ${chalk.red("B")}x + C` },
    { name: "quest_C", message: `Ax² + Bx + ${chalk.red("C")}` },
  ])
  .then((answers) => {

    function algoritimos() {
      const A = parseInt(answers.quest_A);
      const B = parseInt(answers.quest_B);
      const C = parseInt(answers.quest_C);

      console.log("-----------------");
      console.log(`${A}x² + ${B}x + ${C}`);
      console.log(`${A+B}x² + ${C}`);
    }

    algoritimos();
  })
  .catch((err) => {
    console.log(err);
  });