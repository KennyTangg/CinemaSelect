import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Card from '../components/Card';
import SideBar from '../components/SideBar';
import LogOutModal from '../components/LogOutModal';

const MainPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-900">
            <div className={`flex-1 transition-all duration-300`}>
                <NavigationBar 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setIsModalOpen={setIsModalOpen}
                />

                <div className="px-20 py-8">
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
