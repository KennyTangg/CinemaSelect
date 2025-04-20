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
    Close,
    Menu
} from '@mui/icons-material';

const SideBar = ({ isOpen, onToggle }) => {
    
    const items = [
        { icon: <span className="text-gray-500"><Home /></span>, label: 'Home', path: '/main' },
        { icon: <span className="text-gray-500"><LocalMovies /></span>, label: 'Cinemas', path: '/cinemas' },
        { icon: <span className="text-gray-500"><ConfirmationNumber /></span>, label: 'My Tickets', path: '/tickets' },
        { icon: <span className="text-gray-500"><Event /></span>, label: 'Upcoming Shows', path: '/upcoming' },
        { icon: <span className="text-gray-500"><History /></span>, label: 'Booking History', path: '/history' },
    ];

    const bottomItems = [
        { icon: <span className="text-gray-500"><Settings /></span>, label: 'Settings', path: '/settings' },
        { icon: <span className="text-gray-500"><Help /></span>, label: 'Help & Support', path: '/help' },
    ];


    return (
        <>
        <div className='flex items-center gap-5'>
            <button 
            onClick={onToggle} 
            className={`text-gray-400 border rounded p-1.5 border-gray-600 hover:bg-gray-800`} >
                <Menu />
            </button>
            <h1 className="text-xl font-medium text-yellow-400 select-none">
                <span className='text-white'>Cinema</span>Select
            </h1>
        </div>
        {isOpen && (
            <div className='fixed top-0 h-full w-full z-59 bg-black/30'>
                <div className={`w-70 z-62 bg-gray-900 border-r-2 border-gray-800 rounded-2xl fixed top-0 left-0 h-full`}>
                    <div className="pl-6 pr-3 py-4 flex items-center justify-between">
                        {isOpen ? (
                            <h1 className="text-lg font-medium text-yellow-400 select-none">
                                <span className='text-white'>Cinema</span>Select
                            </h1>
                        ) : ('')}
                        <button 
                            onClick={onToggle}
                            className={`text-gray-500 bg-gray-800/80 rounded p-1.5 hover:text-gray-200 ${isOpen ? 'grow-0' : 'grow-1'}`}
                        >
                            {isOpen && <Close />}
                        </button>
                    </div>

                    <div className="px-4 py-2">
                        {isOpen && items.map((item) => (
                            <Link 
                                to={item.path}
                                className="flex items-center text-sm space-x-4 text-gray-300 hover:bg-gray-800 rounded-lg px-3 py-2 mb-2"
                            >
                                {item.icon}<span>{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="absolute w-full bottom-0 p-4">
                        { isOpen && bottomItems.map((item) => (
                            <Link 
                                to={item.path}
                                className="flex items-center text-sm space-x-4 text-gray-300 hover:bg-gray-800 rounded-lg px-3 py-2 mb-2"
                            >
                                {item.icon}<span>{item.label}</span>
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
