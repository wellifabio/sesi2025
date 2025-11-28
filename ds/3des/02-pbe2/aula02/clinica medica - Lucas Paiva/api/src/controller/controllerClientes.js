const con = require('../database/banco')

const create = (req, res) => {
    const { nome, cpf, nascimento } = req.body;

    let query = `INSERT INTO clientes (nome, cpf, nascimento) VALUES`
    query += `('${nome}', '${cpf}', '${nascimento}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read
}