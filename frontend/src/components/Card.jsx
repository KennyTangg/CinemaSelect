import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Card = () => {
  const [movies, setMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/movies');
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (movies.length - 3));
  };

  if (loading) return <div className="h-120 flex justify-center items-center font-semibold text-xl">Loading...</div>;
  if (error) return <div className="h-120 flex justify-center items-center font-semibold text-xl">{error}</div>;

  const displayedMovies = movies.slice(startIndex, startIndex + 4);

  return (
    <>
      <div className={`${isHomePage 
        ? 'grid px-4 sm:mx-auto gap-5 grid-cols-2 xl:gap-10 sm:grid-cols-3 lg:grid-cols-4' 
        : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10'}`}>
        {isHomePage 
          ? displayedMovies.map((movie) => (
            <span className='flex flex-col items-center py-5 gap-5 lg:py-0 sm:py-5'>
              <img src={movie.posterPath} alt={movie.title} className='rounded-3xl w-40 xl:w-62 sm:w-52'/>
              <h5 className='text-center font-medium text-sm sm:text-base max-w-35 select-none'>{movie.title}</h5>
            </span>
          )) 
          : movies.map((movie) => (
            <Link to={`/main/${movie.path}`} className='relative flex flex-col items-center rounded-xl py-7 gap-5 lg:py-0 sm:py-5 group hover:cursor-pointer'>
              <img src={movie.posterPath} alt={movie.title} className='rounded-xl sm:w-40.5'/>
              <h5 className='text-center font-medium text-sm sm:text-sm max-w-35 select-none'>{movie.title}</h5>

              <div className="absolute left-0 bottom-15 rounded-lg sm:w-41 inset-0 bg-gradient-to-b from-transparent to-black opacity-85 group-hover:block hidden z-10"></div>
              <button className='absolute bottom-20 text-xs font-medium text-yellow-400 bg-gray-900/70 px-5 py-2 rounded-lg group-hover:block hidden z-10'>Book Ticket</button>
            </Link>
          ))}
      </div>
      {isHomePage && <button onClick={handleNext} 
      className="w-36 rounded-3xl self-center text-xl sm:text-2xl font-extrabold bg-gray-800 py-2 sm:py-4 border-2 hover:bg-gray-900 hover:cursor-pointer">
        Next
      </button>}
    </>
  );
};

export default Card;
