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
2)
Construa um algoritmo que, tendo como dados de entrada dois pontos 
quaisquer do plano cartesiano, P(x1, y1) e Q(x2, y2), escreva a 
distância entre eles.
*/

//formula Dab= √( (Xb - Xa)² + (Yb - ya)² )

readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  `\nDab= √( (${chalk.red("Xb")} - ${chalk.red("Xa")})² + (${chalk.red("Yb")} - ${chalk.red("Ya")})² )\n\n--------------\n`
);

//formula Dab= √( (Xb - Xa)² + (Yb - ya)² )
// Bibiobrafia da formula https://mundoeducacao.uol.com.br/matematica/distancia-entre-dois-pontos.htm

inquirer
  .prompt([
    { name: "position_Xb", message: `posicao ${chalk.red("Xb")}:` },
    { name: "position_Xa", message: `posicao ${chalk.red("Xa")}:` },
    { name: "position_Yb", message: `posicao ${chalk.red("Yb")}:` },
    { name: "position_Ya", message: `posicao ${chalk.red("Ya")}:` },
  ])
  .then((answers) => {
    function algoritimos() {
      const Xb = parseInt(answers.position_Xb);
      const Xa = parseInt(answers.position_Xa);
      const Yb = parseInt(answers.position_Yb);
      const Ya = parseInt(answers.position_Ya);

      console.log("-----------------");

      console.log(`√( (${Xb} - ${Xa})² + (${Yb} - ${Ya})² )`);
      const Xba = Xb - Xa;
      const Yba = Yb - Ya;
      console.log(`√( (${Xba})² + (${Yba})² )`);
      const XbaQuadrado = Xba * Xba;
      const YbaQuadrado = Yba * Yba;
      console.log(`√( (${XbaQuadrado}) + (${YbaQuadrado})  )`);
      const XYbaSomado = XbaQuadrado + YbaQuadrado;
      console.log(`√(${XYbaSomado})`);
      const XYRaiz = Math.sqrt(XYbaSomado);
      console.log(XYRaiz);
    }

    algoritimos();
  })
  .catch((err) => {
    console.log(err);
  });