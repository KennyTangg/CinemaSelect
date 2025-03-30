import React, { use, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import moviePoster1 from "../assets/movie-poster-1.jpg";
import moviePoster2 from "../assets/movie-poster-2.jpg";
import moviePoster3 from "../assets/movie-poster-3.jpg";
import moviePoster4 from "../assets/movie-poster-4.jpg";
import moviePoster5 from "../assets/movie-poster-5.jpg";
import moviePoster6 from "../assets/movie-poster-6.jpg";
import moviePoster7 from "../assets/movie-poster-7.jpg";

const movieData = [
  { name: moviePoster1, title: "INTERSTELLAR", path: '/interstellar' },
  { name: moviePoster2, title: "SPIDER-MAN: INTO THE SPIDER-VERSE", path:'spiderman' },
  { name: moviePoster3, title: "AVENGERS: INFINITY WAR", path:'/avengers'},
  { name: moviePoster4, title: "THE SHAWSHANK REDEMPTION", path:'/shawshank' },
  { name: moviePoster5, title: "OPPENHEIMER", path:'/oppenheimer' },
  { name: moviePoster6, title: "TOP GUN: MAVERICK", path:'/maverick' },
  { name: moviePoster7, title: "JOKER (2019)", path:'/joker' }
];

const Card = () => {
  const [startIndex, setStartIndex] = useState(0);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (movieData.length - 3));
  };

  const displayedMovies = movieData.slice(startIndex, startIndex + 4);

  return (
    <>
      <div className={`${isHomePage 
        ? 'grid mx-auto grid-cols-2 xl:gap-10 lg:grid-cols-4 lg:gap-3 sm:grid-cols-2' 
        : 'flex overflow-x-auto space-x-10 py-4 px-2 lg:px-0 custom-scrollbar pb-6'}`}>
        {isHomePage 
        ? displayedMovies.map((data, index) => (
          <span key={index} className='flex flex-col items-center py-7 gap-5 lg:py-0 sm:py-5'>
            <img src={data.name} alt={data.title} className='rounded-3xl w-35 xl:w-62 sm:w-52'/>
            <h5 className='text-center font-medium text-xs xl:text-sm lg:text-xs sm:text-base select-none' >{data.title}</h5>
          </span>
        )) 
        : movieData.map((data, index) => (
          <Link to={data.path} key={index} className='flex-shrink-0 relative flex flex-col items-center py-7 gap-5 lg:py-0 sm:py-5 group hover:cursor-pointer'>
              <img src={data.name} alt={data.title} className='rounded-3xl xl:w-62 sm:w-42'/>
              <div class="absolute bottom-10 rounded-3xl xl:w-63 sm:w-42 inset-0 bg-gradient-to-b from-transparent to-black opacity-850 group-hover:block hidden z-10"></div>
              <button className='absolute bottom-15 font-semibold bg-gray-800 text-yellow-400 px-10 py-3 rounded-xl group-hover:block hidden z-10 hover:cursor-pointer'>Book Ticket</button>
              <h5 className='text-center font-medium text-xs xl:text-sm lg:text-xs sm:text-base select-none' >{data.title}</h5>
          </Link>
        ))}

      </div>
      {isHomePage && <button onClick={handleNext} className="w-36 rounded-4xl self-center text-xl sm:text-2xl font-extrabold bg-gray-800 py-2 sm:py-4 border-3 hover:bg-gray-900 hover:cursor-pointer">Next</button>}
    </>
  )
}

export default Card
