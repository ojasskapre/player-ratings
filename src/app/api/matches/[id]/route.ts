import { NextResponse } from 'next/server';
import { MatchDetails } from '@/types/matches';

// TODO: replace with actual API call
const fetchMatchDetails = (id: string): MatchDetails | null => {
  // Dummy data for match details
  if (id === '1') {
    return {
      id: 1,
      leagueName: 'England - Premier League',
      dateTime: '2024-08-16T12:00:00Z',
      stadium: 'Old Trafford',
      referee: 'Robert Jones',
      attendance: 73297,
      homeTeam: 'Manchester United',
      awayTeam: 'Fulham',
      homeScore: 1,
      awayScore: 0,
      homeBadge: '/images/man-united-badge.png',
      awayBadge: '/images/fulham-badge.png',
      timelineEvents: [
        {
          time: '25',
          type: 'goal',
          event: 'Goal',
          player: 'Zirkzee',
          assist: 'Bruno Fernandes',
          team: 'home',
        },
        {
          time: '34',
          type: 'yellow_card',
          event: 'Yellow card',
          player: 'Juanlu Sánchez',
          team: 'away',
        },
        {
          time: '42',
          type: 'goal',
          event: 'Own goal',
          player: 'Tanguy Nianzou',
          team: 'home',
        },
        {
          time: '61',
          type: 'goal',
          event: 'Goal',
          player: 'Juanlu Sánchez',
          assist: 'Isaac Romero',
          team: 'away',
        },
        {
          time: '68',
          type: 'substitution',
          event: 'Substitution',
          player_in: 'Sandro Ramirez',
          player_out: 'Jaime Mata',
          team: 'home',
        },
        {
          time: '71',
          type: 'goal',
          event: 'Goal',
          player: 'Sandro Ramirez',
          assist: 'Javier Munoz',
          team: 'home',
        },
        {
          time: '74',
          type: 'substitution',
          event: 'Substitution',
          player_in: 'Jesus Navas',
          player_out: 'Dodi Lukebakio',
          team: 'away',
        },
      ],
    };
  } else if (id === '2') {
    return {
      id: 2,
      leagueName: 'England - Premier League',
      dateTime: '2024-08-17T15:00:00Z',
      stadium: 'Stamford Bridge',
      referee: 'Michael Oliver',
      attendance: 41000,
      homeTeam: 'Chelsea',
      awayTeam: 'Man City',
      homeScore: 2,
      awayScore: 2,
      homeBadge: '/images/chelsea-badge.png',
      awayBadge: '/images/man-city-badge.png',
      timelineEvents: [
        {
          time: '23',
          type: 'goal',
          event: 'Goal',
          player: 'Raheem Sterling',
          assist: 'Reece James',
          team: 'home',
        },
        {
          time: '45+2',
          type: 'yellow_card',
          event: 'Yellow card',
          player: 'Thiago Silva',
          team: 'home',
        },
        {
          time: '49',
          type: 'goal',
          event: 'Goal',
          player: 'Erling Haaland',
          assist: 'Kevin De Bruyne',
          team: 'away',
        },
        {
          time: '78',
          type: 'substitution',
          event: 'Substitution',
          player_in: 'Phil Foden',
          player_out: 'Jack Grealish',
          team: 'away',
        },
        {
          time: '85',
          type: 'goal',
          event: 'Goal',
          player: 'Kai Havertz',
          assist: 'Ben Chilwell',
          team: 'home',
        },
        {
          time: '90+3',
          type: 'goal',
          event: 'Goal',
          player: 'Bernardo Silva',
          assist: 'Riyad Mahrez',
          team: 'away',
        },
      ],
    };
  }

  // Return null if match not found
  return null;
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { error: 'Match ID is required' },
      { status: 400 }
    );
  }

  const matchDetails = fetchMatchDetails(id);

  if (!matchDetails) {
    return NextResponse.json({ error: 'Match not found' }, { status: 404 });
  }

  return NextResponse.json(matchDetails);
}
