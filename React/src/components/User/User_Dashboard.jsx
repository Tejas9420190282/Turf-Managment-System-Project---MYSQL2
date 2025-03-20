
// User_Dashboard.jsx (React)


import React from "react";
import { Link } from "react-router-dom";

function User_Dashboard() {
    
    const user = sessionStorage.getItem("Username");

    //const {username} = useParams() || "User" ;

    
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-center mb-4">
                    Welcome, {user}
                </h2>

                <div className="space-y-4">
                    <div className="p-6 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">
                            Search Available Turf
                        </h3>
                        <p className="mb-4">Search and book your turf.</p>
                        <Link to={"/user/search-available-turf"} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Search Available Turf
                        </Link>
                    </div>

                    <div className="p-6 bg-green-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">
                            View Booked Turf
                        </h3>
                        <p className="mb-4">View your booked turf.</p>
                        <Link to={"/user/view-booking"} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                            View Bookings
                        </Link>
                    </div>

                    <div className="p-6 bg-red-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">
                            Cancel Booked Turf
                        </h3>
                        <p className="mb-4">Cancel your booked turf.</p>
                        <Link to={"/user/cancel-booking"}className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                            Cancel Bookings
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User_Dashboard;
