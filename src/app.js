const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const exphbs = require('express-handlebars')

app = express()

// Configuracion
app.set(port, 3000)
app.set('views', path.join(_dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partial'),
    extname: 'hbs'
}))
app.set('view engine', '.hbs')

