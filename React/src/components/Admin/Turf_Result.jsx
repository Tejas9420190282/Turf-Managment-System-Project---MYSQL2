
// Turf_Result.js (Node)

import React from "react";
import AdminDashboard from "./AdminDashboard";
import AdminNavbar from "./Admin_Navbar";

function Turf_Result() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* AdminNavbar */}
            <AdminNavbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
                    <h1 className="text-3xl font-bold text-green-600 mb-4">Success!</h1>
                    <p className="text-gray-700 text-lg mb-6">Turf Created Successfully</p>
                    <p className="text-gray-500">Thank you for adding a new turf. You can now manage it from your dashboard.</p>
                    <button
                        onClick={() => window.location.href = '/admin-dashboard'} // Redirect to Admin Dashboard
                        className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Turf_Result;


