
//!!!PENDENTE!!! getReferencia: consome API de localizaçao e vincula bairro com referencia de cras


const Usuarios = require()

//save usuario - post
exports.postUsuario = (req, res) => {
    Usuarios.save(function (err, usuario) {
      if (err) res.status(500).send(err);
      res.status(200).send(usuario);
    })
  }

//find listar todos os usuarios
exports.get = (req, res) => {
    Usuarios.find(function (err, usuario) {
      if (err) res.status(500).send(err);
      res.status(200).send(usuario);
    })
  }
  
//listar por id - vincular id com o nis do usuario
exports.getById = (req, res) => {
    const id = req.params.id
  
    Usuarios.findById(id, function (err, usuario) {
      if (err) return res.status(500).send(err);
  
      if (!usuario) {
        return res.status(200).send({ message: `Infelizmente não localizamos este usuario ${id}` });
      }
  
      res.status(200).send(usuario);
    })
  }
  
  //getAcompanhamentos: gera listagem de acompanhametos
  exports.getLista = (req, res) => {
    const id = req.params.id
  
    Usuarios.find(id, function(err, usuario){
  
      if (err) return res.status(500).send(err)
  
      if(!usuario){
        return res.status(200).send({ message: `Infelizmente não existem usuarios com esse perfil` })
      }
    //   const perfilUsuario = usuario.renda
    //   const usuarioPerfilado = perfilUsuario.filter(renda => rendaBaixa.renda == true)
    //   const tituloLivros = livrosLidos.map(livro => livro.titulo)
    //FAZER A LOGICA DE FILTER E MAP
  
      res.status(200).send(usuarioPerfilado);
  
    })
  }
  
  
//getListagem: gera listagem por filtro de perfil
  exports.getSp = (req, res) => {
  
    Alunas.find(function (err, alunas) {
      if (err) res.status(500).send(err)
  
      const nasceuSp = alunas.filter(aluna => aluna.nasceuEmSp === "true");
      const meninasSp = nasceuSp.map(aluna => aluna.nome)
  
      res.status(200).send(meninasSp)
    })
  }

//atualizar informaçao 
  exports.update = (req, res) => {  
    Usuarios.update(
      { _id: req.params.id },
      { $set: req.body },
      { upsert: true },
      function (err) {
        if (err) return res.status(500).send({ message: err });
        res.status(200).send({ message: "Atualizado com sucesso!" });
      })
  }