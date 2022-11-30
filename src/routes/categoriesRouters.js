const { Router } = require("express");
const routes = Router();

const categories = [
  { id: 1, categorie: "confiteria", status: "old", contry: "USA" },
  { id: 2, categorie: "grocery", status: "new", contry: "URS" },
  { id: 3, categorie: "Jelly", status: "seg", contry: "MX" },
];

routes.get("/", (req, res) => {
  res.json(categories);
});

routes.get("/:categoriesid", (req, res) => {
  const data = categories.find((cat) => {
    return cat.id == req.params.categoriesid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "categorie not found" });
  }
});

routes.post("/",(req,res)=>{
  const data = req.body;

  const {categorie,status,contry}=data;
  const newCategorie={id: 4,categorie,status,contry};
  if(!data){
    res.status(400).json({message: "user data is required"});
  }else{
    res.status(201).json({
      ok:true,
      message: "categoria añadida exitosamente",
      payload: newCategorie
    });
  }
});

module.exports=routes;
