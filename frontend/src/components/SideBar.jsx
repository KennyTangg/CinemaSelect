import React, { useState, useEffect } from 'react';
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
    const [animationState, setAnimationState] = useState('closed');
    
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

    useEffect(() => {
        if (isOpen) {
            setAnimationState('opening');
            setTimeout(() => setAnimationState('opened'), 300);
        } else if (animationState === 'opened') {
            setAnimationState('closing');
            setTimeout(() => setAnimationState('closed'), 300);
        }
    }, [isOpen]);

    const getAnimationClasses = () => {
        if (animationState === 'opening') {
            return 'animate-slide-in-left opacity-100';
        } else if (animationState === 'closing') {
            return 'animate-slide-out-left opacity-0';
        } else {
            return '';
        }
    };

    return (
        <>
        <div className='flex items-center gap-5'>
            <button onClick={onToggle} className={`text-gray-400 border-0 rounded p-1.5 border-gray-600 hover:bg-gray-800 md:border md:border-gray-600`}>
                <Menu /> 
            </button>
            <h1 className=" text-xl font-medium text-yellow-400 select-none">
                <span className='text-white'>Cinema</span>Select
            </h1>
        </div>
        
        {animationState !== 'closed' && (
            <div className={`fixed top-0 left-0 h-full w-full z-50 bg-black/30 transition-opacity duration-300
                ${animationState === 'opened' || animationState === 'opening' ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`w-60 z-60 bg-gray-900 border-r-2 border-gray-800 rounded-2xl fixed top-0 left-0 h-full
                    sm:w-70 transition-transform duration-300 ease-out ${getAnimationClasses()}`}
                >
                    <div className="pl-6 pr-3 py-4 flex items-center justify-between">
                        <h1 className="text-lg font-medium text-yellow-400 select-none">
                            <span className='text-white'>Cinema</span>Select
                        </h1>
                        <button onClick={onToggle} className="text-gray-500 bg-gray-800/80 rounded p-1.5 hover:text-gray-200">
                            <Close /> 
                        </button>
                    </div>

                    <div className="px-4 py-2">
                        {items.map((item) => (
                            <Link to={item.path}
                                className="flex items-center text-xs sm:text-sm space-x-4 text-gray-300 hover:bg-gray-800 rounded-lg px-3 py-2 mb-2">
                                {item.icon}<span>{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="absolute w-full bottom-0 p-4">
                        {bottomItems.map((item) => (
                            <Link to={item.path}
                                className="flex items-center text-xs sm:text-sm space-x-4 text-gray-300 hover:bg-gray-800 rounded-lg px-3 py-2 mb-2">
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
