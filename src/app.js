//require express
//require nodemon
//require mongoose
const express = require("express")
//const mongoose = require("mongoose")
const app = express()

//mongoose.connect
//function com tratativa de erro/sucesso

//rotas
const index = require("./routes/index")
const usuario = require("./routes/usuariosRoutes")

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

  app.use("/",index)
  app.use("/usuarios", usuarios)
  

  module.exports = app