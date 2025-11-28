const express = require('express')
const routes = express.Router()

const caixa = require('./controller/controlecaixa')
const clientes = require('./controller/ctcientes')

routes.get('/', function (req, res) {
    res.send('API de Fluxo de Caixa')

})

routes.get('/caixa', caixa.read)
routes.post('/caixa', caixa.create)
routes.put('/caixa/:id', caixa.update)
routes.delete('/caixa/:id', caixa.remove)

routes.get('/clientes', clientes.read)
routes.post('/clientes', clientes.create)
routes.put('/clientes/:id', clientes.update)
routes.delete('/clientes/:id', clientes.remove)

module.exports = routes