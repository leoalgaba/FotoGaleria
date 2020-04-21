const app = require('./app')

app.set('port', 3000)
const Port = app.set('port')

app.listen(Port, () =>{
    console.log('Servidor corriendo en',Port )
})
