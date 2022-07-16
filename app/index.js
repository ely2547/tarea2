const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.use(
  express.urlencoded({
    extended: true,
  }),
) 

app.use(express.json())

//midleware

app.use('/', require('./rutas/agregar'));
app.use('/', require('./rutas/mostrar'));
app.use('/', require('./rutas/eliminar'));
app.use('/', require('./rutas/editar'));

  mongoose
  .connect(
    `mongodb+srv://ely1547:133545@cluster55.jiqft.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Conectado!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))