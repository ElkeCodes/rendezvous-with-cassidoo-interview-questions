export type Inning = [number, number];

type Result = {
  homeTotal: number;
  awayTotal: number;
  homeLedInnings: Array<number>;
  awayLedInnings: Array<number>;
  winner: "home" | "away";
};

export function analyzeBaseballGame(innings: Array<Inning>): Result {
  let homeTotal = 0,
    awayTotal = 0;
  const homeLedInnings: Array<number> = [],
    awayLedInnings: Array<number> = [];
  innings.forEach(([homeScore, awayScore], index) => {
    homeTotal += homeScore;
    awayTotal += awayScore;
    (homeScore >= awayScore ? homeLedInnings : awayLedInnings).push(index + 1);
  });
  return {
    homeTotal,
    awayTotal,
    homeLedInnings,
    awayLedInnings,
    winner: homeTotal > awayTotal ? "home" : "away",
  };
}
