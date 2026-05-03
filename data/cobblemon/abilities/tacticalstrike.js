{
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["bullet"]) {
        this.debug("Tactical Strike boost");
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Tactical Strike",
    rating: 3.5,
    num: 292
}