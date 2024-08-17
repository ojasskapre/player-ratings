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

export type TimelineEvent = {
  time: string;
  type:
    | 'goal'
    | 'yellow_card'
    | 'substitution'
    | 'red_card'
    | 'penalty'
    | 'own_goal';
  event: string;
  player?: string;
  assist?: string;
  player_in?: string;
  player_out?: string;
  team: 'home' | 'away';
};

export type MatchDetails = {
  id: number;
  leagueName: string;
  dateTime: string;
  stadium: string;
  referee: string;
  attendance: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homeBadge: string;
  awayBadge: string;
  timelineEvents: TimelineEvent[];
};

export type MatchDetailsTab = { id: string; displayName: string };
