{
    onAnyModifyDamage(damage, source, target, move) {
      if (target.isAlly(this.effectState.target) && ["allAdjacent", "allAdjacentFoes"].includes(move.target)) {
        this.debug("Forest's Guardian Weaken");
        return this.chainModify(0.5);
      }
    },
    name: "Forest's Guardian",
    flags: { breakable: 1 },
    rating: 0,
}