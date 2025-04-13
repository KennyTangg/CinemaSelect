import React from 'react';

const CinemaTimeSlot = ({ type, price, times, onTimeSelect }) => {
  if (!times || times.length === 0) return null;

  return (
    <>
      <span className='flex justify-between pr-2 py-4 font-medium'>
        <h1 className='font-bold text-gray-400'>{type}</h1>
        <h6 className='text-sm text-gray-500'>{price}</h6>
      </span>
      <span className='grid grid-cols-10 gap-4 mb-4'>
        {times.map((time) => (
          <button 
            onClick={() => onTimeSelect(type, time, price)}
            className='bg-gray-800 font-semibold rounded-lg py-1.5 text-sm hover:cursor-pointer hover:bg-gray-700'
          >
            {time}
          </button>
        ))}
      </span>
    </>
  );
};

export default CinemaTimeSlot;