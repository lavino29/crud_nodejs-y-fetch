const Usuario = require("../modelos/usuarios");
const passport = require("passport");
const express = require('express')
//const configPelis = require('./controladores/notas_pelis')


exports.postsingup = (req, res, next) => {
    console.log(req.body)
  const usuario = new Usuario({
    email: req.body.email,
    password: req.body.password,
    nombre: req.body.nombre,
  });
  Usuario.findOne(
    {
      email: req.body.email,
    },
    (err, result) => {
      if (err) return console.log(err);
      if (result) {
        return res.status(400).render('registrar')
      }
      usuario.save((err) => {
        next(err);
      });
      req.logIn(usuario, (err) => {
        if (err) return err;
        res.redirect('/home')
        res.render('home')
      });
    }
  );
};
exports.postlogIn = (req, res, next) => {

   passport.authenticate("local", (err, usuario, info) => {
        if (err) {
          next(err);
        }
    if (!usuario) {
      return res.render('login',{err: 'usuario ya existe'})
    }
    req.logIn(usuario, (err) => {
        if (err) {
          next(err);
        }
        res.redirect('/home')
        res.render('home');
      });
  })(req,res,next);
};

exports.logout = (req,res)=>{
    req.logout()
  res.redirect('/logout')
}