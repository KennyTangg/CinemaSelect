import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Close } from '@mui/icons-material';

const SuccessModal = ({ isOpen, onClose, ticketId }) => {
    const navigate = useNavigate();

    if (!isOpen) return true;

    return (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full mx-4 relative border border-gray-800 animate-jump-in duration-500">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-300">
                    <Close />
                </button>
                
                <div className="flex flex-col items-center text-center">
                    <CheckCircle className="text-yellow-400 mb-4" />
                    <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Payment Successful!</h1>
                    <p className="text-sm sm:text-base text-gray-400 mb-8">Your tickets have been booked successfully!</p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-8">Ticket ID: {ticketId}</p>
                    
                    <div className="flex gap-4 font-medium text-sm sm:text-base">
                        <button onClick={() => navigate('/tickets')} className="bg-yellow-400 text-gray-900 px-4 sm:px-6 py-2 rounded-lg hover:bg-yellow-500 ">
                            View Tickets
                        </button>
                        <button onClick={() => navigate('/main')} className="bg-gray-700 text-gray-300 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-600">
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
