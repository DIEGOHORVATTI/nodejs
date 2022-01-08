const fs = require('fs')

const arquivoBefore = 'index.txt'
const arquivoAfter = 'arquivo.txt'

fs.rename(arquivoBefore, arquivoAfter, function(err){
	
	if(err){
		console.log(err)
		return
	}

	console.log(`${arquivoBefore} to ${arquivoAfter}`)
})