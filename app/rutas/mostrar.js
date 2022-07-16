const express = require("express");
const router1 = express.Router();
const Equipo = require('../models/Equipo');
const Trabajos_correctivos = require('../models/trabajoscorrectivos');
const Trabajos_preventivos = require('../models/trabajospreventivos');


    
    router1.get('/equipos', async (req, res) => {
        try {
          const equipo = await Equipo.find()
      
          res.status(200).json(equipo)
        } catch (error) {
          res.status(500).json({ erro: error })
        }
      });

      router1.get('/equipo/:id', async (req, res) => {
        const id = req.params.id
      
        try {
          const equipo = await Equipo.findOne({ _id: id })
      
          if (!equipo) {
            res.status(422).json({ message: 'Dato no encontrado!' })
            return
          }
      
          res.status(200).json(equipo)
        } catch (error) {
          res.status(500).json({ erro: error })
        }
      });


  //trabajos correctivos

  router1.get('/trabajos_correctivos', async (req, res) => {
    try {
      const trabajos_correctivos = await Trabajos_correctivos.find()
  
      res.status(200).json(trabajos_correctivos)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  });

  router1.get('/trabajos_correctivos/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const equipo = await Trabajos_correctivos.findOne({ _id: id })
  
      if (!trabajos_correctivos) {
        res.status(422).json({ message: 'Dato no encontrado!' })
        return
      }
  
      res.status(200).json(trabajos_correctivos)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  });
      
  //Trabajos_preventivos

  router1.get('/trabajos_preventivos', async (req, res) => {
    try {
      const people = await Trabajos_preventivos.find()
  
      res.status(200).json(people)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router1.get('/trabajos_preventivos/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const trabajos_preventivos = await Trabajos_preventivos.findOne({ _id: id })
  
      if (!trabajos_preventivos) {
        res.status(422).json({ message: 'Dato no encontrado!' })
        return
      }
  
      res.status(200).json(trabajos_preventivos)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })


  module.exports = router1;
