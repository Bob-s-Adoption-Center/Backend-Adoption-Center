const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const { sequelize } = require("./db");
const { Dog } = require("./models/dog");
const { User } = require("./models/user");

// bcrypt encryption imported
const bcrypt = require("bcrypt");
const saltRounds = 10;


//cors
const cors = require('cors');
app.use(cors());


// serve static assets from the public/ folder
app.use(express.static(__dirname + "/public"));
// support the parsing of incoming requests with json payloads
app.use(express.json());
// support the parsing of incoming requests with urlencoded payloads (e.g. form POST)
app.use(express.urlencoded({ extended: false }));

app.get('/dogs/:id/:id', async (req, res) => {
  const dog = await Dog.findByPk(req.params.id);
  //testing to see if {} is needed
  res.json({dog});
})

app.get('/dogs/:id', async (req, res) => {
  const dog = await Dog.findByPk(req.params.id);
  //testing to see if {} is needed
  res.json({dog});
})

app.get('/dogs', async (req, res) => {
  const dogs = await Dog.findAll();
  res.json({dogs})
})

app.post('/signin', async (req,res) =>{
  const theUser = await User.findOne({
      where: {
          email: req.body.email
      }
  })
  res.send('User found')
});


  app.post("/signup", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

      bcrypt.hash(password, saltRounds, async function (err, hash) {
        // add user to db based on html form data with hashed password
        const newUser = await User.create({
          email: email,
          password: hash
        });
      });
      res.send("User created")
    });

app.listen(port, () => {
    sequelize.sync(() => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  });