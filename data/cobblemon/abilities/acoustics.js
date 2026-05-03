{
    onFoeTryMove(target, source, move) {
      const targetAllExceptions = ["perishsong"];
      if (move.target === "foeSide" || move.target === "all" && !targetAllExceptions.includes(move.id)) {
        return;
      }
      const acousticsHolder = this.effectState.target;
      if ((source.isAlly(acousticsHolder) || move.target === "all") && move.flags["sound"]) {
        this.attrLastMove("[still]");
        this.add("cant", acousticsHolder, "ability: Acoustics", move, "[of] " + target);
        acousticsHolder.boost({ spa: 1 });
        return false;
      }
    },
    flags: { breakable: 1 },
    name: "Acoustics",
    rating: 3.5,
    num: 292
}