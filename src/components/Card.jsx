import React from 'react'
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
  { name: moviePoster4, title: "THE SHAWSHANK REDEMPTION" }
];

const Card = () => {
  return (
    <section className="home-now-showing">
      <h1>NOW SHOWING IN CINEMAS</h1>
      <div>
        {movieData.map((data, index) => (
          <span key={index}>
            <img src={data.name} alt={data.title} />
            <h5>{data.title}</h5>
          </span>
        ))}
      </div>
    </section>
  )
}

export default Card
