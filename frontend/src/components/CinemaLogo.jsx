import React from 'react';

const CinemaLogo = ({placeName}) => {
    const name = placeName.split(" ");
    const typeOfCinema = name[name.length - 1];
    return (
        <div className='font-bold text-center select-none'>
            {typeOfCinema === "XXI" 
            ? <h1 className='bg-gradient-to-r from-yellow-400 to-yellow-700 rounded w-11 text-sm'>XXI</h1>
            : <h1 className='bg-red-700 rounded w-11 text-sm'>CGV</h1>}
        </div>
    )
}

export default CinemaLogo;