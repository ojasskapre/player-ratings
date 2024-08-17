import React from 'react';
import { TimelineEvent } from '@/types/matches';

type EventsProps = {
  events: TimelineEvent[];
};

const Events: React.FC<EventsProps> = ({ events }) => {
  return (
    <div className="bg-card p-4 rounded-xl">
      {events.map((event, index) => (
        <div key={index} className="flex justify-center items-center mb-6">
          {/* Home Team Events on the Left */}
          <div className="w-1/3 text-right">
            {event.team === 'home' && renderEventDetails(event)}
          </div>

          {/* Centered Time */}
          <div className="w-1/6 text-center flex items-center justify-center">
            <div className="text-lg font-semibold rounded-full bg-muted flex items-center justify-center h-12 w-12 p-2">
              {`${event.time}'`}
            </div>
          </div>

          {/* Away Team Events on the Right */}
          <div className="w-1/3 text-left">
            {event.team === 'away' && renderEventDetails(event)}
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function to render event details
const renderEventDetails = (event: TimelineEvent) => (
  <div
    className={`flex items-center ${
      event.team === 'home' ? 'flex-row-reverse text-right' : 'text-left'
    }`}
  >
    <div className={`${event.team === 'home' ? 'ml-4' : 'mr-4'}`}>
      {renderIcon(event.type)}
    </div>
    <div>
      <div className="flex flex-col">
        <span className="text-white font-semibold">{event.player}</span>{' '}
        {event.type === 'goal' && event.assist && (
          <span className="text-muted-foreground text-sm">
            assist by {event.assist}
          </span>
        )}
      </div>
      {event.type === 'goal' && event.event === 'Own goal' && (
        <span className="text-muted-foreground"> (OG)</span>
      )}
      {event.type === 'substitution' && (
        <div>
          <div className="flex flex-col">
            <span className="text-green-500">{event.player_in}</span>
            <span className="text-red-500">{event.player_out}</span>
          </div>
        </div>
      )}
    </div>
  </div>
);

// Helper function to render event icon
const renderIcon = (type: string) => {
  switch (type) {
    case 'goal':
      return <span className="text-white text-2xl">⚽</span>;
    case 'own_goal':
      return <span className="text-red-500 text-2xl">⚽</span>;
    case 'yellow_card':
      return <span className="text-yellow-500 text-2xl">🟨</span>;
    case 'substitution':
      return <span className="text-green-500 text-2xl">🔄</span>;
    default:
      return null;
  }
};

export default Events;
