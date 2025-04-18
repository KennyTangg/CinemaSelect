import React from 'react';
import { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import SideBar from '../components/SideBar';
import LogOutModal from '../components/LogOutModal';
import moviePoster8 from "../assets/movie-poster-8.webp";
import moviePoster9 from "../assets/movie-poster-9.webp";
import moviePoster10 from "../assets/movie-poster-10.webp";
import moviePoster11 from "../assets/movie-poster-11.webp";
import moviePoster12 from "../assets/movie-poster-12.webp";
import moviePoster13 from "../assets/movie-poster-13.webp";
import moviePoster14 from "../assets/movie-poster-14.webp";
import moviePoster15 from "../assets/movie-poster-15.webp";
import moviePoster16 from "../assets/movie-poster-16.webp";
import moviePoster17 from "../assets/movie-poster-17.webp";
import moviePoster18 from "../assets/movie-poster-18.webp";
import moviePoster19 from "../assets/movie-poster-19.webp";
import moviePoster20 from "../assets/movie-poster-20.webp";


const UpcomingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const movies = [
        {title:"The Dark Knight", poster: moviePoster8},
        {title:"Avengers: Endgame", poster: moviePoster9},
        {title:"The Lord of the Rings: The Fellowship of the Ring", poster: moviePoster10},
        {title:"The Godfather", poster: moviePoster11},
        {title:"Inception", poster: moviePoster12},
        {title:"Spirited Away", poster: moviePoster13},
        {title:"Spider-Man: Across the Spider-Verse", poster: moviePoster14},
        {title:"Dune: Part Two", poster: moviePoster15},
        {title:"The Matrix", poster: moviePoster16},
        {title:"Alien (1979)", poster: moviePoster17},
        {title:"WALL-E", poster: moviePoster18},
        {title:"Avatar (2009)", poster: moviePoster19},
        {title:"Inside Out (2015)", poster: moviePoster20},
    ];

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const filteredMovies = movies.filter(movie => 
        movie.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
        <div className="flex min-h-screen bg-gray-900">
            <SideBar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
            <div className={`flex-1 ${isSidebarOpen ? 'ml-60' : 'ml-20'} transition-all duration-300`}>
                <NavigationBar 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setIsModalOpen={setIsModalOpen}
                    searchPlaceholder='Search upcoming shows...'
                />

                <section className="px-10 py-8">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Upcoming Shows</h2>
                    <div className='grid grid-cols-5 gap-10'>
                        {filteredMovies.map((movie) => (
                            <div className='flex flex-col items-center gap-5  pb-2 shadow-sm shadow-gray-600 rounded-lg'>
                                <img src={movie.poster} alt={movie.title} 
                                className="w-full rounded-t-lg"/>
                                <h1 className=' text-center text-sm font-medium'>{movie.title}</h1>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <LogOutModal 
                isOpen={isModalOpen}
                setModalOpen={setIsModalOpen}
            />
        </div>
    )
};

export default UpcomingPage;