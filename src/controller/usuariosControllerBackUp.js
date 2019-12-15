// const Usuarios = require('../model/usuarios')
// const faker = require ("faker")
// const fs = require ('fs')

// exports.post = (req, res) => {
//   console.log ("essa merda funciona")
//   let novoUsuario = new Usuarios(req.body)
//   novoUsuario.save(function (err,usuarios) {
//     if (err) res.status(500).send(err);
//     res.status(201).send(usuarios);
//   })
// }

// exports.get = (req, res) => {
//   console.log ("essa merda funciona")
//   Usuarios.find(function (err, users) {
//     if (err) res.status(500).send(err);
//     res.status(200).send(users);
//   })
// }

// exports.getById = (req, res) => {
//   console.log(`entrou no metodo getById`)
//   const usuariosId = req.params.id

//   Usuarios.findById(usuariosId, function (err, users) {
//     if (err) return res.status(500).send(err);

//     if (!users) {
//       return res.status(200).send({ message: `Infelizmente não localizamos este usuario ${usuarioId}` });
//     }
//     res.status(200).send(users);
//   })
// }


// exports.getLista = (req, res) => {
//   Usuarios.find(function (err, clientes) {
//     if (err) res.status(500).send(err);

//     const usuarioPaif = usuario.filter(i => i.paif == true)
//     const usuariosRetorno = usuarioPaif.map(usuario => {
//       return {
//         nome: usuario.nome,
//         idade: usuario.idade,
//         bairro: usuario.bairro
//       }
//     })

//     res.status(200).send(usuariosRetorno);
//   })
// }

// // USAR O QUERY PARAMS
// //   exports.getPerfilUsuarios = (req, res) => {
// //     const id = req.params.id

// //     Usuarios.find(id, function(err, usuario){

// //       if (err) return res.status(500).send(err)

// //       if(!usuario){
// //         return res.status(200).send({ message: `Infelizmente não existem usuarios com esse perfil` })
// //       }
// //       res.status(200).send(usuarioPerfilado);

// //     })
// //   }


// exports.update = (req, res) => {
//   Usuarios.update(
//     { _id: req.params.id },
//     { $set: req.body },
//     { upsert: true },
//     function (err) {
//       if (err) return res.status(500).send({ message: err });
//       res.status(204).send();
//     })
// }

// exports.removeUsuario = (req, res) => {
//   const nis = req.params.nis;

//   Usuarios.findOne({ nis }, function (err, usuario) {
//     if (err) res.status(500).send(err);

//     if (!usuario) return res.status(200).send({ mensagem: "infelizmente não localizamos o usuário para desligamento" });

//     usuario.remove(function (err) {
//       if (!err) {
//         res.status(200).send({ message: 'Usuario desligado com sucesso do acompanhamento PAIF...' });
//       }
//     })
//   })

// }

