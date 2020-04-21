require('dotenv').config()

const app = require('./app')
require('./database')

app.set('port', process.env.PORT || 3000)
const Port = app.set('port')

app.listen(Port, () =>{
    console.log('Servidor corriendo en',Port )
})
