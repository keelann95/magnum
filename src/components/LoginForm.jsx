import React from 'react';
import InputField from './InputField';

const LoginForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 h-[100vh] ">
            <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row h-[100vh] w-full max-w-4xl">
                {/* Left Side Image */}
                <div className="md:w-1/2 w-full h-50 md:h-auto bg-center bg-cover" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/71geTSmUKIL._AC_SL1500_.jpg')" }}>
                </div>

                {/* Right Side Form */}
                <div className="md:w-1/2 w-full p-8 flex flex-col items justify-center h-full">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <p className='text-black font-semibold'>Enter your credentials</p>
                    <form>
                        {/* Reusable Input */}
                        <InputField
                            type="email"
                            placeholder="Email"
                        />
                        <InputField
                            type="password"
                            placeholder="Password"
                        />

                        <div className='flex items-center justify-between w-full'>
                            {/* Login Button */}
                            <div className="mb-4 w-[200px]">
                                <button type="submit" className="w-full bg-[#DB4444] text-white py-2 rounded hover:bg-red-600 transition duration-300">Login</button>
                            </div>

                            {/* Forgot Password */}
                            <div className="text-center">
                                <a href="#" className="text-[#DB4444] hover:underline">Forgot Password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;