{
	onAnyTryMove(target, source, move) {
		if (!move.flags['sound']) return;

		const holder = this.effectState.target;

		if (target === holder) {
			this.add('-immune', target, '[from] ability: Acoustic Absorption');
			this.boost({spa: 1}, holder);
			return false;
		}

		if (
			target.side === holder.side &&
			target !== holder
		) {
			this.add('-immune', target, '[from] ability: Acoustic Absorption');
			this.boost({spa: 1}, holder);
			return false;
		}
	},
	flags: {breakable: 1},
	name: "Acoustics",
	rating: 3.5,
	num: 292,
}