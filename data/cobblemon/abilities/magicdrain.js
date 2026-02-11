{
    name: "Magic Drain",
    onResidualOrder: 28,
    onResidualSubOrder: 2,
    onResidual(pokemon) {
        let activated = false;
        for (const target of pokemon.adjacentFoes()) {
            if (target.fainted) continue;
            if (target.volatiles['substitute']) continue;

            if (!activated) {
                this.add("-ability", pokemon, "Magic Drain");
                activated = true;
            }

            this.boost({spa: -1}, target, pokemon, null, true);
        }
    },
    flags: {},
    rating: 3.5
}