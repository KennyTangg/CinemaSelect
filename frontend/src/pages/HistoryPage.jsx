import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';
import SideBar from '../components/SideBar';
import LogOutModal from '../components/LogOutModal';

const HistoryPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(0);

    const handleStatusUpdate = async (ticketId, newStatus) => {
        try {
            const token = localStorage.getItem("token");
            await axios.patch(`/api/tickets/${ticketId}/status`, 
                { status: newStatus },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setRefresh(prev => prev + 1);
        } catch (error) {
            alert("Failed to update ticket status");
        }
    };

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await axios.get("/api/tickets/nonActive");
                setHistory(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error details:", error);
                setError("Failed to fetch tickets history");
                setLoading(false);
            }
        };
        
        fetchHistory();
    }, [refresh]);

    const filteredHistory = history.filter(ticket => 
        ticket.movieTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.cinemaName?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-gray-900">
            <div className={`flex-1 transition-all duration-300`}>
                <NavigationBar 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setIsModalOpen={setIsModalOpen}
                />
                <div className="px-20 py-8">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Booking History</h2>
                    {loading 
                    ? ( <div className="text-center text-gray-400">Loading...</div>)
                    : error 
                    ? ( <div className="text-center text-red-500">{error}</div>) 
                    : filteredHistory.length === 0 
                    ? ( <div className="text-center text-gray-400">No ticket history found</div>) 
                    : (
                        <div className="grid gap-6">
                            {filteredHistory.map((ticket) => (
                                <div className=" rounded-lg p-4 border-2 border-gray-800 shadow-sm shadow-gray-600">
                                    <div className="flex gap-7">
                                        <img src={ticket.moviePoster} alt={ticket.movieTitle} className="w-1/9 object-cover rounded brightness-85" />
                                        <div className='flex-1'>
                                            <h3 className="text-xl font-bold text-gray-00 my-2"> {ticket.movieTitle} </h3>
                                            <div className="grid grid-cols-2 gap-10 text-gray-200 text-sm">
                                                <div className='space-y-1'>
                                                    <p>Cinema : <span className='text-gray-400'> {ticket.cinemaName}</span></p>
                                                    <p>Date :  <span className='text-gray-400'>{new Date(ticket.showDate).toLocaleDateString()}</span></p>
                                                    <p>Time : <span className='text-gray-400'>{ticket.showTime}</span></p>
                                                </div>
                                                <div className='space-y-1'>
                                                    <p>Seats : <span className='text-gray-400'> {ticket.seats.join(' , ')}</span></p>
                                                    <p>Type : <span className='text-gray-400'> {ticket.screenType}</span></p>
                                                    <p>Status : <span className={`capitalize font-semibold ${
                                                        ticket.status === 'used' ? 'text-yellow-400' : 
                                                        ticket.status === 'active' ? 'text-green-400' : "text-red-400"
                                                    }`}>{ticket.status}</span></p>
                                                </div>
                                            </div>
                                            <p className="mt-4 mr-2 text-right text-yellow-400 font-medium">
                                                IDR {ticket.price.toLocaleString()}
                                            </p>
                                            <div className="mt-4 mr-2 flex justify-end space-x-4 font-semibold text-sm">
                                                {ticket.status === 'active' 
                                                ? ( <>
                                                        <button
                                                            onClick={() => handleStatusUpdate(ticket.ticketId, 'used')}
                                                            className="px-4 py-2 w-36 bg-green-400/80 text-gray-900 rounded hover:bg-green-600"
                                                        >
                                                            Mark as Used
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatusUpdate(ticket.ticketId, 'cancelled')}
                                                            className="px-4 py-2 w-36 bg-red-400/80 text-gray-900 rounded hover:bg-red-600"
                                                        >
                                                            Cancel Ticket
                                                        </button>
                                                    </> )
                                                : <button className="px-4 py-2 w-36 border-2 border-gray-600 text-gray-500 rounded" >Ticket Used</button>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <LogOutModal 
                isOpen={isModalOpen}
                setModalOpen={setIsModalOpen}
            />
        </div>
    );
}

export default HistoryPage;
