{
	num: 9998,
	accuracy: true,
  basePower: 0,
  category: "Status",
  name: "Morning Prep",
  pp: 10,
  priority: 2,
  flags: { nonsky: 1, metronome: 1 },
  terrain: "grassyterrain",
  weather: "sunnyday",
  pseudoWeather: "watersport",
  secondary: null,
  onTry(source) {
      if (source.activeMoveActions > 1) {
        this.hint("Morning Prep only works on your first turn out.");
        return false;
      }
    },
  target: "all",
  type: "Grass",
  contestType: "Clever"
}