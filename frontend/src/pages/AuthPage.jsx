import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import authImage from "../assets/auth-background.jpg";
import { ArrowBack } from '@mui/icons-material';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();

    const isLoginPage = location.pathname === '/login';

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className=" bg-gray-800 px-10 sm:px-19 pb-20 pt-15 rounded-xl shadow-xl w-full max-w-md z-50 border-2 border-yellow-400">
            <h2 className="text-3xl font-bold text-center text-yellow-400">
                {isLoginPage ? "Login to your account" : "Create an account"}</h2>
            <p className="text-gray-400 text-sm text-center mb-10 mt-3 ">
                {isLoginPage ? "Hello, welcome back to your account" : "Sign Up and get 50% off for your first booking"}</p>
            <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-400 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
                placeholder='Enter your email'
                />
            </div>

            {/* Password Input */}
            <div className={isLoginPage ? "mb-4" : "mb-10"}>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-400 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
                placeholder='Enter your password'
                />
            </div>

            {/* Remember Me and Forgot Password */}
            {isLoginPage && 
            <div className='flex items-center justify-between mb-10'>
                <div className='flex items-center'>
                    <input type="checkbox" id="checkbox"  />
                    <label htmlFor='checkbox' className="ml-1.5 text-xs text-gray-400 hover:cursor-pointer" >Remember me</label>
                </div>
                <p className="text-xs text-gray-400 hover:cursor-pointer hover:underline">Forgot Password?</p>
            </div>}

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-950 font-semibold py-2 rounded-md hover:bg-yellow-500 hover:cursor-pointer"
            >
                Log In
            </button>
            </form>
            <p className="text-center mt-10 text-sm" > 
                {isLoginPage ? (<>Need an account? <Link to="/signup" className='hover:underline'>Sign Up</Link></>) : (<>Already a user? <Link to="/login" className='hover:underline'>Login</Link></>)}</p>
    </div>
    )
}

class AuthPage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-800">
                <Link to="/">
                    <button className='flex gap-2.5 bg-gray-800 text-yellow-400 border-yellow-400 sm:border-2 font-medium px-8 py-2.5 rounded-lg z-20 absolute top-10 left-1 sm:left-20 hover:cursor-pointer'> 
                        <ArrowBack /> 
                        <h2>Back</h2>
                    </button>
                </Link>
                <img src={authImage} alt="Movies Background" className='absolute -z-10 sm:z-10 sm:h-screen xl:w-screen brightness-75'/>
                <Auth />
            </div>
        )
    }
}

export default AuthPage