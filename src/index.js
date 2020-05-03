/*------------------------------------------- */
//       CREADO POR JOSE JUAREZ "LAVINO29"
/*------------------------------------------- */
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session);
const bcrypt = require("bcrypt");

/*------------------------------------------- */
// Carpetas
/*------------------------------------------- */
require('./Session-Passport/passport')
require('./DB/coneccion')
require('./modelos/usuarios')
require('./controladores/Usuario')
require('./modelos/notas')
require('./controladores/notas_pelis')


/*------------------------------------------- */
// Inicializacion 
/*------------------------------------------- */
const app = express();


/*------------------------------------------- */
// Configuraciones
/*------------------------------------------- */
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')
app.use(express.static(__dirname+'/public'))

/*------------------------------------------- */
// middleware
/*------------------------------------------- */
app.use(session({
    secret: 'hola viejo',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        url: 'mongodb+srv://lavino29:jose123@cluster0-nmzqp.mongodb.net/test?retryWrites=true&w=majority',
        autoReconnect: true
    })
}))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

/*------------------------------------------- */
// RUTAS
/*------------------------------------------- */

app.use(require('./router/rutas'))

/*------------------------------------------- */
//   puerto de Escucha
/*------------------------------------------- */
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
  });