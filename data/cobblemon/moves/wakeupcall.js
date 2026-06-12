{
	num: 10138,
	accuracy: 100,
    basePower: 250,
    category: "Special",
    name: "Wake-Up Call",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, noparentalbond: 1, sound: 1 },
    selfdestruct: "always",
    secondary: null,
    onTry() {
      this.field.addPseudoWeather("trickroom");
    },
    onTryHit(target) {
      const activeTeam = target.side.activeTeam();
      const foeActiveTeam = target.side.foe.activeTeam();
      for (const [i, allyActive] of activeTeam.entries()) {
        if (allyActive && allyActive.status === "slp")
          allyActive.cureStatus();
        const foeActive = foeActiveTeam[i];
        if (foeActive && foeActive.status === "slp")
          foeActive.cureStatus();
      }
    },
    target: "allAdjacent",
    type: "Flying",
    contestType: "Clever"
}