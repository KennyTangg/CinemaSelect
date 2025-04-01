import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MoviePage = () => {
    const [movies,setMovies] = useState([]);
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
        </div>
    )
}

export default MoviePage;