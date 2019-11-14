//porta que vai estar rodando
//const contendo a porta de entrada
const app = require("./app")
const porta = 3000

app.listen(porta, function(){
    console.log(`app esta rodando na porta ${porta}`)
})