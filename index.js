const express = require('express')   // essa é a imporção do express para a constante

const app = express()   // a instancia do express dentro da constante app para  ter as funcionalidade

const port = 3000;   // esse é o servidor para roda na porta 3000

app.listen(port, () => {    // para enviar uma resposta no terminal
    console.log(`Servidor rodando na porta ${port}/`)
})

app.get('/cliente', (req, res) => {       // Roda do Cliente
    res.send("Roda Get do Cliente ativada")
})

app.get('/livro', (req, res) => {       // Roda do livro
    res.send("Roda Get do livro ativada")
})

