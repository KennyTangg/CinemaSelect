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
        <>
        <button 
            onClick={onToggle}
            className={`text-gray-300 hover:text-yellow-400 ${isOpen ? 'grow-0' : 'grow-1'}`}
        >
            <Menu />
        </button>
        {isOpen && (
            <div className='fixed top-0 h-full w-full z-59 bg-black/30'>
                <div className={`w-62 z-62 bg-gray-900 border-r-2 border-gray-800/80 shadow-gray-800 shadow-xl transition-all duration-300 fixed top-0 left-0 h-full`}>
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
                            {isOpen && <ArrowBack />}
                        </button>
                    </div>

                    <div className="px-4 py-2">
                        {isOpen && items.map((item, index) => (
                            <Link 
                                key={index} 
                                to={item.path}
                                className="flex items-center text-sm space-x-4 text-gray-300 hover:text-yellow-400 rounded-lg p-3 mb-1 transition-colors duration-300"
                            >
                                {item.icon} <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>


                    <div className="absolute w-full bottom-0 p-4">
                        { isOpen && bottomItems.map((item, index) => (
                            <Link 
                                key={index} 
                                to={item.path}
                                className="flex items-center text-sm space-x-4 text-gray-300 hover:text-yellow-400 rounded-lg p-3 mb-1 transition-colors duration-300"
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div> 
            </div>
        )}
        </>
    );
};

export default SideBar;
