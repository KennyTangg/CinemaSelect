import React, { useState} from 'react'
import moviePoster1 from "../assets/movie-poster-1.jpg";
import moviePoster2 from "../assets/movie-poster-2.jpg";
import moviePoster3 from "../assets/movie-poster-3.jpg";
import moviePoster4 from "../assets/movie-poster-4.jpg";
import moviePoster5 from "../assets/movie-poster-5.jpg";
import moviePoster6 from "../assets/movie-poster-6.jpg";
import moviePoster7 from "../assets/movie-poster-7.jpg";

const movieData = [
  { name: moviePoster1, title: "INTERSTELLAR" },
  { name: moviePoster2, title: "SPIDER-MAN: INTO THE SPIDER-VERSE" },
  { name: moviePoster3, title: "AVENGERS: INFINITY WAR" },
  { name: moviePoster4, title: "THE SHAWSHANK REDEMPTION" },
  { name: moviePoster5, title: "OPPENHEIMER" },
  { name: moviePoster6, title: "TOP GUN: MAVERICK" },
  { name: moviePoster7, title: "JOKER (2019)" }
];
const Card = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (movieData.length - 3));
  };

  const displayedMovies = movieData.slice(startIndex, startIndex + 4);

  return (
    <>
      <h1>NOW SHOWING IN CINEMAS</h1>
      <div>
        {displayedMovies.map((data, index) => (
          <span key={index}>
            <img src={data.name} alt={data.title} />
            <h5>{data.title}</h5>
          </span>
        ))}
      </div>
      <button onClick={handleNext} className="w-36 rounded-4xl self-center text-xl sm:text-2xl font-extrabold bg-gray-800 py-2 sm:py-4 border-3 hover:bg-gray-900 hover:cursor-pointer">Next</button>
    </>
  )
}

export default Card
