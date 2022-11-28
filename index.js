const express = require ("express");
const app=express();

app.get("/hi",(req,res)=> {
    res.send("hola desde hi");
});

app.listen(8000,(err)=>{
    if(!err) console.log("ecuchando peticion HTTP en el puerto 8000");
    else console.log("Ups, ocurrio un error insesperado",err);
});