
// login.jsx (React)

import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill in all fields.");
            return;
        }

        setLoading(true);

         // Clear any existing authentication token before login
        localStorage.removeItem("authToken"); 

        try {
            const response = await axios.post(
                "http://localhost:4545/login-submit",
                { email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.data.redirect) {
                sessionStorage.setItem("Username", response.data.user);
                
                localStorage.setItem("authToken", response.data.token);

                toast.success("Login Successful!");

                const redirectPath = location.state?.from || response.data.redirect;
                navigate(redirectPath);
            } else {
                toast.error("Login failed, please try again.");
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div 
            className="flex justify-center items-center min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp3049868.jpg')" }}
        >
            <div className="relative   p-10 rounded-xl shadow-lg w-full max-w-md backdrop-blur-xl " style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome Back!</h2>

                {error && <p className="text-red-600 text-sm mb-4 bg-red-100 p-2 rounded">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input
                            type="email"
                            value={email}
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-white placeholder-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                        <input
                            type="password"
                            value={password}
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 placeholder-white text-white"
                        />
                        <p 
                            className="text-sm text-blue-500 cursor-pointer hover:underline mt-1"
                            onClick={() => navigate("/forgot-password")}
                        >
                            Forgot Password?
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 flex justify-center items-center shadow-md hover:shadow-lg"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>

                <p className="text-sm text-white mt-4 text-center">
                    Don't have an account?{" "}
                    <span 
                        className="text-blue-600 cursor-pointer hover:underline"
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;


