const   mongoose = require('mongoose');

mongoose.connect(process.env.DEV_DB, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log(`La base de dato ${process.env.DEV_DB} esta conectada`)
})

