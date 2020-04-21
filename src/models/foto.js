const {schema, model} = require('mongoose')

const foto = new schema({
    titulo: String,
    descripcion: String,
    imagenURL: String,
    public_id: String
})

module.exports = model('foto', foto)

