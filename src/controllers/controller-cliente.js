const Cliente = require('../models/Cliente')

  class ControllerCliente {         // Classe
    static rotas(app) {          
    app.get('/cliente', ControllerCliente.listarCliente)      // Chamada da rota Get
    app.post('/cliente', ControllerCliente.cadastrarCliente)   // Chamada da rota Post
  }

  static listarCliente(req, res) {              // Get
    res.send("Rota Get do Cliente Falida")
  }

  static cadastrarCliente(req, res) {    // Post
    const cliente = new Cliente(req.body.nome, req.body.email, req.body.tel, req.body.end)
    res.send(cliente)     // Responde a requisição
  }
}

module.exports = ControllerCliente    // Exportaçao da classe 