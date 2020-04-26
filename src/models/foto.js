const {Schema, model} = require('mongoose')

const foto = new Schema({
    titulo: String,
    descripcion: String,
    imagenURL: String,
    public_id: String
})

module.exports = model('foto', foto)

