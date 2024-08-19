import React from 'react';
import Link from 'next/link';
import { Match } from '@/types/matches';
import { Card, CardContent } from '@/components/ui/card';

type MatchCardProps = {
  match: Match;
};

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <Link href={`/matches/${match.id}`} passHref>
      <Card className="cursor-pointer border-0 shadow-none transition-colors duration-200 hover:bg-neutral-100">
        <CardContent className="flex justify-between items-center p-3">
          <div className="flex-1 text-right">
            <span className="font-semibold">{match.homeTeam}</span>
          </div>
          <div className="flex items-center justify-center w-24 mx-4">
            {match.status === 'completed' ? (
              <span className="text-lg font-bold">
                {match.homeScore} - {match.awayScore}
              </span>
            ) : (
              <span className="text-lg text-muted-foreground">
                {match.time}
              </span>
            )}
          </div>
          <div className="flex-1 text-left">
            <span className="font-semibold">{match.awayTeam}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MatchCard;
