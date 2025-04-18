import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOutModal = ({isOpen, setModalOpen}) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <div className='fixed left-0 top-0 min-h-screen w-full flex justify-center items-center text-center backdrop-blur-sm z-30'>
            <section className='bg-gray-900/90 w-md px-12 py-20 rounded-lg border border-gray-700'>
                <h1 className='text-xl font-bold mb-1'>Are you sure you want to log out?</h1>
                <h1 className='text-sm text-gray-400'>You will be signed out of your account and need to log in again to continue</h1>
                <span className='flex justify-around gap-5 font-semibold mt-12'>
                    <button 
                        onClick={() => setModalOpen(false)} 
                        className="px-10 py-1 rounded border text-gray-400 hover:bg-gray-700"
                    > 
                        Cancel 
                    </button>
                    <button 
                        onClick={() => navigate('/')} 
                        className='px-10 py-1 rounded bg-red-700 hover:bg-red-800'
                    > 
                        Log Out 
                    </button>
                </span>
            </section>
        </div>
    )
}

export default LogOutModal;
