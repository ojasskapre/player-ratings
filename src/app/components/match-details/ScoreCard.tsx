import React from 'react';
import { TimelineEvent } from '@/types/matches';

type ScoreCardProps = {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homeBadge: string;
  awayBadge: string;
  events: TimelineEvent[];
};

const ScoreCard: React.FC<ScoreCardProps> = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeBadge,
  awayBadge,
  events,
}) => {
  const homeEvents = events.filter(
    (event) => event.team === 'home' && event.type === 'goal'
  );
  const awayEvents = events.filter(
    (event) => event.team === 'away' && event.type === 'goal'
  );

  return (
    <div className="p-8">
      {/* Scorecard */}
      <div className="flex justify-between items-center mb-2 pt-4 pb-8">
        <div className="flex items-center justify-end w-1/3">
          <span className="text-xl font-bold">{homeTeam}</span>
          <img src={homeBadge} alt={homeTeam} className="h-8 w-8 ml-4" />
        </div>
        <div className="text-4xl font-bold">
          {homeScore} - {awayScore}
        </div>
        <div className="flex items-center justify-start w-1/3">
          <img src={awayBadge} alt={awayTeam} className="h-8 w-8 mr-4" />
          <span className="text-xl font-bold">{awayTeam}</span>
        </div>
      </div>
      {/* Goal events */}
      <div className="flex justify-between text-muted-foreground text-md">
        <div className="w-1/3 text-right">
          {homeEvents.map((event, index) => (
            <div key={index} className="mb-1">
              {event.player} {event.time}'
              {event.event.includes('Own goal') && ' (OG)'}
            </div>
          ))}
        </div>
        <div className="w-1/3 text-center">⚽</div>
        <div className="w-1/3 text-left">
          {awayEvents.map((event, index) => (
            <div key={index} className="mb-1">
              {event.player} {event.time}'
              {event.event.includes('Own goal') && ' (OG)'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
