const express = require('express')
const routes = express.Router()
const AnotacoesController = require('./Controllers/AnotacoesController')
const PrioridadesController = require('./Controllers/PrioridadesController')
const ContentsController = require('./Controllers/ContentsController')



// ROTAS ANOTACOES
routes.get('/anotacoes', AnotacoesController.read) // * Lista as anotações existentes
routes.post('/anotacoes', AnotacoesController.create) // * Cria uma nova anotação
routes.post ('/anotacoes/:id', AnotacoesController.delete) // * Deleta uma anotação pelo id

// ROTAS PRIORIDADES
routes.get ('/prioridades', PrioridadesController.read) // * Filtra e exibe anotações com prioridade true/false
routes.post('/prioridades/:id', PrioridadesController.update) // * Altera a prioridade de true p/a false.
// ROTAS CONTENTS
routes.post('/contents/:id', ContentsController.update) // * Altera o conteúdo da nota
routes.post('/titulo/:id', ContentsController.updateTitulo) // * Altera o conteúdo da nota


module.exports = routes;