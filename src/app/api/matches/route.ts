import { NextResponse } from 'next/server';
import { League } from '@/types/matches';

const fetchMatches = (date: Date): League[] => {
  // TODO: add actual logic to fetch matches based on the date
  return [
    {
      leagueName: 'England - Premier League',
      countryCode: 'GB',
      matches: [
        {
          id: 1,
          homeTeam: 'Man United',
          awayTeam: 'Fulham',
          homeScore: 1,
          awayScore: 0,
          status: 'completed',
        },
        {
          id: 2,
          homeTeam: 'Chelsea',
          awayTeam: 'Man City',
          time: '15:00',
          status: 'scheduled',
        },
      ],
    },
    {
      leagueName: 'Spain - La Liga',
      countryCode: 'ES',
      matches: [
        {
          id: 1,
          homeTeam: 'Barcelona',
          awayTeam: 'Real Madrid',
          homeScore: 2,
          awayScore: 1,
          status: 'completed',
        },
        {
          id: 2,
          homeTeam: 'Atletico Madrid',
          awayTeam: 'Valencia',
          status: 'scheduled',
          time: '15:00',
        },
        {
          id: 3,
          homeTeam: 'Girona',
          awayTeam: 'Real Betis',
          status: 'scheduled',
          time: '21:00',
        },
      ],
    },
  ];
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dateParam = searchParams.get('date');

  if (!dateParam) {
    return NextResponse.json({ error: 'Date is required' }, { status: 400 });
  }

  const matches = fetchMatches(new Date(dateParam));
  return NextResponse.json(matches);
}
