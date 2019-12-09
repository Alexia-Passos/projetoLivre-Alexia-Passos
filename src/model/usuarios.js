const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema({
    id:{type: Number},
    nis:{type: Number},
    nomeCompleto: {type: String},
    idade: {type: Number},
    bairro: {type: String},
    quantDeDependentes: {type: Number},
    rendaPerCapita:{type: Number},
    PessoaComDef:{type: Boolean},
    idoso: {type: Boolean}
}, {
    versionKey: false
})


const Usuarios = mongoose.model('Usuarios', UsuariosSchema);

module.exports = Usuarios;

