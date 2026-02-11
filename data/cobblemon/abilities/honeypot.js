{
    onResidualOrder: 28,
    onResidualSubOrder: 2,
    onResidual(pokemon) {
      if (pokemon.activeTurns) {
      this.heal(pokemon.baseMaxhp / 16);
      }
    },
    flags: {},
    name: "Honeypot",
    rating: 4.5
}