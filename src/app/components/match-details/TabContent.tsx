import React from 'react';
import { MatchDetailsTab } from '@/types/matches';
import Events from './Events';
import { TimelineEvent } from '@/types/matches';
import { Card, CardContent } from '@/components/ui/card';

type TabContentProps = {
  selectedTab: MatchDetailsTab;
  events: TimelineEvent[];
};

const TabContent: React.FC<TabContentProps> = ({ selectedTab, events }) => {
  switch (selectedTab.id) {
    case 'line_up':
      return (
        <Card className="mt-4">
          <CardContent className="pt-4">
            Content for {selectedTab.displayName} tab will go here.
          </CardContent>
        </Card>
      );
    case 'events':
      return <Events events={events} />;
    case 'stats':
      return (
        <Card className="mt-4">
          <CardContent className="pt-4">
            Content for {selectedTab.displayName} tab will go here.
          </CardContent>
        </Card>
      );
    case 'home_team_player_rating':
    case 'away_team_player_rating':
      return (
        <Card className="mt-4">
          <CardContent className="pt-4">
            Content for {selectedTab.displayName} tab will go here.
          </CardContent>
        </Card>
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
