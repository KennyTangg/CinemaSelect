import React, { useState } from 'react';
import {
    AccountCircle,
    Notifications,
    ExitToApp,
    Search
} from '@mui/icons-material';
import Card from '../components/Card';
import SideBar from '../components/SideBar';

const MainPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-900">
            <SideBar 
                isOpen={isSidebarOpen}
                onToggle={handleSidebarToggle}
            />
            <div className={`flex-1 ${isSidebarOpen ? 'ml-60' : 'ml-20'} transition-all duration-300`}>
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

                <div className="px-10 py-8">
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Featured Movies</h2>
                        <div>
                            <Card />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MainPage
