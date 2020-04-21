const   mongoose = require('mongoose');

mongoose.connect(process.env.URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log(`La base de dato ${process.env.URI} esta conectada`)
})

