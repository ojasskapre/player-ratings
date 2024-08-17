'use client';

import { useState, useEffect } from 'react';
import MatchDateSelector from '@/app/components/MatchDateSelector';
import LeagueMatchCard from '@/app/components/LeagueMatchCard';
import { League } from '@/types/matches';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [leagueMatches, setLeagueMatches] = useState<League[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `/api/matches?date=${selectedDate.toISOString()}`
      );
      const data = await response.json();
      setLeagueMatches(data);
    };

    fetchMatches();
  }, [selectedDate]);

  return (
    <>
      <MatchDateSelector onDateChange={setSelectedDate} />
      <div className="space-y-4">
        {leagueMatches.map((league) => (
          <LeagueMatchCard
            key={league.leagueName}
            leagueName={league.leagueName}
            matches={league.matches}
            countryCode={league.countryCode}
          />
        ))}
      </div>
    </>
  );
}
