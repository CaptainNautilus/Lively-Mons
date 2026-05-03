{
    onTryHit(target, source, move) {
      if (target !== source && move.flags["slicing"]) {
        this.add("-immune", target, "[from] ability: Thick Skin");
        return null;
      }
    },
    onAllyTryHitSide(target, source, move) {
      if (move.flags["slicing"]) {
        this.add("-immune", this.effectState.target, "[from] ability: Thick Skin");
      }
    },
    flags: { breakable: 1 },
    name: "Thick Skin",
    rating: 3.5,
    num: 292
}