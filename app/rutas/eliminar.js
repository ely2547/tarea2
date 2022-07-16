const express = require("express");
const router3 = express.Router();
const Equipo = require('../models/Equipo');
const Trabajos_correctivos = require('../models/trabajoscorrectivos');
const Trabajos_preventivos = require('../models/trabajospreventivos');
var session = require('express-session');
var controlador = require("../controladorsesiones/controlador");


router3.use(session({
  secret: '123',
  resave: true,
  saveUninitialized: true
}))

var auth = function(req, res, next) {
  controlador.autenticacion(req,res, next);
};

router3.post('/login', function (req, res) {
  controlador.login(req, res);
  
});

//equipo

router3.delete('/equipo/:id',auth, async (req, res) => {
    const id = req.params.id
  
    const equipo = await Equipo.findOne({ _id: id })
  
    if (!equipo) {
      res.status(422).json({ message: 'Dato no encontrado!' })
      return
    }
  
    try {
      await Equipo.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Dato eliminado!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

//Trabajos_correctivos

router3.delete('/trabajos_correctivos/:id',auth, async (req, res) => {
    const id = req.params.id
  
    const trabajos_correctivos = await Trabajos_correctivos.findOne({ _id: id })
  
    if (!trabajos_correctivos) {
      res.status(422).json({ message: 'Dato no encontrado!' })
      return
    }
  
    try {
      await Trabajos_correctivos.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Dato eliminado!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  //Trabajos_preventivos

  router3.delete('/trabajos_preventivos/:id',auth, async (req, res) => {
    const id = req.params.id
  
    const trabajos_preventivos = await Trabajos_preventivos.findOne({ _id: id })
  
    if (!trabajos_preventivos) {
      res.status(422).json({ message: 'Dato no encontrado!' })
      return
    }
  
    try {
      await Trabajos_preventivos.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Dato eliminado!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })


module.exports = router3;