({
	num: 10140,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Frameshift",
    pp: 10,
    priority: 0,
    flags: {
        protect: 1,
        mirror: 1,
        metronome: 1
    },
    onHit(target, source) {
        const types = [
            "Normal",
            "Fire",
            "Water",
            "Electric",
            "Grass",
            "Ice",
            "Fighting",
            "Poison",
            "Ground",
            "Flying",
            "Psychic",
            "Bug",
            "Rock",
            "Ghost",
            "Dragon",
            "Dark",
            "Steel",
            "Fairy"
        ];
        let newTypes;
        if (this.randomChance(1, 2)) {
            newTypes = [this.sample(types)];
        } else {
            const firstType = this.sample(types);
            const remainingTypes = types.filter(type => type !== firstType);
            const secondType = this.sample(remainingTypes);

            newTypes = [firstType, secondType];
        }
        if (!target.setType(newTypes)) {
            return false;
        }
        const typeText = newTypes.join(" / ");
        this.add(
            "-message",
            `${target.name}'s type was randomized to ${typeText}!`
        );

        this.add(
            "-start",
            target,
            "typechange",
            typeText
        );
    },
    target: "normal",
    type: "Poison",
    contestType: "Clever"
})