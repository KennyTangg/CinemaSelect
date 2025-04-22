import React, { useState } from 'react';
import { Search, Notifications, AccountCircle } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import SideBar from '../components/SideBar';

const NavigationBar = ({ searchQuery, setSearchQuery, setIsModalOpen, searchPlaceholder = "Search movies, cinemas..." }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="bg-gray-900 border-b border-gray-800 px-5 py-5 shadow-xl shadow-gray-950 block items-center sticky top-0 z-27 justify-between
        md:shadow-lg md:border-gray-600 sm:flex">
            <SideBar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
            <div className='flex gap-8 items-center'>
                <div className="relative hidden sm:block">
                    <input 
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border-1 border-gray-600 bg-gray-900 text-gray-300 py-2 px-10 w-96 text-sm
                        rounded focus:outline-none focus:ring focus:ring-gray-500 "
                    />
                    <Search className="absolute left-3 top-1.5 text-gray-400" />
                </div>
                <div className="items-center space-x-3 hidden lg:flex">
                    <button className="text-gray-400 hover:bg-gray-800 border-1 rounded p-1.5 border-gray-600"><Notifications /></button>
                    <button className="text-gray-400 hover:bg-gray-800 border-1 rounded p-1.5 border-gray-600"><AccountCircle /></button>
                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="text-gray-400 hover:bg-gray-800 border-1 rounded p-1.5 border-gray-600"
                    >
                        <LogoutIcon />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
