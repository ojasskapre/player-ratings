import React from 'react';
import { MatchDetailsTab } from '@/types/matches';

type TabSelectorProps = {
  selectedTab: MatchDetailsTab;
  homeTeam: string;
  awayTeam: string;
  onSelectTab: (tab: MatchDetailsTab) => void;
};

const TabSelector: React.FC<TabSelectorProps> = ({
  selectedTab,
  homeTeam,
  awayTeam,
  onSelectTab,
}) => {
  const tabs = [
    { id: 'line_up', displayName: 'Line Up' },
    { id: 'events', displayName: 'Events' },
    { id: 'stats', displayName: 'Stats' },
    {
      id: 'home_team_player_rating',
      displayName: `${homeTeam}'s Player Rating`,
    },
    {
      id: 'away_team_player_rating',
      displayName: `${awayTeam}'s Player Rating`,
    },
  ];

  return (
    <div className="flex justify-left p-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSelectTab(tab)}
          className={`text-md font-semibold px-4 py-2 ${
            selectedTab.id === tab.id
              ? 'bg-primary text-foreground border-b-2 border-b-white'
              : 'text-muted-foreground hover:bg-card hover:text-foreground'
          }`}
        >
          {tab.displayName}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
