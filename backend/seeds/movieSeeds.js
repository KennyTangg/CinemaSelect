const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Movie = require('../models/movie');

dotenv.config();

const movies = [
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    genre: "Adventure, Sci-Fi, Drama",
    releaseDate: "2014-11-07",
    rating: 8.7,
    posterPath: "/movie-poster-1.jpg",
    path: "/interstellar",
    trailer: "https://www.youtube.com/watch?v=2LqzF5WauAw"
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    duration: 117,
    synopsis: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    genre: "Adventure, Action, Comedy, Animation",
    releaseDate: "2018-12-12",
    rating: 8.4,
    posterPath: "/movie-poster-2.jpg",
    path: "/spiderman",
    trailer: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ"
  },
  {
    title: "Avengers: Infinity War",
    director: "Anthony Russo, Joe Russo",
    duration: 149,
    synopsis: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    genre: "Action, Adventure, Sci-Fi",
    releaseDate: "2018-04-27",
    rating: 8.4,
    posterPath: "/movie-poster-3.jpg",
    path: "/avengers",
    trailer: "https://www.youtube.com/watch?v=6ZfuNTqbHE8"
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    duration: 142,
    synopsis: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion and unquenchable hope.",
    genre: "Drama",
    releaseDate: "1994-10-14",
    rating: 9.3,
    posterPath: "/movie-poster-4.jpg",
    path: "/shawshank",
    trailer: "https://www.youtube.com/watch?v=NmzuHjWmXOc"
  },
  {
    title: "Oppenheimer",
    director: "Christopher Nolan",
    duration: 180,
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    genre: "Biography, Drama, History",
    releaseDate: "2023-07-21",
    rating: 8.5,
    posterPath: "/movie-poster-5.jpg",
    path: "/oppenheimer",
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg"
  },
  {
    title: "Top Gun: Maverick",
    director: "Joseph Kosinski",
    duration: 130,
    synopsis: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    genre: "Action, Drama",
    releaseDate: "2022-05-27",
    rating: 8.3,
    posterPath: "/movie-poster-6.jpg",
    path: "/maverick",
    trailer: "https://www.youtube.com/watch?v=giXco2jaZ_4"
  },
  {
    title: "Joker",
    director: "Todd Phillips",
    duration: 122,
    synopsis: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    genre: "Crime, Drama, Thriller",
    releaseDate: "2019-10-04",
    rating: 8.4,
    posterPath: "/movie-poster-7.jpg",
    path: "/joker",
    trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
  }
];

const seedMovies = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Movie.deleteMany({});
    await Movie.insertMany(movies);
  } catch (error){
    console.log("Error seeding data:", error);
  }
}

seedMovies();

