const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const exphbs = require('express-handlebars')

app = express()

// Configuracion
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '.hbs')
const Views = app.get('views')
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(Views, 'layouts'),
    partialsDir:path.join(Views, 'partial'),
    extname: 'hbs'
}))

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename:(req,file,cb) =>{
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})
app.use(multer({storage}).single('image'))

// Routes
app.use(require('./routes'))

module.exports = app
