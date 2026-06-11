{
	onTryHit(target, source, move) {
		if (!move.flags['sound']) return;

		target.boost({spa: 1});
		this.add('-immune', target, '[from] ability: Acoustics');
		return null;
	},

	onAllyTryHit(target, source, move) {
		if (!move.flags['sound']) return;

		this.add('-immune', target, '[from] ability: Acoustics');
		return null;
	},
	flags: {breakable: 1},
	name: "Acoustics",
	rating: 3.5,
	num: 292,
}