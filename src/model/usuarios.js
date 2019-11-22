const mongoose = require('mongoose');

//schema de alunas
//representação das características do objeto aluna, que será utilizado no model

//Ex. de tipos de valores: String (texto), Number (Numérico), Date (Data), Booleano (Boolean)

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

//exemplo de schema com campos obrigatórios
//var sampleSchema = new Schema({ name: { type: String, required: true } });