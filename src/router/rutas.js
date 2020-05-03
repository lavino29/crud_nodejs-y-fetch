const express = require('express')
const { Router } = require('express')
const router = Router();
const passportConfig = require('../Session-Passport/passport')
const controladorUser = require('../controladores/Usuario')
const controladorNotas = require('../controladores/notas_pelis')
/* ------ LOGIN Y REGISTRO ------ */
router.get('/login',(req,res)=>{
    res.render('login',{})
})
router.post('/login',controladorUser.postlogIn )
router.post('/registrar',controladorUser.postsingup)
router.get('/logout', passportConfig.estaAutenticado,controladorUser.logout)
router.get('/registrar',(req,res)=>{
   console.log(req.user)
    res.render('registrar',{})
   
})
/* ------ HOME Y ABOUT ------ */
router.get('/home',passportConfig.estaAutenticado, controladorNotas.buscadorDeNotas)
 
router.get('/about',(req,res)=>{
   if(req.user){ res.render('about',{salir: true})}
   else
  { 
    res.render('about')
   }
})
router.get('/',()=>{
    res.redirect('/home')
})
/* ------ CRUD ------ */
router.post('/ADD',controladorNotas.creacionDeNotas,(req,res)=>{
    res.render('addNotas')
})
router.get('/ADD',passportConfig.estaAutenticado,(req,res)=>{
    res.render('addNotas')
})
router.post('/delete',controladorNotas.eliminarNota)
router.post('/editar',controladorNotas.actualizarNotas)

module.exports = router