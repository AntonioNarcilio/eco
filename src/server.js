const express = require("express")
const server = express()

// Pegando o banco de dados
const db = require("./database/db")

// Config porta da aplicação
const PORT = process.env.PORT || 3000

// 📌 Configurar pasta publica
server.use(express.static("public"))

// 📌 Habilitar o uso do req.body da nossa aplicação
server.use(express.urlencoded({extended: true}))


// 📌 Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
	// "ligando" nunjucks ao express
	express: server,
	noCache: true
})

// ROTA => HOME
server.get("/", (req, res) => {
	// send => enviar
	// sendFIle => envie um arquivo

	// 📌 sem template engine
	// res.sendFile(__dirname + "/views/index.html")

	// 📌 com template engine
	return res.render("index.html", 
	// 📌 Enviando variável para dentro do html
	{title: "Para aqueles que se preocupam com o meio ambiente !"})
})

// ROTA => CREATE POINT
server.get("/create-point", (req, res) => {

	// req.query => query strings da nossa url
	// console.log(req.query)

	// send => enviar
	// sendFIle => envie um arquivo
	// 📌 sem template engine
	// res.sendFile(__dirname + "/views/create-point.html")

	// 📌 com template engine
	return res.render("create-point.html")

})

server.post("/savepoint", (req, res) => {

	// 	req.body: o corpo do nosso formulário
	console.log(req.body)

	// 📌 inserir dados no banco de dados
	const query =`
		INSERT INTO places (
			name,
			cnpj,
			image,
			whatsapp,
			address,
			address2,
			district,
			items
		) VALUES (?,?,?,?,?,?,?,?);
	`

	const values = [
		req.body.name,
		req.body.cnpj,
		req.body.image,
		req.body.whatsapp,
		req.body.address,
		req.body.address2,
		req.body.district,
		req.body.items
	]

	// 👇 por se utilizar o 'this' não se pode utilizar uma arrow function
	function afterInsertData(err){
		if(err) {
			console.log(err)
			return res.render("create-point.html", {saved: false})
		}

		console.log("Cadastrado com sucesso !! 🙌")
		console.log(this)


		return res.render("create-point.html", {saved: true})
	}

	// 👇Ao rodar pela primeira vez 'inserir dados', deve-se comentar a linha do código abaixo 👇
	db.run(query, values, afterInsertData)	

})


// ROTA => SEARCH RESULTS
server.get("/search", (req, res) => {

	// Pesquisa por cidade
	const search = req.query.search

	if (search == "") {
		// Pesquisa vazia
		return res.render("search-results.html", {total: 0})
	}


	db.all(`SELECT * FROM places`, function(err, rows) {
		if(err) {
			return console.log(err)
		}

		console.log("Aqui estão os seus registros: 👇")
		console.log(rows)

		const total = rows.length

		// Mostrar a pagina html com os dados do banco de dados
		return res.render("search-results.html", {places: rows, total: total})
	})

	// send => enviar
	// sendFIle => envie um arquivo

	// 📌 sem template engine
	// res.sendFile(__dirname + "/views/search-results.html")

	// 📌 com template engine
	// return res.render("search-results.html")
})

// 📌 Ligando o servidor na porta 3000
server.listen(PORT)