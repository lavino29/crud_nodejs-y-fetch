const express = require('express')
const Newnotas = require('../modelos/notas')
const mongoose = require('mongoose')
// const passport = require('passport')
// const passportConfig = require('../Session-Passport/passport')


exports.buscadorDeNotas = (req,res,next)=>{
    
 Newnotas.find({
     ID: req.user._id
 },(err,result)=>{
     if(err) return err
    
     res.render('home',{notas: result})
     return next()
 })

}


exports.creacionDeNotas = (req, res, next )=>{
    
const newnotas = new Newnotas({
    ID: req.user._id,
    titulo: req.body.titulo,
    link: req.body.link,
    imagen: req.body.imagen,
    descripcion: req.body.descripcion
})
console.log(newnotas)
newnotas.save((err=>{
    if(err) return err
    return next()
}))

}

exports.eliminarNota = (req,res,next)=>{
    console.log(req.body)
    Newnotas.remove({_id: req.body.id},(err)=>{
        if(err) {console.log(err)}
        else{
            res.json({ok:true})
        }

    })
}

exports.actualizarNotas = async(req,res,next)=>{
    const {titulo, images, link, descripcion} = req.body
    console.log(req.body)
 const result = await Newnotas.updateOne({_id: req.body._id}, req.body)
res.json({ok:true})

}