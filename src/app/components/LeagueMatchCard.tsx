import React from 'react';
import { League } from '@/types/matches';
import ReactCountryFlag from 'react-country-flag';
import MatchCard from './MatchCard';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

type LeagueMatchCardProps = League;

const LeagueMatchCard: React.FC<LeagueMatchCardProps> = ({
  leagueName,
  countryCode,
  matches,
}) => {
  return (
    <Card className="rounded-lg shadow mb-4">
      <CardHeader className="bg-secondary p-4 rounded-t-lg flex space-x-2">
        <div className="flex items-center space-x-4">
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{
              width: '1.2em',
              height: '1.2em',
            }}
            title={countryCode}
          />
          <h2 className="text-lg font-bold">{leagueName}</h2>
        </div>
      </CardHeader>
      <CardContent className="p-2 space-y-1">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </CardContent>
    </Card>
  );
};

export default LeagueMatchCard;
