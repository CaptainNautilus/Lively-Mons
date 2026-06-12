{
	num: 10126,
	accuracy: 100,
  basePower: 100,
  category: "Special",
  name: "Crash Landing",
  pp: 10,
  priority: 0,
  flags: { contact: 1, protect: 1, mirror: 1, distance: 1, metronome: 1 },
  onBasePower(basePower, source) {
    if (this.field.isTerrain("psychicterrain")) {
      this.debug("crash landing psychic terrain boost");
      return this.chainModify(1.5);
    }
  },
  recoil: [33, 100],
  target: "normal",
  type: "Steel",
  contestType: "Cool"
}