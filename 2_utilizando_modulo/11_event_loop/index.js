function a(){
	console.log('exec a')
}

function b(){
	console.log('exec b')
}

function c(){
	console.log('exec c')
	a()
	b()
}

b()
a()
console.log('----')
c()