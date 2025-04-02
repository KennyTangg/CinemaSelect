import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MoviePage = () => {
    const [movies,setMovies] = useState([]);
    const [isSelected,setSelected] = useState(true);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await axios.get('/api/movies');
                console.log("API response: ",response.data)
                setMovies(response.data);
                setLoading(false);
            } catch (error){
                console.error("Error fetching movies data: ",error);
                setError(error.message);
                setLoading(true);
            }
        };

        fetchMovies();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleClick = () => {
        setSelected(!isSelected);
    }

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
                <img src={movies[0].posterPath} className='relative bottom-10 w-35 sm:w-48 rounded-lg'></img>
                <div className='text-gray-400 space-y-1 w-full'>
                    <h1 className='text-2xl pt-8 font-bold text-gray-200'>{movies[0].title}</h1>
                    <p>Genre : <span className='pl-10 text-gray-200'>{movies[0].genre}</span></p>
                    <p>Duration : <span className='pl-5 text-gray-200'>{movies[0].duration} minutes</span></p>
                    <p>Director : <span className='pl-6 text-gray-200'>{movies[0].director}</span></p>
                    <div className='flex justify-around py-4 text-gray-400 font-bold'>
                        <h2 onClick={handleClick} className={`${isSelected ? "text-gray-200" : "text-gray-400"} hover:cursor-pointer hover:underline`}>SYNOPSIS</h2>
                        <h2 onClick={handleClick} className={`${isSelected ? "text-gray-400" : "text-gray-200"} hover:cursor-pointer hover:underline`}>SCHEDULE</h2>
                    </div>
                    {isSelected 
                    ? <p>{movies[0].synopsis}</p>
                    : <h1>Testing</h1>}
                </div>               
            </section>
        </div>
    )
}

export default MoviePage;