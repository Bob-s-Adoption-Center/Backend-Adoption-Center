const { sequelize } = require("./db");
const { Dog } = require("./models/dog");

describe("Dog Datbase", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });

    const arrayOfDog = [
      {
        name: "Bob",
        breed: "Pug",
        age: "Young",
        location: "San Francisco",
        image:
          "img/Bob.jpeg",
        description: "Bob is a pug who loves to play fetch and is a good",
        gender: "Male",
        size: "Medium",
        color: "white",
        status: "Not Available",
      },
      {
        name: "Rocky",
        breed: "Chihuahua",
        age: "senior",
        location: "East Dallas",
        image: "img/Rocky.jpg",
        description:
          "Rocky is a sweet, cute little cuddly monkey. He loves long walks, cuddling in your lap at all times, and being your shadow. He's a senior dog that keeps mostly to himself. Doesn't mind children or other animals, but prefers not to play with them.  Likes to wrestle and looking out the window. Prefers warm locals versus a cold area. He has separation anxiety and prefers a human that works from home",
        gender: "Male",
        size: "small",
        color: "black",
      //   status: ""
      },
      {
        name: "Willow",
        breed: "Pomkie",
        age: "Young",
        location: "Garland, Tx",
        image: "img/Willow.jpg",
        description:
          "Willow loves being outside more than anything. She is very fast and loves using her full speed in a big backyard. She loves kids and women, but is occasionally weary of men. She has a really deep bark, she almost sounds like a bigger dog. She will gladly alert you of any intruders on the premises. She is very well trained to potty outside and to sit when told. She has such a beautiful coat that doesn’t require much grooming. She is a little anxious at times, especially in the car, but it’s likely that that can be helped over time. She is currently 7 pounds. ",
        gender: "Female",
        size: "small",
        color: "brown",
      },
      {
        name: "Indi",
        breed: "Pomeranian",
        age: "Puppy",
        location: "Mesquite, Tx",
        image: "img/Indi.jpg",
        description:
          "Indi loves being the center of attention and is super sassy. She begs for pets from strangers, so she loves meeting new people and is good with children. Her favorite toy is a mini Joker figure (will be sent with her) and previously she really enjoyed playing with her sister. She will definitely need another doggy companion. She’s still really young, only 3 months so she does sleep a lot, but when she’s awake, boy is she so full of energy. She loves going outside to play and run around. She is currently still learning to go potty outside. She will end up being between 7 and 10 pounds.",
        gender: "Female",
        size: "small",
        color: "brown",
      },
      {
        name: "Balto",
        breed: "German Shepherd",
        age: "Senior",
        location: "Cape Town, SA",
        image:
          "img/Balto.jpeg",
        description: "German breed of working dog of medium to large size. He has gone through service dog training and is certified. He is especially good for individuals with visual impairment.",
        gender: "Male",
        size: "Medium",
        color: "brown & black",
      },
      {
        name: "Pequena",
        breed: "Chihuahua",
        age: "young",
        location: "Bellevue, WA",
        image: "img/Pequena.jpg",
        description:
          "Pequena is a sweet and active chihuahua that loves to cuddle and belly rubs. She loves to be outside and play.",
        gender: "Female",
        size: "Medium",
        color: "brown",      
      },
    ];

    await Dog.bulkCreate(arrayOfDog);
  });
  // testing Dog, models
  test("can create dogs", async () => {
    const testDog = await Dog.findOne({ where: { name: "Bob" } });
    //expect(testDog.id).toBe(1)
    expect(testDog.name).toBe("Bob");
    expect(testDog.breed).toBe("pug");
    expect(testDog.age).toBe("Young");
    expect(testDog.location).toBe("San Francisco");
    expect(testDog.image).toBe(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSJiFgnYNscgb9g3uGXcQfpfnJ8XhPMF-Gw&usqp=CAU"
    );
    expect(testDog.description).toBe(
      "Bob is a pug who loves to play fetch and is a good"
    );
    expect(testDog.gender).toBe("Male");
    expect(testDog.size).toBe("Medium");
    expect(testDog.color).toBe("white");
    expect(testDog.status).toBe("Not Available");
  });

  afterAll(async () => {
    sequelize.close();
  });
});
