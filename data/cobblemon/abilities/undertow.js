{
    onModifyMove(move, pokemon) {
        if (!move.target) return;
        if (move.category !== 'Status') {
            move.target = 'allAdjacentFoes';
        }
    },
    name: "Undertow",
    flags: {},
    rating: 4,
}