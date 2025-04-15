import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../components/SideBar';
import CinemaLogo from '../components/CinemaLogo';
import {
    Search,
    Notifications,
    AccountCircle,
    ExitToApp,
} from '@mui/icons-material';

const CinemaPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [cinemas, setCinemas] = useState([]);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const fetchCinemas = async () => {
            try {
                const response = await axios.get('/api/cinemas');
                setCinemas(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchCinemas();
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-900">
            <SideBar 
                isOpen={isSidebarOpen}
                onToggle={handleSidebarToggle}
            />
            <div className={`flex-1 ${isSidebarOpen ? 'ml-60' : 'ml-20'} transition-all duration-300`}>
                {/* Top Navigation */}
                <nav className="bg-gray-800 px-8 py-4 flex items-center justify-between">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search movies, theaters..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-gray-700 text-white text-sm py-2 rounded-lg pl-10 w-96 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <Search className="absolute left-3 top-1.5 text-gray-400" />
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="text-gray-300 hover:text-yellow-400">
                            <Notifications />
                        </button>
                        <button className="text-gray-300 hover:text-yellow-400">
                            <AccountCircle />
                        </button>
                        <button className="text-gray-300 hover:text-yellow-400">
                            <ExitToApp />
                        </button>
                    </div>
                </nav>

                {/* Cinema Content */}
                <div className="px-10 py-8">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Available Cinemas</h2>
                    <div className="grid grid-cols-3 gap-6">
                        {cinemas.map((cinema, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-800 rounded-lg p-6 shadow-lg"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="text-xl font-semibold text-white">{cinema.placeName}</h3>
                                    <CinemaLogo placeName={cinema.placeName} />
                                </div>
                                <p className="text-gray-400 text-xs mb-3">{cinema.location}</p>
                                <div className="space-y-1.5 font-medium">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Regular 2D:</span>
                                        <span className="text-gray-200">{cinema.price2D}</span>
                                    </div>
                                    {cinema.priceImax && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">IMAX:</span>
                                            <span className="text-yellow-400">{cinema.priceImax}</span>
                                        </div>
                                    )}
                                    {cinema.priceVelvet && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Velvet:</span>
                                            <span className="text-yellow-400">{cinema.priceVelvet}</span>
                                        </div>
                                    )}
                                    {cinema.priceGoldClass && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Gold Class:</span>
                                            <span className="text-yellow-400">{cinema.priceGoldClass}</span>
                                        </div>
                                    )}
                                    {cinema.priceSatin && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Satin:</span>
                                            <span className="text-yellow-400">{cinema.priceSatin}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CinemaPage;
