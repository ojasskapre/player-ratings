import React from 'react';
import Link from 'next/link';
import { Match } from '@/types/matches';

type MatchCardProps = {
  match: Match;
};

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <Link href={`/matches/${match.id}`} passHref>
      <div className="bg-card text-card-foreground p-3 rounded-lg flex justify-between items-center transition-colors duration-200 hover:bg-card-hover cursor-pointer">
        <div className="flex-1 text-right">
          <span className="font-semibold">{match.homeTeam}</span>
        </div>
        <div className="flex items-center justify-center w-24 mx-4">
          {match.status === 'completed' ? (
            <span className="text-lg font-bold">
              {match.homeScore} - {match.awayScore}
            </span>
          ) : (
            <span className="text-lg text-muted-foreground">{match.time}</span>
          )}
        </div>
        <div className="flex-1 text-left">
          <span className="font-semibold">{match.awayTeam}</span>
        </div>
      </div>
    </Link>
  );
};

export default MatchCard;
