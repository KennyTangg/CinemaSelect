import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LogOutModal from '../components/LogOutModal';
import FAQ from '../components/FAQ';

const SettingsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { option } = useParams();

    const settingOptions = [
        { name: "Account", url: 'account' },
        { name: "Language", url: 'language' },
        { name: "About Us", url: 'about-us' },
        { name: "FAQ", url: 'faq' },
        { name: "Terms and Conditions", url: 'terms-and-conditions' },
        { name: "Privacy Policy", url: 'privacy-policy' },
        { name: "Sign Out", url: 'sign-out' },
    ];

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        navigate('/');
    };

    const handleOptionClick = (url) => {
        if (url === 'sign-out') {
            setIsModalOpen(true);
        } else if (url) {
            navigate(`/settings/${url}`);
        }
    };

    const renderContent = () => {
        switch (option) {
            case 'account':
                return (
                    <div className='space-y-6'>
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-semibold'>My Account</h1>
                            <hr className='text-gray-700' />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-md'>Email</h1>
                            <input 
                                type="email"
                                value="john.doe@email.com"
                                className="w-1/2 px-4 py-2 rounded-lg border border-gray-700"
                            />
                        </div>
                        <div className='pb-4 space-y-2'>
                            <h1 className='text-md'>Password</h1>
                            <input 
                                type="password"
                                value="••••••••"
                                className="w-1/4 px-4 py-2 rounded-lg border border-gray-700"
                            />
                        </div>
                        <button className='bg-green-700 text-sm rounded px-5 py-2 font-semibold hover:bg-green-700/90'>Update Account</button>
                    </div>
                );

            case 'language':
                return (
                    <div className='space-y-6'>
                        <div className='pb-4 space-y-2'>
                            <h1 className='text-2xl font-semibold'>Language Settings</h1>
                            <hr className='text-gray-700 mb-10' />
                            <select className='bg-gray-800 text-gray-300 px-4 py-2 rounded-lg w-62'>
                                <option>English</option>
                                <option>Bahasa Indonesia</option>
                            </select>
                        </div>
                    </div>
                );

            case 'about-us':
                return (
                    <div className='space-y-8'>
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-semibold'>About Cinema Select</h1>
                            <hr className='text-gray-700 mb-4' />
                            <p className='text-gray-400'>
                                Cinema Select is your premier destination for hassle-free movie ticket booking. 
                                Founded in 2023, we've quickly become one of Indonesia's leading movie ticketing platforms, 
                                serving millions of movie enthusiasts across the country.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-xl'>Our Mission</h2>
                            <p className='text-gray-400'>
                                To provide movie enthusiasts with a seamless and convenient way to enjoy 
                                their favorite films in theaters. We strive to make movie-going an effortless 
                                experience for everyone.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-xl'>Our Partners</h2>
                            <p className='text-gray-400'>
                                We proudly partner with major cinema chains including CGV, XXI, and Cinépolis, 
                                covering over 100 locations across Indonesia. Our partnerships ensure you get 
                                access to the latest movies at the best prices.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-xl'>Contact Us</h2>
                            <p className='text-gray-400'>
                                Email: support@cinemaselect.id<br />
                                Phone: (021) 1234-5678<br />
                                Address: Jl. Sudirman No. 123, Jakarta Pusat
                            </p>
                        </div>
                    </div>
                );

            case 'faq':
                return <FAQ />;

            case 'terms-and-conditions':
                return (
                    <div className='space-y-6'>
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-semibold'>Terms and Conditions</h1>
                            <hr className='text-gray-700 mb-4' />
                            <p className='text-gray-400'>Last updated: January 2024</p>
                        </div>
                        <div className='space-y-6'>
                            <div className='space-y-2'>
                                <h2 className='text-xl font-semibold'>1. Acceptance of Terms</h2>
                                <p className='text-gray-400'>
                                    By accessing and using Cinema Select's services, you agree to be bound 
                                    by these terms and conditions. Our service is provided "as is" and we 
                                    make no warranties regarding its availability or functionality.
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-xl font-semibold'>2. User Accounts</h2>
                                <p className='text-gray-400'>
                                    Users must provide accurate and complete information when creating an account. 
                                    You are responsible for maintaining the confidentiality of your account 
                                    credentials and for all activities under your account.
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-xl font-semibold'>3. Booking and Payments</h2>
                                <p className='text-gray-400'>
                                    All ticket bookings are final and non-refundable unless otherwise specified. 
                                    Prices are subject to change without notice. Payment processing is handled 
                                    securely through our authorized payment partners.
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-xl font-semibold'>4. Cancellation Policy</h2>
                                <p className='text-gray-400'>
                                    Cancellations are subject to individual theater policies. Refunds, if 
                                    applicable, will be processed within 5-7 business days.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case 'privacy-policy':
                return (
                    <div className='space-y-6'>
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-semibold'>Privacy Policy</h1>
                            <hr className='text-gray-700 mb-4' />
                            <p className='text-gray-400'>Last updated: January 2024</p>
                        </div>
                        <div className='space-y-6'>
                            <div className='space-y-2'>
                                <h2 className='text-xl font-semibold'>1. Information We Collect</h2>
                                <p className='text-gray-400'>
                                    We collect information that you provide directly to us, including:
                                    <ul className='list-disc pl-6 mt-2 space-y-2'>
                                        <li>Name and contact information</li>
                                        <li>Payment information</li>
                                        <li>Booking history</li>
                                        <li>Device information and usage data</li>
                                    </ul>
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-xl font-semibold'>2. How We Use Your Information</h2>
                                <p className='text-gray-400'>
                                    We use the collected information to:
                                    <ul className='list-disc pl-6 mt-2 space-y-2'>
                                        <li>Process your bookings and payments</li>
                                        <li>Send booking confirmations and updates</li>
                                        <li>Improve our services</li>
                                        <li>Provide customer support</li>
                                        <li>Send promotional communications (with your consent)</li>
                                    </ul>
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-xl font-semibold'>3. Data Security</h2>
                                <p className='text-gray-400'>
                                    We implement appropriate security measures to protect your personal information. 
                                    This includes encryption, secure servers, and regular security audits.
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-xl font-semibold'>4. Your Rights</h2>
                                <p className='text-gray-400'>
                                    You have the right to:
                                    <ul className='list-disc pl-6 mt-2 space-y-2'>
                                        <li>Access your personal data</li>
                                        <li>Correct inaccurate data</li>
                                        <li>Request deletion of your data</li>
                                        <li>Opt-out of marketing communications</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case 'sign-out':
                return (
                    <button onClick={() => setIsModalOpen(true)} 
                    className='rounded-lg font-semibold px-6 py-2 bg-red-600 hover:bg-red-700'> 
                        Sign Out 
                    </button>
                );
                
            default:
                return (
                    <div className='flex items-center justify-center h-full text-gray-400'>
                        Select an option from the menu
                    </div>
                );
        }
    };

    return (
        <>
            <NavigationBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setIsModalOpen={setIsModalOpen} />
            <div className="px-20 py-8">
                <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Settings</h2>
                <section className='grid grid-cols-4 gap-6'>
                    <div className='flex flex-col gap-2 col-span-1'>
                        {settingOptions.map((option) => (<>
                            {option.name === 'Sign Out' &&  <hr className='text-gray-700 mx-3' /> }
                            <button onClick={() => handleOptionClick(option.url)}
                                className={`flex justify-between font-medium px-4 py-2 text-sm rounded-lg text-gray-500 hover:bg-gray-800
                                    ${location.pathname === `/settings/${option.url}` ? ' text-white hover:bg-gray-900' : ''}
                                    ${option.name === 'Sign Out' && 'text-red-500 hover:text-red-700 hover:bg-gray-900'}`}
                            >
                                {option.name} 
                                {option.url === 'sign-out' ? '' : <KeyboardArrowRightIcon /> }
                            </button>
                        </>))}
                    </div>
                    <div className='col-span-3 px-8 bg-gray-900'>
                        {renderContent()}
                    </div>
                </section>
            </div>
            <LogOutModal 
                isOpen={isModalOpen}
                setModalOpen={setIsModalOpen}
                onConfirm={handleLogout}
            />
        </>
    );
};

export default SettingsPage;
