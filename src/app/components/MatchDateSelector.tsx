import { useState } from 'react';
import { format, addDays } from 'date-fns';

const MatchDateSelector = ({
  onDateChange,
}: {
  onDateChange: (date: Date) => void;
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

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
    <div className="flex items-center justify-center my-4 bg-primary text-foreground rounded-lg px-4 py-2">
      <button
        onClick={() => changeDate(-1)}
        className="text-foreground bg-secondary hover:bg-muted rounded-full p-2"
      >
        &lt;
      </button>
      {/* TODO: make this an actual date picker */}
      <div className="flex-grow text-center">
        <span className="text-lg font-medium">{formatDate(currentDate)}</span>
        <span className="ml-2">&#9662;</span>
      </div>
      <button
        onClick={() => changeDate(1)}
        className="text-foreground bg-secondary hover:bg-muted rounded-full p-2"
      >
        &gt;
      </button>
    </div>
  );
};

export default MatchDateSelector;
