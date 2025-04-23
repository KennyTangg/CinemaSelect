import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import axios from 'axios';
import SuccessModal from '../components/SuccessModal';

const PaymentPage = () => {
    const location = useLocation();
    const bookingData = location.state;
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ticketId, setTicketId] = useState(null);
    const ticketPrice = parseInt(bookingData.price.replace(/[^0-9]/g, ''));
    
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    const seatsPerRow = 20;

    const occupiedSeats = [
        'F4', 'F5', 'F12', 'F13', 'F14',
        'G7', 'G8', 'G9', 'G15', 'G16',
        'H3', 'H4', 'H10', 'H11', 'H17',
        'I5', 'I6', 'I13', 'I14', 'I19',
        'J2', 'J3', 'J8', 'J9', 'J18',
        'K5', 'K7', 'K12','K15', 'K16', 'K20',
        'L1', 'L5', 'L11', 'L12', 'L17',
        'M2', 'M3', 'M8', 'M9', 'M15'
    ];

    const createSeatLayout = (row) => {
        const seats = [];
        for (let i = 0; i < seatsPerRow; i++) {
            if (i === 5 || i === 15 ) {
                seats.push(<div/>);
            }
            const seatNumber = `${row}${i + 1}`;
            seats.push(
                <button
                    key={seatNumber}
                    onClick={() => handleSeatClick(seatNumber)}
                    disabled={occupiedSeats.includes(seatNumber)}
                    className={getSeatStyles(seatNumber)}
                >
                    {seatNumber}
                </button>
            );
        }
        return seats;
    };

    const handleSeatClick = (seat) => {
        setSelectedSeats(prev => {
            if (prev.includes(seat)) {
                return prev.filter(selectSeat => selectSeat !== seat);
            }
            if (prev.length >= 6) {
                alert('Maximum 6 seats per transaction');
                return prev;
            }
            return [...prev, seat];
        });
    };

    const getSeatStyles = (seat) => {
        const baseStyles = "w-8 h-8 rounded flex items-center justify-center text-xs font-medium transition-colors duration-200";
        
        if (occupiedSeats.includes(seat)) {
            return `${baseStyles} bg-gray-950 text-gray-400 cursor-not-allowed`;
        }
        if (selectedSeats.includes(seat)) {
            return `${baseStyles} bg-yellow-400 text-gray-900 hover:bg-yellow-500`;
        }
        return `${baseStyles} bg-gray-700 text-gray-300 hover:bg-gray-600`;
    };

    const handlePayment = async () => {
        try {
            const ticketData = {
                movieTitle: bookingData.movieTitle,
                moviePoster: bookingData.moviePoster,
                cinemaName: bookingData.cinema,
                showDate: new Date(bookingData.date).toISOString(),
                showTime: bookingData.time,
                seats: selectedSeats,
                screenType: bookingData.type,
                price: (ticketPrice + 3000) * selectedSeats.length,
                paymentMethod: paymentMethod
            };

            const token = localStorage.getItem('token');
            const response = await axios.post('/api/tickets/add', ticketData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                setTicketId(response.data.ticketId);
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error('Booking error:', error);
            alert(error.response?.data?.message || 'Failed to book tickets. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 mt-8">
            <Link to="/main">
                <button className='relative left-10 flex gap-2.5 text-yellow-400 font-semibold mb-6 sm:mb-0'> 
                    <ArrowBack /> 
                    <span>Back</span>
                </button>
            </Link>

            <div className="mb-6 mx-5 sm:mx-20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:mt-6">
                <div className="md:col-span-2">
                    <div className="mb-10 mt-2">
                        <div className="h-2 bg-gray-400 rounded-lg mb-2 w-5/6 mx-auto"></div>
                        <p className="text-center text-gray-400 text-sm">Screen</p>
                    </div>

                    <div className="overflow-x-auto pb-4">
                        <div className="min-w-[900px]">
                            <div className="mb-4 sm:mb-12">
                                <div className="grid grid-cols-22 gap-2.5 mb-8">
                                    {rows.map(row => createSeatLayout(row))}
                                </div>

                                <div className="flex justify-center gap-12 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 bg-gray-700 rounded border-1 border-gray-500"></div>
                                        <span className="text-gray-400">Available</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 bg-yellow-400 rounded"></div>
                                        <span className="text-gray-400">Selected</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 bg-gray-950 rounded border-1 border-gray-600"></div>
                                        <span className="text-gray-400">Occupied</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-7">
                    <div className="bg-gray-800 px-8 py-5 rounded-lg">
                        <h2 className="text-lg font-semibold text-white mb-4">Booking Details</h2>
                        <div className="flex gap-4">
                            <div className="w-1/3">
                                <img 
                                    src={bookingData?.moviePoster} 
                                    alt={bookingData?.movieTitle}
                                    className="w-full rounded-lg"
                                />
                            </div>

                            <div className="w-2/3 grid grid-cols-2 gap-1 text-gray-300 text-xs">
                                <div>
                                    <p className="text-gray-400">Movie</p>
                                    <p className="font-semibold">{bookingData?.movieTitle}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Cinema</p>
                                    <p className="font-semibold">{bookingData?.cinema}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Date</p>
                                    <p className="font-semibold">
                                        {bookingData?.date?.toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Time</p>
                                    <p className="font-semibold">{bookingData?.time}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Type</p>
                                    <p className="font-semibold">{bookingData?.type}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Price</p>
                                    <p className="font-semibold">{bookingData?.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 px-8 py-5 rounded-lg">
                        <h3 className="text-md font-semibold text-white mb-3">Payment Method</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {['Credit Card', 'Debit Card', 'E-Wallet'].map(method => (
                                <button
                                    key={method}
                                    onClick={() => setPaymentMethod(method)}
                                    className={`py-2 rounded-lg border-2 transition-colors duration-200 text-sm
                                        ${paymentMethod === method 
                                            ? 'border-yellow-400 text-yellow-400' 
                                            : 'border-gray-600 text-gray-400'}`}
                                >
                                    {method}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-800 px-8 py-5 rounded-lg">
                        <h3 className="text-md font-semibold text-white mb-3">Order Summary</h3>
                        <div className="space-y-2 mb-3 text-sm">
                            <div className="flex justify-between text-gray-400">
                                <span>Tickets ({selectedSeats.length}x)</span>
                                <span>IDR {(ticketPrice * selectedSeats.length).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Service Fee</span>
                                <span>IDR {(3000 * selectedSeats.length).toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="flex justify-between text-base font-bold text-white pt-3 border-t border-gray-700">
                            <span>Total</span>
                            <span>IDR {((ticketPrice + 3000) * selectedSeats.length).toLocaleString()}</span>
                        </div>
                    </div>

                    <button 
                        onClick={handlePayment}
                        disabled={selectedSeats.length === 0 || !paymentMethod}
                        className={`w-full py-3 rounded-lg font-bold text-base
                            ${selectedSeats.length > 0 && paymentMethod
                                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                                : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}
                    >
                        {selectedSeats.length > 0
                            ? `Pay IDR ${((ticketPrice + 3000) * selectedSeats.length).toLocaleString()}`
                            : 'Select seats to continue'}
                    </button>
                </div>
            </div>
            <SuccessModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                ticketId={ticketId}
            />
        </div>
    );
};

export default PaymentPage;
