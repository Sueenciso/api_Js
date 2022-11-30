const express = require("express");
const app = express();
const apiRouter=require("./src/routes")
//Declarando el proceso a ejecutar cuando
//recibe una solicitud a la ruta raiz "/" de tipo
//GET
app.use(express.json());
apiRouter(app);

app.get("/", (req, res) => {
  //req recibimos los datos del cliente y el res es el objeto con el que vamos a responder al cliente
  res.json({ massage: "El API YA funciona" });
});

//Ejecutando el servidor HTTP
app.listen(8000, (err) => {
  if (!err) console.log("ecuchando peticion HTTP en el puerto 8000");
  //cuando se levante el servidor, quiero que me avises
  else console.log("Ups, ocurrio un error insesperado", err);
});
