import { useState } from 'react';
import { format, addDays } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { ChevronLeft, ChevronRight, CalendarIcon } from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const MatchDateSelector = ({
  onDateChange,
}: {
  onDateChange: (date: Date) => void;
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const changeDate = (days: number) => {
    const newDate = addDays(currentDate, days);
    setCurrentDate(newDate);
    onDateChange(newDate);
  };

  const formatDate = (date: Date): string => {
    const today = new Date();
    const tomorrow = addDays(today, 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';

    return format(date, 'eeee, MMM d'); // e.g., "Monday, Aug 16"
  };

  return (
    <div className="flex items-center justify-center my-4">
      <Button variant="outline" size="icon" onClick={() => changeDate(-1)}>
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="mx-2">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {currentDate ? formatDate(currentDate) : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={currentDate}
            onSelect={(date) => setCurrentDate(date as Date)}
          />
        </PopoverContent>
      </Popover>

      <Button variant="outline" size="icon" onClick={() => changeDate(1)}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default MatchDateSelector;
