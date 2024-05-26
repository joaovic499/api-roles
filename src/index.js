const express = require('express')
const app = express()

app.get('/', function(req, res) {
    return res.json({
        message: "Olá dev seja bem vindo"
    })
})

app.listen(3000, () => {
    console.log("Server rodando na porta 3000!")
})