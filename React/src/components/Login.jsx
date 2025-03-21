
// Login.jsx
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
            setError("Please fill in all fields.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:4545/login-submit",
                { email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.data.redirect) {
                sessionStorage.setItem("Username", response.data.user);
                sessionStorage.setItem("authToken", response.data.token);

                const redirectPath = location.state?.from || response.data.redirect;
                navigate(redirectPath);
            } else {
                setError("Login failed, please try again.");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                {error && <p className="text-red-600 text-sm mb-4 bg-red-100 p-2 rounded">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="text"
                            value={email}
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            value={password}
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition flex justify-center items-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Don't have an account?{" "}
                    <span 
                        className="text-blue-500 cursor-pointer hover:underline"
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

