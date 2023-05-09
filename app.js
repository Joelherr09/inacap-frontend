const express = require('express')
const app = express()
const port = 3000


// Conexión a MongoDB
const mongoose = require('mongoose');

const username = "administrador"
const password = "kogYs9Y1pAVf3epp"
const dbName = "EppMina"

//username: administrador
// pw mongodb: kogYs9Y1pAVf3epp

//username: joelignet
// pw mongodb: 3PxrLnJf6H23Zopi

const uri = `mongodb+srv://${username}:${password}@cluster0.3czj5kr.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))


// Ruta Proyecto
app.use(express.static(__dirname + "/public"));

// Rutas Web
app.use('/', require('./router/rutas'))
app.use('/trabajadores', require('./router/trabajadores'))


// Motor de Plantillas

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');


// Error 404

app.use((req, res, next) => {
  res.status(404).render("404", { titulo: "Página 404" });
});


// --------------------- //

app.listen(port, () => {
  console.log(`Página abierta en puerto: ${port}`)
})


