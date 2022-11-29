const { Router } = require("express");
const routes = Router();

const product = [
  { id: 1, productName: "Alfa", Description: "one", precio: "System" },
  { id: 2, productName: "Beta", Description: "two", precio: "" },
  { id: 3, productName: "Gama", Description: "three", precio: "Doe" },
];

routes.get("/products", (req, res) => {
  res.json(product);
});

routes.get("/products/:productsid", (req, res) => {
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
