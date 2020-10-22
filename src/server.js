//importar dependencia
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//iniciando o express
const server = express()

//utilizar body da requisição para enviar o formulário para o backend
.use(express.urlencoded({ extended: true }))

//utilizando os arquivos estaticos
server.use(express.static('nlw'))

//configurar o temaplate engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//criar rota da aplicação
server.get('/', pages.index),
server.get('/orphanages', pages.orphanages)
server.get('/orphanage', pages.orphanage)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)



//ligar o servidor
server.listen(5500)

