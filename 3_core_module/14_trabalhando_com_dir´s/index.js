const fs = require("fs")

const nameDir = "./lol" 

if(fs.existsSync(nameDir)){
	console.log(`mkdir: não foi possível criar o diretório ${nameDir}: Diretório existente`)
}else{
	fs.mkdirSync(nameDir)
}