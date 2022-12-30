// File Sharing Application

const express = require("express");
const { engine } = require("express-handlebars");
const hbs = require("handlebars");
const app = express();
const port = 3000;
const path = require("path");
const router = require(path.join(__dirname, "routers"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
// const db = require(path.join(__dirname, "config", "db"));
const db = require(path.join(__dirname, "config", "db"));
db.connect();

// Handlebars express template engine (And setup)
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerHelper("ifCond", function (value1) {
  if (value1) {
    return value1;
  }
});

// Use static files (html, css, js, etc)
app.use(express.static("public"));

/*
  ¯\_(❛0 ‿❛0)_/¯

  # This project has done !
*/

app.use("/", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
