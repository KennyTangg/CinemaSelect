import React, { useState } from 'react';
import registerImage from "../assets/register-background.jpg";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className=" bg-gray-800 px-10 sm:px-20 pb-20 pt-15 rounded-xl shadow-xl w-full max-w-md z-50">
            <h2 className="text-3xl font-bold text-center text-yellow-400">Login to your account</h2>
            <p className="text-gray-400 text-sm text-center mb-10 mt-3 ">Hello, welcome back to your account</p>
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
            <div className="mb-4">
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
            <div className='flex items-center justify-between mb-10'>
                <div className='flex items-center'>
                    <input type="checkbox" id="checkbox"  />
                    <label htmlFor='checkbox' className="ml-1.5 text-xs text-gray-400 hover:cursor-pointer" >Remember me</label>
                </div>
                <p className="text-xs text-gray-400 hover:cursor-pointer hover:underline">Forgot Password?</p>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-950 font-semibold py-2 rounded-md hover:bg-yellow-500 hover:cursor-pointer"
            >
                Log In
            </button>
            </form>
            <p className="text-center mt-10 text-sm" >Need an account? <a>Sign Up</a></p>
      </div>
    )
}

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className=" bg-gray-800 px-10 sm:px-20 pb-20 pt-15 rounded-xl shadow-xl w-full max-w-md z-50">
            <h2 className="text-3xl font-bold text-center text-yellow-400">Create an account</h2>
            <p className="text-gray-400 text-sm text-center mb-10 mt-3 ">Sign Up and get 50% off for your first booking</p>
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
            <div className="mb-10">
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

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-950 font-semibold py-2 rounded-md hover:bg-yellow-500 hover:cursor-pointer"
            >
                Log In
            </button>
            </form>
            <p className="text-center mt-10 text-sm" >Already a user? <a>Login</a></p>
    </div>
    )
}

class RegisterPage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-800">
                 <img src={registerImage} alt="Movies Background" className='absolute -z-10 sm:z-10 sm:h-screen xl:w-screen brightness-50'/>
                {/* <Login /> */}
                <SignUp />
            </div>
        )
    }
}

export default RegisterPage