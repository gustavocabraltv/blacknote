const { json } = require('express');
const { update } = require('../Models/AnotacoesData');
const AnotacoesData = require('../Models/AnotacoesData')

module.exports = { 

  async read(req, res) { 
    const prioridade = req.query;

    const PrioridadesNotas = await AnotacoesData.find(prioridade);

    return res.json(PrioridadesNotas)

  },

  async update(req,res) {
    const {id} = req.params;
    const anotacao = await AnotacoesData.findOne({ _id:id })
    
    // se anotacao.{prioridade} for true
    if(anotacao.prioridade) { 
      anotacao.prioridade = false
    } else {
      anotacao.prioridade = true
    }
    // Caso a verificação anterior passe, salvamos os dados da operação.
    await anotacao.save();
    // retornarmos/exibimos em tela:
    return res.json(anotacao)

  }

}