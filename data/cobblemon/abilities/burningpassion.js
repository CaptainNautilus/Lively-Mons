{
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
        let burnedPkmn = 0;
        for (const pokemon of this.getAllActive()) {
            if (pokemon.status === 'brn') {
                burnedPkmn++
            }
        }
        return this.chainModify(1 + (0.33 * burnedPkmn));
    },
    flags: {},
    name: "Burning Passion",
    rating: 3.5,
    num: 62
}