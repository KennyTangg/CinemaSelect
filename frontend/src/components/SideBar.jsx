import React from 'react';
import { Link } from 'react-router-dom';
import {
    Home,
    LocalMovies,
    ConfirmationNumber,
    Event,
    History,
    Settings,
    Help,
    ArrowBack,
    Menu
} from '@mui/icons-material';

const SideBar = ({ isOpen, onToggle }) => {
    const items = [
        { icon: <Home />, label: 'Home', path: '/main' },
        { icon: <LocalMovies />, label: 'Cinemas', path: '/cinemas' },
        { icon: <ConfirmationNumber />, label: 'My Tickets', path: '/tickets' },
        { icon: <Event />, label: 'Upcoming Shows', path: '/upcoming' },
        { icon: <History />, label: 'Booking History', path: '/history' },
    ];

    const bottomItems = [
        { icon: <Settings />, label: 'Settings', path: '/settings' },
        { icon: <Help />, label: 'Help & Support', path: '/help' },
    ];


    return (
        <div className={`${isOpen ? 'w-60' : 'w-20'} bg-gray-900 shadow-gray-700 shadow-sm transition-all duration-300 fixed h-full`}>
            <div className="px-6 py-4 flex items-center justify-between">
                {isOpen ? (
                    <h1 className="text-lg font-medium text-yellow-400">
                        <span className='text-white'>Cinema</span> Select
                    </h1>
                ) : (
                    ''
                )}
                <button 
                    onClick={onToggle}
                    className={`text-gray-300 hover:text-yellow-400 ${isOpen ? 'grow-0' : 'grow-1'}`}
                >
                    {isOpen ? <ArrowBack /> : <Menu />}
                </button>
            </div>

            {/* Main Navigation Items */}
            <div className="px-4 py-2">
                {items.map((item, index) => (
                    <Link 
                        key={index} 
                        to={item.path}
                        className="flex items-center text-sm space-x-4 text-gray-300 hover:text-yellow-400 rounded-lg p-3 mb-1 transition-colors duration-300"
                    >
                        {item.icon}
                        {isOpen && <span>{item.label}</span>}
                    </Link>
                ))}
            </div>

            {/* Bottom Navigation Items */}
            <div className="absolute w-full bottom-0 p-4">
                {bottomItems.map((item, index) => (
                    <Link 
                        key={index} 
                        to={item.path}
                        className="flex items-center text-sm space-x-4 text-gray-300 hover:text-yellow-400 rounded-lg p-3 mb-1 transition-colors duration-300"
                    >
                        {item.icon}
                        {isOpen && <span>{item.label}</span>}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
