const express = require("express");
const router4 = express.Router();
const Equipo = require('../models/Equipo');
const Trabajos_correctivos = require('../models/trabajoscorrectivos');
const Trabajos_preventivos = require('../models/trabajospreventivos');
var session = require('express-session');
var controlador = require("../controladorsesiones/controlador");


router4.use(session({
  secret: '123',
  resave: true,
  saveUninitialized: true
}))

var auth = function(req, res, next) {
  controlador.autenticacion(req,res,next);
};

router4.post('/login', function (req, res) {
  controlador.login(req, res);
  
});

//Equipo

router4.put('/equipo/:id',auth, async (req, res) => {
    const id = req.params.id
  
    const { nombre, descripcion, serial, fecha_inicial_de_puesta_en_marcha, ultima_fecha_de_puesta_en_marcha, ultima_fecha_de_mantenimiento } = req.body
  
    const equipo = {

      nombre,
      descripcion,
      serial,
      fecha_inicial_de_puesta_en_marcha,
      ultima_fecha_de_puesta_en_marcha,
      ultima_fecha_de_mantenimiento,

    }
  
    try {
      const updatedEquipo = await Equipo.updateOne({ _id: id }, equipo)
  
      if (updatedEquipo.matchedCount === 0) {
        res.status(422).json({ message: 'Dato no encontrado!' })
        return
      }
  
      res.status(200).json(equipo)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })


  //Trabajos_correctivos

  router4.put('/trabajos_correctivos/:id',auth, async (req, res) => {
    const id = req.params.id
  
    const { fecha_planificada_para_el_mantenimiento,  fecha_de_inicio_del_mantenimiento, fecha_final_del_mantenimiento,  estatus_del_mantenimiento, } = req.body

    const trabajos_correctivos = {

    fecha_planificada_para_el_mantenimiento,
    fecha_de_inicio_del_mantenimiento,
    fecha_final_del_mantenimiento,
    estatus_del_mantenimiento,

  };
  
    try {
      const updatedTrabajos_correctivos = await Trabajos_correctivos.updateOne({ _id: id }, trabajos_correctivos)
  
      if (updatedTrabajos_correctivos.matchedCount === 0) {
        res.status(422).json({ message: 'Dato no encontrado!' })
        return
      }
  
      res.status(200).json(trabajos_correctivos)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  });

  //Trabajos_preventivos

  router4.put('/trabajos_preventivos/:id',auth, async (req, res) => {
    const id = req.params.id
  
    const { fecha_planificada_para_el_mantenimiento,  fecha_de_inicio_del_mantenimiento, fecha_final_del_mantenimiento,  estatus_del_mantenimiento, } = req.body

  const trabajos_preventivos = {

    fecha_planificada_para_el_mantenimiento,
    fecha_de_inicio_del_mantenimiento,
    fecha_final_del_mantenimiento,
    estatus_del_mantenimiento,

  };

  
    try {
      const updatedTrabajos_preventivos = await Trabajos_preventivos.updateOne({ _id: id }, trabajos_preventivos)
  
      if (updatedTrabajos_preventivos.matchedCount === 0) {
        res.status(422).json({ message: 'Dato no encontrado!' })
        return
      }
  
      res.status(200).json(trabajos_preventivos)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })




  module.exports = router4;