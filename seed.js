const { sequelize } = require('./db')
const { Dog } = require('./models/dog')

const seedDogs = [{
    name: "Bob",
    breed: "pug",
    age: 2,
    location: "San Francisco",
    image: "https://www.petmd.com/sites/default/files/petmd-kitten-happy-6.jpg",
    description: "Bob is a pug who loves to play fetch and is a good",
    gender: "boy"
}
]

const seed = async() => {
    try {
    await sequelize.sync({ force: true});
    await sequelize.authenticate();
    await Dog.bulkCreate(seedDogs, {validate: true})
    console.log("Connection has been established successfully.");
    sequelize.close()
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
}
return seed();