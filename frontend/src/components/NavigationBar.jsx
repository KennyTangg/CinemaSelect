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
        <nav className="bg-gray-900 border-b border-gray-600 px-8 py-5 flex items-center justify-between sticky top-0 z-27">
            <SideBar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
            <div className='flex gap-8 items-center'>
                <div className="relative">
                    <input 
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border-1 border-gray-600 bg-gray-900 text-gray-300 text-sm py-2 px-10 w-96 rounded focus:outline-none focus:ring focus:ring-gray-500"
                    />
                    <Search className="absolute left-3 top-1.5 text-gray-400" />
                </div>
                <div className="flex items-center space-x-3">
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
