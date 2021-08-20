const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

let fortunes = [
'Savor your freedom – it is precious.',
'Say hello to others. You will have a happier day.',
'Self-knowledge is a life long process.',
'Share your joys and sorrows with your family.',
'Sift through your past to get a better idea of the present.',
'Sloth makes all things difficult; industry all easy.',
'Small confidences mark the onset of a friendship.'
]

app.get("/api/fortune", (req, res) => {

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomfortune = fortunes[randomIndex];

  res.status(200).send(randomfortune)
})

app.post("/api/fortuneUpdate", (req, res) => {
  fortunes.push(req.body.fortune)
  console.log(req.body.fortune)
  res.status(200).send(fortunes)
})

let restaurants = ['Shake Shack', 'Taco Bell', 'Raising Canes', 'Dominoes']

app.get("/api/food", (req, res) => {
  let randomIndex = Math.floor(Math.random() * restaurants.length);
  let randomrestaurant = restaurants[randomIndex];

  res.status(200).send(randomrestaurant)
})

let pokeId = 0

let pokeTeam = []

function createPoke(req, res) {
  let {name, image} = req.body
  let newPoke = {
    id: pokeId,
    name,
    image
  }
  pokeTeam.push(newPoke)
  res.status(200).send(pokeTeam)
  pokeId++
}

app.listen(4000, () => console.log("Server running on 4000"));
