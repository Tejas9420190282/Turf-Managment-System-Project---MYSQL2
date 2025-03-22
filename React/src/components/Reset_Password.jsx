import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!password) {
            setError("Password is required");
            return;
        }

        try {
            const response = await axios.post(
                `http://localhost:4545/reset-password/${token}`,
                { password }
            );

            if (response.data.success) {
                setMessage(response.data.message); // Display the user-friendly message
                setError("");
                setTimeout(() => {
                    navigate("/"); // Redirect to the login page after 3 seconds
                }, 3000);
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            console.error("Error in ResetPassword:", err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Reset Password
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            New Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your new password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    {message && (
                        <p className="text-green-600 text-center mb-4">{message}</p>
                    )}
                    {error && <p className="text-red-600 text-center mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;