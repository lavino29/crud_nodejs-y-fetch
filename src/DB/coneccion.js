const mongoose = require('mongoose');
const url = 'mongodb+srv://lavino29:jose123@cluster0-nmzqp.mongodb.net/test?retryWrites=true&w=majority'

const db = mongoose.connect(url||'mongodb://localhost:27017/BD-notas'||process.env.MONGO_URL,{

 useNewUrlParser: true,
 useUnifiedTopology:true,
 useCreateIndex:true
 
 })

mongoose.connection.once('open',()=>console.log('conectado a la BD'))
mongoose.connection.on('error',e=>console.log(e))

module.exports = db