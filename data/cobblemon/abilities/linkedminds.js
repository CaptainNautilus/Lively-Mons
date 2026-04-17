{
    onPrepareHit(source, target, move) {
      if (move.category !== "Special" || move.multihit || move.flags["noparentalbond"] || move.flags["charge"] || move.flags["futuremove"] || move.isZ || move.isMax)
        return;
      move.multihit = 2;
      move.multihitType = "linkedminds";
    },
  onSourceModifyDamage(damage, source, target, move) {
    if (move.multihitType === "linkedminds" && move.hit === 2) {
      return this.chainModify(0.5);
    }
  },
  onSourceModifySecondaries(secondaries, target, source, move) {
    if (move.multihitType === "linkedminds" && move.id === "secretpower" && move.hit < 2) {
      return secondaries.filter(effect => effect.volatileStatus === "flinch");
    }
  },
    flags: {},
    name: "Linked Minds",
    rating: 4.5,
}