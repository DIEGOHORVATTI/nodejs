const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer
  .prompt([
    {
      name: "user_name",
      type: "input",
      message: "Digite seu nome: "
    },
    {
      name: "user_idade",
      type: "input",
      message: "Digite sua idade: "
    },
  ])
  .then((answer) => {

    const nome = answer.user_name
    const idade = answer.user_idade

    if(!nome || !idade){
      console.log(`Erro: Insira um nome ou idade validas`)
    }else{
     if (idade >= 18){
        console.log(chalk.bgYellow.bold.black(` ola ${nome} você tem ${idade} anos parabéns por sobreviver ou covid`))
      }
      else{console.log(`Erro: Você tem que ter no minimo 18 anos`)}
    }

    /*
    if(nome != '' || idade != ''){

      try{
        if(idade >= 18){
          console.log(chalk.bgYellow.bold.black(` ola ${nome} você tem ${idade} anos parabéns por sobreviver ou covid `));
        }else{
          throw(err);
        }
      }
      catch(err){
        console.log(`Erro: Você tem que ter no minimo 18 anos`)
      }
      
    }else{
     console.log(`Erro: Insira um nome ou idade validas`)
    }
    */


  })
.catch((err) => console.log(`Erro: Você tem que ter no minimo 18 anos`))