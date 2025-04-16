import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import authImage from "../assets/auth-background.jpg";
import { ArrowBack } from '@mui/icons-material';
import axios from 'axios';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const isLoginPage = location.pathname === '/login';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const endpoint = isLoginPage ? '/api/users/login' : '/api/users/signup';
            const response = await axios.post(endpoint, {
                email,
                password
            });

            const { token } = response.data;
            
            localStorage.setItem('token', token);
            
            navigate('/main');
            
        } catch (error) {
            setError(
                error.response?.data?.message || 
                'An error occurred. Please try again.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-800 px-10 sm:px-19 pb-20 pt-15 rounded-xl shadow-xl w-full max-w-md z-50">
            <h2 className="text-3xl font-bold text-center text-yellow-400">
                {isLoginPage ? "Login to your account" : "Create an account"}
            </h2>
            <p className="text-gray-400 text-sm text-center mb-10 mt-3">
                {isLoginPage ? "Hello, welcome back to your account" : "Sign Up and get 50% off for your first booking"}
            </p>

            {error && (
                <div className="mb-4 py-2 px-4 text-sm bg-red-100 border-2 border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 mt-2 border border-gray-400 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
                        placeholder='Enter your email'
                        disabled={isLoading}
                    />
                </div>

                <div className={isLoginPage ? "mb-4" : "mb-10"}>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 mt-2 border border-gray-400 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
                        placeholder='Enter your password'
                        disabled={isLoading}
                    />
                </div>

                {isLoginPage && 
                <div className='flex items-center justify-between mb-10'>
                    <div className='flex items-center'>
                        <input type="checkbox" id="checkbox" disabled={isLoading} />
                        <label htmlFor='checkbox' className="ml-1.5 text-xs text-gray-400 hover:cursor-pointer">
                            Remember me
                        </label>
                    </div>
                    <p className="text-xs text-gray-400 hover:cursor-pointer hover:underline">
                        Forgot Password?
                    </p>
                </div>}

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-yellow-400 text-gray-950 font-semibold py-2 rounded-md 
                        ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-500 hover:cursor-pointer'}`}
                >
                    {isLoading ? 'Processing...' : (isLoginPage ? 'Log In' : 'Sign Up')}
                </button>
            </form>

            <p className="text-center mt-10 text-sm text-gray-400"> 
                {isLoginPage ? 
                    (<>Need an account? <Link to="/signup" className='hover:underline text-yellow-400'>Sign Up</Link></>) : 
                    (<>Already a user? <Link to="/login" className='hover:underline text-yellow-400'>Login</Link></>)}
            </p>
        </div>
    );
}

class AuthPage extends React.Component {
    render() {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-800">
                <Link to="/">
                    <button className='flex gap-2.5 sm:bg-yellow-400 text-yellow-400 sm:text-gray-800 font-semibold px-8 py-2.5 rounded-lg z-20 absolute top-10 left-1 sm:left-20 hover:cursor-pointer'> 
                        <ArrowBack /> 
                        <h2>Back</h2>
                    </button>
                </Link>
                <img src={authImage} alt="Movies Background" className='absolute hidden sm:block sm:h-screen xl:w-screen'/>
                <div className="absolute hidden sm:block inset-0 z-10 bg-[radial-gradient(circle,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.8)_80%,rgba(0,0,0,1)_100%)]">
                </div>
                <Auth />
            </div>
        );
    }
}

export default AuthPage
