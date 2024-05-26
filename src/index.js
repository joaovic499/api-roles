const express = require('express')
const app = express()
app.use(express.json())
const { v4: uuidv4 } = require('uuid')

const jogadores = []

app.get('/jogadores', function(req, res) {
    return res.json(jogadores)
});

app.post('/jogadores', function(req, res) {
   const {nome, posicao, overall} = req.body
   const jogador = {
    id: uuidv4(),
    nome,
    posicao,
    overall
   }

   jogadores.push(jogador)

   return res.status(201).json(jogador)
})

app.put('/jogadores/:id', function(req, res) {
    const {id} = req.params
    const {nome, posicao, overall} = req.body

    return response.json()
})
app.listen(3000, () => {
    console.log("Server rodando na porta 3000!")
})
