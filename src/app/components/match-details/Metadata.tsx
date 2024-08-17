import React from 'react';
import { format } from 'date-fns';

type MatchMetadataProps = {
  dateTime: string;
  stadium: string;
  referee: string;
  attendance: number;
};

const MatchMetadata: React.FC<MatchMetadataProps> = ({
  dateTime,
  stadium,
  referee,
  attendance,
}) => {
  return (
    <div className="text-sm text-muted-foreground p-4 flex justify-around border-b border-b-border">
      <div>
        <div className="flex items-center justify-center">
          <span>📅 </span>
          <span className="pl-3">
            {format(new Date(dateTime), 'EEE, MMM d, hh:mm a')}
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <span>🏟 </span>
          <span className="pl-3">{stadium}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <span>👨‍⚖️ </span>
          <span className="pl-3">{referee}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <span>👥 </span>
          <span className="pl-3">{attendance.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default MatchMetadata;
