import React from 'react';

const CinemaTimeSlot = ({ type, price, times, onTimeSelect, cinema }) => {
  if (!times || times.length === 0) return null;

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold">{type}</span>
        <span className="text-sm text-gray-400">{price}</span>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-10 gap-2">
        {times.map((time) => (
          <button
            onClick={() => onTimeSelect(type, time, price, cinema)}
            className="px-4 py-2 text-sm border bg-gray-800 border-gray-700 rounded-lg hover:border-yellow-400 hover:text-yellow-400"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CinemaTimeSlot;
