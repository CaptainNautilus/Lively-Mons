{
    onAnyInvulnerabilityPriority: 1,
    onAnyInvulnerability(target, source, move) {
      if (move && source && source.side === this.effectState.target.side && !move.ohko && move.category !== 'Status')
        return 0;
    },
    onAnyAccuracy(accuracy, target, source, move) {
      if (move && source && source.side === this.effectState.target.side && !move.ohko && move.category !== 'Status') {
        return true;
      }
      return accuracy;
    },
    flags: {},
    name: "Starlight",
    rating: 4
}