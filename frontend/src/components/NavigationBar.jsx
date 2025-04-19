import React, { useState } from 'react';
import { Search, Notifications, AccountCircle, ExitToApp, Menu } from '@mui/icons-material';
import SideBar from '../components/SideBar';

const NavigationBar = ({ searchQuery, setSearchQuery, setIsModalOpen, searchPlaceholder = "Search movies, theaters..." }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="bg-gray-900 border-b border-gray-600 px-8 py-5 flex items-center justify-between sticky top-0 z-27">
            <div className='flex items-center gap-8'>
                <SideBar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
                <div className="relative">
                    <input
                        type="text"
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-gray-800 text-white text-sm py-2 rounded-lg px-10 w-96 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <Search className="absolute left-3 top-1.5 text-gray-400" />
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <button className="text-gray-300 hover:text-yellow-400">
                    <Notifications />
                </button>
                <button className="text-gray-300 hover:text-yellow-400">
                    <AccountCircle />
                </button>
                <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="text-gray-300 hover:text-yellow-400"
                >
                    <ExitToApp />
                </button>
            </div>
        </nav>
    );
};

export default NavigationBar;
