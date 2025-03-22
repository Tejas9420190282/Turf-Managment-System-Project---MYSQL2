
// User_Dashboard.jsx (React)

import React from "react";
import { Link } from "react-router-dom";

function User_Dashboard() {
    const user = sessionStorage.getItem("Username");

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Welcome, {user}
                </h2>

                <div className="space-y-6">
                    <div className="p-6 bg-blue-50 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">
                            Search Available Turf
                        </h3>
                        <p className="mb-4 text-gray-700">Search and book your turf easily.</p>
                        <Link to={"/user/search-available-turf"} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                            Search Available Turf
                        </Link>
                    </div>

                    <div className="p-6 bg-green-50 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 text-green-600">
                            View Booked Turf
                        </h3>
                        <p className="mb-4 text-gray-700">Check your booked turf details.</p>
                        <Link to={"/user/view-booking"} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200">
                            View Bookings
                        </Link>
                    </div>

                    <div className="p-6 bg-red-50 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 text-red-600">
                            Cancel Booked Turf
                        </h3>
                        <p className="mb-4 text-gray-700">Cancel your booked turf if needed.</p>
                        <Link to={"/user/cancel-booking"} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200">
                            Cancel Bookings
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User_Dashboard;


