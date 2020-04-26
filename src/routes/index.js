const {Router} = require('express')
const router = Router()

const foto = require('../models/foto')

const cloudinary = require('cloudinary')
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const fs = require('fs-extra')

router.get('/', (req, res,) =>{
    res.render('images')
})
router.get('/images/add', (req, res) =>{
    res.render('image_form')
})
router.post('/images/add', async (req, res) =>{
    const {title, description} = req.body
    console.log(req.file) // informacion de la imagen
    const result = await cloudinary.v2.uploader.upload(req.file.path)
    console.log(result)
    const newfoto = new foto({
        title,
        description,
        imagenURL: result.url,
        public_id: result.public_id
    })
    await newfoto.save()
    await fs.unlink(req.file.path)
    
    res.send('Recibido')
})

module.exports = router

