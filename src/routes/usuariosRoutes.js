const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasController")

router.get("/", controller.get)
router.get("/acompanhamento/encontrarUsuario", controller.getById)
router.get("/listagens", controller.getLista)
router.post("/acompanhamento", controller.postUsuario)
router.put("/:id", controller.update)

module.exports = router