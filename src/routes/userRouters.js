const { Router } = require("express");
const routes = Router();

const users = [
  { id: 1, username: "admin", firstname: "Admin", lastname: "System" },
  { id: 2, username: "staff", firstname: "Staff", lastname: "" },
  { id: 3, username: "customers", firstname: "John", lastname: "Doe" },
];

routes.get("/users", (req, res) => {
  res.json(users);
});

routes.get("/users/:userid", (req, res) => {
  const data = users.find((user) => {
    return user.id == req.params.userid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "ususer not found" });
  }
});

module.exports = routes;
