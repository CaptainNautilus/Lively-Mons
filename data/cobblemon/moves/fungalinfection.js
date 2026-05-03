{
	num: 9998,
	accuracy: 100,
	basePower: 75,
	category: "Physical",
	name: "Fungal Infection",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, powder: 1},
	onHit(target, source) {
	  if (target.status === "slp" || !target.cureStatus()) return;
      target.trySetStatus("slp", source);
    },
	target: "normal",
	type: "Grass",
	contestType: "Tough",
}