const Cliente = require('../models/Cliente')

const { bdCliente } = require('../estrutura/bd')

  class ControllerCliente {         // Classe
    static rotas(app) {          
    app.get('/cliente', ControllerCliente.listarCliente)      // Chamada da rota Get
    app.get('/cliente/:email', ControllerCliente.buscarClienteEmail)
    app.post('/cliente', ControllerCliente.cadastrarCliente)   // Chamada da rota Post
    app.delete('/cliente/:email', ControllerCliente.deletarCliente)   // chamada da rota Delete
  }

  static listarCliente(req, res) {     // Get
    res.send(bdCliente)
  }

  static buscarClienteEmail(req, res) {
    const cliente = bdCliente.find(
      (cliente) => cliente.email === req.params.email
    )

    if (!cliente) {
      res.rend('Cliente não encontrado')
      return;
    }
    res.send(cliente)
  }

  static cadastrarCliente(req, res) {    // Post
    const cliente = new Cliente(req.body.nome, req.body.email, req.body.tel, req.body.end)
    bdCliente.push(cliente)
    res.send(bdCliente)     // Responde a requisição
  }

  static deletarCliente(req, res) {     // Delete
    const cliente = bdCliente.find((cliente) => cliente.email === req.params.email)   //Busca o email  na lista de Clientes

    if (!cliente) {   // Se o Cliente não for encontrado
      res.send('Cliente não encontrado')
      return
    }
    const index = bdCliente.indexOf(cliente)  // Se o Cliente for encontrado
    bdCliente.splice(index, 1)  
    res.send({   //Devolve o Cliente deletado
      "Mensagem: ": `O cliente do email ${cliente.email} foi deletado`,
      });
      
  }
}

module.exports = ControllerCliente    // Exportaçao da classe 