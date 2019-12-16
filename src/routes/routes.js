const Usuarios = require('../model/usuarios')
const express = require ('express')


var appRouter = function (app) {

    app.get("/", function (req, res) {
        res.status(200).send({ message: 'Welcome to our restful API' });
    });

/**
 * @api {get} /user Requisita informações dos usuarios. 
 * @apiName GetUser
 *
 * @apiParam {Number} Id unico do usuario.
 * @apiParam {Number} Numero de Inscrição Social - NIS.
 * @apiParam {String} Nome do Usuario.
 * @apiParam {String} Bairro do usuario.
 * @apiParam {Number} Quantidade de dependentes.
 * @apiParam {Number} Valor per capito da renda familiar.
 * @apiParam {Boolean} Se tem algum familiar com deficiencia .
 * @apiParam {Boolean} Se tem algum familiar idoso.
 *
 * @apiSuccess {String} Retorna todos os objeto com os dados do usuario que compoe o banco de dados.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "_id": "5df16f33813b93c8ccef7c56",
 *       "nis": 13487490412,
 *      "nomeCompleto": "Maria da Silva",
 *      "idade": 80,
 *       "bairro": "Santa Libania",
 *      "quantDeDependentes": 3,
 *       "rendaPerCapita": 250,
 *      "PessoaComDef": true,
 *       "idoso": false
 *       }
 *
 * @apiError UserNotFound The id of the User was not found. Error response  status 500. 
 */

    app.get("/user", function (req, res) {
        Usuarios.find(function (err, usuario) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.status(200).send(usuario);
            }
        });
    });
/**
 * @api {get} /user Requisita informações dos usuarios por numero de identificacão.
 * @apiName GetUser By Id.
 *
 * @apiParam {Number} Id unico do usuario.
 * @apiParam {Number} Numero de Inscrição Social - NIS.
 * @apiParam {String} Nome do Usuario.
 * @apiParam {String} Bairro do usuario.
 * @apiParam {Number} Quantidade de dependentes.
 * @apiParam {Number} Valor per capito da renda familiar.
 * @apiParam {Boolean} Se tem algum familiar com deficiencia .
 * @apiParam {Boolean} Se tem algum familiar idoso.
 *
 * @apiSuccess {String} Retorna um objeto com os dados do usuario o qual é representado por aquele Id.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "_id": "5df16f33813b93c8ccef7c56",
 *       "nis": 13487490412,
 *      "nomeCompleto": "Maria da Silva",
 *      "idade": 80,
 *       "bairro": "Santa Libania",
 *      "quantDeDependentes": 3,
 *       "rendaPerCapita": 250,
 *      "PessoaComDef": true,
 *       "idoso": false
 *       }
 *
 * @apiError UserNotFound The id of the User was not found. Error response  status 500. 
 */

    app.get("/user/:id", function (req, res) {
        console.log(`entrou no metodo getById`)
        const usuariosId = req.params.id

        Usuarios.findById(usuariosId, function (err, users) {
            if (err) return res.status(500).send(err);

            if (!users) {
                return res.status(200).send({ message: `Infelizmente não localizamos este usuario ${usuarioId}` });
            }
            res.status(200).send(users);
        })
    });


 /**
 * @api {post} /user Insere informações dos usuarios. 
 * @apiName PostUser
 *
 * @apiParam {Number} Id unico do usuario.
 * @apiParam {Number} Numero de Inscrição Social - NIS.
 * @apiParam {String} Nome do Usuario.
 * @apiParam {String} Bairro do usuario.
 * @apiParam {Number} Quantidade de dependentes.
 * @apiParam {Number} Valor per capito da renda familiar.
 * @apiParam {Boolean} Se tem algum familiar com deficiencia .
 * @apiParam {Boolean} Se tem algum familiar idoso.
 *
 * @apiSuccess {String} Insere objeto com os dados do usuario para compor o banco de dados.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "_id": "5df16f33813b93c8ccef7c56",
 *       "nis": 13487490412,
 *      "nomeCompleto": "Maria da Silva",
 *      "idade": 80,
 *       "bairro": "Santa Libania",
 *      "quantDeDependentes": 3,
 *       "rendaPerCapita": 250,
 *      "PessoaComDef": true,
 *       "idoso": false
 *       }
 *
 * @apiError UserNotFound The id of the User was not found. Error response  status 500. 
 */
    app.post("/user", function (req, res) {
        console.log(`entrou no metodo post`)
        let novoUsuario = new Usuarios(req.body)
        console.log(req.body)
        novoUsuario.save(function (err, usuario) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.status(201).send(usuario);
            }

        })
    });

/**
 * @api {put} /user Atualiza informações dos usuarios. 
 * @apiName PutUser
 *
 * @apiParam {Number} Id unico do usuario.
 * @apiParam {Number} Numero de Inscrição Social - NIS.
 * @apiParam {String} Nome do Usuario.
 * @apiParam {String} Bairro do usuario.
 * @apiParam {Number} Quantidade de dependentes.
 * @apiParam {Number} Valor per capito da renda familiar.
 * @apiParam {Boolean} Se tem algum familiar com deficiencia .
 * @apiParam {Boolean} Se tem algum familiar idoso.
 *
 * @apiSuccess {String} Retorna objeto com os dados do usuario atualizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "_id": "5df16f33813b93c8ccef7c56",
 *       "nis": 13487490412,
 *      "nomeCompleto": "Maria da Silva",
 *      "idade": 80,
 *       "bairro": "Santa Libania",
 *      "quantDeDependentes": 3,
 *       "rendaPerCapita": 250,
 *      "PessoaComDef": true,
 *       "idoso": false
 *       }
 *
 * @apiError UserNotFound The id of the User was not found. Error response  status 500. 
 */
    app.put("/user/:id", function (req, res) {
        console.log("fui atualizado")
        Usuarios.update(
            { _id: req.params.id },
            { $set: req.body },
            { upsert: true },
            function (err) {
                if (err) return res.status(500).send({ message: err });
                res.status(204).send();
            })
    });

/**
 * @api {delete} /user Exclui informações dos usuarios do Banco de Dados
 * @apiName deleteUser
 
 *
 * @apiSuccess {String} Retorna todos os objeto com os dados do usuario que compoe o banco de dados.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * message: 'Usuario desligado com sucesso do acompanhamento PAIF...'
 *
 * @apiError UserNotFound The id of the User was not found. Error response  status 500. 
 */
    app.delete("/user/:id", function (req, res) {
        console.log("passou no delete")
        const id = req.params.id;

        Usuarios.findOneAndDelete({ _id: id }, function (err, usuario) {
            if (!err) {
                res.status(200).send({ message: 'Usuario desligado com sucesso do acompanhamento PAIF...' });
            } else {

                res.status(200).send({ mensagem: "infelizmente não localizamos o usuário para desligamento" });

            }
        });

    });

    app.use(express.static('doc'))
    app.get('/api-doc', (req, res) => {
        res.sendFile(path.join__dirname + '/doc/index.html');
    })

}




module.exports = appRouter;

