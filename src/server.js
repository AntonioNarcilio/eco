const express = require("express")
const bodyParser = require("body-parser")
const server = express()


// Config porta da aplicação
const PORT = process.env.PORT || 3333
const HOST = '0.0.0.0' 

// 📌 Configurar pasta publica
server.use(express.static("public"))

// 📌 Habilitar o uso do req.body da nossa aplicação
server.use(express.urlencoded({extended: true}))

const routes = require("./routes")

// 📌 Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
	// "ligando" nunjucks ao express
	express: server,
	noCache: true
})

server.use(bodyParser.json())

server.use(routes)

// 📌 Ligando o servidor na porta 3333
server.listen(PORT)
console.log("Server ouvindo na porta ",PORT);