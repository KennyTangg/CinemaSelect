import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CinemaTimeSlot from '../components/CinemaTimeSlot';
import CinemaLogo from '../components/CinemaLogo';

const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const [cinemas, setCinemas] = useState([]);
    const [isSelected, setSelected] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const getShowDates = () => {
        const days = [];
        for (let i = 0; i < 44; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            days.push({
                full: date,
                day: date.toLocaleDateString('en-US', { weekday: 'short' }),
                date: date.getDate().toString().padStart(2, '0'),
                month: date.toLocaleDateString('en-US', { month: 'short' })
            });
        }
        return days;
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('/api/movies');
                setMovies(response.data);
                setLoading(false);
                setSelectedDate(getShowDates()[0].full);
            } catch (error) {
                console.error("Error fetching movies data: ", error);
                setError(error.message);
                setLoading(false);
            }
        };
        const fetchCinemas = async () => {
            try{
                const response = await axios.get('/api/cinemas');
                setCinemas(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching cinemas data: ", error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchMovies();
        fetchCinemas();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!movies.length) return <div>No movies found</div>;

    const handleClick = () => {
        setSelected(!isSelected);
    };

    const handleDateSelect = (date, index) => {
        if (index < 4) {
            setSelectedDate(date);
            setSelectedTime(null);
        }
    };

    const handleTimeSelect = (type, time, price) => {
        setSelectedTime({
            type,
            time,
            price
        });
    };

    const isSameDate = (date1, date2) => {
        return date1.getDate() === date2.getDate() && 
               date1.getMonth() === date2.getMonth() && 
               date1.getFullYear() === date2.getFullYear();
    };

    const isDateSelectable = (index) => {
        return index < 4;
    };

    return (
        <div className='min-h-screen bg-gray-900'>
            <div className='flex justify-center bg-gray-950'>
                <iframe 
                    src={movies[0].trailer.replace("watch?v=", "embed/")}
                    title={movies[0].title}
                    className="w-full max-w-2xl h-64"
                    allowFullScreen
                ></iframe>
            </div>
            <section className='flex gap-8 sm:mx-50'>
                <img src={movies[0].posterPath} className='relative bottom-10 w-35 sm:w-48 rounded-lg' alt={movies[0].title} />
                <div className='text-gray-400 space-y-1 w-full'>
                    <h1 className='text-2xl pt-8 font-bold text-gray-200'>{movies[0].title}</h1>
                    <p>Genre : <span className='pl-10 text-gray-200'>{movies[0].genre}</span></p>
                    <p>Duration : <span className='pl-5 text-gray-200'>{movies[0].duration} minutes</span></p>
                    <p>Director : <span className='pl-6 text-gray-200'>{movies[0].director}</span></p>
                </div>               
            </section>
            <div className='flex justify-around pb-4 text-gray-400 font-bold mx-50'>
                <button 
                    onClick={handleClick} 
                    className={`${isSelected ? "text-gray-100 border-b-2" : "text-gray-500 hover:cursor-pointer hover:bg-gray-800"} py-2 w-full`}
                >
                    SYNOPSIS
                </button>
                <button 
                    onClick={handleClick} 
                    className={`${isSelected ? "text-gray-500 hover:cursor-pointer hover:bg-gray-800" : "text-gray-100 border-b-2"} py-2 w-full`}
                >
                    SCHEDULE
                </button>
            </div>
            
            {isSelected ? (
                <p className='mx-50'>{movies[0].synopsis}</p>
            ) : (
                <div className='mx-50'>
                    {/* Date Selection */}
                    <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                        {getShowDates().map((day, index) => (
                            <button
                                key={index}
                                onClick={() => handleDateSelect(day.full, index)}
                                disabled={!isDateSelectable(index)}
                                className={`flex flex-col items-center min-w-[80px] p-2 rounded-lg border 
                                    ${!isDateSelectable(index) 
                                        ? 'opacity-50 border-gray-700 text-gray-500 border-2' 
                                        : selectedDate && isSameDate(selectedDate, day.full)
                                            ? 'bg-yellow-400 text-gray-900 border-yellow-400' 
                                            : 'border-gray-700 hover:border-yellow-400 border-2 hover:cursor-pointer'}`}
                            >
                                <span className="text-xs">{day.date} {day.month}</span>
                                <span className="text-sm font-bold">{day.day}</span>
                            </button>
                        ))}
                    </div>

                    {/* Show Times */}
                    {selectedDate && (
                        <div className="my-6">
                            <h3 className="text-gray-200 mb-4 text-lg">Available Ticket</h3>
                            <div className='flex flex-col gap-6'>
                                {cinemas.map((cinema, index) => (
                                    <div key={index} className='rounded-2xl px-10 p-6 bg-gray-900 border-2 border-gray-800 shadow-lg shadow-gray-950'>
                                        <span className='flex justify-between'>
                                            <h1 className='font-bold text-lg'>{cinema.placeName}</h1>
                                            <CinemaLogo placeName={cinema.placeName}/>
                                        </span>
                                        <p className='text-xs text-gray-500'>{cinema.location}</p>
                                        
                                        <CinemaTimeSlot 
                                            type="2D"
                                            price={cinema.price2D}
                                            times={cinema.timeRegular2D}
                                            onTimeSelect={handleTimeSelect}
                                        />

                                        <CinemaTimeSlot 
                                            type="IMAX"
                                            price={cinema.priceImax}
                                            times={cinema.timeImax}
                                            onTimeSelect={handleTimeSelect}
                                        />
                                        
                                        <CinemaTimeSlot 
                                            type="Velvet"
                                            price={cinema.priceVelvet}
                                            times={cinema.timeVelvet}
                                            onTimeSelect={handleTimeSelect}
                                        />

                                        <CinemaTimeSlot 
                                            type="Gold Class"
                                            price={cinema.priceGoldClass}
                                            times={cinema.timeGoldClass}
                                            onTimeSelect={handleTimeSelect}
                                        />

                                        <CinemaTimeSlot 
                                            type="Satin"
                                            price={cinema.priceSatin}
                                            times={cinema.timeSatin}
                                            onTimeSelect={handleTimeSelect}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-20">
                        <button 
                            className={`fixed bottom-0 left-0 w-full py-3 font-semibold text-xl
                                ${!selectedTime 
                                    ? 'bg-gray-800 text-gray-400' 
                                    : 'bg-yellow-400 text-gray-900 border-t-2'}`}
                            disabled={!selectedTime}
                        >
                            {selectedTime 
                                ? `Book ${selectedTime.type} - ${selectedTime.time} (${selectedTime.price})`
                                : 'Book Tickets'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MoviePage;
