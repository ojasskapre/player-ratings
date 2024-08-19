import React from 'react';
import { format } from 'date-fns';
import { Calendar, MapPin, UserCheck, Users } from 'lucide-react';
import { CardContent } from '@/components/ui/card';

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
    <CardContent className="text-sm text-muted-foreground p-4 flex justify-around border-b border-b-neutral-200 dark:border-b-neutral-700">
      <div className="flex items-center">
        <Calendar className="h-4 w-4" />
        <span className="pl-3">
          {format(new Date(dateTime), 'EEE, MMM d, hh:mm a')}
        </span>
      </div>
      <div className="flex items-center">
        <MapPin className="h-4 w-4" />
        <span className="pl-3">{stadium}</span>
      </div>
      <div className="flex items-center">
        <UserCheck className="h-4 w-4" />
        <span className="pl-3">{referee}</span>
      </div>
      <div className="flex items-center">
        <Users className="h-4 w-4" />
        <span className="pl-3">{attendance.toLocaleString()}</span>
      </div>
    </CardContent>
  );
};

export default MatchMetadata;
