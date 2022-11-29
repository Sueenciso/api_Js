const {Router}=require("express");
const routes = Router();

const categories = [
  { id: 1, categorie: "confiteria", status: "old", contry: "USA" },
  { id: 2, categorie: "grocery", status: "new", contry: "" },
  { id: 3, categorie: "Jelly", status: "seg", contry: "MX" },
];

routes.get("/categories", (req, res) => {
  res.json(categories);
});

routes.get("/categories/:categoriesid", (req, res) => {
  const data = categories.find((cat) => {
    return cat.id == req.params.categoriesid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "categorie not found" });
  }
});

module.exports=routes;