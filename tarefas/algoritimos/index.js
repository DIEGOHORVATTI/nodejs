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
grau (Ax2 + Bx + C), sendo que os valores A, B e C são fornecidos 
pelo usuário (considere que a equação possui duas raízes reais)
*/

//Ax2 + Bx + C

/* readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  `\n${chalk.red("A")}x2 + ${chalk.red("B")}x + ${chalk.red("C")}\n\n--------------\n`
); 

inquirer
  .prompt([
    { name: "quest_A", message: `${chalk.red("A")}x2 + Bx + C` },
    { name: "quest_B", message: `Ax2 + ${chalk.red("B")}x + C` },
    { name: "quest_C", message: `Ax2 + Bx + ${chalk.red("C")}` },
  ])
  .then((answers) => {
    /* 2x2 + 5x + 8 */

    /*
    function algoritimos() {
      const A = parseInt(answers.quest_A);
      const B = parseInt(answers.quest_B);
      const C = parseInt(answers.quest_C);

      console.log("----------------------");
      console.log(`${A}x + ${B}x + ${C}`);
      console.log(`${A+B}x + ${C}`);
    }

    algoritimos();
  })
  .catch((err) => {
    console.log(err);
  }); */


/*
2)
Construa um algoritmo que, tendo como dados de entrada dois pontos 
quaisquer do plano cartesiano, P(x1, y1) e Q(x2, y2), escreva a 
distância entre eles.
*/

//formula Dab= √( (Xb - Xa)² + (Yb - ya)² )

/* readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  `\n${chalk.red("A")}x2 + ${chalk.red("B")}x + ${chalk.red(
    "C"
  )}\n\n--------------\n`
);

//formula Dab= √( (Xb - Xa)² + (Yb - ya)² )
// Bibiobrafia da formula https://mundoeducacao.uol.com.br/matematica/distancia-entre-dois-pontos.htm

inquirer
  .prompt([
    { name: "position_Xb", message: `` },
    { name: "position_Xa", message: `` },
    { name: "position_Yb", message: `` },
    { name: "position_Ya", message: `` },
  ])
  .then((answers) => {

    function algoritimos() {
      const Xb = parseInt(answers.position_Xb);
      const Xa = parseInt(answers.position_Xa);
      const Yb = parseInt(answers.position_Yb);
      const Ya = parseInt(answers.position_Ya);

      console.log("----------------------");

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
  }); */


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

console.log(`\n4𝝿${chalk.red("R")}³\n 3\n--------------\n`);

/*formula formula 
4𝝿R³
 3
*/
// Bibiobrafia da formula https://mundoeducacao.uol.com.br/matematica/volume-esfera.htm

inquirer
  .prompt([
    { name: "valorR", message: `Valor R? ` },
  ])
  .then((answers) => {

    function algoritimos() {
      const valorR = parseInt(answers.valorR);

      console.log("----------------------");

      const pi = 3.14;
      console.log(`4x${pi}x${valorR}`);
      
      
    }

    algoritimos();
  })
  .catch((err) => {
    console.log(err);
  }); 