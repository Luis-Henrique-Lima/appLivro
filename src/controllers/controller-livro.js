const Livro = require('../models/Livro')

const { bdLivro } = require('../estrutura/bd')

class ControllerLivro {
    static rotas(app) {
    app.get('/livro', ControllerLivro.listarLivro)
    app.post('/livro', ControllerLivro.cadastrarLivro)
  }

  static listarLivro(req, res) {
    res.send(bdLivro)
  }

  static cadastrarLivro(req, res) {
    const livro = new Livro(req.body.genero, req.body.diretora)
    bdLivro.push(livro)
    res.send(bdLivro)
  }
}
  
module.exports = ControllerLivro