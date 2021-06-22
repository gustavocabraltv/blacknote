const mongoose = require('mongoose')


const AnotacoesData = mongoose.Schema({
  titulo: String,
  nota: String,
  prioridade: Boolean
})

module.exports = mongoose.model('Anotacoes', AnotacoesData )