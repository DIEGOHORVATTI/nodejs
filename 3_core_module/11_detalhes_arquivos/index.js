const fs = require('fs')

fs.stat("arquivo.txt", (err, stats) => {

	if(err){
		console.log(err)
		return
	}

	console.log('É arquivo: ' + stats.isFile()) //é arquivo
	console.log('É diretório: ' + stats.isDirectory()) // é diretório
	console.log('É link simbólic: ' + stats.isSymbolicLink()) //é link simbólico
	console.log('Data criação: ' + stats.ctime) // data criação
	console.log('Tamanho do arquvo: ' + stats.size + ' byts') //tamanho do arquvo em bytes

})