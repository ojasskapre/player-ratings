export type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  time?: string;
  status: 'completed' | 'scheduled';
};

export type League = {
  leagueName: string;
  countryCode: string;
  matches: Match[];
};
