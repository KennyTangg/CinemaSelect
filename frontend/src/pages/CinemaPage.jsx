import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../components/SideBar';
import CinemaLogo from '../components/CinemaLogo';
import LogOutModal from '../components/LogOutModal';
import NavigationBar from '../components/NavigationBar';

const CinemaPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [cinemas, setCinemas] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <NavigationBar 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setIsModalOpen={setIsModalOpen}
                />
                <div className="px-10 py-8">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Available Cinemas</h2>
                    <div className="grid grid-cols-3 gap-6">
                        {cinemas.map((cinema) => (
                            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900 rounded-lg p-6 shadow-sm shadow-gray-600">
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
                                            <span className="text-gray-200">{cinema.priceImax}</span>
                                        </div>
                                    )}
                                    {cinema.priceVelvet && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Velvet:</span>
                                            <span className="text-gray-200">{cinema.priceVelvet}</span>
                                        </div>
                                    )}
                                    {cinema.priceGoldClass && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Gold Class:</span>
                                            <span className="text-gray-200">{cinema.priceGoldClass}</span>
                                        </div>
                                    )}
                                    {cinema.priceSatin && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Satin:</span>
                                            <span className="text-gray-200">{cinema.priceSatin}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className='mt-7 py-2 rounded-lg text-center font-bold text-gray-500 border-2'>More Cinema Coming Soon</h1>
                </div>
            </div>
            <LogOutModal 
                isOpen={isModalOpen}
                setModalOpen={setIsModalOpen}
            />
        </div>
    );
};

export default CinemaPage;
