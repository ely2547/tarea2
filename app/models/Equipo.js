const mongoose = require('mongoose')

const Equipo = mongoose.model('Equipo', {
  
  nombre:String,
  descripcion: String,
  serial: Number,
  fecha_inicial_de_puesta_en_marcha: String,
  ultima_fecha_de_puesta_en_marcha: String,
  ultima_fecha_de_mantenimiento:String,

})

module.exports = Equipo