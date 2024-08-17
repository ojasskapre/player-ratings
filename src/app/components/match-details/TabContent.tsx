import React from 'react';
import { MatchDetailsTab } from '@/types/matches';
import Events from './Events'; // Import the Events component
import { TimelineEvent } from '@/types/matches';

type TabContentProps = {
  selectedTab: MatchDetailsTab;
  events: TimelineEvent[];
};

const TabContent: React.FC<TabContentProps> = ({ selectedTab, events }) => {
  switch (selectedTab.id) {
    case 'line_up':
      return (
        <div className="bg-card p-4 rounded-lg">
          <p className="text-muted-foreground">
            Content for {selectedTab.displayName} tab will go here.
          </p>
        </div>
      );
    case 'events':
      return <Events events={events} />;
    case 'stats':
      return (
        <div className="bg-card p-4 rounded-lg">
          <p className="text-muted-foreground">
            Content for {selectedTab.displayName} tab will go here.
          </p>
        </div>
      );
    case 'home_team_player_rating':
    case 'away_team_player_rating':
      return (
        <div className="bg-card p-4 rounded-lg">
          <p className="text-muted-foreground">
            Content for {selectedTab.displayName} tab will go here.
          </p>
        </div>
      );
    default:
      return (
        <div className="bg-card p-4 rounded-lg">
          <p className="text-muted-foreground">
            Content for {selectedTab.displayName} tab will go here.
          </p>
        </div>
      );
  }
};

export default TabContent;
