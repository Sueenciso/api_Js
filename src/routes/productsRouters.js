const { Router } = require("express");
const routes = Router();

const product = [
  { id: 1, producttype: "lentes Oscuros", precio: 120 },
  { id: 2, producttype: "Mochila", precio: 450 },
  { id: 3, producttype: "Garrafón", precio: 48},
];

routes.get("/", (req, res) => {
  res.json(product);
});

routes.get("/:productsid", (req, res) => {
  const data = product.find((prod) => {
    return prod.id == req.params.productsid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "product not found" });
  }
});

module.exports = routes;
