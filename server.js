const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// const { sequelize } = require("./db");

var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({apiKey: "FH0CmnptF93sqY2kbZXkd9G3IjyBRcv37z3f2YBRY9SfOcVqca", secret: "oll8WTBxeeKYoEjFjdA1wYeMup0OjKWpLWq1pqQi"});

client.animal.search()
    .then(function (response) {
    })
    .catch(function (error) {
        console.log(error)
    });

// serve static assets from the public/ folder
app.use(express.static(__dirname + "/"));
// support the parsing of incoming requests with json payloads
app.use(express.json());
// support the parsing of incoming requests with urlencoded payloads (e.g. form POST)
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    // sequelize.sync(() => {
      console.log(`Server listening at http://localhost:${port}`);
    // });
  });