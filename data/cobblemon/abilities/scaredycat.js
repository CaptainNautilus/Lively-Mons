{
  onStart(pokemon) {
    if (
      pokemon.scaredyCatForme &&
      pokemon.species.name !== pokemon.scaredyCatForme &&
      !pokemon.transformed
    ) {
      pokemon.formeChange(pokemon.scaredyCatForme, this.effect);
    }
  },
  onDamagePriority: -30,
  onDamage(damage, target, source, effect) {
    if (
      !target.scaredyCatTriggered &&
      damage >= target.hp
    ) {
      target.scaredyCatTriggered = true;

      target.sethp(1);
      const healAmount = Math.floor(target.maxhp / 2) - target.hp;
      if (healAmount > 0) {
        this.heal(healAmount, target, target, this.effect);
      }

      if (target.baseSpecies.baseSpecies === "Nyenlives" && !target.transformed) {
        target.scaredyCatForme = target.species.id === "nyenlivesunboxed" ?
          "Nyenlives" : "Nyenlives-Unboxed";
        target.formeChange(target.scaredyCatForme, this.effect, '[silent]');
      }

      return 0;
    }
  },
  flags: { breakable: 1, failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
  name: "Scaredy Cat",
  rating: 3,
  num: -1
}
