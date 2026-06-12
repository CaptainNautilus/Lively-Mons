{
	num: 10125,
	accuracy: 95,
  basePower: 45,
  category: "Physical",
  name: "Conflagration",
  pp: 15,
  priority: 0,
  flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
  secondary: {
    chance: 50,
    status: "brn"
  },
  onHit(pokemon, source) {
      const item = pokemon.getItem();
      if ((item.isBerry || item.isGem) && pokemon.takeItem(source)) {
        this.add("-enditem", pokemon, item.name, "[from] move: Conflagration");
      }
    },
  target: "allAdjacentFoes",
  type: "Fire"
}