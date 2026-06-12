{
	num: 10127,
	accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Downpour",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onAfterMoveSecondarySelf(pokemon, target, move) {
      if (!target || target.fainted || target.hp <= 0)
        this.field.setWeather("raindance");
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Water",
    contestType: "Tough"
}