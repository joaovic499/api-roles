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

    const jogadorIndex = jogadores.findIndex(p => p.id === id)

    if (jogadorIndex < 0 ) {
        return res.status(404).json({error: "Jogador não encontrado"})
    }

    if (!nome || !posicao  || !overall ) {
        return res.status(400).json({error: "Não foi possivel editar o jogador"})
    }

    const jogador = {
        id,
        nome,
        posicao,
        overall
    }

    jogadores[jogadorIndex] = jogador
    
    return res.json(jogador)
})

app.delete('/jogadores/:id', function(req, res) {
    const {id} = req.params

    const jogadorIndex = jogadores.findIndex(p => p.id === id)

    if(jogadorIndex < 0) {
        return res.status(404).json({error: 'Jogador  nao encontrado'})
    }

    jogadores.splice(jogadorIndex, 1)

    return res.status(200).json({message: 'Jogador excluido com sucesso'})

})

app.listen(3000, () => {
    console.log("Server rodando na porta 3000!")
})
