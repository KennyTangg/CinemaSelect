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
      } catch (err) {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (movies.length - 3));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const displayedMovies = movies.slice(startIndex, startIndex + 4);

  return (
    <>
      <div className={`${isHomePage 
        ? 'grid mx-auto grid-cols-2 xl:gap-10 lg:grid-cols-4 lg:gap-3 sm:grid-cols-2' 
        : 'flex overflow-x-auto space-x-10 py-4 px-2 lg:px-0 custom-scrollbar pb-10'}`}>
        {isHomePage 
          ? displayedMovies.map((movie) => (
            <span key={movie._id} className='flex flex-col items-center py-7 gap-5 lg:py-0 sm:py-5'>
              <img src={movie.posterPath} alt={movie.title} className='rounded-3xl w-35 xl:w-62 sm:w-52'/>
              <h5 className='text-center font-medium text-xs xl:text-sm lg:text-xs sm:text-base select-none'>{movie.title}</h5>
            </span>
          )) 
          : movies.map((movie) => (
            <Link to={movie.path} key={movie._id} className='flex-shrink-0 relative flex flex-col items-center py-7 gap-5 lg:py-0 sm:py-5 group hover:cursor-pointer'>
              <img src={movie.posterPath} alt={movie.title} className='rounded-xl sm:w-50'/>
              <div className="absolute bottom-15 rounded-xl sm:w-50 inset-0 bg-gradient-to-b from-transparent to-black opacity-850 group-hover:block hidden z-10"></div>
              <button className='absolute bottom-20 text-sm font-semibold bg-gray-800 text-yellow-400 px-8 py-2 rounded-lg group-hover:block hidden z-10 hover:cursor-pointer'>Book Ticket</button>
              <h5 className='text-center font-medium text-xs xl:text-sm lg:text-xs sm:text-base max-w-50 select-none'>{movie.title}</h5>
            </Link>
          ))}
      </div>
      {isHomePage && <button onClick={handleNext} className="w-36 rounded-4xl self-center text-xl sm:text-2xl font-extrabold bg-gray-800 py-2 sm:py-4 border-3 hover:bg-gray-900 hover:cursor-pointer">Next</button>}
    </>
  );
};

export default Card;
