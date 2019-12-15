const Usuarios = require('../model/usuarios')


/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 * @apiParam {Number} Users NIS.
 * @apiParam {String} User Name.
 * @apiParam {Number} Users age.
 * @apiParam {String} User location.
 * @apiParam {Number} Users DEPENDENTES.
 * @apiParam {Number} Users RENDA.
 * @apiParam {Boolean} User PCD.
 * @apiParam {Boolean} User IDOSO.
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
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */


var appRouter = function (app) {

    app.get("/", function (req, res) {
        res.status(200).send({ message: 'Welcome to our restful API' });
    });



    app.get("/user", function (req, res) {
        console.log("passei aqui no get")
        Usuarios.find(function (err, usuario) {
            if (err) res.status(500).send(err);
            res.status(200).send(usuario);
        })
    });

    app.get("/user/:id", function (req, res){
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


    app.post("/user", function (req, res) {
        console.log(`entrou no metodo post`)
        let novoUsuario = new Usuarios(req.body)
        console.log (req.body)
        novoUsuario.save(function (err, usuario) {
            if (err) res.status(500).send(err);
            res.status(201).send(usuario);
        })
    });

    app.get ("/user/perfil", function (req, res){
        console.log ("passou pelo listar")
        Usuarios.find(function (err, user) {
          if (err) res.status(500).send(err);
      
          const usuarioPaif = usuarios.filter(i => i.acompPaif == true)
          const usuariosRetorno = usuarioPaif.map(usuario => {
            return {
              nome: usuario.nome,
              idade: usuario.idade,
              bairro: usuario.bairro
            }
          })
      
          res.status(200).send(usuariosRetorno);
        })
      }); 

    //router.get("/listagens", controller.perfilaUsuario) // perfila o usuario por criterio de renda e vulnerabilidades
    // USAR O QUERY PARAMS
    //   exports.getPerfilUsuarios = (req, res) => {
    //     const id = req.params.id

    //     Usuarios.find(id, function(err, usuario){

    //       if (err) return res.status(500).send(err)

    //       if(!usuario){
    //         return res.status(200).send({ message: `Infelizmente não existem usuarios com esse perfil` })
    //       }
    //       res.status(200).send(usuarioPerfilado);

    //     })
    //   }
    
   
    app.put("/user", function (req, res) {
        console.log ("fui atualizado")
            Usuarios.update(
            { _id: req.params.id },
            { $set: req.body },
            { upsert: true },
            function (err) {
                if (err) return res.status(500).send({ message: err });
                res.status(204).send();
        })
    });
   
    app.delete("/user", function (req, res) {
        console.log ("passou no delete")
        const id = req.params.id;
        
            Usuarios.findOne({ id }, function (err, usuario) {
            if (err) res.status(500).send(err);
        
            if (!usuario) return res.status(200).send({ mensagem: "infelizmente não localizamos o usuário para desligamento" });
        
            usuario.delete(function (err) {
                if (!err) {
                res.status(200).send({ message: 'Usuario desligado com sucesso do acompanhamento PAIF...' });
                }
        })
    });

});

}

// app.use(express.static('doc'))
// app.get('/api-doc',(req,res) => { 
//     res.sendFile(path.join__dirname + '/doc/index.html');
// })


module.exports = appRouter;

