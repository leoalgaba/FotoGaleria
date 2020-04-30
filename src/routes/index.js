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

router.get('/', async (req, res,) =>{
    const fotos = await foto.find()
    res.render('images', {fotos})
})
router.get('/images/add', async (req, res) =>{
    const fotos = await foto.find()
    res.render('image_form', {fotos})
})
router.post('/images/add', async (req, res) =>{
    const {title, description} = req.body
    console.log(req.file) // informacion de la imagen
    const result = await cloudinary.v2.uploader.upload(req.file.path)
    const newfoto = new foto({
        title,
        description,
        imageURL: result.url,
        public_id: result.public_id
    })
    await newfoto.save()
    await fs.unlink(req.file.path)
    
    res.redirect('/')
})
router.get('/images/delete/:foto_id', async (req, res) =>{
    const {foto_id} = req.params
    const Foto = await foto.findByIdAndDelete(foto_id)
    const result = await cloudinary.v2.uploader.destroy(Foto.public_id)
    res.redirect('/images/add')
})

module.exports = router

