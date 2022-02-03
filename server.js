const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const { sequelize } = require("./db");
const { Dog } = require("./models/dog");
const { Dogs } = require("./models/dogs");

// serve static assets from the public/ folder
app.use(express.static(__dirname + "/"));
// support the parsing of incoming requests with json payloads
app.use(express.json());
// support the parsing of incoming requests with urlencoded payloads (e.g. form POST)
app.use(express.urlencoded({ extended: false }));

app.get('/dog', async (req, res) => {
  const dog = await Dog.findByPk(req.params.id);
  res.json(dog)
})

app.get('/dogs', async (req, res) => {
  const dogs = await Dog.findAll();
  res.json(dogs)
})


app.listen(port, () => {
    sequelize.sync(() => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  });