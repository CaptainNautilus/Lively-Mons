{
onAnyTryHit(target, source, move) {
	if (!move.flags['sound']) return;

	const holder = this.effectState.target;

	if (target.side !== holder.side) return;

	this.add('-immune', target, '[from] ability: Acoustics');
	
	if (!move.acousticsBoosted) {
		move.acousticsBoosted = true;
		this.boost({spa: 1}, holder);
	}
		return null;
},
	flags: {breakable: 1},
	name: "Acoustics",
	rating: 3.5,
	num: 292,
}