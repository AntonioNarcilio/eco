// Pegando o banco de dados
const db = require("../database/db")

module.exports={

	// ROTA => SEARCH POINTS
	async index(req, res){
		await db.all(`SELECT * FROM places`, function(err, rows) {
			if(err) {
				return console.log(err)
			}

			console.log("Aqui estão os seus registros: 👇")
			console.log(rows)

			const total = rows.length

			// Mostrar a pagina html com os dados do banco de dados
			return res.status(200).json({places: rows, total: total})
		})
	},

	// ROTA => CREATE POINTS
	async create(req, res){
		// 	req.body: o corpo do nosso formulário
		console.log(req)

		if (Object.keys(req.body).length != 8) {
			return res.status(400).json({message: "Erro ao criar eco ponto!"})
		}

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

		await db.run(query, values)	
		return res.status(201).json({message: "Eco ponto criado com sucesso!"})
	}
}

