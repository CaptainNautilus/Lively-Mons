{
    onDamagingHit(damage, target, source, move) {
      if (!target.hp && move.category === "Physical") {
        target.side.addSideCondition("tailwind");
      }
    },
    flags: {},
    name: "Blowout",
    rating: 3.5,
    num: 62
}