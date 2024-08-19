import React from 'react';
import { TimelineEvent } from '@/types/matches';
import { Card, CardContent } from '@/components/ui/card';
import { Repeat, Icon } from 'lucide-react';
import { soccerBall } from '@lucide/lab';

type EventsProps = {
  events: TimelineEvent[];
};

const Events: React.FC<EventsProps> = ({ events }) => {
  // Helper function to render event icon
  const renderIcon = (event: TimelineEvent) => {
    switch (event.type) {
      case 'goal':
        return (
          <Icon
            className={`${event.event === 'Own goal' ? 'text-red-500' : ''}`}
            iconNode={soccerBall}
          />
        );
      case 'yellow_card':
        return (
          <div className="bg-yellow-500 h-6 w-5 rounded-sm border border-black" />
        );
      case 'red_card':
        return (
          <div className="bg-red-500 h-6 w-5 rounded-sm border border-black" />
        );

      case 'substitution':
        return <Repeat className="text-green-500 h-6 w-6" />;
      default:
        return null;
    }
  };

  // Helper function to render event details
  const renderEventDetails = (event: TimelineEvent) => (
    <div
      className={`flex items-center ${
        event.team === 'home' ? 'flex-row-reverse text-right' : 'text-left'
      }`}
    >
      <div className={`${event.team === 'home' ? 'ml-4' : 'mr-4'}`}>
        {renderIcon(event)}
      </div>
      <div>
        <div className="flex flex-col">
          <span className="font-semibold">{event.player}</span>{' '}
          {event.type === 'goal' && event.assist && (
            <span className="text-sm">assist by {event.assist}</span>
          )}
        </div>
        {event.type === 'goal' && event.event === 'Own goal' && (
          <span className="text-sm text-red-500">(OG)</span>
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

  return (
    <Card className="mt-4">
      {events.map((event, index) => (
        <CardContent
          key={index}
          className="flex justify-center items-center p-4"
        >
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
        </CardContent>
      ))}
    </Card>
  );
};

export default Events;
