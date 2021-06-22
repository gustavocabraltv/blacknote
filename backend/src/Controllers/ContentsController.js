const AnotacoesData = require('../Models/AnotacoesData')

module.exports = { 
  async update(req, res) { 
    const {id} = req.params;
    const { nota } = req.body;

    const anotacao = await AnotacoesData.findOne({ _id: id})

    // se {nota} for true, ou seja:
    // Caso algum dado seja enviado para {nota} pelo body [...]
    if(nota){ 
    // [...] sobrescrevemos o dado que enviamos na {nota} em -> nota
      anotacao.nota =  nota;
    // sobrescrevemos e salvamos em anotacao os novos dados.
      anotacao.save()
    } 
    return res.json(anotacao)


  },

  async updateTitulo(req, res) {
    const {id} = req.params;
    const { titulo } = req.body;

    const anotacao = await AnotacoesData.findOne({ _id: id})
    if(titulo) { 
      anotacao.titulo = titulo;
      anotacao.save()
    } 
    return res.json(anotacao)

  }
}