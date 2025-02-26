const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extend: true }));

// Routing
app.get("/", (req, res) => {
  res.send("<h1>Welcome to my home page.</h1>");
});

app.get("/item/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Received item id: ${id}`);
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send(`Received email: ${email}, password: ${password}`);
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  res.send(
    `Received email: ${email}, password: ${password}, confirm-password: ${password}`
  );
});

//start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
