{
	num: 9998,
	accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Jet Stream Lively",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, wind: 1 },
    priority: 1,
    onModifyMove(move, pokemon) {
		if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
	},
    target: "normal",
    type: "Flying",
    contestType: "Clever"
}