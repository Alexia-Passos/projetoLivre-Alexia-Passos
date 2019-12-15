const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema({
    nis:{type: Number},
    nomeCompleto: {type: String},
    idade: {type: Number},
    bairro: {type: String},
    quantDeDependentes: {type: Number},
    rendaPerCapita:{type: Number},
    PessoaComDef:{type: Boolean},
    idoso: {type: Boolean},
    acompPaif: {type: Boolean}
}, {
    versionKey: false
})


const Usuarios = mongoose.model('usuarios', UsuariosSchema);

module.exports = Usuarios;

