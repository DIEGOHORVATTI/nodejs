const express = require('express');
const path = require('path')
const router = express.Router();

// setar diretório como pasta raiz "./"
const pages = path.join(__dirname, '../pages')

router.get('/', (req, res) => {
  res.sendFile(`${pages}/index.html`)
});

// define the about route
router.get('/contato', (req, res) => {
  res.sendFile(`${pages}/contato.html`)
});

module.exports = router;