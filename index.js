const express = require("express");
const app = express();
const usersRouter = require("./src/routes/userRouters");
const productsRouters = require("./src/routes/productsRouters");
const categoriesRouters = require("./src/routes/categoriesRouters");
const pedidosRouters = require("./src/routes/pedidosRouters");
//Declarando el proceso a ejecutar cuando
//recibe una solicitud a la ruta raiz "/" de tipo
//GET

app.use(usersRouter); //lo inyectamos en nuestra aplicacion
app.use(productsRouters);
app.use(categoriesRouters);
app.use(pedidosRouters);
app.get("/", (req, res) => {
  //req recibimos los datos del cliente y el res es el objeto con el que vamos a responder al cliente
  res.json({ massage: "El API ya no funciona" });
});

//Ejecutando el servidor HTTP
app.listen(8000, (err) => {
  if (!err) console.log("ecuchando peticion HTTP en el puerto 8000");
  //cuando se levante el servidor, quiero que me avises
  else console.log("Ups, ocurrio un error insesperado", err);
});
