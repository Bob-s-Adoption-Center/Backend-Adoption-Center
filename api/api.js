var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({apiKey: "FH0CmnptF93sqY2kbZXkd9G3IjyBRcv37z3f2YBRY9SfOcVqca", secret: "oll8WTBxeeKYoEjFjdA1wYeMup0OjKWpLWq1pqQi"});

client.animal.search()
    .then(function (response) {
    })
    .catch(function (error) {
        console.log(error)
    });
