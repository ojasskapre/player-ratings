'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MatchHeader from '@/app/components/match-details/Header';
import MatchMetadata from '@/app/components/match-details/Metadata';
import ScoreCard from '@/app/components/match-details/ScoreCard';
import TabSelector from '@/app/components/match-details/TabSelector';
import TabContent from '@/app/components/match-details/TabContent';
import { MatchDetails, MatchDetailsTab } from '@/types/matches';

export default function MatchDetailsPage() {
  const { id } = useParams();

  const [matchDetails, setMatchDetails] = useState<MatchDetails | null>(null);
  const [selectedTab, setSelectedTab] = useState<MatchDetailsTab>({
    id: 'line_up',
    displayName: 'Line Up',
  });

  useEffect(() => {
    const fetchMatchDetails = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/matches/${id}`);

          // Check if the response is not ok
          if (!response.ok) {
            throw new Error('Failed to fetch match details');
          }

          const data = await response.json();
          setMatchDetails(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchMatchDetails();
  }, [id]);

  if (!matchDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-card rounded-xl">
        <MatchHeader leagueName={matchDetails.leagueName} />
        <MatchMetadata
          dateTime={matchDetails.dateTime}
          stadium={matchDetails.stadium}
          referee={matchDetails.referee}
          attendance={matchDetails.attendance}
        />
        <ScoreCard
          homeTeam={matchDetails.homeTeam}
          awayTeam={matchDetails.awayTeam}
          homeScore={matchDetails.homeScore}
          awayScore={matchDetails.awayScore}
          homeBadge={matchDetails.homeBadge}
          awayBadge={matchDetails.awayBadge}
          events={matchDetails.timelineEvents}
        />
        <TabSelector
          selectedTab={selectedTab}
          homeTeam={matchDetails.homeTeam}
          awayTeam={matchDetails.awayTeam}
          onSelectTab={setSelectedTab}
        />
      </div>
      <TabContent
        selectedTab={selectedTab}
        events={matchDetails.timelineEvents}
      />
    </>
  );
}
