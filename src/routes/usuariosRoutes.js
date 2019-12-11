const express = require("express")
const router = express.Router()
const controller = require("../controller/usuariosController")

router.get("/usuario", controller.get) //busca todos usuarios
router.post("/usuario", controller.post) //insere pessoa em acompanhamento
router.put("/usuario/:id", controller.update)  //atualiza informacao do usuario acompanhado
router.get("/usuario/:id", controller.getById) //busca usuario por id e vincula com nis
router.delete("/usuario/:id", controller.removeUsuario) //remove usuario por id (vinculado a nis)

//router.get("/search", controller.getLista) //gera listagem de acompanhamento paif == true
//router.get("/listagens", controller.perfilaUsuario) // perfila o usuario por criterio de renda e vulnerabilidades



module.exports = router