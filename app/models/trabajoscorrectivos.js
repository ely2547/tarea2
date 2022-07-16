const mongoose = require('mongoose')

const Trabajos_correctivos = mongoose.model('Trabajos_correctivos', {


  fecha_planificada_para_el_mantenimiento: String,
  fecha_de_inicio_del_mantenimiento:String,
  fecha_final_del_mantenimiento: String,
  estatus_del_mantenimiento: String

})

module.exports = Trabajos_correctivos