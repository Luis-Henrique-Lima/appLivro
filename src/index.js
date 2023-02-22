const express = require('express')   // essa é a imporção do express para a constante

const app = express()    // a instancia do express dentro da constante app para  ter as funcionalidade

const port = 3000    // esse é o servidor para roda na porta 3000

const ControllerCliente = require('./controllers/controller-cliente')   // esss é a importação da classe e chamada ao metodo das rotas
ControllerCliente.rotas(app)

const ControllerLivro = require('./controllers/controller-livro')
ControllerLivro.rotas(app)

app.listen(port, (req, res) => {      // para enviar uma resposta no terminal
console.log(`Servidor rodando na porta ${port}`)
})
