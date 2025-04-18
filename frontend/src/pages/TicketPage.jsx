import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from '../components/SideBar';
import LogOutModal from '../components/LogOutModal'
import NavigationBar from '../components/NavigationBar';
import { QrCode2 } from '@mui/icons-material';

const TicketPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/api/tickets', {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });
                setTickets(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tickets:', error);
                setError('Failed to fetch tickets');
                setLoading(false);
            }
        };

        fetchTickets();
    }, []);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const filteredTickets = tickets.filter(ticket => 
        ticket.movieTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.cinemaName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex min-h-screen bg-gray-900">
                <SideBar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
                <div className={`flex-1 ${isSidebarOpen ? 'ml-60' : 'ml-20'} transition-all duration-300`}>
                    <NavigationBar 
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        setIsModalOpen={setIsModalOpen}
                    />
                    <div className="text-yellow-400 text-xl font-semibold h-175 flex justify-center items-center">Loading tickets...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen bg-gray-900">
                <SideBar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
                <div className={`flex-1 ${isSidebarOpen ? 'ml-60' : 'ml-20'} transition-all duration-300`}>
                    <NavigationBar 
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        setIsModalOpen={setIsModalOpen}
                    />
                    <div className="text-red-400 text-xl font-semibold h-175 flex justify-center items-center">{error}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-900">
            <SideBar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
            <div className={`flex-1 ${isSidebarOpen ? 'ml-60' : 'ml-20'} transition-all duration-300`}>
                <NavigationBar 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setIsModalOpen={setIsModalOpen}
                />
                <div className="px-12 py-8">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-6">My Tickets</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {filteredTickets.map((ticket) => (
                            <div className="bg-gray-900 rounded-xl shadow-sm shadow-gray-600  transition-colors duration-300">
                                <div className="relative h-28 overflow-hidden group">
                                    <img src={ticket.moviePoster} alt={ticket.movieTitle} className="w-full h-full rounded-xl object-cover transform transition duration-300 group-hover:scale-125" />
                                    <div className="absolute inset-0  bg-gradient-to-t from-gray-900 to-transparent"></div>
                                </div>

                                <div className="pt-2 pb-4 px-5 ">
                                    <div className="flex justify-between mb-4">
                                        <div>
                                            <h3 className="text-md font-semibold text-white">{ticket.movieTitle}</h3>
                                            <p className="text-yellow-400 font-medium text-xs">{ticket.cinemaName}</p>
                                        </div>
                                        <QrCode2 className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors duration-300" style={{ fontSize: 45 }} />
                                    </div>

                                    <div className="space-y-2 text-xs font-light">
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Date:</span>
                                            <span className="text-white">{new Date(ticket.showDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Time:</span>
                                            <span className="text-white">{ticket.showTime}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Seat:</span>
                                            <span className="text-white">{ticket.seats.join(', ')}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Type:</span>
                                            <span className="text-white">{ticket.screenType}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Price:</span>
                                            <span className="text-white">IDR {ticket.price.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-700">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-400 w-1/3">Ticket ID:</span>
                                            <span className="text-gray-500 w-2/3">{ticket.ticketId}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredTickets.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">No tickets found</p>
                            <p className="text-gray-500 mt-2">Book your first movie ticket now!</p>
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
};

export default TicketPage;
