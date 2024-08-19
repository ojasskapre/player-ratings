import React from 'react';
import { MatchDetailsTab } from '@/types/matches';
import { Button } from '@/components/ui/button'; // Importing the shadcn Button component

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
    <div className="flex justify-start p-2 mb-4">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant="ghost"
          onClick={() => onSelectTab(tab)}
          className={`text-md font-semibold px-4 py-2 shadow-none rounded-none  ${
            selectedTab.id === tab.id
              ? 'bg-none border-b-2 border-b-neutral-600'
              : ''
          }`}
        >
          {tab.displayName}
        </Button>
      ))}
    </div>
  );
};

export default TabSelector;
