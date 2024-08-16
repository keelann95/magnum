 import { Link } from "react-router-dom";
import InputField from "./InputField";
 const SignupForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 h-[100vh] mt-20 rounded-xl mb-20">
            <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row h-[100vh] w-full max-w-4xl">
                {/* Left Side Image */}
                <div className="md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/400x600')" }}>
                </div>

                {/* Right Side Form */}
                <div className="md:w-1/2 w-full p-8 flex flex-col items justify-center h-full">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                    <p className='text-black font-semibold'>Create your account</p>
                    <form>
                        {/* Reusable Inputs */}
                        <InputField
                            type="text"
                            placeholder="Name"
                        />
                        <InputField
                            type="email"
                            placeholder="Email"
                        />
                        <InputField
                            type="password"
                            placeholder="Password"
                        />

                        <div className='flex flex-col items-center w-full mt-6'>
                            {/* Sign Up Button */}
                            <div className="mb-4 w-full">
                                <button type="submit" className="w-full bg-[#DB4444] text-white py-2 rounded hover:bg-red-600 transition duration-300">Sign Up</button>
                            </div>

                            {/* Continue with Google */}
                            <div className="w-full">
                                <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-black py-2 rounded hover:bg-gray-100 transition duration-300">
                                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                                    Continue with Google
                                </button>
                            </div>
                            <p className='text-[#aaa]'>Already have account? <a href={'/login'} className='px-2 text-black font-semibold'>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SignupForm