const url = require('url')
const address = 'https://api.whatsapp.com/send?phone=0&text=Ola!'
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log('')
console.log(parsedUrl.searchParams.get('phone'))
console.log(parsedUrl.searchParams.get('text'))