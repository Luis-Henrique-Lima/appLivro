class ControllerLivro {
    static rotas(app) {
    app.get('/livro', (req, res) => {
    res.send("Rota GET do Livro ativada")
    })
  }
}
module.exports = ControllerLivro