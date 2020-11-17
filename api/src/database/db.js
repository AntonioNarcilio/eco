//  Importar a dependência do sqlite3
//  verbose => função que ira configurar o sqlite, 
// 		dizendo que quer ver mensagens no terminal sempre que acontecer algo
const sqlite3 = require("sqlite3").verbose()

// Criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// // Utilizar o objeto da banco de dados, para nossas operações
// db.serialize(() => {

// 	// 📌 1. Criar uma tabela com, comandos sql
// 	// Tabela a ser criada com o nome de: places
// 	// PRIMARY KEY => Campo primário
// 	db.run(`
// 		CREATE TABLE IF NOT EXISTS places (
// 			id INTEGER PRIMARY KEY AUTOINCREMENT,
//  	 	name TEXT,
//  	 	cnpj TEXT,
//  	 	image TEXT,
//  	 	whatsapp TEXT,
//  	 	address TEXT,
//  	 	address2 TEXT,
//  	 	district TEXT,
//  	 	item TEXTs
// 		);
// 	`)

// 	// // 📌 2. Inserir dados na tabela
// 	// const query =`
//  // INSERT INTO places (
//  // 	name,
//  // 	cnpj,
//  // 	image,
//  // 	whatsapp,
//  // 	address,
//  // 	address2,
//  // 	district,
//  // 	items
//  // ) VALUES (?,?,?,?,?,?,?,?);
// 	// `

// 	// const values = [
//  // 	"eco",
//  //  "12345678912"
// 	// 	"https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
// 	// 	"99 999999",
// 	// 	"Rua Suécia",
// 	// 	"Número 260",
// 	// 	"Calhau",
// 	// 	"Eletrônicos"
// 	// ]

// 	// // 👇 por se utilizar o 'this' não se pode utilizar uma arrow function
// 	// function afterInsertData(err){
// 	// 	if(err) {
// 	// 		return console.log(err)
// 	// 	}

// 	// 	console.log("Cadastrado com sucesso !! 🙌")
// 	// 	console.log(this)
// 	// }
// 	// // 👇Ao rodar pela primeira vez 'inserir dados', deve-se comentar a linha do código abaixo 👇
// 	// // db.run(query, values, afterInsertData)	



// 	// // 📌 3. Consultar os dados na tabela
// 	// db.all(`SELECT * FROM places`, function(err, rows) {
// 	// 	if(err) {
// 	// 		return console.log(err)
// 	// 	}

// 	// 	console.log("Aqui estão os seus registros: 👇")
// 	// 	console.log(rows)
// 	// })


// 	// // 📌 4. Deletar dados na tabela
// 	// db.run(`DELETE FROM places WHERE id = ?`, [10], function(err) {
// 	// 	if(err) {
// 	// 		return console.log(err)
// 	// 	}

// 	// 	console.log("Registro deletado com sucesso")
// 	// })

// })

