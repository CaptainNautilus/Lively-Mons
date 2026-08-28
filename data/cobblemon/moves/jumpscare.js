{
	num: 10139,
	accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Jumpscare",
		pp: 10,
		priority: 3,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Jumpscare only works on your first turn out.");
				return false;
			}
		},
		secondaries: [
			{
				chance: 50,
        volatileStatus: 'torment',
			}, 
      {
				chance: 100,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Ghost",
		contestType: "Tough",
}