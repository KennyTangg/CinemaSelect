import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Home,
    LocalMovies,
    ConfirmationNumber,
    AccountCircle,
    Notifications,
    ExitToApp,
    Search,
    Event,
    History,
    Settings,
    Help,
    Menu,
    Close
} from '@mui/icons-material';
import Card from '../components/Card';

const MainPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const sidebarItems = [
        { icon: <Home />, label: 'Home', path: '/main' },
        { icon: <LocalMovies />, label: 'Cinemas', path: '/cinemas' },
        { icon: <ConfirmationNumber />, label: 'My Tickets', path: '/tickets' },
        { icon: <Event />, label: 'Upcoming Shows', path: '/upcoming' },
        { icon: <History />, label: 'Booking History', path: '/history' },
    ];

    const bottomSidebarItems = [
        { icon: <Settings />, label: 'Settings', path: '/settings' },
        { icon: <Help />, label: 'Help & Support', path: '/help' },
    ];

    return (
        <div className="flex min-h-screen bg-gray-900">
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'w-60' : 'w-20'} bg-gray-800 text-white transition-all duration-300 fixed h-full`}>
                <div className="px-6 py-4 flex items-center justify-between">
                    {isSidebarOpen ? (
                        <h1 className="text-lg font-medium text-yellow-400"><span className='text-white'>Cinema</span> Select</h1>
                    ) : (
                        ''
                    )}
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`text-gray-300 hover:text-yellow-400 ${isSidebarOpen ? 'grow-0' : 'grow-1'}`}
                    >
                        {isSidebarOpen ? <Close /> : <Menu />}
                    </button>
                </div>

                {/* Main Navigation Items */}
                <div className="px-4 py-2">
                    {sidebarItems.map((item, index) => (
                        <Link 
                            key={index} 
                            to={item.path}
                            className="flex items-center text-sm space-x-4 text-gray-300 hover:text-yellow-400 hover:bg-gray-700 rounded-lg p-3 mb-1 transition-colors duration-300"
                        >
                            {item.icon}
                            {isSidebarOpen && <span>{item.label}</span>}
                        </Link>
                    ))}
                </div>

                {/* Bottom Navigation Items */}
                <div className="absolute w-full bottom-0 p-4 border-gray-700">
                    {bottomSidebarItems.map((item, index) => (
                        <Link 
                            key={index} 
                            to={item.path}
                            className="flex items-center text-sm space-x-4 text-gray-300 hover:text-yellow-400 hover:bg-gray-700 rounded-lg p-3 mb-1 transition-colors duration-300"
                        >
                            {item.icon}
                            {isSidebarOpen && <span>{item.label}</span>}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Main Content */}
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

                {/* Page Content */}
                <div className="p-8">
                    {/* Featured Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Featured Movies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {/* Add your movie cards here */}
                            <Card />
                        </div>
                    </section>

                    {/* Now Playing Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Now Playing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {/* Add your movie cards here */}
                        </div>
                    </section>

                    {/* Recommended Section */}
                    <section>
                        <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Recommended For You</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {/* Add your movie cards here */}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MainPage
