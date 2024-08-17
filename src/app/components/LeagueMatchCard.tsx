import React from 'react';
import { League } from '@/types/matches';
import ReactCountryFlag from 'react-country-flag';

type LeagueMatchCardProps = League;

const LeagueMatchCard: React.FC<LeagueMatchCardProps> = ({
  leagueName,
  countryCode,
  matches,
}) => {
  return (
    <div className="bg-primary text-foreground rounded-lg shadow mb-4">
      <div className="bg-secondary p-4 rounded-t-lg flex items-center space-x-2">
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
      </div>
      <div className="p-2 space-y-1">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-card text-card-foreground p-3 rounded-lg flex justify-between items-center"
          >
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeagueMatchCard;
