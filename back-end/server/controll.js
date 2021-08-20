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
  }