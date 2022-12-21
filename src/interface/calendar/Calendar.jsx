import React, { useState } from 'react';
import { startOfWeek, endOfWeek, addWeeks, format } from 'date-fns';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const start = startOfWeek(date);
  const end = endOfWeek(date);

  const handleNextWeek = () => {
    setDate(addWeeks(date, 1));
  };

  const handlePrevWeek = () => {
    setDate(addWeeks(date, -1));
  };

  return (
    <div className="flex flex-col w-full h-full bg-gray-100">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
        <button
          onClick={handlePrevWeek}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          Prev Week
        </button>
        <span className="text-gray-700">
          {format(start, 'MMM do')} - {format(end, 'MMM do, yyyy')}
        </span>
        <button
          onClick={handleNextWeek}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          Next Week
        </button>
      </div>
      <div className="flex flex-wrap justify-between px-4 py-2 bg-gray-200">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="w-1/7 text-center py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-between px-4 py-2">
        {Array(7)
          .fill(0)
          .map((_, i) => {
            const current = addWeeks(start, i);
            return (
              <div key={i} className="w-1/7 text-center py-2">
                <span className="block text-gray-700">
                  {format(current, 'dd')}
                </span>
                <span className="block text-gray-500">
                  {format(current, 'EEE')}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Calendar;
