const { sequelize } = require('./db')
const { Dog } = require('/models/dog')

const seedDog = [{
    name: "Bob",
    breed: "pug",
    age: 2,
    location: "San Francisco",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSJiFgnYNscgb9g3uGXcQfpfnJ8XhPMF-Gw&usqp=CAU",
    description: "Bob is a pug who loves to play fetch and is a good",
    gender: "Male"
},
{
    name: "Rocky",
    breed: "chihuahua",
    age: "senior",
    location: "East Dallas",
    image: "public/Rocky.jpg",
    description: "Rocky is a sweet, cute little cuddly monkey. He loves long walks, cuddling in your lap at all times, and being your shadow. He's a senior dog that keeps mostly to himself. Doesn't mind children or other animals, but prefers not to play with them.  Likes to wrestle and looking out the window. Prefers warm locals versus a cold area. He has separation anxiety and prefers a human that works from home",
    gender: "Male"
},
{
    name: "Willow",
    breed: "Pomkie",
    age: "Young",
    location: "Garland, Tx",
    image: "",
    description: "Willow loves being outside more than anything. She is very fast and loves using her full speed in a big backyard. She loves kids and women, but is occasionally weary of men. She has a really deep bark, she almost sounds like a bigger dog. She will gladly alert you of any intruders on the premises. She is very well trained to potty outside and to sit when told. She has such a beautiful coat that doesn’t require much grooming. She is a little anxious at times, especially in the car, but it’s likely that that can be helped over time. She is currently 7 pounds. ",
    gender: "Female"
},
{
    name: "Indi",
    breed: "Pomeranian",
    age: "Puppy",
    location: "Mesquite, Tx",
    image: "",
    description: "Indi loves being the center of attention and is super sassy. She begs for pets from strangers, so she loves meeting new people and is good with children. Her favorite toy is a mini Joker figure (will be sent with her) and previously she really enjoyed playing with her sister. She will definitely need another doggy companion. She’s still really young, only 3 months so she does sleep a lot, but when she’s awake, boy is she so full of energy. She loves going outside to play and run around. She is currently still learning to go potty outside. She will end up being between 7 and 10 pounds.",
    gender: "Female"
},
{
    name: "Balto",
    breed: "German Shepherd",
    age: "Senior",
    location: "Cape Town, SA",
    image: "https://www.countrysideveterinaryclinic.org/sites/default/files/styles/large/public/german-shepherd-dog-breed-info.jpg",
    description: "German breed of working dog of medium to large size",
    gender: "Male"
},
{
    name: "Pequena",
    breed: "chihuahua",
    age: "young",
    location: "Bellevue, WA",
    image: "",
    description: "Pequena is a sweet and active chihuahua that loves to cuddle and belly rubs. She loves to be outside and play.",
    gender: "Female"
},

]

const seed = async() => {
    try {
    await sequelize.sync({ force: true});
    await sequelize.authenticate();
    await Dog.bulkCreate(seedDog, {validate: true})
    console.log("Connection has been established successfully.");
    sequelize.close()
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
}
return seed();