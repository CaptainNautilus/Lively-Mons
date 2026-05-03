{
    onAfterMove(pokemon, target, move) {
        if (move.priority > 0 && !pokemon.volatiles["charge"] && move.category !== "Status") {
          pokemon.addVolatile("charge");
        }
    },
    flags: {},
    name: "Wind Turbine",
    rating: 3.5,
    num: 62
}