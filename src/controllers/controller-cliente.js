class ControllerCliente {         // Classe
    static rotas(app) {          // metado
    app.get('/cliente', (req, res) => {        // Roda do Cliente
    res.send("Rota GET do Cliente ativada")
    })
  }
}

module.exports = ControllerCliente    // Exportaçao da classe 