const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");
const express = require('express')

const Newnota = new Schema({
    ID: {type: String, required:true},
    titulo: {type: String, required:true},
    descripcion: { type: String, required:true},
    link: { type: String, required:true},
    imagen: { type: String, required:true}
})


module.exports = model('Newnota', Newnota)