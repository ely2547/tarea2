const express = require("express");
const router2 = express.Router();
const Equipo = require('../models/Equipo');
const Trabajos_correctivos = require('../models/trabajoscorrectivos');
const Trabajos_preventivos = require('../models/trabajospreventivos');
var session = require('express-session');
var controlador = require("../controladorsesiones/controlador");


router2.use(session({
  secret: '123',
  resave: true,
  saveUninitialized: true
}))

var auth = function(req, res, next) {
  controlador.autenticacion(req,res,next);
};

router2.post('/login', function (req, res) {
  controlador.login(req, res);
  
});

//guardar equipo


router2.post('/equipo',auth, async (req, res) => {
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
      await Equipo.create(equipo)
  
      res.status(201).json({ message: 'dato guardado!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  });

//guardar trabajos correctivos

router2.post('/trabajos_correctivos',auth, async (req, res) => {
  const { fecha_planificada_para_el_mantenimiento,  fecha_de_inicio_del_mantenimiento, fecha_final_del_mantenimiento,  estatus_del_mantenimiento, } = req.body

  const trabajos_correctivos = {

    fecha_planificada_para_el_mantenimiento,
    fecha_de_inicio_del_mantenimiento,
    fecha_final_del_mantenimiento,
    estatus_del_mantenimiento,

  };

  try {
    await Trabajos_correctivos.create(trabajos_correctivos)

    res.status(201).json({ message: 'dato guardado!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
});

//Trabajos_preventivos

router2.post('/trabajos_preventivos',auth, async (req, res) => {
  const { fecha_planificada_para_el_mantenimiento,  fecha_de_inicio_del_mantenimiento, fecha_final_del_mantenimiento,  estatus_del_mantenimiento, } = req.body

  const trabajos_preventivos = {

    fecha_planificada_para_el_mantenimiento,
    fecha_de_inicio_del_mantenimiento,
    fecha_final_del_mantenimiento,
    estatus_del_mantenimiento,

  };

  try {
    await Trabajos_preventivos.create(trabajos_preventivos)

    res.status(201).json({ message: 'dato guardado!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
});



  module.exports = router2;