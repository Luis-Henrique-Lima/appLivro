const Livro = require('../models/Livro')

class ControllerLivro {
    static rotas(app) {
    app.get('/livro', ControllerLivro.listarLivro)
    app.post('/livro', ControllerLivro.cadastrarLivro)
  }

  static listarLivro(req, res) {
    res.send("Rota Get do Livro ativo")
  }

  static cadastrarLivro(req, res) {
    const livro = new Livro(req.body.genero, req.body.diretora)
    res.send(livro)
  }
}
  
module.exports = ControllerLivro