import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Card from '../components/Card';
import SideBar from '../components/SideBar';
import LogOutModal from '../components/LogOutModal';

const MainPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-900">
            <SideBar 
                isOpen={isSidebarOpen}
                onToggle={handleSidebarToggle}
            />
            <div className={`flex-1 ${isSidebarOpen ? 'ml-60' : 'ml-20'} transition-all duration-300`}>
                <NavigationBar 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setIsModalOpen={setIsModalOpen}
                />

                <div className="px-10 py-8">
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Featured Movies</h2>
                        <div>
                            <Card />
                        </div>
                    </section>
                </div>
            </div>
            <LogOutModal 
                isOpen={isModalOpen}
                setModalOpen={setIsModalOpen}
            />
        </div>
    );
};

export default MainPage;
