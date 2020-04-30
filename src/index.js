require('dotenv').config()

const app = require('./app')

app.set('port', process.env.PORT || 3000)
const Port = app.set('port')

app.listen(Port, () =>{
    console.log('Servidor corriendo en',Port )
    console.log('Environment', process.env.NODE_ENV)
})
