const Cliente = require('../models/Cliente')

const { bdCliente } = require('../estrutura/bd')

  class ControllerCliente {         // Classe
    static rotas(app) {          
    app.get('/cliente', ControllerCliente.listarCliente)      // Chamada da rota Get
    app.get('/cliente/:email', ControllerCliente.buscarClienteEmail)
    app.post('/cliente', ControllerCliente.cadastrarCliente)   // Chamada da rota Post
    app.put('/cliente/:email', ControllerCliente.atualizaCliente)   // chamada da rota put
    app.delete('/cliente/:email', ControllerCliente.deletarCliente)   // chamada da rota Delete
  }

  static listarCliente(req, res) {     // Get
    res.send(bdCliente)
  }

  static buscarClienteEmail(req, res) {   // Get
    const cliente = bdCliente.find(    // Buscando o email na lista de clientes
      (cliente) => cliente.email === req.params.email
    )

    if (!cliente) {     //  se o cliente nao for encontrado fala que teve um erro
      res.rend('Cliente não encontrado')    
      return;
    }
    res.send(cliente)  // se o cliente for encontrado devilve o cliente
  }

  static cadastrarCliente(req, res) {    // Post
    const cliente = new Cliente(req.body.nome, req.body.email, req.body.tel, req.body.end)
    bdCliente.push(cliente)
    res.send(bdCliente)     // Responde a requisição
  }

  static atualizaCliente(req, res){  // esse é o Put
    const cliente = bdCliente.find(cliente => cliente.email === req.params.email) //Buscar email no array cliente

    if (!cliente) {   // se o cliente nao for encontrado 
      res.send('Usuario não encontrado')
      return
    }
        // Se chegar até aqui, atualiza as chaves do cliente recebendo as informações que vem do corpo da requisição 
    cliente.nome = req.body.nome
    cliente.email = req.body.email
    cliente.senha = req.body.senha

    res.send({"Mensagem": "Cliente atualizado com sucesso", "Dados do Cliente": cliente})
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