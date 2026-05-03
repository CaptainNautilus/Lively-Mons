{
	num: 9998,
	accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Oxidizing Agent",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    secondary: null,
    onEffectiveness(typeMod, target, type) {
      if (type === "Steel") return 1;
    },
    secondary: {
      chance: 50,
      status: "tox"
    },
    ignoreImmunity: { "Poison": true },
    target: "normal",
    type: "Poison",
    contestType: "Tough"
}