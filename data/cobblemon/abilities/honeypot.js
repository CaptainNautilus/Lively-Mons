{
    onResidualOrder: 28,
    onResidualSubOrder: 2,
    onResidual(pokemon) {
      if (pokemon.activeTurns) {
      const success = this.heal(pokemon.baseMaxhp / 16);
      
      if (success) {
          this.add('-activate', pokemon, 'honeypot', '[silent]');
       }
      }
    },
    flags: {},
    name: "Honeypot",
    rating: 4.5
}