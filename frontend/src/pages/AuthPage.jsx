import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import authImage from "../assets/auth-background.jpg";
import { ArrowBack, RemoveFromQueue } from '@mui/icons-material';
import axios from 'axios';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
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
            const response = await axios.post(endpoint, { email, password, rememberMe: rememberMe });
            const { token } = response.data;
            
            localStorage.setItem('token', token);
            navigate('/main');
        } catch (error) {
            setIsLoading(false);
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    const ToggleRememberMe = () => {
        setRememberMe(!rememberMe)
    };

    return (
        <div className="bg-gray-900 px-15 sm:px-19 pb-20 pt-15 rounded-xl sm:border border-gray-800 sm:shadow-md shadow-gray-800 w-full max-w-md z-50 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-center text-yellow-400">
                {isLoginPage ? "Login to your account" : "Create an account"}
            </h2>
            <p className="text-gray-400 text-sm text-center mb-10 mt-3">
                {isLoginPage ? "Hello, welcome back to your account" : "Sign Up and get 50% off for your first booking"}
            </p>

            {error && (
                <div className="mb-4 py-2 px-4 text-sm bg-red-100 border-2 border-red-400 text-red-700 rounded"> {error} </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 mt-2 bg-gray-900/80 border border-gray-500 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
                        placeholder='Enter your email'
                        disabled={isLoading}
                    />
                </div>

                <div className={isLoginPage ? "mb-4" : "mb-10"}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 mt-2 bg-gray-900/80 border border-gray-500 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
                        placeholder='Enter your password'
                        disabled={isLoading}
                    />
                </div>

                {isLoginPage && 
                <div className='flex items-center justify-between mb-10'>
                    <div className='flex items-center'>
                        <input type="checkbox" id="checkbox" onChange={ToggleRememberMe} disabled={isLoading} />
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
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <Link to="/">
                    <button className='flex gap-2.5 sm:bg-gradient-to-br sm:from-yellow-300 sm:to-yellow-500 text-yellow-400 sm:text-gray-900 font-semibold px-8 py-2.5 rounded-lg z-20 absolute top-10 left-1 sm:left-20 hover:cursor-pointer'> 
                        <ArrowBack /> 
                        <h2>Back</h2>
                    </button>
                </Link>
                <img src={authImage} alt="Movies Background" className='absolute object-cover hidden sm:block opacity-50 sm:h-screen xl:w-screen'/>
                <div className="absolute hidden sm:block inset-0 z-10 bg-[radial-gradient(circle,rgba(17,24,39,0.2)_60%,rgba(17,24,39,0.5)_70%,rgba(17,24,39,0.8)_90%,rgba(17,24,39,1)_100%)]"></div>
                <Auth />
            </div>
        );
    }
}

export default AuthPage
