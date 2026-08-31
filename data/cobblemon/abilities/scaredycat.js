{
    onDamagePriority: -30,
    onDamage(damage, target, source, effect) {
        if (target.hp === target.maxhp && damage >= target.hp && target.boxFormChanged !== true) {
            this.add('-ability', target, 'Scaredy Cat');
            target.hp = 1;
            this.heal(Math.floor(target.maxhp / 2) - 1, target);

            if (target.species.forme === "Nyenlives-Unboxed") {
                target.formeChange("Nyenlives-Boxed");
            } else {
                target.formeChange("Nyenlives-Unboxed");
            }
            target.boxFormChanged = true;
            return 0;
        }
    },
    flags: { breakable: 1 },
    name: "Scaredy Cat",
    rating: 3,
    num: -1,
}