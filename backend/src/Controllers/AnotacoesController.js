const AnotacoesData = require('../Models/AnotacoesData')

module.exports = { 
  async read(req, res) { 
    const listaAnotacoes = await AnotacoesData.find();
    return res.json(listaAnotacoes);
  },

  async create(req, res) { 
    const {titulo, nota, prioridade} = req.body;

    if(!nota || !titulo ) {
      return res.status(400).json({
        error: "Necessário um titulo e uma anotação"
      })
    }
    const anotacaoCriada = await AnotacoesData.create({
      titulo, nota, prioridade
    })
    
    return res.json(anotacaoCriada)
    
  },

  async delete(req, res) { 
    const {id} = req.params;

    const NotaDeletada = await AnotacoesData.findOneAndDelete({ _id: id })

    if(NotaDeletada){
      return res.json(NotaDeletada)
    } 
    return res.status(401).json({
      erro: "Não foi encontrado o registro para deletar"
    })



  }
}