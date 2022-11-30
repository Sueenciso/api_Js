const { Router } = require("express");
const routes = Router();

const pedido = [
  { id: 1, destino: "dest1", Description: "one", precioEnvio: 540  },
  { id: 2, destino: "dest2", Description: "two", precioEnvio: 433},
  { id: 3, destino: "dest3", Description: "three", precioEnvio: 298 },
];

routes.get("/", (req, res) => {
  res.json(pedido);
});

routes.get("/:pedidosid", (req, res) => {
  const data = pedido.find((ped) => {
    return ped.id == req.params.pedidosid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "pedido not found" });
  }
});

module.exports = routes;
