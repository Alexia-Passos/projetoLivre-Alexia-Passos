const mongoose = require('mongoose');

const AlunasSchema = new mongoose.Schema({
    id:{Number},
    nis:{Number},
    nomeCompleto: {String},
    idade: {Number},
    bairro: {String},
    quantDeDependentes: {Number},
    rendaPerCapita:{Number},
    PessoaComDef:{Boolean},
    idoso: {Boolean}
}, {
    versionKey: false
})


const Usuarios = mongoose.model('Usuarios', UsuariosSchema);

module.exports = Usuarios;

