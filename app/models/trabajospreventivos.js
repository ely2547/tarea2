const mongoose = require('mongoose')

const Trabajos_preventivos = mongoose.model('Trabajos_preventivos', {


  fecha_planificada_para_el_mantenimiento: String,
  fecha_de_inicio_del_mantenimiento:String,
  fecha_final_del_mantenimiento: String,
  estatus_del_mantenimiento: String

})

module.exports = Trabajos_preventivos