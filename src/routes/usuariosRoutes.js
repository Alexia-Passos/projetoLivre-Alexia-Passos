const express = require("express")
const router = express.Router()
const controller = require("../controller/usuariosController")

router.get("/", controller.get) //busca todos usuarios
router.put("/:id", controller.update)  //atualiza informacao do usuario acompanhado
router.delete("/:id/desligamentos", controller.removeUsuario) //remove usuario por id (vinculado a nis)
router.get("/acompanhamento/encontrarUsuario", controller.getById) //busca usuario por id e vincula com nis
router.get("/listagens", controller.getLista) //gera listagem de acompanhamento paif == true
router.get("/listagens", controller.perfilaUsuario) // perfila o usuario por criterio de renda e vulnerabilidades
router.post("/acompanhamento", controller.postUsuario) //insere pessoa em acompanhamento


module.exports = router