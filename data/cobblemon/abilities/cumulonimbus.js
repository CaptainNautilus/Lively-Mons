{
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon) {
      if (["sunnyday", "desolateland", "hail", "snow", "raindance", "primordialsea", "sandstorm"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(1.5);
      }
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      if (["sunnyday", "desolateland", "hail", "snow", "raindance", "primordialsea", "sandstorm"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Cumulonimbus",
    rating: 4
}