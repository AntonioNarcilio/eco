const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")
const server = express()


// Habilitando acesso á API de aplicações externas
server.use(cors())

// Config porta da aplicação
const PORT = process.env.PORT || 3333
const HOST = '0.0.0.0' 

// Importando rotas
const routes = require("./routes")

// Habilitando uso de body do tipo JSON
server.use(bodyParser.json())

// Usando rotas exportadas
server.use(routes)

// 📌 Ligando o servidor na porta 3333
server.listen(PORT)
console.log("Server ouvindo na porta ",PORT);